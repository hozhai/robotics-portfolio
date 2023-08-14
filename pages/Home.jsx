import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import {
  Zoom,
  Slide,
  Fade,
  JackInTheBox,
  Bounce,
  Roll,
} from "react-awesome-reveal";
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
    document.title = "<Home /> | Zhai";
    setProgress(100);
    generateFact();
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
        style={{ height: "5px" }}
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
              <span className="biography--bu-title">Who am I?<span className="biography--fake-cursor">_</span></span>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
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
          <Fade delay={700} triggerOnce={true}>
            <ReactMarkdown children={`"${fact}"`} remarkPlugins={[remarkGfm]} />
          </Fade>
        </div>
        <div className="rfg--btn-container">
          <Bounce delay={300} triggerOnce={true}>
            <div className="rfg--btn" onClick={generateFact}>
              &gt; Generate
            </div>
          </Bounce>
        </div>
      </section>
      <section className="blogs">
        <div className="blogs--title title">
          <Roll delay={400} triggerOnce={true}>
            <h2>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Latest Blogs")
                    .pauseFor(1000)
                    .deleteChars(5)
                    .typeString("Posts")
                    .pauseFor(1000)
                    .deleteChars(5)
                    .typeString("Uploads")
                    .pauseFor(1000)
                    .deleteChars(7)
                    .typeString("News")
                    .pauseFor(1000)
                    .deleteChars(4)
                    .typeString("Journals")
                    .pauseFor(1000)
                    .start();
                }}
                options={{
                  cursor: "_",
                  loop: true,
                }}
              />
            </h2>
          </Roll>
        </div>
        <Zoom delay={600} triggerOnce={true}>
          <div className="blogs--container">
            <div className="blog--box">
              <div className="blog--img">
                <img
                  src="https://place-hold.it/304x171"
                  width={304}
                  height={171}
                />
              </div>
              <div className="blog--content">
                <div className="blog--name title">This is a blog post!</div>
                <div className="blog--description text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                  unde distinctio ex quaerat odit laborum tempore fugit ea a rem
                  itaque at eaque voluptatum blanditiis facilis pariatur, neque
                  aliquam. Quasi?
                </div>
              </div>
            </div>
            <div className="blog--box">
              <div className="blog--img">
                <img
                  src="https://place-hold.it/304x171"
                  width={304}
                  height={171}
                />
              </div>
              <div className="blog--content">
                <div className="blog--name title">This is a blog post!</div>
                <div className="blog--description text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam doloribus repellendus, corrupti praesentium dolore
                  corporis autem sequi et commodi, excepturi doloremque, harum
                  itaque saepe vero eius deserunt cumque! Quod, porro!
                </div>
              </div>
            </div>

            <div
              className="blogs--btn"
              onClick={() =>
                alert("Not Implemented Yet ;( \nI'm working on it though.")
              }
            >
              &gt; View More
            </div>
          </div>
        </Zoom>
      </section>
    </>
  );
}
