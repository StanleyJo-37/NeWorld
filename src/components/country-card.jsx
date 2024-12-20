import PropType from "prop-types";
import { Link } from "react-router-dom";
import "./../styles/country-card.css";

export default function CountryCard({ country, key }) {
    CountryCard.propTypes = {
        country: PropType.object.isRequired,
        key: PropType.string,
    };
    
    return (
        <Link
            key={key}
            to={{
                pathname: `/country-detail/${country.name.official}`
            }}
            preventScrollReset
            className="card-container"
        >
            <div
                className="cover-container"
            >
                <img
                    src={country.flags.png}
                    alt={`${country.name.common}'s flag`}
                    className="flag-img"
                />
            </div>
            <div
                className="card-title"
            >
                {country.name.common}
            </div>
        </Link>
    );
}