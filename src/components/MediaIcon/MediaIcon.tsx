import { motion } from "framer-motion";

interface Props {
  scale?: number;
  href?: string;
  className?: string;
}

const MediaIcon = ({ scale, className, href }: Props) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <motion.i
        whileHover={{ scale: scale || 1.3 }}
        style={{ marginRight: "20px", textDecoration: "none", color: "black" }}
        className={className}></motion.i>
    </a>
  );
};

export default MediaIcon;
