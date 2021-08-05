const url = "https://api.coincap.io/v2/assets?limit=20";

function getAssets() {
  return fetch(`${url}`)
    .then(res => res.json())
    .then(res => res.data);
}

export default {
  getAssets
};
