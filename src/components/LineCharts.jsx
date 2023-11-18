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
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="temperature_2m_max"
                        stroke="#8884d8"
                    />
                    <Line
                        type="monotone"
                        dataKey="temperature_2m_min"
                        stroke="#82ca9d"
                    />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}
