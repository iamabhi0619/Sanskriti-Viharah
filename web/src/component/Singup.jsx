import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function Signup() {
  const form = {
    id: Math.floor(10000 + Math.random() * 90000),
    email: "",
    name: "",
    password: "",
  };
  const [formData, setFormData] = useState(form);
  const [apiWork, setApiWork] = useState(false);
  const handalChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiWork(true);
    try {
      const response = await fetch("http://localhost:5000/memberapi/singup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);
      if (result.status === "OK") {
        window.alert(`Thanks for Registering..!!\nCheck Your mail`);
        setFormData(form);
      } else {
        window.alert("Please Enter the correct data..!!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      window.alert("Sorry, the server is not responding..!!");
    } finally {
      setApiWork(false);
    }
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-md sticky-top py-3 navbar-dark"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <span className="bs-icon-sm bs-icon-circle bs-icon-primary shadow d-flex justify-content-center align-items-center me-2 bs-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="bi bi-bezier"
              >
                <path
                  fillRule="evenodd"
                  d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"
                ></path>
                <path d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z"></path>
              </svg>
            </span>
            <span>sanskriti-Viryah</span>
          </a>
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-1"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="services.html">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pricing.html">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contacts.html">
                  Contacts
                </a>
              </li>
            </ul>
            <a
              className="btn btn-primary shadow"
              role="button"
              href="signup.html"
            >
              Sign up
            </a>
          </div>
        </div>
      </nav>

      <section
        className="py-5"
        style={{ background: "var(--bs-info-border-subtle)" }}
      >
        <div className="container py-5">
          <div
            className="row mb-4 mb-lg-5"
            style={{ background: "var(--bs-emphasis-color)" }}
          >
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <p className="fw-bold text-success mb-2">Sign up</p>
              <h2 className="fw-bold">Welcome</h2>
            </div>
          </div>
          <div
            className="row d-flex justify-content-center"
            style={{
              background: "url('assets/img/kedarnath.avif') center / contain",
            }}
          >
            <div className="col-md-6 col-xl-4">
              <div className="card">
                <div
                  className="card-body text-center d-flex flex-column align-items-center"
                  style={{
                    background:
                      "url('assets/img/kedarnath.avif') center / auto",
                  }}
                >
                  <div
                    className="bs-icon-xl bs-icon-circle bs-icon-primary shadow bs-icon my-4"
                    style={{
                      background: "url('assets/img/face.png') center / contain",
                    }}
                  ></div>
                  <form method="post" onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handalChange}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handalChange}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handalChange}
                      />
                    </div>
                    <div className="mb-3">
                      <button
                        className="btn btn-primary shadow d-block w-100"
                        type="submit"
                      >
                        Sign up
                      </button>
                    </div>
                    <p className="text-muted">
                      Already have an account?&nbsp;
                      <a href="login.html">Log in</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
