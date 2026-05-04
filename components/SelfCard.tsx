"use client"
import Image from "next/image";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import selfPic from "@assets/selfpic.png";
import hang from "@assets/svg/hang.svg";
import flame from "@assets/svg/flame.svg";
import { motion } from "framer-motion";

export default function SelfCard() {
  const socials = [
    {
      link: "https://www.instagram.com/thewintersoldier070/",
      icon: <FaInstagram />,
      label: "Instagram",
    },
    {
      link: "https://github.com/medlnb",
      icon: <FaGithub />,
      label: "GitHub",
    },
    {
      link: "https://www.linkedin.com/in/mohamed-lanabi-5a977327b/",
      icon: <FaLinkedin />,
      label: "LinkedIn",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-white p-8 lg:max-w-84">
        <Image src={hang} alt="Logo" width={194} className="absolute -top-8 right-1/2" />
        <Image src={flame} alt="Logo" width={250} className="absolute bottom-22 md:bottom-32 -left-30" />

        <Image
          src={selfPic}
          width={200}
          alt="Profile picture"
          className="mx-auto h-50 rounded-2xl bg-red-700 object-cover"
        />

        <h2 className="pt-4 text-center text-3xl font-bold text-black">
          Lanabi Mohamed
        </h2>

        <h3 className="pt-4 text-center text-xl font-bold text-gray-500 md:pt-20">
          A Software Engineer who has developed countless innovative solutions.
        </h3>

        <div className="flex justify-center gap-4 pt-6">
          {socials.map((ele) => (
            <a
              key={ele.label}
              href={ele.link}
              target={ele.link.startsWith("http") ? "_blank" : undefined}
              rel={ele.link.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={ele.label}
              className="rounded-full p-2 text-xl text-gray-700 transition hover:bg-pink-100 hover:text-pink-600"
            >
              {ele.icon}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}