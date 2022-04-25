import { useEffect, useState } from "react";
import { getDatabase, ref, query, get, orderByKey } from "firebase/database";

export default function useAnswers(youtubeID) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        async function fetchAnswers() {
            const db = getDatabase();
            const asnwersRef = ref(db, "answers/" + youtubeID + "/questions");
            const answersQuery = query(asnwersRef, orderByKey());

            try {
                setLoading(true);
                const snapshot = await get(answersQuery);
                if (snapshot.exists()) {
                    setAnswers((prevAnswers) => {
                        return [
                            ...prevAnswers,
                            ...Object.values(snapshot.val()),
                        ];
                    });
                }
                setLoading(false);
                setError(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(true);
            }
        }
        fetchAnswers();
    }, [youtubeID]);

    return {
        loading,
        error,
        answers,
    };
}
