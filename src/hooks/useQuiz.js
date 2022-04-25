import { useState, useEffect } from "react";
import { getDatabase, orderByKey, query, ref, get } from "firebase/database";

export default function useQuiz(youtubeID) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function fetchQuiz() {
            const db = getDatabase();
            const quizRef = ref(db, "quiz/" + youtubeID + "/questions");

            const quizQuery = query(quizRef, orderByKey());

            try {
                setLoading(true);
                setError(false);
                const snapshot = await get(quizQuery);
                if (snapshot.exists()) {
                    setQuestions((prevQuestions) => {
                        return [
                            ...prevQuestions,
                            ...Object.values(snapshot.val()),
                        ];
                    });
                }
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(true);
            } 
        }

        fetchQuiz();
    }, [youtubeID]);

    return {
        loading,
        error,
        questions,
    };
}
