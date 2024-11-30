import { useEffect, useState } from "react";
import { getAllCountries } from "../../api/api";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useDebounce } from "use-debounce";
import "./../../styles/countries.css";
import CountryCard from "../../components/country-card";

export default function Index() {
    const [countries, setCountries] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [paginationLimit, setPaginationLimit] = useState(20);
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm] = useDebounce(searchTerm, 400);
    const [filter, setFilter] = useState();

    const fetchCountries = async() => {
        try {
            const countries = await getAllCountries();
            setCountries(JSON.parse(countries.data));
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
    }, [])
    
    return (
        <div>
            {
                isLoading
                ? "Loading..."
                : (
                    <div
                        className="countries-container container"
                        
                    >
                        {
                            countries.map((country, i) => (
                                <CountryCard
                                    country={country}
                                    key={i}
                                />
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
}