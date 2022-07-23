import React, { useState } from "react";
import classNames from "classnames";
import c from "./videoplayer.module.scss";
import { CardMedia } from "@mui/material";
import { videoURL } from "../../../helper/theme";

const VideoPlayer = ({
  data,
  classToOverrideVideo,
  classToOverrideVideoPlayer,
  classToOverrideText,
  ...props
}) => {
  const [play, setPlay] = useState(false);
  const videoId = data?.FeaturedVideo
    ? data?.FeaturedVideo.split("?v=")[1]
    : "testtest"; //data.FeaturedVideo.split("?v=")[1];
  const thumb = "https://img.youtube.com/vi/" + videoId + "/maxresdefault.jpg";
  return (
    <>
      {data?.FeaturedVideo && (
        <div>
          {play ? (
            <CardMedia
              component="iframe"
              allow="autoplay"
              allowFullScreen="allowfullscreen"
              className={classNames(c.videoPlayer, classToOverrideVideoPlayer)}
              src={`${videoURL(data?.FeaturedVideo)}?autoplay=1&mute=1`}
            />
          ) : (
            <div onClick={() => setPlay(true)}>
              <div
                className={classNames(c.video, classToOverrideVideo)}
                style={{ backgroundImage: `url(${thumb})` }}
              >
                {data?.PersonalInfo?.ImageLocation ? (
                  <div
                    className={classNames(c.icon, "bg-white")}
                    style={{
                      backgroundImage:
                        "url(" +
                        `data:image/png;base64,${data?.PersonalInfo?.ImageLocation}` +
                        ")",
                    }}
                  ></div>
                ) : (
                  <div
                    className={classNames(c.icon, "bg-white")}
                    style={{
                      backgroundImage:
                        "url(" +
                        require("../../../assets/images/Profile.png") +
                        ")",
                    }}
                  ></div>
                )}
                <div className={classNames(c.text, classToOverrideText)}>
                  {data?.PersonalInfo.Name || "Video Title"}
                </div>
                <div className={classNames(c.playerIcon)}>
                  {props?.children}
                  {/* <YoutubeColoredIcon/> */}
                  {/* <div className={classNames(c.playbtn1)}></div> */}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default VideoPlayer;
