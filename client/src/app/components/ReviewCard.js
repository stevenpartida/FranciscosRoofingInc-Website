import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i - 0.5 === rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-400" />);
      }
    }
    return stars;
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }} // Expands the card
      transition={{ duration: 0.3, ease: "easeOut" }} // Smooth animation
      className="bg-white shadow-lg p-4 rounded-lg w-[300px] h-[180px] flex flex-col justify-between"
    >
      {/* Profile Image and Name */}
      <div className="flex items-center gap-3">
        <Image
          src={review.profile_photo_url}
          alt={review.author_name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <h3 className="font-bold">{review.author_name}</h3>
          <div className="flex">{renderStars(review.rating)}</div>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-600 mt-2">{review.text}</p>
    </motion.div>
  );
};

export default ReviewCard;
