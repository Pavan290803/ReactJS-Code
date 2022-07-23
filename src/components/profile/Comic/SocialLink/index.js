import React from "react";
import classNames from "classnames";
import c from "../comic.module.scss";
import { API_URLS } from "../../../../config/api_urls/api_urls";
import { validHttps } from "../../../../helper/theme";

const SocialLinks = ({ socialLinks }) => {
  console.log(socialLinks)
  return (
    // <div className="d-flex flex-wrap justify-content-between m-0">
    <div className={classNames(c.boxSocialMainContainer)}>
      {socialLinks &&
        socialLinks.length > 2 &&
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
              <div className="col-auto">
                <div
                  className={classNames(c.boxSocial, c.cursorPointer)}
                  style={{
                    backgroundImage: `url(${`${API_URLS.comic}${socialItem?.Name}.svg`})`,
                  }}
                >
                  {/* <div className={classNames(c.boxSocialBack)}></div>
              <div
                className={classNames(c.boxSocialFront)}
                style={{
                  backgroundImage: `url(${require("../../../../assets/images/insta.png")})`,
                }}
              ></div> */}
                </div>
              </div>
            </a>
          );
        })}
    </div>
  );
};

export default SocialLinks;
