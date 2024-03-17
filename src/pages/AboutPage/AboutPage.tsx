import { motion } from "framer-motion";
// import { SECTION1, SECTION2, SECTION3, SECTION4, SECTION5 } from "./content";

const easeing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easeing,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.5,
      ease: easeing,
    },
  },
};

export function AboutPage() {
  return (
    <motion.div initial="initial" animate="animate">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: easeing }}
      >
        <motion.p variants={fadeInUp}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, doloremque natus vero facere et,
          exercitationem voluptatem quibusdam maiores quaerat est, nisi earum maxime quisquam dolores sint animi libero
          ipsam quas!
        </motion.p>

        <motion.img
          // src={process.env.PUBLIC_URL + "/images/bg.png"}
          alt="bg"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        />
      </motion.div>
    </motion.div>
  );
}
