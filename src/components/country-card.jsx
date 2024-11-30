import PropType from "prop-types";
import { Link } from "react-router-dom";

export default function CountryCard({ country, key }) {
    
    return (
        <Link
            key={key}
            to={{
                pathname: `/country-detail/${country.name.common}`
            }}
        >
            <div>{country.name.common}</div>
            <img
                src={country.flags.png}
                alt={`${country.name.common}'s flag`}
            />
        </Link>
    );
}

CountryCard.propTypes = {
    country: PropType.object,
    key: PropType.number,
}