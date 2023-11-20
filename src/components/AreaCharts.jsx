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
import CustomToolTip from "./CustomToolTip";

export default function AreaCharts({data}){

    const unit = (data && data.length > 0) ? data[0].unit : '';

    return(
        <>
            <ResponsiveContainer width="100%" height={500}>
                <AreaChart data={data}>
                    <XAxis dataKey="time" />
                    <YAxis domain={['auto', 'auto']} label={{ value: unit, angle: -90, position: 'insideLeft' }}/>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <Tooltip content={<CustomToolTip unit={unit}/>}/>
                    <Legend />
                    <Area type="monotone" name="Direct Radiation" dataKey="direct_radiation" stroke="#8884d8" fill="#8884d8" strokeWidth={3}/>
                    <Brush startIndex={7} endIndex={19} height={20}></Brush>
                </AreaChart>
            </ResponsiveContainer>
        </>
    )
}