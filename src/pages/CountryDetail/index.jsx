import { useEffect, useState } from "react";
import { getCountry } from "../../api/api";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
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
    }, []);

    return (
        isLoading
        ? (
            <div>
                Loading...
            </div>
        )
        : (
            <div
                style={{
                    paddingTop: 16,
                    paddingBottom: 16,
                    paddingLeft: 64,
                    paddingRight: 64,
                }}
            >
                <div
                    style={{
                        marginBottom: 32,
                    }}
                >
                    <h1
                        style={{
                            fontFamily: 'Nunito-Bold',
                            fontSize: 36,
                        }}
                    >
                        {country.name.common} ({country.cca3})
                    </h1>
                    <h2
                        style={{
                            fontFamily: 'Nunito-Medium',
                            fontSize: 24,
                            marginBottom: 24,
                        }}
                    >
                        {country.name.official}
                    </h2>
                    <img
                        src={country.flags.png}
                        alt={`${country.name.common}'s flag: ${country.flags.alt}`}
                        className="flag-img"
                        style={{
                            width: '300px',
                        }}
                    />
                </div>
                <div>
                    <p>Currencies:</p>
                    <ul
                        style={{
                            paddingLeft: 20,
                        }}
                    >
                        {
                            Object.keys(country.currencies).map(key => (
                                    <li
                                        key={key}
                                    >
                                        {country.currencies[key].name} 	&#40;{country.currencies[key].symbol}&#41;
                                    </li>
                                )
                            )
                        }
                    </ul>

                    <p>Capitals:</p>
                    <ul
                        style={{
                            paddingLeft: 20,
                        }}
                    >
                        {
                            country.capital.map(capital => (
                                    <li
                                        key={capital}
                                    >
                                        {capital}
                                    </li>
                                )
                            )
                        }
                    </ul>

                    <p>Population: {country.population} people</p>

                    <p>Timezones:</p>
                    <ul
                        style={{
                            paddingLeft: 20,
                        }}
                    >
                        {
                            country.timezones.map(timezone => (
                                    <li
                                        key={timezone}
                                    >
                                        {timezone}
                                    </li>
                                )
                            )
                        }
                    </ul>

                    <p>Region: {country.region}</p>
                    <p>Subregion: {country.subregion}</p>

                    <p>Continents:</p>
                    <ul
                        style={{
                            paddingLeft: 20,
                        }}
                    >
                        {
                            country.continents.map(continent => (
                                    <li
                                        key={continent}
                                    >
                                        {continent}
                                    </li>
                                )
                            )
                        }
                    </ul>

                    <p>Languages:</p>
                    <ul
                        style={{
                            paddingLeft: 20,
                        }}
                    >
                        {
                            Object.keys(country.languages).map(key => (
                                    <li
                                        key={key}
                                    >
                                        {country.languages[key]}
                                    </li>
                                )
                            )
                        }
                    </ul>

                    <p>Latitude: {country.latlng[0]}</p>
                    <p>Longitude: {country.latlng[1]}</p>
                </div>
            </div>
        )
    );
}