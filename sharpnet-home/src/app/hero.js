"use client"

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
export const ImageTrailHero = () => {
  return (
    
      <section className="h-screen bg-slate-200">
        <Copy />
        <WatermarkWrapper />
      </section>
  );
};


const Copy = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-[999999]">
      <div className="mx-auto flex max-w-7xl items-end justify-between p-4 md:p-8">
        <div>
          <h1 className="mb-6 max-w-4xl text-6xl font-black leading-[1.1] text-[#000035] md:text-8xl">
          LET YOUR PRESENCE <br />  <span className="text-[#AA0000]">BE KNOWN</span>
          </h1>
          <p className="max-w-xl text-black md:text-lg">
          We help businesses generate sales through their websites. Don’t let your voice, product, and content get lost in the cacophony of the internet. With SharpNet’s comprehensive marketing services, we’ll help you target your preferred audience and rise above the rest of the competition. The internet can be a loud place, but we can help lift out your own unique voice.
          </p>
        </div>
        <Image 
        src={'/SharpNET-Upside-down.png'}
        width={'75'}
        height={'75'}
        alt="hi"
    />
      </div>
    </div>
  );
};

const WatermarkWrapper = () => {
  return (
    <>
      <Watermark text="SharpNet Solution" />
      <Watermark text="Digital Marketing" reverse />
      <Watermark text="SEO WEB DESIGN PPC" />
      <Watermark text="Build an empire" reverse />
      
    </>
  );
};

const Watermark = ({ reverse, text }) => (
  <div className="flex -translate-y-12 select-none overflow-hidden">
    <TranslateWrapper reverse={reverse}>
      <span className="w-fit whitespace-nowrap text-[20vmax] font-black uppercase leading-[0.75] text-slate-300">
        {text}
      </span>
    </TranslateWrapper>
    <TranslateWrapper reverse={reverse}>
      <span className="ml-48 w-fit whitespace-nowrap text-[20vmax] font-black uppercase leading-[0.75] text-slate-300">
        {text}
      </span>
    </TranslateWrapper>
  </div>
);

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
      className="flex"
    >
      {children}
    </motion.div>
  );
};
