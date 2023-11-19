export default function CustomToolTip({active, payload, label, unit}){
    if(active && payload){
        return (
            <div className="bg-white p-5 rounded border">
                <h4>{label}</h4>
                {payload.map((entry, index) => (
                    <p key={index} style={{ color: entry.color }}>
                        {`${entry.name} : ${entry.value} ${unit}`}
                    </p>
                ))}
            </div>
        )
    }

}