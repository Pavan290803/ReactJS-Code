import classNames from "classnames";
import VideoPlayer from "../../../shared/VideoPlayer";
import c from "../Influencer2.module.scss";

const Player = ({ data, ...props }) => {
  return (
    <VideoPlayer
      data={data}
      classToOverrideVideoPlayer={c.videoPlayer}
      classToOverrideVideo={c.video}
    >
      <div className={classNames(c.playbtn)}></div>
    </VideoPlayer>
  );
};
export default Player;
