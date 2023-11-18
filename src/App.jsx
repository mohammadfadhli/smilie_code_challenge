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

    console.log(data)


    return (
        <>
            <div className="container mx-auto">
              {!isLoading ? <div> <BarCharts data={humidity}></BarCharts>
                <LineCharts data={temperature}></LineCharts>
                <AreaCharts data={radiation}></AreaCharts></div> : <div>notloaded</div>}
               
            </div>
        </>
    );
}

export default App;
