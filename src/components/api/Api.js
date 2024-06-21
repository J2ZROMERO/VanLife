import { redirect } from "react-router-dom";

export async function fetchVans(id) {
  const url = id ? `/api/vans/${id}` : "/api/vans";
  
  const res = await fetch(url);

  if (!res.ok) {
    throw {
      status: res.status,
      statusText: res.statusText,
      datoExtra: "Fallo al obtener los vans",
    };
  }

  const data = await res.json();
  return data.vans;
}

export async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans";

  const res = await fetch(url);

  if (!res.ok) {
    throw {
      status: res.status,
      statusText: res.statusText,
      datoExtra: "Fallo al obtener los vans del host",
    };
  }

  const data = await res.json();
  return data.vans;
}

export async function login(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });

  res.body = true

 if(!res.ok) {
throw {
  status: res.status,
  statusText: res.statusText,
  datoExtra: "Fallo al hacer login",
}
}

const data =  await res.json();

return data

}
