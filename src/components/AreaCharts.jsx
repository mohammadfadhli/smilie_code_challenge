import {
    AreaChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Area,
    ResponsiveContainer,
    Legend,
    Brush
} from "recharts";

export default function AreaCharts(props){

    const data = props.data;

    return(
        <>
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="time" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" name="Direct Radiation" dataKey="direct_radiation" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Brush startIndex={7} endIndex={19}></Brush>
                </AreaChart>
            </ResponsiveContainer>
        </>
    )
}