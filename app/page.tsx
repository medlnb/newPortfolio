"use client";
import Image from "next/image";
import SelfCard from "@/components/SelfCard";
import worldMapBg from "@assets/worldMapBg.png";
import fakeImg from "@assets/fakeImg.png";
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

const fakeDataProjects: Project[] = [
  {
    "_id":"66faa1551dba2deb68c8917b",
    "title":"Teach",
    "description":"Developed an educational platform enabling teachers to post subject-specific classes and conduct online meetings. Students can subscribe monthly for access to lessons and live sessions.",
    "utils_data":["Next js",
    "Tailwind",
    "Mongodb",
    "I18n"],
    "img":"https://ibb.co/vd4rW6R",
    "demo":"https://teach-five.vercel.app/en",
    "presentation":["Responsible for any device",
    "Invest in your education!",
    "Get your support lessons at Home"],
    "createdAt":"2024-09-30T13:02:13.886Z", 
  },
  {
    "_id":"663542174d6ed34f1b88e71e",
    "title":"AI Nexus Club",
    "description":"AI Nexus is a student club dedicated to explore the fascinating world of artificial intelligence.",
    "utils_data":["Next js",
    "Tailwind",
    "Mongodb"],
    "img":"https://i.ibb.co/fX86hDv/Screenshot-from-2024-05-03-20-54-02.png",
    "demo":"https://ai-nexus-club.vercel.app/",
    "repository":"https://github.com/medlnb",
    "presentation":["Responsible for any device",
    "Join us and be part of the AI revolution!",
    "Check out event and be part of it"],
    "createdAt":"2024-05-03T19:59:19.646Z", 
  },
  {
    "_id":"662fbe5339d157346f042486",
    "title":"El-Semsar",
    "description":"El-Semsar is An online platform where you can rent any property of your own, and manage the requests and resarvations",
    "utils_data":["Next js",
    "Tailwind",
    "Mongodb"],
    "img":"https://i.ibb.co/mH36qjY/Screenshot-from-2024-04-29-16-31-16.png",
    "demo":"https://host-it-mu.vercel.app/",
    "repository":"https://github.com/medlnb",
    "presentation":["Easy to manage your place resarvations",
    "Responsible for any device",
    "Many options to filter your feed"],
    "createdAt":"2024-04-29T15:35:47.931Z", 
  },
  {
    "_id":"65f0d3ce32341221157bbcee",
    "title":"Shopping",
    "description":"Responsive e-commerce platform with an intuitive user experience. Includes a comprehensive admin panel for managing products, orders, and more. Features built-in translation support for a seamless multilingual experience. Designed for simplicity and efficiency, ensuring easy navigation for both customers and administrators.",
    "utils_data":["React",
    "HTML",
    "TypeScript",
    "TailWind",
    "i18n"],
    "img":"https://i.ibb.co/dwczjJx0/Screenshot-from-2025-03-18-21-15-01.png",
    "demo":"https://shopping-hamma.vercel.app/en",
    "presentation":["modern online store",
    "Translation en/fr",
    "Admin Dashboard",
    "Next js , ts , TailWind, Mongodb, i18n"],
    "createdAt":"2024-04-12T22:14:38.226Z", 
  },
  {
    "_id":"65f0d58d32341221157bbcfc",
    "title":"Student's Space",
    "description":"Student's space is a platform designed for teachers to easily manage their classrooms, as well as handle student attendance and participation.",
    "utils_data":["React",
    "TypeScript",
    "Mongodb"],
    "img":"https://i.ibb.co/mh6fm74/Screenshot-from-2024-02-04-12-31-06.png",
    "demo":"https://s-s-s.vercel.app",
    "repository":"https://github.com/medlnb",
    "presentation":["Better Than moodle",
    "Very easy to use",
    "Be always updated with Ur class"],
    "createdAt":"2024-03-12T22:22:05.677Z", 
  },
  {
    "_id":"65f0d55032341221157bbcfa",
    "title":"Eisenhower Matrix",
    "description":"An online tasks/notes manager with also a Eisenhower matrix tasks system than allow you to set the priority of your tasks.",
    "utils_data":["React",
    "HTML",
    "JavaScript",
    "Css",
    "Mongodb"],
    "img":"https://i.ibb.co/ckXrkVp/Screenshot-from-2024-11-22-19-11-54.png",
    "demo":"https://eisenhower--matrix.vercel.app/",
    "repository":"https://github.com/medlnb/Eisenhower-Matrix",
    "presentation":["Make sure u take a deep look",
    "Responsive for any device",
    "React , js , Css, Mongodb"],
    "createdAt":"2024-03-12T22:21:04.322Z", 
  },
  {
    "_id":"65f0d4f632341221157bbcf8",
    "title":"My Portfolio",
    "description":"My personal portfolio project is a sleek and responsive website that highlights my skills and achievements as a front end developer, providing a visually appealing showcase of my work.",
    "utils_data":["Next",
    "TypeScript",
    "Css",
    "TailWind",
    "Mongodb"],
    "img":"https://i.ibb.co/D7ZmQ96/Screenshot-from-2023-07-26-14-54-37.png",
    "repository":"https://github.com/medlnb",
    "presentation":["Make sure u take a deep look",
    "Responsive for any device",
    "React , js , Css, Mongodb",
    "Animation"],
    "createdAt":"2024-03-12T22:19:34.652Z", 
  },
  {
    "_id":"65f0d44132341221157bbcf4",
    "title":"Todo list mobile",
    "description":"Introducing our efficient online task management platform: Streamline your productivity with our user-friendly todo list website. Seamlessly organize, prioritize, and collaborate on tasks. Elevate your efficiency today!",
    "utils_data":["React",
    "HTML",
    "JavaScript",
    "Css",
    "Mongodb"],
    "img":"https://i.ibb.co/4TkM8TM/Screenshot-from-2023-07-26-14-56-24.png",
    "demo":"https://todo-list-0.vercel.app",
    "repository":"https://github.com/medlnb",
    "presentation":["Access ur notes from anywhere",
    "very easy to use",
    "React , js , Css, Mongodb"],
    "createdAt":"2024-03-12T22:16:33.331Z", 
  },
  {
    "_id":"65f0d37b32341221157bbcec",
    "title":"Restaurent Menu",
    "description":"My graduation project Was about digitization of restaurants, Restaurent Menu was the modern menu that works on Android devices.",
    "utils_data":["Android Studio",
    "JavaFX",
    "Xml",
    "Css"],
    "img":"https://i.ibb.co/94qQskp/ds.png",
    "presentation":[],"createdAt":"2024-03-12T22:13:15.459Z", }
]

