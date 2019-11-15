import axios from "axios";

const getLocations = async (numberOfResults, searchTerm) => {
  if (!searchTerm) {
    return Promise.resolve([]);
  } else {
    return await axios.get(
      `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${numberOfResults}&solrTerm=${searchTerm}`)
      .then((location) => { return location.data.results.docs })
      .catch((err) => {
        console.error(err);
      });
  }
};

export default getLocations;
