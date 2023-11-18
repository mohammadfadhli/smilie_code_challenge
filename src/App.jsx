import { useEffect, useState } from "react";
import BarCharts from "./components/BarCharts";
import ReformatData from "./helper/ReformatData";
import LineCharts from "./components/LineCharts";
import AreaCharts from "./components/AreaCharts";

function App() {
    const [data, setData] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(0);
    const [humidity, setHumidity] = useState(null);
    const [temperature, setTemperature] = useState(null);
    const [radiation, setRadiation] = useState(null);
    const apiUrl = import.meta.env.VITE_WEATHER_API;

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
            setHumidity(ReformatData(result, "humidity"));
            setTemperature(ReformatData(result, "temperature"));
            setRadiation(ReformatData(result, "radiation"));
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log(data);

    // Render Loading while waiting to fetch data from API
    if (isLoading) {
        return <div className="container mx-auto px-3 my-5">Loading...</div>;
    }

    return (
        <>
            <div className="container mx-auto px-3 my-5">
                <h1 className="text-4xl font-semibold">Dashboard</h1>
                <div className="grid gap-4 grid-cols-1">
                    <div className="rounded-lg p-3 shadow-xl">
                        <h2 className="text-center">Relative Humidity</h2>
                        <BarCharts data={humidity}></BarCharts>
                    </div>
                    <div className="rounded-lg p-3 shadow-xl">
                    <h2 className="text-center">Temperature</h2>
                    <LineCharts data={temperature}></LineCharts>
                    </div>
                    <div className="rounded-lg p-3 shadow-xl">
                    <h2 className="text-center">Radiation</h2>
                    <AreaCharts data={radiation}></AreaCharts>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
