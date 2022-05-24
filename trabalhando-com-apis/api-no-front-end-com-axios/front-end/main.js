const url = 'http://localhost:5500/api';

//GET
function getUsers() {
  axios
    .get(url)
    .then(response => {
      apiResult.textContent = JSON.stringify(response.data);
    })
    .catch(error => console.error(error));
}

//POST
function addNewUser(newUser) {
  axios
    .post(url, newUser)
    .then(response => {
      console.log(response);
    })
    .catch(error => console.error(error));
}

//GET com parâmetros
function getUser(id) {
  axios
    .get(`${url}/${id}`)
    .then(response => {
      const data = response.data;
      userName.textContent = data.name;
      userCity.textContent = data.city;
      userID.textContent = data.id;
      userAvatar.src = data.avatar;
    })
    .catch(error => console.error(error));
}

//PUT
function updateUser(id, userUpdated) {
  axios
    .put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error));
}

//DELETE
function deleteUser(id) {
  axios
    .delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error));
}

const userUpdated = {
  name: 'Marcelo Calvis',
  avatar: 'https://picsum.photos/200/300',
  city: 'Refice'
};

// deleteUser(3);
// updateUser(3, userUpdated);
getUsers();
getUser(1);

const newUser = {
  name: 'Olivia Zars',
  avatar: 'https://picsum.photos/200/300',
  city: 'Rio de Janeiro'
};
// addNewUser(newUser);
