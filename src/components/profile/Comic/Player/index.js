import React from "react";
import classNames from "classnames";
import c from "../comic.module.scss";
import VideoPlayer from "../../../shared/VideoPlayer";
import { ComicVideoPlayerTopIcon } from "../../../shared/svg";

const Player = ({ data, ...propd }) => {
  return (
    <>
      <div className={classNames(c.boxVideoPlayerContainer)}>
        <div className={classNames(c.boxVideoPlayerContainerBack)}></div>
        <div className={classNames(c.boxVideoPlayerContainerFront, "p-2")}>
          <div className={classNames(c.videoIconTop)}>
            <ComicVideoPlayerTopIcon />
          </div>
          <div>
            <VideoPlayer data={data} classToOverrideText={classNames(c.VideoPlayerUserName)}>
              <div className={classNames(c.playbtn1)}></div>
            </VideoPlayer>
          </div>
        </div>
      </div>
    </>
  );
};
export default Player;
