// This file is created for creating Custom Hooks

import API_GMAIL from "../services/api";
import { useState } from "react";

const useApi = (urlObject) => {

    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const call = async (payload) => {
        setResponse(null);
        setError("");
        setIsLoading(true);
        try {
            let res = await API_GMAIL(urlObject, payload);
            setResponse(res.data);
        } catch (error) {
            setError(error.message);            
        } finally {
            setIsLoading(false);
        }
    }

    return { call, response, error, isLoading};
};

export default useApi;