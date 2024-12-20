import { useContext } from "react";
import CountryContext from "../contexts/CountryContext";

export default function useCountry() {
    const context = useContext(CountryContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context;
}