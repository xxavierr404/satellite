import axios from 'axios';
import {useState, useEffect, useCallback} from "react";

function useFetch(start, limit) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [notes, setNotes] = useState([]);

    const load = useCallback(async () => {
        try {
            await setLoading(true);
            await setError(false);
            const result = await axios.get(`http://127.0.0.1:8080/note/get/bunch?from=${start}&count=${limit}`);
            await setNotes((prev) => {
                return [...prev, ...result.data];
            });
            setLoading(false);
        } catch (err) {
            setError(err);
        }
    }, [start, limit]);

    useEffect(() => {
        load();
    }, [load, start, limit]);

    return {loading, error, notes};
}

export default useFetch;