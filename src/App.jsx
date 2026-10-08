import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    value: "42+",
    label: "Projects Delivered",
  },
  {
    value: "76%",
    label: "Faster Workflows",
  },
  {
    value: "24/7",
    label: "Digital Experience",
  },
];

function Car() {
  return (
    <div className="car">
      <div className="car-glow" />

      <svg
        viewBox="0 0 320 150"
        className="car-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="carBody" x1="0" x2="1">
            <stop offset="0%" stopColor="#9eff00" />
            <stop offset="55%" stopColor="#c8ff72" />
            <stop offset="100%" stopColor="#72c900" />
          </linearGradient>

          <linearGradient id="window" x1="0" x2="1">
            <stop offset="0%" stopColor="#111827" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>

          <linearGradient id="light" x1="0" x2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#9eff00" />
          </linearGradient>
        </defs>

        {/* Ground shadow */}
        <ellipse
          cx="160"
          cy="136"
          rx="120"
          ry="9"
          fill="rgba(0,0,0,0.65)"
        />

        {/* Main car body */}
        <path
          d="
            M28 108
            C34 88 51 78 78 74
            L112 39
            C121 29 134 23 149 23
            L204 23
            C219 23 231 30 240 42
            L261 70
            C282 74 295 84 301 101
            L305 111
            C306 115 302 119 296 119
            L28 119
            C23 119 21 114 23 110
            Z
          "
          fill="url(#carBody)"
        />

        {/* Upper highlight */}
        <path
          d="
            M87 74
            L116 43
            C124 33 136 29 149 29
            L203 29
            C215 29 225 34 233 44
            L254 72
            Z
          "
          fill="rgba(255,255,255,0.13)"
        />

        {/* Windows */}
        <path
          d="
            M115 69
            L135 43
            C140 36 147 33 155 33
            L177 33
            L177 69
            Z
          "
          fill="url(#window)"
        />

        <path
          d="
            M184 33
            L202 34
            C211 35 217 40 223 47
            L239 69
            L184 69
            Z
          "
          fill="url(#window)"
        />

        {/* Window separator */}
        <rect
          x="177"
          y="32"
          width="7"
          height="40"
          rx="2"
          fill="#111111"
        />

        {/* Front bumper */}
        <path
          d="M268 94 C286 94 297 101 302 109 L303 113 L275 113 Z"
          fill="#b9ee65"
        />

        {/* Headlight */}
        <path
          d="M277 88 C288 89 295 94 298 99 L279 99 Z"
          fill="url(#light)"
        />

        {/* Rear light */}
        <rect
          x="30"
          y="91"
          width="13"
          height="13"
          rx="4"
          fill="#ff405d"
        />

        {/* Rear light glow */}
        <circle
          cx="36"
          cy="97"
          r="4"
          fill="#ff8497"
        />

        {/* Doors */}
        <path
          d="M112 72 L108 108"
          stroke="#5d9900"
          strokeWidth="2"
        />

        <path
          d="M238 72 L244 108"
          stroke="#5d9900"
          strokeWidth="2"
        />

        {/* Door handles */}
        <rect
          x="201"
          y="81"
          width="18"
          height="3"
          rx="2"
          fill="#416b00"
        />

        <rect
          x="130"
          y="81"
          width="18"
          height="3"
          rx="2"
          fill="#416b00"
        />

        {/* Wheels */}
        <g>
          <circle
            cx="82"
            cy="116"
            r="27"
            fill="#070707"
          />

          <circle
            cx="82"
            cy="116"
            r="16"
            fill="#343a40"
          />

          <circle
            cx="82"
            cy="116"
            r="9"
            fill="#101010"
          />

          <circle
            cx="82"
            cy="116"
            r="4"
            fill="#9eff00"
          />
        </g>

        <g>
          <circle
            cx="247"
            cy="116"
            r="27"
            fill="#070707"
          />

          <circle
            cx="247"
            cy="116"
            r="16"
            fill="#343a40"
          />

          <circle
            cx="247"
            cy="116"
            r="9"
            fill="#101010"
          />

          <circle
            cx="247"
            cy="116"
            r="4"
            fill="#9eff00"
          />
        </g>
      </svg>
    </div>
  );
}

