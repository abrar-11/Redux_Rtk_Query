import React from "react";
import { useParams } from "react-router-dom";
import { useDeleteUserByIdMutation } from "../services/postApi";

const Delete = () => {
    const { id } = useParams();
    console.log(id);

    const res = useDeleteUserByIdMutation(Number(id));
    console.log(res);

    return <div>sdsd</div>;
};

export default Delete;
