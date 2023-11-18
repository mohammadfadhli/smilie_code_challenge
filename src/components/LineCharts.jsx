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

export default function LineCharts(props) {
    const data = props.data;

    return (
        <>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis width={20} domain={['auto', 'auto']}/>
                    <Tooltip />
                    <Legend />
                    <Line
                        name="Maximum Temperature (2m)"
                        type="monotone"
                        dataKey="temperature_2m_max"
                        stroke="#8884d8"
                        strokeWidth={3}
                    />
                    <Line
                        name="Minimum Temperature (2m)"
                        type="monotone"
                        dataKey="temperature_2m_min"
                        stroke="#82ca9d"
                        strokeWidth={3}
                    />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}
