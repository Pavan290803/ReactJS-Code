import React from "react";
import UserDetails from "./UserDetails";
import classNames from "classnames";
import c from "./Influencer2.module.scss";
import Player from "./Player";
import { Footer } from "../../shared/footer";
import { FooterInfluencer2 } from "../../shared/svg";
import SocialLink from "./SocialLink";
import Bio from "./Bio";
import SocialAndGetInTouch from "./SocialAndGetInTouch";
import TopSocial from "./TopSocial";

const Influencer2 = ({ userData, ...props }) => {
  return (
    <div className={classNames(c.mainContainer)}>
      <div>
        <UserDetails userData={userData} />
      </div>

      <div>
        <Bio userData={userData} />
      </div>

      <div className="d-flex">
        <SocialAndGetInTouch userData={userData} />
        <TopSocial socialLinks={userData?.SocialLinks}/>
      </div>

      <div className="mt-5 px-3">
        <Player data={userData} />
      </div>

      <div className="mt-5 px-3">
        <SocialLink socialLinks={userData?.SocialLinks} userData={userData} />
      </div>

      <div className="mt-5">
        <Footer
          classToOverrideText={classNames(c.footerText)}
          footerText="Developed by Caard©"
        >
          <FooterInfluencer2 />
        </Footer>
      </div>
    </div>
  );
};
export default Influencer2;
