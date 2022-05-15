/*
fetch('https://api.github.com/users/fabiomoura-m')
  .then(response => response.json()) // retornando uma nova promessa
  .then(data => fetch(data.repos_url)) // retornando uma nova promessa
  .then(res => res.json()) // retornando uma nova promessa
  .then(d => console.log(d))
  .catch(err => console.log(err));
*/

async function start() {
  try {
    const response = await fetch('https://api.github.com/users/fabiomoura-m');
    const user = await response.json();
    const reposResponse = await fetch(user.repos_url);
    const repos = await reposResponse.json();
    console.log(user);
  } catch (e) {
    console.log(e);
  }
}

start();

// async function start() {
//   const url = 'https://api.github.com/users/fabiomoura-m';
//   const user = await fetch(url).then(r => r.json());
//   const userRepos = await fetch(user.repos_url).then(r => r.json());
//   console.log(userRepos);
// }

// start().catch(e => console.log(e));
