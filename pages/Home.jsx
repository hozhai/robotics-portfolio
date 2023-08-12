import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { Zoom, Slide, Fade } from "react-awesome-reveal";
import Lottie from "lottie-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { nanoid } from "nanoid";

import ParticlesBg from "../components/ParticlesBg";
import scrolldownanim from "../assets/anim/scroll-down.json";

import biographyData from "../data/biographyData";

export default function Home() {
  useEffect(() => {
    document.title = "Home ﹤﹥ Zhai";
  }, []);

  const biographyArray = biographyData.map((obj) => (
    <div className="biography--block" key={nanoid()}>
      <ReactMarkdown children={obj.content} remarkPlugins={[remarkGfm]} />
    </div>
  ));

  return (
    <>
      <main>
        <h1 className="title main--title">
          <Zoom delay={400}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.pauseFor(500).typeString("Hello World").start();
              }}
              options={{
                cursor: "_",
              }}
            />
          </Zoom>
          <Zoom delay={800}>
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
          <Zoom delay={3000}>
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
          <Slide delay={100}>
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
        <Fade delay={200} triggerOnce={true}>
          <div className="text biography--body">{biographyArray}</div>
        </Fade>
      </section>
    </>
  );
}
