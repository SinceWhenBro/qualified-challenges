const axios = require("axios");
const BASE_URL = "http://localhost:5000";

function updateIfExists(id, body) {
  const url = `${BASE_URL}/constellations/${id}`;
  axios
  .get(url)
  .then(({ data }) => {
    return data.find(({ name }) => name === body.name)
  })
  .then((exists) => {
    if(exists) throw `Constellation "${body.name}" already exists`;
    return axios.post(url, body);
  })
  .then(({data}) => console.log(data))
  .catch(console.log);
}

module.exports = {
  updateIfExists,
};
