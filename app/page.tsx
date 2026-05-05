"use client";
import Image from "next/image";
import worldMapBg from "@assets/worldMapBg.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaNodeJs, FaPython, FaDocker, FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsLine, RiReactjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { ImArrowUpRight2 } from "react-icons/im";
import { RiOpenaiFill } from "react-icons/ri";
import { SiPostman } from "react-icons/si";
import { SiNuxt } from "react-icons/si";
import { GoCopilot } from "react-icons/go";
import Link from "next/link";
import WorkForm from "@components/WorkForm";

interface Project {
  _id: string;
  title: string;
  description: string;
  utils_data: string[];
  img: string;
  demo?: string;
  repository?: string;
  presentation?: string[];
  createdAt: string;
}

export default function Home() {
  const achievements = [
    {
      key: "YEARS OF EXPERIENCE",
      value: "+2",
    },
    {
      key: "YEARS OF CODING",
      value: "+6",
    },
    {
      key: "PROJECTS COMPLETED",
      value: "+10",
    },
    {
      key: "Curiosity",
      value: "∞",
    },
  ];

  const tools = [
    { label: "Node.js", icon: <FaNodeJs /> },
    { label: "Tailwind", icon: <RiTailwindCssFill /> },
    { label: "Docker", icon: <FaDocker /> },
    { label: "Git", icon: <FaGitAlt /> },
    { label: "Next.js", icon: <RiNextjsLine /> },
    { label: "React", icon: <RiReactjsFill /> },
    { label: "TypeScript", icon: <BiLogoTypescript /> },
    { label: "Python", icon: <FaPython /> },
  ];

  const premiumTools = [
    {
      label: "Docker",
      subtitle: "Containerization Platform",
      icon: <FaDocker />,
    },
    {
      label: "Next.js",
      subtitle: "React Framework",
      icon: <RiNextjsLine />,
    },
    {
      label: "OpenAI",
      subtitle: "AI Assistant",
      icon: <RiOpenaiFill />,
    },
    {
      label: "Postman",
      subtitle: "API Development Tool",
      icon: <SiPostman />,
    },
    {
      label: "Nuxt.js",
      subtitle: "Vue Framework",
      icon: <SiNuxt />,
    },
    {
      label: "Copilot",
      subtitle: "AI Assistant",
      icon: <GoCopilot />,
    },
  ];

  const certificates = [
    {
      title: "bachelor degree in Computer Science",
      description: "University Kasdi Merbah University - Ouargla",
    },
    {
      title: "Master 2 - Artificial intelligence & Data Science",
      description: "University Kasdi Merbah University - Ouargla",
      date: "present",
    },
    {
      title: "the Fundamentals of Deep Learning certification ",
      description: "NVIDIA",
      date: "2024",
    },
    {
      title: "First Prize Programming_Competition",
      description:
        "Secured first prize in the Programming Competition launched by Kasdi Merbah University, demonstrating exemplary coding skills and innovative problem-solving",
      date: "2023",
    },
  ];

  const [projects, setProjects] = useState<Project[]>();
  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("/api/project?limit=4");
      if (!res.ok) return;

      const data = await res.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:text-start text-center"
      >
        <div className="max-w-[35rem] lg:mx-0 mx-auto md:text-start text-center">
          <h1 className="text-5xl md:text-8xl font-bold">
            SOFTWARE <span className="text-gray-700">ENGINEER</span>
          </h1>
          <h4 className="text-sm md:text-base text-gray-500 mt-4 font-semibold">
            Passionate about creating intuitive and engaging user experiences.
            Specialize in transforming ideas into beautifully crafted products.
          </h4>
        </div>

        <div className="flex md:justify-start flex-wrap justify-center gap-4 pt-18">
          {achievements.map((ele) => (
            <div key={ele.key} className="max-w-32">
              <h1 className="text-5xl md:text-6xl font-semibold">
                {ele.value}
              </h1>
              <h3 className="text-gray-500">{ele.key}</h3>
            </div>
          ))}
        </div>
      </motion.section>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4 py-10 pb-30">
        <motion.section
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl col-span-2 row-span-2 bg-gray-800 py-4 border border-white/10"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 right-0 h-40 w-40 bg-gradient-to-tl from-green-500/20 via-green-400/10 to-transparent blur-2xl" />
          </div>
          <h3 className="text-2xl pb-2 px-4">About me</h3>

          <p className="text-gray-400 pb-4 px-4">
            Hello! I am Lanabi Mohamed, a versatile full stack developer
            proficient in front-end and back-end technologies, delivering
            scalable web applications with expertise in JavaScript/TypeScript,
            Python, React, Vue and JavaFx.
          </p>

          <div className="relative py-1">
            <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />
            <motion.div
              className="flex gap-8 w-max"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
            >
              {[...tools, ...tools].map((ele, i) => (
                <div key={i} className="flex gap-2 items-center">
                  {ele.icon}
                  <p>{ele.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <div className="hidden md:block" />

        <motion.section
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl col-span-2 md:col-span-1 h-40 md:h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] via-[rgba(24,24,27,0.7)] to-transparent" />
          <Image
            src={worldMapBg}
            alt="world Map Bg"
            height={200}
            className="w-full"
          />
          <div
            className="absolute inset-y-0 left-0 bg-red-500 animate-scan"
            style={{ width: "1px" }}
          />
          <div className="absolute bottom-0 w-full p-2">
            <h1 className="font-semibold text-lg leading-tight">Algeria</h1>
            <p className="text-sm text-gray-300 leading-tight">
              36.740824° N, 3.086464° E
            </p>
            <h4 className="text-orange-500 text-sm">
              <span className="text-red-700">-</span> GMT +1
            </h4>
          </div>
        </motion.section>
      </div>

      <motion.section
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:text-start text-center"
      >
        <div className="max-w-[35rem] lg:mx-0 mx-auto md:text-start text-center mb-6">
          <h1 className="text-5xl md:text-8xl font-bold">
            RECENT <span className="text-gray-700">PROJECTS</span>
          </h1>
        </div>

        <div>
          {!projects ? (
            <div className="group relative flex cursor-pointer items-center gap-4 rounded-2xl lg:p-5 py-3 transition-colors duration-300 hover:bg-gray-900">
              <div className="w-20 lg:w-30 overflow-hidden rounded-md bg-red-400 px-0.5 pt-2">
                <div className="h-16 lg:h-24 loading--background" />
              </div>

              <div className="flex-1 text-start">
                <div className="h-5 w-20 loading--background rounded-lg mb-3" />
                <div className="h-4 w-40 loading--background rounded-lg" />
              </div>
            </div>
          ) : (
            projects.map((ele) => (
              <Link
                key={ele._id}
                className="group relative flex cursor-pointer items-center gap-4 rounded-2xl lg:p-5 py-3 transition-colors duration-300 hover:bg-gray-900"
                href={ele.demo ?? "#"}
                target="_blank"
              >
                <div className="w-20 lg:w-30 overflow-hidden rounded-md bg-red-400 px-0.5 pt-2">
                  <Image
                    src={`/api/image/${ele.img}`}
                    alt={ele.title}
                    width={200}
                    height={200}
                    loading="eager"
                    className="w-full rounded-t-sm h-16 lg:h-24"
                  />
                </div>

                <div className="flex-1 text-start">
                  <h3 className="text-lg md:text-2xl font-bold">{ele.title}</h3>
                  <h4 className="text-xs md:text-sm text-gray-400">
                    {ele.utils_data.join(", ")}
                  </h4>
                </div>

                {ele.demo && (
                  <ImArrowUpRight2 className="text-sm md:text-lg absolute top-5 right-5 text-red-500 transition-all duration-300 group-hover:top-2 group-hover:right-2" />
                )}
              </Link>
            ))
          )}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:text-start text-center py-30"
      >
        <div className="max-w-[35rem] lg:mx-0 mx-auto md:text-start text-center mb-6">
          <h1 className="text-5xl md:text-8xl font-bold">
            PREMIUM <span className="text-gray-700">TOOLS</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2">
          {premiumTools.map((ele) => (
            <div
              key={ele.label}
              className="flex cursor-pointer items-center gap-4 rounded-2xl lg:p-5 py-3 transition-colors duration-200 hover:bg-gray-900"
            >
              <div className="w-14 h-14 overflow-hidden rounded-md bg-white p-3 text-black text-3xl flex items-center justify-center">
                {ele.icon}
              </div>

              <div className="text-start">
                <h3 className="text-2xl font-bold">{ele.label}</h3>
                <h4 className="text-sm text-gray-400">{ele.subtitle}</h4>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:text-start text-center"
      >
        <div className="max-w-[35rem] lg:mx-0 mx-auto md:text-start text-center mb-6">
          <h1 className="text-5xl md:text-8xl font-bold">
            CERTIFICATES <span className="text-gray-700">REWARDS</span>
          </h1>
        </div>

        <div>
          {certificates.map((ele) => (
            <div
              key={ele.title}
              className="text-start relative cursor-pointer rounded-2xl lg:p-5 py-3 transition-colors duration-300 hover:bg-gray-900"
            >
              <h3 className="text-lg md:text-2xl font-bold">{ele.title}</h3>
              <h4 className="text-xs md:text-base text-gray-400 py-2">
                {ele.description}
              </h4>
              <h4 className="text-sm md:text-base text-gray-400 pt-2">
                {ele.date}
              </h4>
            </div>
          ))}
        </div>
      </motion.section>

      <WorkForm />
    </div>
  );
}
