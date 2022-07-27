import classNames from "classnames";
import c from "../Influencer2.module.scss";

const UserDetails = ({ userData, ...props }) => {
  return (
    <>
      <div
        className={c.profileCoverImage}
        style={{
          // backgroundImage: `url(${require("../../../../assets/images/Influencer2Profile.png")})`,
          backgroundImage: `url(${userData?.PersonalInfo?.ImageLocation ? `data:image/png;base64,${userData?.PersonalInfo?.ImageLocation}` : require('../../../../assets/images/Profile.png')})`,
          
        }}
      >
        <div className={classNames(c.profileCoverBg)}>
          <div className={classNames(c.profileContainer)}>
            <div className={classNames(c.profileName)}>
              {userData?.PersonalInfo?.Name}
            </div>
            <div className={classNames(c.userProfile)}>
              {userData?.PersonalInfo?.Work}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserDetails;
