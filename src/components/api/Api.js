export async function fetchVans() {
  const res = await fetch("/api/vans");

  if (!res.ok) {
    throw {
      status: res.status,
      statusText: res.statusText,
      datoExtra: "Fallo al obtener los vans",
    };
  }

  const data = await res.json();
  return data;
}
