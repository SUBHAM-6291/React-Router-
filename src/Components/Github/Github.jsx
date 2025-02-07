
    /*const [data,setdata]=useState([])
    useEffect(() => {
      fetch('https://api.github.com/users-SUBHAM-6291')
      .then(response=>response.json())
      .rhen(data=>{console.log(data);});
      setdata(data)

    
      
    }, [])*/


    import React from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
    const data = useLoaderData(); // Fetch data from loader

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            <p>GitHub Followers: {data.followers}</p>
            <img className="w-32 h-32 rounded-full mx-auto" src={data.avatar_url} alt="GitHub Avatar" />
        </div>
    );
};

export default Github;

// Loader function for fetching user data
export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/SUBHAM-6291");

    if (!response.ok) {
        throw new Error("Failed to fetch GitHub data");
    }

    return response.json(); 
};

    
  