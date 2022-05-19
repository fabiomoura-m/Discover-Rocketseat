const url = 'http://localhost:5500/api';

function getUsers() {
  fetch(url)
    .then(response => response.json())
    .then(data => (renderApiResult.textContent = JSON.stringify(data)))
    .catch(error => console.error(error));
}

function getUser() {
  fetch(`${url}/1`)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name;
      userCity.textContent = data.city;
      userAvatar.src = data.avatar;
    })
    .catch(error => console.error(error));
}

//Fazendo um POST com Fetch
function addUser(newUser) {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => response.json())
    .then(data => (alertAPI.textContent = data))
    .catch(error => console.error(error));
}

const newUser = {
  name: 'Olivida Zars',
  avatar: 'https://picsum.photos/200/300',
  city: 'Rio do Sul'
};

// addUser(newUser);

// Fazendo um PUT com fetch
function updateUser(updatedUser, id) {
  fetch(`${url}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedUser),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => response.json())
    .then(data => (alertAPI.textContent = data))
    .catch(error => console.error(error));
}

const updatedUser = {
  name: 'Marcelo Clovis',
  avatar: 'https://picsum.photos/200/300',
  city: 'Recife'
};

// updateUser(updatedUser, 1);

// Fazendo um DELETE com Fetch
function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => response.json())
    .then(data => (alertAPI.textContent = data))
    .catch(error => console.error(error));
}

// deleteUser(2);
getUsers();
getUser();
