import React from "react";
import classNames from "classnames";
import c from "../comic.module.scss";
import { ComicBioIcon } from "../../../shared/svg";

const Bio = ({bio}) => {
  return (
    <div className={classNames(c.boxDesContainer)}>
      <div className={classNames(c.boxDesContainerBack)}></div>
      <div className={classNames(c.boxDesContainerFront, c.font14)}>
        <div className={classNames(c.BioIconTop)}>
          <ComicBioIcon />
        </div>
        {bio}
        <div className={classNames(c.BioIconBottom)}>
          <ComicBioIcon />
        </div>
      </div>
    </div>
  );
};
export default Bio;
