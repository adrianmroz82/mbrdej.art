import { motion } from "framer-motion";
import useCustomCursor from "../../utils/useCustomCursor";
import { SECTION1, SECTION2, SECTION3, SECTION4, SECTION5 } from "./content";
import "./styles.scss";

const text = "about me";

const letterVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

let easeing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

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

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const btnGroup = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.6, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing,
    },
  },
};

const header = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.05, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    // animation: {
    //   duration: 0.6,
    //   ease: easeing,
    // },
  },
};
// const stagger = {
//   animate: {
//     transition: {
//       delayChildren: 0.4,
//       staggerChildren: 0.2,
//       staggerDirection: 1,
//     },
//   },
// };

const name = ["L", "o", "r", "e", "m", " ", "I", "p", "s", "u", "m"];
const sentence = ["D", "o", "l", "o", "r", " ", "s", "i", "t", " ", "a", "m", "e", "t"];

const AboutMe = () => {
  return (
    <motion.div initial="initial" animate="animate">
      <motion.div
        className="content_wrapper"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: easeing }}
      >
        <div className="left_content_wrapper">
          <motion.h2>
            <motion.span variants={firstName} initial="initial" animate="animate" className="first">
              {name.map((l, index) => (
                <motion.span key={index} variants={letter}>
                  {l === " " ? "\u00A0" : l}
                </motion.span>
              ))}
            </motion.span>
            <motion.span variants={lastName} initial="initial" animate="animate" className="last">
              {sentence.map((s, index) => (
                <motion.span key={index} variants={letter}>
                  {s === " " ? "\u00A0" : s}
                </motion.span>
              ))}
            </motion.span>
          </motion.h2>

          <motion.p variants={fadeInUp}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, doloremque natus vero facere et,
            exercitationem voluptatem quibusdam maiores quaerat est, nisi earum maxime quisquam dolores sint animi
            libero ipsam quas!
          </motion.p>
        </div>

        <motion.div className="right_content_wrapper">
          {/* <motion.img src={process.env.PUBLIC_URL + '/images/bg.png'} alt="bg" initial={{x:200, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:.5, delay:0.8}}/> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
