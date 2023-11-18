export default function ReformatData(data, type) {

    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    if(type == "humidity"){
        return data.hourly.time.map((time, index) => {
            
    
            const date = new Date(time);
            const formattedDate = `${date.getDate()} ${
                months[date.getMonth()]
            } ${date.getFullYear().toString().slice(-2)}`;
            const formattedTime = `${date
                .getHours()
                .toString()
                .padStart(2, "0")}:${date
                .getMinutes()
                .toString()
                .padStart(2, "0")}`;
    
            return {
                time: `${formattedDate} ${formattedTime}`,
                relativehumidity_2m: data.hourly.relativehumidity_2m[index],
            };
        });
    }
    else if(type == "temperature"){
        return data.daily.time.map((time, index) => {
        
            const date = new Date(time);
            const formattedDate = `${date.getDate()} ${
                months[date.getMonth()]
            }`;
    
            return {
                time: `${formattedDate}`,
                temperature_2m_max: data.daily.temperature_2m_max[index],
                temperature_2m_min: data.daily.temperature_2m_min[index]
            };
        });
    }

    
    
}
