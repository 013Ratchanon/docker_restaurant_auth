import React, { useState } from "react";
import NavBar from "../components/NavBar";

const Register = () => {
  const [restaurant, setRestaurants] = useState({
    username: "",
    name: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurants({ ...restaurant, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/restaurants/",
        {
          method: "POST",
          body: JSON.stringify(restaurant),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        alert("Restaurant registered successfully!");
        setRestaurants({
          name: "",
          type: "",
          imgUrl: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <div className="w-full max-w-md p-8 bg-black rounded shadow">
        <h4 className="text-3xl text-center mb-6">Register</h4>

        <fieldset className="mb-4">
          <legend className="mb-2 font-medium">Username</legend>
          <input
            type="text"
            name="username"
            value={restaurant.username}
            onChange={handleChange}
            placeholder="Username"
            className="input input-secondary w-full mb-4 border p-2 rounded text-white"
          />

          <legend className="mb-2 font-medium">Password</legend>
          <input
            type="password"
            name="password"
            value={restaurant.password}
            onChange={handleChange}
            placeholder="Password"
            className="input input-primary w-full border p-2 rounded text-white"
          />

          <legend className="mb-2 font-medium">Name</legend>
          <input
            type="text"
            name="name"
            value={restaurant.name}
            onChange={handleChange}
            placeholder="Name"
            className="input input-secondary w-full mb-4 border p-2 rounded text-white"
          />

          <legend className="mb-2 font-medium">Email</legend>
          <input
            type="password"
            name="email"
            value={restaurant.email}
            onChange={handleChange}
            placeholder="Email"
            className="input input-primary w-full border p-2 rounded text-white"
          />
        </fieldset>

        <div className="flex justify-between">
          <button
            onClick={handleSubmit}
            className="btn btn-outline btn-success"
            type="submit"
          >
            Register
          </button>
          <button className="btn btn-outline btn-error" type="button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