function App() {
  const heroRef = useRef(null);
  const carRef = useRef(null);

  const trailOneRef = useRef(null);
  const trailTwoRef = useRef(null);

  const lettersRef = useRef([]);
  const statsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /*
       * Initial states
       */
      gsap.set(lettersRef.current, {
        opacity: 0,
        y: 35,
      });

      gsap.set(statsRef.current, {
        opacity: 0,
        y: 30,
      });

      gsap.set(carRef.current, {
        x: 0,
      });

      gsap.set([trailOneRef.current, trailTwoRef.current], {
        scaleX: 0.25,
        transformOrigin: "left center",
      });

      /*
       * Intro animation
       */
      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      intro
        .to(lettersRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.055,
        })
        .to(
          statsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
          },
          "-=0.3"
        );

      /*
       * Main scroll-driven timeline
       *
       * The hero is pinned while the user scrolls.
       * All motion is controlled by scroll progress.
       */
      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=1800",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      /*
       * Car movement
       */
      scrollTimeline.to(
        carRef.current,
        {
          x: () => window.innerWidth * 0.62,
          rotation: 3,
          ease: "none",
          duration: 1,
        },
        0
      );

      /*
       * Motion trails
       */
      scrollTimeline.to(
        trailOneRef.current,
        {
          scaleX: 1.8,
          opacity: 0.9,
          ease: "none",
          duration: 1,
        },
        0
      );

      scrollTimeline.to(
        trailTwoRef.current,
        {
          scaleX: 1.5,
          opacity: 0.55,
          ease: "none",
          duration: 1,
        },
        0
      );

      /*
       * Headline reacts to scrolling
       */
      scrollTimeline.to(
        lettersRef.current,
        {
          y: -75,
          opacity: 0.3,
          stagger: 0.035,
          ease: "none",
          duration: 0.7,
        },
        0
      );

      /*
       * Statistics react to scrolling
       */
      scrollTimeline.to(
        statsRef.current,
        {
          y: -90,
          opacity: 0.25,
          stagger: 0.06,
          ease: "none",
          duration: 0.7,
        },
        0
      );

      /*
       * Refresh ScrollTrigger after layout is ready
       */
      ScrollTrigger.refresh();
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const headline = "WELCOME ITZFIZZ".split("");

  return (
    <main className="site">
      {/* ======================================
          HERO SECTION
      ======================================= */}
      <section
        ref={heroRef}
        className="hero"
      >
        <div className="noise" />

        {/* Navigation */}
        <nav className="nav">
          <div className="logo">
            ITZFIZZ<span>.</span>
          </div>

          <div className="nav-pill">
            DIGITAL EXPERIENCES
          </div>

          <div className="nav-year">
            2026
          </div>
        </nav>

        {/* Hero content */}
        <div className="hero-content">
          <p className="eyebrow">
            CREATIVE DIGITAL STUDIO
          </p>

          <h1
            className="headline"
            aria-label="WELCOME ITZFIZZ"
          >
            {headline.map((letter, index) => (
              <span
                key={index}
                ref={(element) => {
                  lettersRef.current[index] = element;
                }}
                className={
                  letter === " "
                    ? "space"
                    : ""
                }
              >
                {letter === " "
                  ? "\u00A0"
                  : letter}
              </span>
            ))}
          </h1>

          <p className="hero-description">
            We transform ideas into fast,
            expressive and memorable digital
            experiences.
          </p>
        </div>

        {/* Road + car */}
        <div className="road-area">
          <div
            ref={trailOneRef}
            className="trail trail-one"
          />

          <div
            ref={trailTwoRef}
            className="trail trail-two"
          />

          <div
            ref={carRef}
            className="car-wrapper"
          >
            <Car />
          </div>

          <div className="road">
            <div className="road-line" />
          </div>
        </div>

        {/* Statistics */}
        <div className="stats">
          {stats.map((stat, index) => (
            <div
              className="stat"
              key={stat.label}
              ref={(element) => {
                statsRef.current[index] =
                  element;
              }}
            >
              <div className="stat-value">
                {stat.value}
              </div>

              <div className="stat-label">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <span>
            SCROLL TO EXPLORE
          </span>

          <div className="scroll-line">
            <div />
          </div>
        </div>
      </section>

      {/* ======================================
          SECOND SECTION
      ======================================= */}
      <section className="about">
        <div className="about-inner">
          <p className="eyebrow">
            WHAT WE DO
          </p>

          <h2>
            DIGITAL PRODUCTS
            <br />
            <span>BUILT TO MOVE.</span>
          </h2>

          <p className="about-text">
            From strategy and design to
            development and optimization,
            we create digital experiences
            that are built for people and
            engineered for performance.
          </p>

          <div className="about-grid">
            <div>
              01 / DESIGN
            </div>

            <div>
              02 / DEVELOPMENT
            </div>

            <div>
              03 / PERFORMANCE
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;