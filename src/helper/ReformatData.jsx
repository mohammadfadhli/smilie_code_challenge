export default function ReformatData(data){

    return data.hourly.time.map((time, index) => {
        return {
            time: time,
            relativehumidity_2m: data.hourly.relativehumidity_2m[index],
        };
    });

}