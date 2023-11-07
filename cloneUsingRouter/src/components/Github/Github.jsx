import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/ankitmittal4")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         // console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="text-4xl bg-gray-600 text-center m-5 py-5 text-white">
      <p className="mb-3">Username: {data.login}</p>
      <p className="mb-3">Followers: {data.followers}</p>
      <p className="mb-3">Location: {data.location}</p>

      <div className="h-screen flex items-center justify-center">
        <img src={data.avatar_url} alt="Github Avatar" />
      </div>
    </div>
  );
}

export default Github;

export const getGithubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/ankitmittal4");
  return res.json();
};
