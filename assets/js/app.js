/* El código, por lo que entiendo, entra a una API, en la cual recuperamos el nombre, el numero de blog y la localización.
Pero si no encuentra la info, nos manda un error. */

/* Reasigné la variable usersEndPoint para eliminar una linea de code y le cambié el nombre siguiendo CamelCase*/
const usersEndPoint = 'https://api.github.com/users';
/* Linkee bien el querySelector*/
const $n = document.querySelector('p.name');
const $b = document.querySelector('p.blog');
const $l = document.querySelector('p.location');

/* Agregué el async para que el await funcionara */
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndPoint}/${username}`);
  /* Definimos el data */
  const data = await response.json();
  console.log(data);
  /* Diferentes comillas para definirlas */
  $n.textContent = `${data.name}`; 
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski').catch(handleError);