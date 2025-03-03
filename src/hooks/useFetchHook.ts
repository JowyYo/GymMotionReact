import { useEffect, useState } from "react";

interface FetchHookResponse {
    data: any | null;
    loading: boolean;
    error: string | null;
}

const useFetchHook = (endPoint: string) : FetchHookResponse  => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch(endPoint);
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            const result = await response.json();
            setData(result);
        } catch (err: any) {
            setError(err.message || 'Error desconocido');
        } finally {
            setLoading(false);
        }
      };

    useEffect(() => {
        fetchData();
    }, [endPoint]);

    return { data, loading, error };
}

export default useFetchHook;