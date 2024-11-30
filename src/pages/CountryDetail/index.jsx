import { useEffect, useState } from "react";
import { getCountry } from "../../api/api";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, } from 'react-leaflet';
import "./../../styles/country-detail.css"

export default function Index() {
    const {name} = useParams();
    const [country, setCountry] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchCountry = async() => {
        try {
            const country = await getCountry(name);
            setCountry(JSON.parse(country.data)[0]);
        } catch (err) {
            if (err instanceof AxiosError) {
                toast({
                    title: `Error Fetching Country: ${name}`,
                    description: err.message,
                    variant: 'destructive',
                });
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCountry();
        if (country) console.log(country.name);
    }, []);

    const renderMaps = () => {
        if (!country) return <></>
        
        return (
            <MapContainer className="map" center={[51.505, -0.09]} zoom={13} scrollWheelZoom >
                <TileLayer
                    // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url={country.maps.googleMaps}
                />
            </MapContainer>
        );
    }

    return (
        <div>
            {/* {renderMaps()} */}
            {isLoading
            ? "Loading..."
            : <div>{country.name.common}</div>}
        </div>
    );
}