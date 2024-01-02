import "./scroll.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ScrollAnimation = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(0, 225, 225)", "rgb(0, 225, 225)"]
  );

  return (
    <div className="box">
      <motion.div
        style={{ transformOrigin: "left", scaleX, backgroundColor }}
        className="scrollbar"
      />
    </div>
  );
};

export default ScrollAnimation;
