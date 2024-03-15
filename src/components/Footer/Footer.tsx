import { motion } from "framer-motion";
import { MediaIcon } from "../MediaIcon/MediaIcon";

import classes from "./Footer.module.scss";

export function Footer() {
  return (
    <motion.div className={classes.footerContainer}>
      <div className={classes.footerInfo}>
        <motion.div className={classes.mediaIcons}>
          <MediaIcon className="fa-brands fa-facebook" href="https://www.facebook.com/mbrdej.art" />
          <MediaIcon className="fa-brands fa-instagram" href="https://www.instagram.com/mbrdej.art" />
          <MediaIcon
            className="fa-brands fa-etsy"
            href="https://www.etsy.com/pl/shop/mbrdejart?ref=seller-platform-mcnav"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
