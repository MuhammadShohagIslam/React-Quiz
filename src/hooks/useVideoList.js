import { useState, useEffect } from "react";
import "../firebase";
import {
    getDatabase,
    ref,
    query,
    orderByKey,
    get,
    startAt,
    limitToFirst,
} from "firebase/database";

export default function useVideoList(page) {
    const [videoList, setVideoList] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchVideo() {
            const db = getDatabase();
            const videoRef = ref(db, "videos");
            const videoQuery = query(
                videoRef,
                orderByKey(),
                startAt("" + page),
                limitToFirst(8)
            );

            setLoading(true);
            setError(false);
            await get(videoQuery)
                .then((snapshot) => {
                    setLoading(false);
                    if (snapshot.exists()) {
                        setVideoList((previousVideoList) => {
                            return [
                                ...previousVideoList,
                                ...Object.values(snapshot.val()),
                            ];
                        });
                    } else {
                        setHasMore(false);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false);
                    setError(true);
                });
        }

        fetchVideo();
    }, [page]);

    return {
        videoList,
        loading,
        error,
        hasMore,
    };
}