interface Project {
  _id: string
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
      key:"YEARS OF EXPERIENCE",
      value:"+2"
    },
    {
      key:"YEARS OF CODING",
      value:"+6"
    },
    {
      key:"PROJECTS COMPLETED",
      value:"+10"
    },
    {
      key:"Curiosity",
      value:"∞"
    },
    
  ]

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

  const [projects, setProjects] = useState<Project[]>([])
  useEffect(()=>{
    const fetchProjects = async () => {
      const res = await fetch("/api/project?limit=4")
      if(!res.ok) return
      
      const data = await res.json()
      setProjects(data)
    }
    // fetchProjects()
    setProjects(fakeDataProjects.slice(0,4))
  },[])

  return (
    <main className="lg:flex items-start gap-20 pt-0 md:pt-30">
      <aside className="lg:sticky relative top-20 self-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SelfCard />
        </motion.div>
      </aside>

      <div className="flex-1 mt-26 lg:mt-0">
        <motion.section
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:text-start text-center"
        >
          <div className="max-w-[35rem] lg:mx-0 mx-auto md:text-start text-center" >
            <h1 className="text-5xl md:text-8xl font-bold">
              SOFTWARE <span className="text-gray-700">ENGINEER</span>
            </h1>
            <h4 className="text-sm md:text-base text-gray-500 mt-4 font-semibold">
              Passionate about creating intuitive and engaging user experiences.
              Specialize in transforming ideas into beautifully crafted products.
            </h4>
          </div>

          <div className="flex md:justify-start flex-wrap justify-center gap-4 pt-18">
            {achievements.map(ele=>(
              <div key={ele.key} className="max-w-32">
                <h1 className="text-5xl md:text-6xl font-semibold">{ele.value}</h1>
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
              Hello! I am Lanabi Mohamed, a versatile full stack developer proficient in
              front-end and back-end technologies, delivering scalable web applications
              with expertise in JavaScript/TypeScript, Python, React and JavaFx.
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
                  <div
                    key={i}
                    className="flex gap-2 items-center"
                  >
                    {ele.icon}
                    <p>{ele.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.section>

          <div className="hidden md:block"/>

          <motion.section
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: .6 ,duration: 0.5, ease: "easeOut" }}
            className="relative overflow-hidden rounded-2xl col-span-2 md:col-span-1 h-40 md:h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] via-[rgba(24,24,27,0.7)] to-transparent" />
            <Image src={worldMapBg} alt="world Map Bg" height={200} className="w-full"/>
            <div className="absolute inset-y-0 left-0 bg-red-500 animate-scan" style={{width: "1px"}}/>
            <div className="absolute bottom-0 w-full p-2">
              <h1 className="font-semibold text-lg leading-tight">Algeria</h1>
              <p className="text-sm text-gray-300 leading-tight">36.740824° N, 3.086464° E</p>
              <h4 className="text-orange-500 text-sm"><span className="text-red-700">-</span> GMT +1</h4>
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
            {projects.map((ele) => (
              <div
                key={ele._id}
                className="group relative flex cursor-pointer items-center gap-4 rounded-2xl lg:p-5 py-3 transition-colors duration-300 hover:bg-gray-900"
              >
                <div className="w-20 lg:w-30 overflow-hidden rounded-md bg-red-400 px-0.5 pt-2">
                  <Image
                    src={fakeImg}
                    alt={ele.title}
                    width={200}
                    height={200}
                    className="w-full rounded-t-sm"
                  />
                </div>

                <div className="flex-1 text-start">
                  <h3 className="text-2xl font-bold">{ele.title}</h3>
                  <h4 className="text-sm text-gray-400">
                    {ele.utils_data.join(", ")}
                  </h4>
                </div>

                <ImArrowUpRight2 className="absolute top-5 right-5 text-red-500 transition-all duration-300 group-hover:top-2 group-hover:right-2" />
              </div>
            ))}
          </div>
   
        </motion.section>        

        
        <motion.section
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:text-start text-center pt-30"
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
      </div>
    </main>
  );
}
