
import { motion } from "framer-motion";

const PizzaLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <motion.div
        className="relative w-24 h-24"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      >
        {/* Пицца */}
        <div className="absolute w-full h-full rounded-full bg-yellow-400 border-4 border-brown-700" />
        {/* Куски начинки */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-red-500 rounded-full"
            style={{
              top: `${50 + 35 * Math.sin((i * Math.PI) / 3)}%`,
              left: `${50 + 35 * Math.cos((i * Math.PI) / 3)}%`,
              transform: "translate(-50%, -50%)",
            }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.2 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default PizzaLoader;
