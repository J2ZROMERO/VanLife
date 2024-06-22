import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { redirect, useLoaderData, useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import { login } from "../api/Api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

function Login() {
  const [status, setStatus] = useState("idle"); // idle, pending, resolved, rejected
  const [error, setError] = useState(null); // null, error message
  const data = useLoaderData();
  const [user, setUser] = useState(localStorage.getItem("isLoggedIn")); // null, user object
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    checkbox: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setStatus("submitting");
      const response = await login(formData);
      setError(null);
      localStorage.setItem("isLoggedIn", true);
      setUser("algo dentr");
      navigate("/host/vans", { reaplace: true, state: { message: response } });
    } catch (error) {
      // Ensure the error is a string
      // console.log(error);
      setError(error.datoExtra || "An unexpected error occurred");
      // setStatus("rejected");
    } finally {
      setStatus("idle");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const SetFakeUser = () => {
    localStorage.removeItem("isLoggedIn");
    setUser(null);
  };
 console.log(user)
  return (
    <>
      {data && <Alert variant="warning">{data}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Container className="text-end">
        {user  && (
          <Button variant="warning" onClick={SetFakeUser}>
            {" "}
            Delete user{" "}
          </Button>
        )}
      </Container>
      <Container id="login-form" className="home-container d-flex">
        <Container className="d-flex justify-content-center align-items-start">
          <Form
            className="mt-5 form-group border p-4 rounded"
            onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={handleChange}
                value={formData.email}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={formData.password}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                name="checkbox"
                type="checkbox"
                label="Check me out"
                checked={formData.checkbox}
                onChange={handleChange}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Loading..." : "Submit"}
            </Button>
          </Form>
        </Container>
      </Container>
    </>
  );
}

export default Login;
