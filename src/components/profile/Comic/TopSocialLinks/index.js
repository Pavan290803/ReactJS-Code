import React from "react";
import classNames from "classnames";
import c from "../comic.module.scss";
import { validHttps } from "../../../../helper/theme";
import { API_URLS } from "../../../../config/api_urls/api_urls";

const TopSocialLinks = ({ socialLinks }) => {
  return (
    <div className="d-flex flex-wrap justify-content-between m-0 row row-cols-3">
      {socialLinks &&
        socialLinks.length > 2 &&
        socialLinks.slice(0, 3)?.map((socialItem) => {
          return (
            <a key={socialItem?.Name} href={validHttps.includes(socialItem?.Name) ? `${socialItem?.URL}` : `https://${socialItem.URL}`} target="_blank" rel="noreferrer">
            <div className={"col"}>
              <div
                className={classNames(c.boxTopSocial, c.cursorPointer)}
                style={{
                  backgroundImage: `url(${`${API_URLS.comic}${socialItem?.Name}.svg`})`,
                }}
              >
                {/* <div className={classNames(c.boxTopSocialBack)}></div>
          <div
            className={classNames(c.boxTopSocialFront)}
            style={{
              backgroundImage: `url(${require("../../../../assets/images/insta.png")})`,
            }}
          ></div> */}
              </div>
            </div>
            </a>
          );
        })}

      {/* <div className={"col"}>
        <div className={classNames(c.boxTopSocial, c.cursorPointer)}>
          <div className={classNames(c.boxTopSocialBack)}></div>
          <div
            className={classNames(c.boxTopSocialFront)}
            style={{
              backgroundImage: `url(${require("../../../../assets/images/insta.png")})`,
            }}
          ></div>
        </div>
      </div> */}
    </div>
  );
};

export default TopSocialLinks;
