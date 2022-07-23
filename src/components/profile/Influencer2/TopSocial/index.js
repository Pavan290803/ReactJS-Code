import classNames from "classnames";
import { API_URLS } from "../../../../config/api_urls/api_urls";
import { validHttps } from "../../../../helper/theme";
import c from "../Influencer2.module.scss";

const TopSocial = ({ socialLinks }) => {
  return (
    <div className={classNames(c.TopSocialContainer)}>
      {socialLinks &&
        socialLinks.length > 1 && socialLinks.slice(1,3)?.map((socialItem) => {
          return (  
            <a key={socialItem?.Name} href={validHttps.includes(socialItem?.Name) ? `${socialItem?.URL}` : `https://${socialItem.URL}`} target="_blank" rel="noreferrer">
              <div
                className={classNames(
                  c.TopSocialIcon,
                  "d-flex justify-content-center align-items-center"

                )}
                
                // style={{
                //   backgroundImage: `url(${require("../../../../../assets/images/Facebook.png")})`,
                  
                // }}
                style={{
                  backgroundImage: `url(${`${API_URLS.influencer2}${socialItem?.Name}.svg`})`,
                  
                }}
              >
              {/* <div
                className={classNames(c.TopSocialIcon1)}
                style={{
                  backgroundImage: `url(${require("../../../../../assets/images/insta.png")})`,
                }}
              ></div> */}
            </div>
            </a>
          );
        })}
    </div>
  );
};
export default TopSocial;
