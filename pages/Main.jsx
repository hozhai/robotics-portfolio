import React, { useCallback } from "react";
import Typewriter from "typewriter-effect";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Fade } from "react-awesome-reveal";

export default function Main() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log('Loaded');
  }, []);

  return (
    <main>
      <h1 className="title main--title">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.pauseFor(500).typeString("Hello World").start();
          }}
          options={{
            cursor: "_",
          }}
        />
        <h2>
          {" "}
          <Typewriter
            onInit={(typewriter) => {
              typewriter.pauseFor(1000).typeString("I'm Zhai").start();
            }}
            options={{
              cursor: "_",
            }}
          />
        </h2>
      </h1>
      <Particles
        id="main--bg"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          style: {
            position: "relative",
            height: "95vh",
          },
          background: {
            color: {
              value: "#212121",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: false,
            },
            modes: {
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 150,
                duration: 0.9,
              },
            },
          },
          particles: {
            color: {
              value: "#739541",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "triangle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </main>
  );
}
