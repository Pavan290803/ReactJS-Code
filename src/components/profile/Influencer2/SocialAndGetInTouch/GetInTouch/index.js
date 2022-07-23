import classNames from "classnames";
import c from "../../Influencer2.module.scss";
// import TopSocial from "../TopSocial";

const GetInTouch = ({userData}) => {
  return (
    <>
    <div className={classNames(c.getInTouch)}>
      <div className={classNames(c.text1)}>Get in Touch</div>
      <div className={classNames(c.text2)}>Request a call back</div>
    </div>
     {/* <TopSocial socialLinks={userData?.SocialLinks}/> */}
     </>
    
  );
};
export default GetInTouch;
