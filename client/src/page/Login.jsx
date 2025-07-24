import React, { useState } from "react";
import NavBar from "../components/NavBar";
const Login = () => {
  const [restaurant, setRestaurants] = useState({
    name: "",
    type: "",
    imgUrl: "",
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
        alert("Restaurant added successfully!!");
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
        <h4 className="text-3xl text-center mb-6">Login</h4>

        <fieldset className="mb-4">
          <legend className="mb-2 font-medium">Username</legend>
          <input
            type="text"
            name="name"
            value={restaurant.name}
            onChange={handleChange}
            placeholder="Username"
            className="input input-secondary w-full mb-4"
          />
          <legend className="mb-2 font-medium">Password</legend>
          <input
            type="text"
            name="type"
            value={restaurant.type}
            onChange={handleChange}
            placeholder="Password"
            className="input input-primary w-full"
          />
        </fieldset>

        <div className="flex justify-between">
          <button
            onClick={handleSubmit}
            className="btn btn-outline btn-success"
            type="submit"
          >
            Login
          </button>
          <button className="btn btn-outline btn-error" type="button">
            Cancel
          </button>
        </div>
        <div className="text-center mt-4">
          <h5 className="mb-2">Don't have an account?</h5>
          <a
            href="/register"
            className="link link-success underline text-green-400"
          >
            Register here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
