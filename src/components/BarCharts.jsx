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
import CustomToolTip from "./CustomToolTip";

export default function BarCharts({data}) {

    const unit = (data && data.length > 0) ? data[0].unit : '';

    return (
        <>
            <ResponsiveContainer width="100%" height={500}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="time"/>
                    <YAxis dataKey="relativehumidity_2m" tickCount={6} label={{ value: unit, angle: -90, position: 'insideLeft' }}/>
                    <Tooltip content={<CustomToolTip unit={unit}/>}/>
                    <Legend />
                    <Bar name="Relative Humidity (2m)" dataKey="relativehumidity_2m" fill="#82ca9d" />
                    <Brush startIndex={0} endIndex={23} height={20}></Brush>
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}
