import React, { useState, useRef } from "react";
import ReactPlayer from "react-player/youtube";
import classes from "../../assets/styles/MiniPlayer.module.css";
import image from "../../assets/images/3.jpg";

const MiniPlayer = ({ videoID, videoTitle }) => {
    const [status, setStatus] = useState(false);
    const buttonRef = useRef(null);
    const videoUrl = `https://www.youtube.com/watch?v=${videoID}`;

    const toogleVideo = () => {
        if (!status) {
            setStatus(true);
            buttonRef.current.classList.remove(`${classes.floatingBtn}`);
        } else {
            setStatus(false);
            buttonRef.current.classList.add(`${classes.floatingBtn}`);
        }
    };

    return (
        <div
            className={`${classes.miniPlayer} ${classes.floatingBtn}`}
            ref={buttonRef}
            onClick={toogleVideo}
        >
            <span className={`material-icons-outlined ${classes.open}`}>
                {" "}
                play_circle_filled{" "}
            </span>
            <span
                className={`material-icons-outlined ${classes.close}`}
                onClick={toogleVideo}
            >
                {" "}
                close{" "}
            </span>
            <ReactPlayer
                url={videoUrl}
                controls
                playing={status}
                width="300px"
                height="168px"
                className={classes.player}
            />
            <p>{videoTitle}</p>
        </div>
    );
};

export default MiniPlayer;
