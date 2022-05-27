import React from "react";
import Card from "../components/Card";
import { useCreateUserMutation, useGetUserQuery } from "../services/postApi";

const Home = () => {
    const { data, isLoading } = useGetUserQuery();
    // console.log(data)

    const res = useCreateUserMutation();
    console.log(res);

    if (isLoading) {
        return <h2 className="text-indigo-700 text-lg">Loading .... </h2>;
    }

    return (
        <div className="container mx-auto p-6 shadow rounded">
            <h1 className="text-blue-700 text-4xl">RTK Query .. </h1>
            <button className=" bg-red-700 hover:bg-red-800 rounded text-sm mt-3 px-3 py-2 text-white w-full">
                Create Dummy Student
            </button>
            <div className="flex flex-wrap justify-between gap-6">
                {data?.map((data) => {
                    return <Card data={data} key={data.id} />;
                })}
            </div>
        </div>
    );
};

export default Home;
