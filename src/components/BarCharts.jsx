import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
    ResponsiveContainer,
    Brush
} from "recharts";

export default function BarCharts(props) {
    const data = props.data;

    return (
        <>
            <ResponsiveContainer width="100%" height={500}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="time" />
                    <YAxis dataKey="relativehumidity_2m" width={30}/>
                    <Tooltip />
                    <Legend />
                    <Bar name="Relative Humidity (2m)" dataKey="relativehumidity_2m" fill="#82ca9d" />
                    <Brush startIndex={0} endIndex={23} height={20}></Brush>
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}
