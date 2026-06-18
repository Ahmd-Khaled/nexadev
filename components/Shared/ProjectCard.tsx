"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ArrowUpLeft } from "lucide-react";
import WebsitePreview from "../Shared/WebsitePreview";

type Project = {
  title: string;
  titleAr?: string;
  desc: string;
  descAr?: string;
  img: string;
  url?: string;
};

type Props = {
  project: Project;
  activeCategory: string;
  isAr: boolean;
  index?: number;
};

export default function ProjectCard({
  project,
  activeCategory,
  isAr,
  index = 0,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
    >
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111]">
        {/* Browser Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          <h3 className="rounded-full bg-amber-500/10 px-2 py-1 text-sm font-semibold capitalize text-amber-400">
            {activeCategory}
          </h3>
        </div>

        <WebsitePreview src={project.img} alt={project.title} />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">
              {isAr ? project.titleAr : project.title}
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              {isAr ? project.descAr : project.desc}
            </p>
          </div>

          {project.url && (
            <Link href={project.url} target="_blank" rel="noopener noreferrer">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 8 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400 transition-all duration-300 hover:border-amber-400 hover:bg-amber-500/20 hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]"
              >
                {isAr ? <ArrowUpLeft size={20} /> : <ArrowUpRight size={20} />}
              </motion.div>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
