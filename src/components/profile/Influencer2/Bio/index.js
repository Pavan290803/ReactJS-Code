import React from "react";
import classNames from "classnames";
import c from "../Influencer2.module.scss";

const Bio = ({ userData, ...props }) => {
  return (
    <div className={classNames(c.userInfoContainer)}>
      <div className={classNames("d-flex")}>
        <div className={classNames(c.userBioContainer)}>
          <div className={classNames(c.userBio)}>
            <div className={classNames(c.userBioText)}>
              {userData?.PersonalInfo?.Bio}
            </div>
            <div className={classNames("mt-2", c.userBioTextLoaction)}>
              {userData?.PersonalInfo?.Location}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bio;
