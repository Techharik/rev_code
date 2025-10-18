import React, { useEffect, useState } from "react";

const useCustomHook = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!url) return;
        const res = async () => {
            setLoading(true)
            try {
                const result = await fetch(`${url}`);

                if (!result.ok) {
                    throw new Error('Error in fetching', result)
                }
                const data = await result.json()
                setData(data)
            } catch (e) {
                setError(e);
                setLoading(false)
            } finally {
                setLoading(false)
            }
        }

        res()

    }, [url])
    return { data, loading, error }
};

export default useCustomHook;
