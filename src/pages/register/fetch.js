const url = "http://localhost:5000/api";

//traer usuarios
export const validarToken = async () => {
  const resp = await fetch(`${url}/usuarios/validar`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": JSON.parse(localStorage.getItem("token")),
    },
  });
  const data = await resp.json();

  return data;
};
//REgistrar un usuario
const postUsuario = async (datos) => {
  const resp = await fetch(`${url}/usuarios`, {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await resp.json();

  return data;
};
export default postUsuario;

//Login de usuario
export const postAuth = async (datos) => {
  const resp = await fetch(`${url}/auth/login`, {
    method: "GET",
    body: JSON.stringify(datos),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await resp.json();

  return data;
};
