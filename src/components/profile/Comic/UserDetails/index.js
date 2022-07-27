import React from "react";
import classNames from "classnames";
import c from "../comic.module.scss";
import CustomModal from "../../../shared/CustomModal";

const UserDetails = ({personalInfo, ...props }) => {
  const [open, setOpen] = React.useState(false);
  const [imgUrl, setImgUrl] = React.useState("");

  const handleFullImage = (img) => {
      setImgUrl(img);
      setOpen(true);
  }

  const handleModalClose = () => {
      setImgUrl("");
      setOpen(false);
  }
  return (
    <React.Fragment>
      <div className="ms-5 d-flex align-items-center">
        <div className={classNames(c.boxProfileContainer)}>
          <div className={classNames(c.boxProfileContainerBack)}></div>
          <div
            className={classNames(c.boxProfileContainerFront)}
            style={{
              backgroundImage: `url(${personalInfo?.ImageLocation ? `data:image/png;base64,${personalInfo?.ImageLocation}` : require('../../../../assets/images/Profile.png')})`,
            }}
            onClick={() => {personalInfo?.ImageLocation && handleFullImage(`data:image/png;base64,${personalInfo?.ImageLocation}`)}}
          ></div>
        </div>

        <div className="ms-4">
          <div className={classNames(c.profileName)}>{personalInfo.Name}</div>
          <div className={classNames(c.profileDesignation)}>{personalInfo.Work}</div>
        </div>
      </div>
      <CustomModal handleModalClose={handleModalClose} imgUrl={imgUrl} open={open}/>
    </React.Fragment>
  );
};
export default UserDetails;
