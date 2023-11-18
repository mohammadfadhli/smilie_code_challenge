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
                    <XAxis dataKey="time" />
                    <YAxis width={20}/>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" name="Direct Radiation" dataKey="direct_radiation" stroke="#8884d8" fillOpacity={1} fill="#8884d8" strokeWidth={3}/>
                    <Brush startIndex={7} endIndex={19} height={20}></Brush>
                </AreaChart>
            </ResponsiveContainer>
        </>
    )
}