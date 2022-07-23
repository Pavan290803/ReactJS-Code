import classNames from "classnames";
import { API_URLS } from "../../../../config/api_urls/api_urls";
import c from "../Influencer2.module.scss";
import GetInTouch from "./GetInTouch";

const SocialAndGetInTouch = ({ userData }) => {
  return (
    <div className={classNames("d-flex", c.userBioContainer)}>
      <div className={classNames(c.boxTopSocial)}
      style={{
        backgroundImage: `url(${`${API_URLS.influencer2}${userData.SocialLinks[0]?.Name}.svg`})`,
      }}
      >
        {/* <div
          className={classNames(c.boxTopSocialFront)}
          style={{
            backgroundImage: `url(${require("../../../../assets/images/InstaWhite.png")})`,
          }}
        ></div> */}
      </div>
      <GetInTouch userData={userData} />
    </div>
  );
};

export default SocialAndGetInTouch;
