"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ImArrowUpRight2 } from "react-icons/im";
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

export default function Page() {
  const [projects, setProjects] = useState<Project[]>();
  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("/api/project");
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

      <WorkForm />
    </div>
  );
}
