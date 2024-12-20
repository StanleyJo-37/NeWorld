import "./../../styles/home.css";
import './../../index.css';
import { useEffect, useState } from "react";
import CountryCard from "../../components/country-card";
import { getAllCountries } from "../../api/api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

export default function Index() {
    const [countries, setCountries] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const fetchCountries = async() => {
        try {
            let countries = await getAllCountries();
            setCountries(JSON.parse(countries.data).sort((a, b) => (b.population - a.population)).slice(0, 9));
        } catch (err) {
            if (err instanceof AxiosError) {
                toast({
                    title: `Error Fetching Countries`,
                    description: err.message,
                    variant: 'destructive',
                });
            }
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchCountries();
    }, []);

    return (
        <div className="container home-container">
            <h1 className="main-title">~ NeWorld ~</h1>
            <div className="center column">
                <h2>What is NeWorld?</h2>
                <p className="descripion">
                    NeWorld is an interactive website designed to help users explore and learn about different countries around the world. With detailed information on each country&#39;s geography, NeWorld provides a comprehensive and engaging way to discover the world. Whether you&#39;re planning a trip, studying for a geography test, or simply curious about other nations, NeWorld is your first step to learning all sorts of things related to countries around the world.
                </p>
            </div>
            <div className="largest-countries-container">
                {
                    countries &&
                        countries.map((country, i) => (
                            <CountryCard
                                country={country}
                                key={i}
                            />
                        ))
                }
            </div>
        </div>
    );
}