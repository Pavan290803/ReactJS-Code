import classNames from "classnames";
import { AppIcon } from "../svg";
import c from "./footer.module.scss";
export const Footer = ({
  footerIcon,
  classToOverride,
  classToOverrideText,
  ...props
}) => {
  return (
    <div className={classNames(c.footer, classToOverride)}>
      <a href="https://caard.club" target="_blank">
        {props?.children ? props?.children : <AppIcon />}
      </a>
      <center>
        <div
          target="_blank"
          href="https://caard.club"
          className={classNames(c.text, classToOverrideText)}
        >
          {"Powered by Caard"}
          {/* {props?.footerText || "Powered by Caard"} */}
        </div>
      </center>
    </div>
  );
};
