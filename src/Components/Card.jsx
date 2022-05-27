import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
    const { id, name, username, email, website } = data;




    return (
        <div className=" w-64 shadow-md h-[18rem]  overflow-hidden rounded   p-3 hover:shadow-xl hover:cursor-pointer flex flex-col justify-between">
            <div className="flex-grow">
                <h4 className="mb-1">{name}</h4>
                <p className="text-sm text-red-700 ">
                    username : <span className="text-gray-800">{username}</span>
                </p>
                <p className="text-sm text-red-700 ">
                    email : <span className="text-gray-800">{email}</span>
                </p>
                <p className="text-sm text-red-700 ">
                    website: <span className="text-gray-800">{website}</span>{" "}
                </p>
            </div>
            <div className="">
                <button className=" bg-blue-700  rounded text-sm mt-3 px-3 py-2 text-white hover:bg-blue-900 w-full">
                    <Link to={`/view/${id}`}>View Student</Link>
                </button>
                <button className=" bg-emerald-800 hover:bg-emerald-900 rounded text-sm mt-3 px-3 py-2 text-white w-full">
                    Edit Student
                </button>
                <button className=" bg-red-700 hover:bg-red-800 rounded text-sm mt-3 px-3 py-2 text-white w-full">
                  <Link to={`/delete/${id}`}>Delete Student</Link>
                </button>
            </div>
        </div>
    );
};

export default Card;
