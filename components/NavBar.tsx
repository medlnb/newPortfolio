"use client";
import { MdOutlineEmail } from "react-icons/md";
import { TbFileDescription } from "react-icons/tb";
import { motion } from "framer-motion";
import { LuBriefcaseBusiness } from "react-icons/lu";
import Link from "next/link";
import { FiHome } from "react-icons/fi";

export default function NavBar() {
  const links = [
    {
      link: "/",
      icon: <FiHome />,
      isNav: true,
    },
    {
      link: "mailto:mohamedlanabi0@gmail.com",
      icon: <MdOutlineEmail />,
    },
    {
      link: "https://www.figma.com/file/kM6G8u4jp614eaqWovQ3wS/Resume-(Copy)?type=design&node-id=0%3A1&mode=design&t=0YMghWM1ZyDr2ykN-1",
      icon: <TbFileDescription />,
    },
    {
      link: "/projects",
      icon: <LuBriefcaseBusiness />,
      isNav: true,
    },
  ];

  // Order: 2nd -> 4th -> 3rd -> 1st
  const delays = [0.6, 0, 0.4, 0.2];

  return (
    <div className="absolute top-5 lg:top-8 left-1/2 -translate-x-1/2 p-3 px-5 bg-[#1c1a19] flex gap-6 rounded-xl">
      {links.map((ele, index) => (
        <motion.div
          key={ele.link}
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
          <Link href={ele.link} target={ele.isNav ? "_self" : "_blank"}>
            {ele.icon}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
