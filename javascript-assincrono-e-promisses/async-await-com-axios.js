// axios
//   .get('https://api.github.com/users/fabiomoura-m')
//   .then(response => console.log(response.data))
//   .catch(error => console.log(error));
const { default: axios } = require('axios');

async function fetchRepos() {
  try {
    const user = await axios.get('https://api.github.com/users/fabiomoura-m');
    const response = user.data;
    console.log(response.id);
  } catch (e) {
    console.log(e);
  }
}
fetchRepos();
