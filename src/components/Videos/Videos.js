import React, { useState } from "react";
import Video from "./Video";
import useVideoList from "../../hooks/useVideoList";
import InfiniteScroll from "react-infinite-scroll-component";

const Videos = () => {
    const [page, setPage] = useState(1);
    const { videoList, loading, error, hasMore } = useVideoList(page);

    return (
        <div>
            {videoList.length > 0 && (
                <InfiniteScroll
                    dataLength={videoList.length}
                    hasMore={hasMore}
                    loader="Loading..."
                    next={() => setPage(page + 8)}
                >
                    {videoList.map((video, index) => {
                        return (
                            <Video
                                key={index}
                                noq={video.noq}
                                title={video.title}
                                id={video.youtubeID}
                            />
                        );
                    })}
                </InfiniteScroll>
            )}
            {!loading && videoList.length === 0 && <p>No Data Found!</p>}
            {error && <p>There was an error!</p> }
            {loading && <div>Loading ...</div>}
        </div>
    );
};

export default Videos;
