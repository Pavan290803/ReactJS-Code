import classNames from "classnames";
import React from "react";
import Bio from "./Bio";
import SocialLinks from "./SocialLink";
import TopSocialLinks from "./TopSocialLinks";
import UserDetails from "./UserDetails";
import c from "./comic.module.scss";
import { FooterIconComic } from "../../shared/svg";
import { Footer } from "../../shared/footer";
import Player from "./Player";

const Comic = ({ userData }) => {
  return (
    <div className={classNames(c.ComicBackground)}>
      <div className="mt-5">
        <UserDetails personalInfo={userData?.PersonalInfo} />
      </div>

      <div className="mt-5 px-5">
        <Bio bio={userData.PersonalInfo?.Bio} />
      </div>

      <div className="mt-5 px-5">
        <TopSocialLinks socialLinks={userData.SocialLinks} />
      </div>

      <div className="mt-5 px-5">
        <Player data={userData} />
      </div>

      <div className="mt-5 px-5">
        <SocialLinks socialLinks={userData.SocialLinks} />
      </div>

      <div className="mt-5 px-5">
        <Footer footerText="Developed by Caard©">
          <FooterIconComic />
        </Footer>
      </div>
    </div>
  );
};
export default Comic;
