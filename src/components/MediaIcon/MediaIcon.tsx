import { motion } from "framer-motion";

interface Props {
  scale?: number;
  href?: string;
  className?: string;
}

const DEFAULT_SCALE = 1.3;

export function MediaIcon({ scale = DEFAULT_SCALE, className, href }: Props) {
  // TODO: extract to scss and merge with props

  return (
    <a href={href} target="_blank" rel="noreferrer">
      <motion.i
        whileHover={{ scale }}
        style={{ marginRight: "20px", textDecoration: "none", color: "black" }}
        className={className}
      />
    </a>
  );
}
