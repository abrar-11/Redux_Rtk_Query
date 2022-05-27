import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetUserbyidQuery } from "../services/postApi";

const ViewStudent = () => {
    const { id } = useParams();

    const { data } = useGetUserbyidQuery(Number(id));
    const studentData = data;

    return (
        <div className="container mx-auto p-5">
            <h1> Student Details </h1>

            {studentData && (
                <div className=" shadow p-6 rounded ">
                    <p className="text-3xl text-red-900 font-semibold mb-4">
                        {studentData.name}
                    </p>
                    <p className="text-xl mt-4">Email : {studentData.email}</p>
                    <p className="text-xl">Website: {studentData.website}</p>
                </div>
            )}
        </div>
    );
};

export default ViewStudent;
