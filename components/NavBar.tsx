"use client";

import { useMemo } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { TbFileDescription } from "react-icons/tb";
import { motion } from "framer-motion";

export default function NavBar() {
  const links = [
    {
      link: "mailto:mohamedlanabi0@gmail.com",
      icon: <MdOutlineEmail />,
    },
    {
      link: "https://www.figma.com/file/kM6G8u4jp614eaqWovQ3wS/Resume-(Copy)?type=design&node-id=0%3A1&mode=design&t=0YMghWM1ZyDr2ykN-1",
      icon: <TbFileDescription />,
    },
  ];

  const delays = useMemo(() => {
    const baseDelays = links.map((_, i) => i * 0.2);
    return [...baseDelays].sort(() => Math.random() - 0.5);
  }, []);

  return (
    <div className="absolute top-5 lg:top-8 left-1/2 -translate-x-1/2 p-3 px-5 bg-[#1c1a19] flex gap-6 rounded-xl">
      {links.map((ele, index) => (
        <motion.a
          key={ele.link}
          href={ele.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl"
          initial={{ opacity: 0, y: 10, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.2,
            delay: delays[index],
            ease: "easeOut",
          }}
          whileHover={{ scale: 1.2 }}
        >
          {ele.icon}
        </motion.a>
      ))}
    </div>
  );
}