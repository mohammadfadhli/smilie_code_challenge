import {
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Line,
    ResponsiveContainer
} from "recharts";
import CustomToolTip from "./CustomToolTip";

export default function LineCharts({data}) {
    const unit = (data && data.length > 0) ? data[0].unit : '';

    return (
        <>
            <ResponsiveContainer width="100%" height={500}>
                <LineChart
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="time" />
                    <YAxis domain={['dataMin - 2', 'auto']} label={{ value: unit, angle: -90, position: 'insideLeft' }}/>
                    <Tooltip content={<CustomToolTip unit={unit}/>}/>
                    <Legend />
                    <Line
                        name="Maximum Temperature (2m)"
                        type="linear"
                        dataKey="temperature_2m_max"
                        stroke="#8884d8"
                        strokeWidth={3}
                    />
                    <Line
                        name="Minimum Temperature (2m)"
                        type="linear"
                        dataKey="temperature_2m_min"
                        stroke="#82ca9d"
                        strokeWidth={3}
                    />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}
