import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="text-center m-4 bg-gray-800 text-white p-6 text-3xl">
            <h1 className="text-4xl font-bold">Welcome to My App</h1>
            <p className="mt-4 text-lg">Explore GitHub user data here.</p>
            <Link to="/github" className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                View GitHub Profile
            </Link>
        </div>
    );
};

export default Home;
