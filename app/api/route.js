export async function GET(request) {
    return new Response(
        JSON.stringify({
            location: {
                name: "Sonipat",
                region: "Haryana",
                country: "India",
                lat: 28.98,
                lon: 77.02,
                tz_id: "Asia/Kolkata",
                localtime_epoch: 1702752844,
                localtime: "2023-12-17 0:24",
            },
            current: {
                last_updated_epoch: 1702752300,
                last_updated: "2023-12-17 00:15",
                temp_c: 13.0,
                temp_f: 55.4,
                is_day: 0,
                condition: {
                    text: "Mist",
                    icon: "//cdn.weatherapi.com/weather/64x64/night/143.png",
                    code: 1030,
                },
                wind_mph: 2.2,
                wind_kph: 3.6,
                wind_degree: 10,
                wind_dir: "N",
                pressure_mb: 1017.0,
                pressure_in: 30.03,
                precip_mm: 0.0,
                precip_in: 0.0,
                humidity: 72,
                cloud: 0,
                feelslike_c: 12.8,
                feelslike_f: 55.0,
                vis_km: 2.5,
                vis_miles: 1.0,
                uv: 1.0,
                gust_mph: 8.9,
                gust_kph: 14.4,
            },
        })
    );
}
