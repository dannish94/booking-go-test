import axios from "axios";

const getLocations = async (numberOfResults, searchTerm) => {
  if (!searchTerm) {
    return Promise.resolve([]);
  } else {
    const locations = await axios.get(
      `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${numberOfResults}&solrTerm=${searchTerm}`
    );
    return locations.data.results.docs
  }
};

export default getLocations;
