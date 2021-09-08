const axios = require("../utils/axios");
const url = "http://localhost:5000";

function index() {
  axios.get(url + "/constellations").then((response) => {
    console.log(response.data);
  });
}

function create(body) {
  axios.post(url + "/constellations", body).then((response) => {
    console.log(response.data);
  });
}

function show(id) {
  axios.get(url + "/constellations/" + id).then((response) => {
    console.log(response.data);
  });
}

function update(id, body) {
  axios.put(url + "/constellations/" + id, body).then((response) => {
    console.log(response.data);
  });
}

function destroy(id) {
  axios
    .delete(url + "/constellations/" + id)
    .then((response) => console.log({}));
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};
