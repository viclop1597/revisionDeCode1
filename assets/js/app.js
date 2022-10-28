/* El código, por lo que entiendo, entra a una API, en la cual recuperamos el nombre, el numero de blog y la localización.
Pero debido a que al parecer nada de eso existe en el documento, nos manda un error. */

/* Reasigné la variable usersEndPoint para eliminar una linea de code y le cambié el nombre siguiendo CamelCase*/
const usersEndPoint = 'https://api.github.com/users';
/* Cambié el nombre de las variables, ya que empezaban con un $  */
/* Linkee bien */
const n = document.querySelector('.name');
const b = document.querySelector('.blog');
const l = document.querySelector('.location');

/* Agregué el async para que el await funcionara */
async function displayUser(username) {
  n.textContent = 'cargando...';
  const response = await fetch(`${usersEndPoint}/${username}`);
  console.log(data);
  n.textContent = `${data.name}`;
  b.textContent = `${data.blog}`;
  l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski').catch(handleError);