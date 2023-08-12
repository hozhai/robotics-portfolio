import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { Zoom, Slide, Fade, JackInTheBox, Bounce } from "react-awesome-reveal";
import Lottie from "lottie-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { nanoid } from "nanoid";
import LoadingBar from "react-top-loading-bar";

import ParticlesBg from "../components/ParticlesBg";
import scrolldownanim from "../assets/anim/scroll-down.json";

import biographyData from "../data/biographyData";
import factsData from "../data/factsData";

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [fact, setFact] = useState("Loading...");

  useEffect(() => {
    document.title = "Home <Zhai />";
    setProgress(100);
    generateFact()
  }, []);

  const biographyArray = biographyData.map((obj) => (
    <div className="biography--block" key={nanoid()}>
      <ReactMarkdown children={obj.content} remarkPlugins={[remarkGfm]} />
    </div>
  ));

  function generateFact() {
    let randomNum = Math.floor(Math.random() * (factsData.length - 1));
    setFact(factsData[randomNum]);
  }

  return (
    <>
      <LoadingBar
        color="#61c192"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <main>
        <h1 className="title main--title">
          <Zoom delay={400} duration={1500} triggerOnce={true}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.pauseFor(500).typeString("Hello World").start();
              }}
              options={{
                cursor: "_",
              }}
            />
          </Zoom>
          <Zoom delay={800} triggerOnce={true}>
            <h2>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.pauseFor(1000).typeString("I'm Zhai").start();
                }}
                options={{
                  cursor: "_",
                }}
              />
            </h2>
          </Zoom>
        </h1>
        <div className="main--sdanim">
          <Zoom delay={3000} triggerOnce={true}>
            <Lottie
              animationData={scrolldownanim}
              loop={true}
              style={{ height: "150px", width: "150px" }}
            />
          </Zoom>
        </div>
        <ParticlesBg />
      </main>
      <section className="biography">
        <div className="title biography--title">
          <Slide delay={100} triggerOnce={true}>
            <h2>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(500)
                    .typeString("Who the hell am I?")
                    .pauseFor(1000)
                    .deleteChars(8)
                    .typeString("ck am I?")
                    .pauseFor(1000)
                    .deleteChars(10)
                    .typeString("devils am I?")
                    .pauseFor(1000)
                    .deleteChars(16)
                    .typeString("on Earth am I?")
                    .pauseFor(1000)
                    .deleteChars(14)
                    .typeString("in the world am I?")
                    .pauseFor(1000)
                    .deleteChars(15)
                    .typeString("tarnation am I?")
                    .pauseFor(1000)
                    .deleteChars(18)
                    .typeString("the fu-")
                    .pauseFor(50)
                    .deleteAll()
                    .start();
                }}
                options={{
                  cursor: "_",
                  loop: true,
                }}
              />
            </h2>
          </Slide>
        </div>
        <Fade delay={500} triggerOnce={true}>
          <div className="text biography--body">{biographyArray}</div>
        </Fade>
      </section>
      <section className="rfg">
        <div className="title rfg--title">
          <JackInTheBox delay={500} triggerOnce={true}>
            <h2>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(500)
                    .typeString("The RFG")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("The Random Facts Generator")
                    .pauseFor(1000)
                    .start();
                }}
                options={{
                  cursor: "_",
                  loop: true,
                }}
              />
            </h2>
          </JackInTheBox>
        </div>
        <div className="rfg--fact text">
          <ReactMarkdown children={`"${fact}"`} remarkPlugins={[remarkGfm]} />
        </div>
        <div className="rfg--btn-container">
          <Bounce delay={300} triggerOnce={true}>
            <div className="rfg--btn" onClick={generateFact}>
              &gt; Generate
            </div>
          </Bounce>
        </div>
      </section>
    </>
  );
}
