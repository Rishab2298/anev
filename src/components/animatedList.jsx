import { motion } from "framer-motion";

const AnimatedList = () => {
    const listItemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.05 }
        })
    };

    return (
        <ul className="flex justify-center gap-5 list-none p-0 m-0">
            {[...Array(4)].map((_, i) => (
                <motion.li
                    key={i}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={listItemVariants}
                    className="w-12 h-12 bg-cyan-400 rounded-lg"
                />
            ))}
        </ul>
    );
};

export default AnimatedList;