import { redirect } from "react-router-dom";

export async function requireAuth() {
  const isLogggedIn = localStorage.getItem("isLoggedIn");

  if (!isLogggedIn) {
    const response = redirect("/login?message=You need to login first.");
    response.body = true;
    return response;
  }

  return null;
}
