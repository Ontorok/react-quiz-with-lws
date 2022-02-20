import {
    get,
    getDatabase, orderByKey,
    query,
    ref
} from 'firebase/database';
import { useEffect, useState } from 'react';


export default function useInstructors() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        async function fetchInstructors() {
            // database related work
            const db = getDatabase();
            const instructorsRef = ref(db, `instructors`);
            const instructorsQuery = query(
                instructorsRef,
                orderByKey(),

            );

            try {
                setError(false);
                setLoading(true);
                //request firebase database
                const snapshot = await get(instructorsQuery);
                setLoading(false);
                if (snapshot.exists()) {
                    setInstructors((prevInstructors) => {
                        return [...prevInstructors, ...Object.values(snapshot.val())];
                    });
                }
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true)
            }
        }
        fetchInstructors()
    }, []);

    return {
        loading,
        error,
        instructors,
    }
}