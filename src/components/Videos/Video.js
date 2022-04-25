import React from "react";
import classes from "../../assets/styles/Video.module.css";
import { Link } from "react-router-dom";

const Video = ({ noq, title, id }) => {
    return (
        <>
            {noq > 0 ? (
                <Link to={`quiz/${id}`} state={{videoID: id, videoTitle: title}}>
                    <div className={classes.video}>
                        <img
                            src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                            alt={title}
                        />
                        <p>{title}</p>
                        <div className={classes.qmeta}>
                            <p>{noq} Questions</p>
                            <p>Score : {noq * 5}</p>
                        </div>
                    </div>
                </Link>
            ) : (
                <div className={classes.video}>
                    <img
                        src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                        alt={title}
                    />
                    <p>{title}</p>
                    <div className={classes.qmeta}>
                        <p>{noq} Questions</p>
                        <p>Score : {noq * 5}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Video;
