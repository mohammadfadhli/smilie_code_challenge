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
    const apiUrl = import.meta.env.VITE_WEATHER_API; // retrieve api endpoint from .env file.

    // fetch data from api
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
            /*
                Reformat data into proper objects for recharts.
            */
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

    /* 
        wait for data to be fetched before rendering charts.
        show loading... while fetching.
    */
    if (isLoading) {
        return <div className="container mx-auto px-3 my-5 text-center font-semibold">Loading...</div>;
    }

    /* 
        return charts after data is fetched successfully
    */
    return (
        <>
            <div className="container mx-auto px-3 my-5">
                <div className="text-center text-sm md:text-xl font-semibold mb-5">
                    <p>{data.latitude}°N {data.longitude}°S {data.elevation}m above sea level</p>
                    <p>Timezone: {data.timezone} ({data.timezone_abbreviation})</p>
                </div>
                <div className="grid gap-4 grid-cols-1">
                    <div className="rounded-lg p-3 shadow-xl bg-white">
                        <p className="text-sm md:text-xl font-semibold text-center">
                            Relative Humidity
                        </p>
                        <BarCharts data={humidity}></BarCharts>
                    </div>
                    <div className="rounded-lg p-3 shadow-xl bg-white">
                        <p className="text-sm md:text-xl font-semibold text-center">
                            Temperature
                        </p>
                        <LineCharts data={temperature}></LineCharts>
                    </div>
                    <div className="rounded-lg p-3 shadow-xl bg-white">
                        <p className="text-sm md:text-xl font-semibold text-center">
                            Radiation
                        </p>
                        <AreaCharts data={radiation}></AreaCharts>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
