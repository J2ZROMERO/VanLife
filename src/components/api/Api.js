export async function fetchVans() {
  const res = await fetch("/api/vans");

  if (!res.ok) {
    throw {
      status: res.status,
      statusText: res.statusText,
      datoExtra: "algun dato extras",
    };
  }

  const data = await res.json();
  return data;
}
