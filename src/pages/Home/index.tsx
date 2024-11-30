import { useEffect, useState } from "react";
import './index.css';
import { getAllCountries } from "../../api/api";
import { AxiosError } from "axios";
import { Country } from "../../types";

export default function Index() {
    const [countries, setCountries] = useState<Country | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchCountries = async() => {
        try {
            const countries = await getAllCountries();
            setCountries(countries.data);
        } catch (error) {
            if (error instanceof AxiosError) {
                console.log(error.message);
            }
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchCountries();
    })

    return (
        <div>

        </div>
    );
}