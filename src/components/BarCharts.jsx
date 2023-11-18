import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
    ResponsiveContainer,
} from "recharts";

export default function BarCharts(props) {
    const data = props.data;

    return (
        <>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis dataKey="relativehumidity_2m" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="time" fill="#8884d8" />
                    <Bar dataKey="relativehumidity_2m" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}
