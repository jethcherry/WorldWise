import PropTypes from "prop-types";
import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length) {
    return (
      <Message message="Add your first country by clicking on a country on the map" />
    );
  }

  // Extract unique countries
  const countries = cities.reduce((acc, city) => {
    if (!acc.some((country) => country.name === city.country)) {
      acc.push({ name: city.country, emoji: city.emoji });
    }
    return acc;
  }, []);

  return (
    <ul className={styles.CountryList}>
      {countries.map((country) => (
        <CountryItem key={country} country={country} />
      ))}
    </ul>
  );
}

CountryList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      cityName: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      emoji: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      notes: PropTypes.string,
      position: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
      }).isRequired,
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default CountryList;
