import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
import emoji from "remark-emoji";
import { nanoid } from "nanoid";
import LoadingBar from "react-top-loading-bar";
import humanizeDuration from "humanize-duration";

import ParticlesBg from "../components/ParticlesBg";
import scrolldownanim from "../assets/anim/scroll-down.json";

import biographyData from "../data/biographyData";
import factsData from "../data/factsData";

import { ReactComponent as BlogsBtn } from "../assets/svg/blogs.svg";
import { ReactComponent as GithubBtn } from "../assets/svg/github.svg";
import { ReactComponent as InstagramBtn } from "../assets/svg/instagram.svg";
import { ReactComponent as MailBtn } from "../assets/svg/mail.svg";
import { ReactComponent as YouTubeBtn } from "../assets/svg/youtube.svg";

import { ReactComponent as PerformanceIcon } from "../assets/svg/performance.svg";
import { ReactComponent as FancyIcon } from "../assets/svg/fancy.svg";

export default function Home({ data }) {
  const [progress, setProgress] = useState(0);
  const [fact, setFact] = useState("Loading...");
  const [bgState, setBgState] = useState(
    localStorage.getItem("bgState") || true
  );

  const _true = new RegExp("true");

  useEffect(() => {
    document.title = "<Home /> | Zhai";
    setProgress(100);
    generateFact();
    if (!localStorage.getItem("bgState")) {
      localStorage.setItem("bgState", true);
    } else {
      setBgState(_true.test(localStorage.getItem("bgState")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bgState", bgState);
  }, [bgState]);

  const biographyArray = biographyData.map((obj) => (
    <div className="biography--block" key={nanoid()}>
      <ReactMarkdown
        children={obj.content}
        remarkPlugins={[remarkGfm, emoji]}
      />
    </div>
  ));

  const blogsPrev = data
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, 2) // including [0] not including [2]
    .map((obj) => (
      <Link to={`/blogs/${obj.id}`} className="blog--box" key={obj.id}>
        <div className="blog--img">
          <img
            src={
              obj.thumbnail ||
              "https://place-hold.it/304x171/191919/faf9f6/000&text=NotFound"
            }
            width={304}
            height={171}
          />
        </div>
        <div className="blog--content">
          <div className="blog--name title">
            {obj.title || "404 | Not Found"}
          </div>
          <ReactMarkdown
            className="blog--description text"
            children={
              obj.description ||
              "This post might not exist anymore, or an error has occurred."
            }
            remarkPlugins={[remarkGfm, emoji]}
          />
        </div>
        <div className="blog--time">
          {humanizeDuration(Date.now() - obj.createdAt, { largest: 1 })} ago |
          ID: {obj.id}
        </div>
      </Link>
    ));

  function generateFact() {
    let randomNum = Math.floor(Math.random() * factsData.length);
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
        <div className="main--socials">
          <a href="https://github.com/Zhai90" className="main--socials-btn">
            <GithubBtn />
          </a>
          <a
            href="https://www.youtube.com/c/ZhaiGD"
            className="main--socials-btn"
          >
            <YouTubeBtn />
          </a>
          <a
            href="https://www.instagram.com/_zhai07/"
            className="main--socials-btn"
          >
            <InstagramBtn />
          </a>
          <a href="mailto:zhaihongmeng@gmail.com" className="main--socials-btn">
            <MailBtn />
          </a>
          <Link to="/blogs" className="main--socials-btn">
            <BlogsBtn />
          </Link>
        </div>
        <div
          className="main--bg-switch"
          onClick={() => setBgState((prevState) => !prevState)}
        >
          {bgState ? <PerformanceIcon /> : <FancyIcon />}
        </div>
        {bgState ? (
          <ParticlesBg />
        ) : (
          <div
            className="main--bg-backup"
            style={{
              backgroundColor: "#191919",
              width: "100%",
              height: "100vh",
            }}
          ></div>
        )}
      </main>
      <section className="biography">
        <div className="title biography--title">
          <Slide delay={100} triggerOnce={true}>
            <h2>
              <span className="biography--bu-title">
                Who am I?<span className="fake-cursor">_</span>
              </span>
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
            <ReactMarkdown
              children={`"${fact}"`}
              remarkPlugins={[remarkGfm, emoji]}
            />
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
            {blogsPrev}
            <Link to="/blogs" className="blogs--btn">
              &gt; View More
            </Link>
          </div>
        </Zoom>
      </section>
    </>
  );
}
