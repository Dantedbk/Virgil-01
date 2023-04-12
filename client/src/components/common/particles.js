import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        fullScreen: {
          enable: true,
        },
        particles: {
          number: {
            value: 50,
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 400,
            random: {
              enable: true,
              minimumValue: 200,
            },
          },
          move: {
            enable: true,
            speed: 10,
            size: true,
            direction: "top",
            outModes: {
              default: "out",
              top: "destroy",
              bottom: "none",
            },
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            resize: true,
          },
        },
        detectRetina: true,
        themes: [
          {
            name: "light",
            default: {
              value: true,
              mode: "light",
            },
            options: {
              background: {
                color: "#f7f8ef",
              },
              particles: {
                color: {
                  value: ["#81A1C1", "#88C0D0", "#8FBCBB", "#E5E9F0", "#D8DEE9"],
                },
              },
            },
          },
          {
            name: "dark",
            default: {
              value: true,
              mode: "dark",
            },
            options: {
              background: {
                color: "#080710",
              },
              particles: {
                color: {
                  value: ["#3b4252", "#434c5e", "#4c566a", "#5e81ac", "#81a1c1"],
                },
              },
            },
          },
        ],
        emitters: {
          position: {
            x: 50,
            y: 150,
          },
          rate: {
            delay: 0.2,
            quantity: 2,
          },
          size: {
            width: 100,
            height: 0,
          },
        },
      }}
    />
  );
};

export default ParticlesComponent;
