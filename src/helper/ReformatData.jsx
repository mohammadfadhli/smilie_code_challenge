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

    const formatTime = (time,  hasTime=true) => {

        const date = new Date(time);
        const formattedDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear().toString().slice(-2)}`;

        if (hasTime) {
            const formattedTime = `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
            return `${formattedDate} ${formattedTime}`;
        }
        
        return formattedDate;
    };

    if(type == "humidity"){
        return data.hourly.time.map((time, index) => {
    
            return {
                time: formatTime(time),
                relativehumidity_2m: data.hourly.relativehumidity_2m[index],
            };
        });
    }
    else if(type == "temperature"){
        return data.daily.time.map((time, index) => {

            return {
                time: formatTime(time, false),
                temperature_2m_max: data.daily.temperature_2m_max[index],
                temperature_2m_min: data.daily.temperature_2m_min[index]
            };
        });
    }
    else if(type == "radiation"){
        return data.hourly.time.map((time, index) => {
        
            return {
                time: formatTime(time),
                direct_radiation: data.hourly.direct_radiation[index],
            };
        });
    }

    
    
}
