import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import ReviewCard from "./ReviewCard";
import reviewsData from "../config/reviews"; // Import reviews

const ReviewsCarousel = ({
  reviews = reviewsData,
  fastDuration = 15,
  slowDuration = 60,
}) => {
  const [duration, setDuration] = useState(fastDuration);
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width]);

  return (
    <motion.div
      className="relative w-full h-[250px] overflow-hidden py-8 bg-white"
      onHoverStart={() => {
        setMustFinish(true);
        setDuration(slowDuration);
      }}
      onHoverEnd={() => {
        setMustFinish(true);
        setDuration(fastDuration);
      }}
    >
      <motion.div
        className="absolute left-0 flex gap-6"
        style={{ x: xTranslation }}
        ref={ref}
      >
        {/* Duplicate reviews for infinite scrolling */}
        {[...reviews, ...reviews].map((review, idx) => (
          <ReviewCard review={review} key={idx} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ReviewsCarousel;
