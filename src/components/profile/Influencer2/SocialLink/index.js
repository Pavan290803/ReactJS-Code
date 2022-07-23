import classNames from "classnames";
import { API_URLS } from "../../../../config/api_urls/api_urls";
import { validHttps } from "../../../../helper/theme";
import c from "../Influencer2.module.scss";

const SocialLink = ({ socialLinks }) => {
  return (
    // <div className="d-flex flex-wrap justify-content-center m-0">
    <div className={classNames(c.socialLinksGrid)}>
      {socialLinks &&
        socialLinks.length > 1 &&
        socialLinks.slice(3)?.map((socialItem) => {
          return (
            <a
              key={socialItem?.Name}
              href={
                validHttps.includes(socialItem?.Name)
                  ? `${socialItem?.URL}`
                  : `https://${socialItem.URL}`
              }
              target="_blank"
              rel="noreferrer"
            >
                <div className={classNames(c.boxSocial)}>
                  <div
                    className={classNames(c.boxSocialFront)}
                    // style={{
                    //   backgroundImage: `url(${require("../../../../assets/images/insta.png")})`,
                    // }}

                    style={{
                      backgroundImage: `url(${`${API_URLS.influencer2}${socialItem?.Name}.svg`})`,
                    }}
                  ></div>
                </div>
            </a>
          );
        })}
    </div>
  );
};

export default SocialLink;
