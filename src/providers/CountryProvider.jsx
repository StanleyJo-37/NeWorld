import { useState } from "react";
import CountryContext from "../contexts/CountryContext";
import PropTypes from "prop-types";

export default function CountryProvider({ children }) {
    const [countries, setCountries] = useState();

    return (
        <CountryContext.Provider value={{countries, setCountries}}>
            {children}
        </CountryContext.Provider>
    );
}

CountryProvider.propTypes = {
    children: PropTypes.node,
}