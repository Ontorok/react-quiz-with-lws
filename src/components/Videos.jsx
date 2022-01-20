import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import Video from "./Video";

const Videos = () => {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);

  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          next={() => setPage((prev) => prev + 8)}
        >
          {videos.map(({ youtubeID, title, noq }, idx) => {
            return noq === 0 ? (
              <Video title={title} id={youtubeID} noq={noq} key={youtubeID} />
            ) : (
              <Link to="/quiz" key={youtubeID}>
                <Video title={title} id={youtubeID} noq={noq} />
              </Link>
            );
          })}
        </InfiniteScroll>
      )}

      {!loading && videos.length === 0 && <div>No Data found</div>}
      {error && <div>Therer was an error</div>}
      {loading && <div>Loading....</div>}
    </div>
  );
};

export default Videos;
