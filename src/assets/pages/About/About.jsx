import "./about.scss";
import "animate.css/animate.min.css";
// import { AnimationOnScroll } from 'react-animation-on-scroll';
// import gsap from 'gsap';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React from "react";
import SectionHeader from "../../components/SectionHeader/sectionHeader";
// import useMightyMouse from 'react-hook-mighty-mouse';
const About = () => {
  React.useEffect(() => {
    const eye = document.querySelector(".eye");
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;

      let mouseX = (clientX * 100) / window.innerWidth - 50;
      let mouseY = (clientY * 100) / window.innerHeight - 50;

      // positionRef.style.left = mouseX + '%';
      let mouseFx = mouseX / 5;
      let mouseFy = mouseY / 5;
      // positionRef.style.top = mouseY + '%';
      // eye.style.left = mouseX + '%';
      eye.style.left = mouseFx + "%";
      eye.style.top = mouseFy + "%";
    });

    return () => {};
  }, []);
  return (
    <motion.div
      className=" containerAbout "
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeader title="About Me" />

      <div className="featured-section">
        <section>
          <div className="featured-row-layout">
            <h1>
              <span>THE </span>
              <span>BRANDING</span>
              <span>CHALLENGE</span>
            </h1>

            <h3>
              I use my passion and skills to create digital products and
              experiences. As an independent, i work also with web agencies,
              companies, startups and individuals to create a blueprint for the
              digital business. I drink coffee, i eat pizza. I write code and
              improve my design and skills every day. I am honored to work with
              special people.
            </h3>
            <div className="btn">
              <Link className="link hover-underline-animation" to="/about">
                Know More
              </Link>
            </div>
          </div>
        </section>

        <div className="featured-colum-layout">
          <div className="eye-socket">
            <svg
              className="eye"
              width="276"
              height="276"
              viewBox="0 0 276 276"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M138.047 200.843C172.728 200.843 200.843 172.728 200.843 138.046C200.843 103.365 172.728 75.2504 138.047 75.2504C103.365 75.2504 75.2505 103.365 75.2505 138.046C75.2505 172.728 103.365 200.843 138.047 200.843Z"
                stroke="#be81ef"
                stroke-width="5"
                stroke-miterlimit="10"
              />
              <path
                d="M138.046 218.37C182.408 218.37 218.37 182.408 218.37 138.046C218.37 93.6853 182.408 57.7234 138.046 57.7234C93.6853 57.7234 57.7234 93.6853 57.7234 138.046C57.7234 182.408 93.6853 218.37 138.046 218.37Z"
                stroke="#be81ef"
                stroke-width="5"
                stroke-miterlimit="10"
              />
              <path
                d="M138.046 236.409C192.371 236.409 236.409 192.371 236.409 138.046C236.409 83.7224 192.371 39.6841 138.046 39.6841C83.7224 39.6841 39.6841 83.7224 39.6841 138.046C39.6841 192.371 83.7224 236.409 138.046 236.409Z"
                stroke="#be81ef"
                stroke-width="5"
                stroke-miterlimit="10"
              />
              <path
                d="M138.046 254.448C202.333 254.448 254.448 202.333 254.448 138.046C254.448 73.7596 202.333 21.6448 138.046 21.6448C73.7596 21.6448 21.6448 73.7596 21.6448 138.046C21.6448 202.333 73.7596 254.448 138.046 254.448Z"
                stroke="#be81ef"
                stroke-width="5"
                stroke-miterlimit="10"
              />
              <path
                d="M138.046 273.093C212.631 273.093 273.093 212.631 273.093 138.046C273.093 63.4624 212.631 3 138.046 3C63.4624 3 3 63.4624 3 138.046C3 212.631 63.4624 273.093 138.046 273.093Z"
                stroke="#be81ef"
                stroke-width="5"
                stroke-miterlimit="10"
              />
              <path
                d="M138.046 182.927C162.834 182.927 182.927 162.834 182.927 138.046C182.927 113.259 162.834 93.1655 138.046 93.1655C113.259 93.1655 93.1655 113.259 93.1655 138.046C93.1655 162.834 113.259 182.927 138.046 182.927Z"
                stroke="#be81ef"
                stroke-width="5"
                stroke-miterlimit="10"
              />
              <path
                d="M138.047 165.82C153.385 165.82 165.82 153.385 165.82 138.047C165.82 122.708 153.385 110.273 138.047 110.273C122.708 110.273 110.273 122.708 110.273 138.047C110.273 153.385 122.708 165.82 138.047 165.82Z"
                fill="#be81ef"
                stroke="#be81ef"
                stroke-width="5"
                stroke-miterlimit="10"
              />
            </svg>
            <div className="eyelid" />

            <svg
              width="359"
              height="480"
              viewBox="0 0 359 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="eye-container"
            >
              <path
                d="M358.646 235.579C355.173 235.579 326.628 236.587 296.717 259.756C261.772 286.849 226.747 308.545 179.323 308.545C131.899 308.545 96.874 286.833 61.9293 259.756C32.034 236.587 3.47357 235.61 0 235.579C3.47357 235.579 32.034 234.571 61.9293 211.402C96.874 184.31 131.899 162.614 179.323 162.614C226.747 162.614 261.772 184.325 296.717 211.402C326.628 234.571 355.173 235.548 358.646 235.579H359V0H0V480H179.5H358.646L359 235.579H358.646Z"
                fill="#111111"
              />
              <path
                d="M352.908 235.612C352.908 235.612 323.582 236.17 292.782 211.469C259.032 184.414 225.235 162.748 179.454 162.748C133.672 162.748 99.8603 184.429 66.1259 211.469C35.31 236.17 6 235.612 6 235.612"
                stroke="#5A2ADD"
                stroke-width="5"
                stroke-miterlimit="10"
              />
              <path
                d="M352.908 215.805C352.908 215.805 323.582 216.362 292.782 191.661C259.032 164.622 225.235 142.956 179.454 142.956C133.672 142.956 99.8603 164.637 66.1259 191.661C35.31 216.362 6 215.805 6 215.805"
                stroke="#5A2ADD"
                stroke-width="5"
                stroke-miterlimit="10"
              />
              <path
                d="M352.908 196.354C352.908 196.354 323.582 196.896 292.782 172.21C259.032 145.155 225.235 123.49 179.454 123.49C133.672 123.49 99.8603 145.171 66.1259 172.21C35.31 196.896 6 196.354 6 196.354"
                stroke="#5A2ADD"
                stroke-width="5"
                stroke-miterlimit="10"
              />
              <path
                d="M352.908 176.887C352.908 176.887 323.582 177.445 292.782 152.744C259.032 125.689 225.235 104.039 179.454 104.039C133.672 104.039 99.8603 125.72 66.1259 152.744C35.31 177.445 6 176.887 6 176.887"
                stroke="#5A2ADD"
                stroke-width="5"
                stroke-miterlimit="10"
              />
              <path
                d="M352.908 157.436C352.908 157.436 323.582 157.994 292.782 133.215C259.032 106.176 225.235 84.51 179.454 84.51C133.672 84.51 99.8603 106.191 66.1259 133.215C35.31 157.994 6 157.436 6 157.436"
                stroke="#5A2ADD"
                stroke-width="5"
                stroke-miterlimit="10"
              />
              <path
                d="M352.908 138.248C352.908 138.248 323.582 138.79 292.782 114.089C258.97 87.0499 225.235 65.3843 179.454 65.3843C133.672 65.3843 99.8603 87.0654 66.1259 114.089C35.31 138.79 6 138.248 6 138.248"
                stroke="#5A2ADD"
                stroke-width="5"
                stroke-miterlimit="10"
              />
              <path
                d="M352.908 118.782C352.908 118.782 323.582 119.324 292.782 94.6381C259.032 67.5831 225.235 45.9175 179.454 45.9175C133.672 45.9175 99.8603 67.5986 66.1259 94.6381C35.31 119.277 6 118.782 6 118.782"
                stroke="#5A2ADD"
                stroke-width="5"
                stroke-miterlimit="10"
              />
              <path
                d="M352.908 99.3152C352.908 99.3152 323.582 99.8727 292.782 75.1717C259.032 48.1167 225.235 26.4666 179.454 26.4666C133.672 26.4666 99.8603 48.1477 66.1259 75.1717C35.31 99.8727 6 99.3152 6 99.3152"
                stroke="#5A2ADD"
                stroke-width="5"
                stroke-miterlimit="10"
              />
              <path
                d="M6 79.8641C6 79.8641 35.31 80.4061 66.1259 55.7826C99.8603 28.6657 133.672 7 179.454 7C225.235 7 259.032 28.6811 292.782 55.7206C323.582 80.4061 352.908 79.8641 352.908 79.8641"
                stroke="#5A2ADD"
                stroke-width="5"
                stroke-miterlimit="10"
              />
              <path
                d="M352.908 236.294C352.908 236.294 323.582 235.736 292.782 260.437C259.032 287.492 225.235 309.158 179.454 309.158C133.672 309.158 99.8603 287.476 66.1259 260.437C35.31 235.736 6 236.294 6 236.294"
                stroke="#5A2ADD"
                stroke-width="5"
                stroke-miterlimit="10"
              />
              <path
                d="M352.908 256.101C352.908 256.101 323.582 255.543 292.782 280.244C259.032 307.284 225.235 328.95 179.454 328.95C133.672 328.95 99.8603 307.268 66.1259 280.244C35.31 255.559 6 256.101 6 256.101"
                stroke="#5A2ADD"
                stroke-width="5"
                stroke-miterlimit="10"
              />
              <path
                d="M352.908 275.552C352.908 275.552 323.582 275.01 292.782 299.695C258.97 326.797 225.235 348.478 179.454 348.478C133.672 348.478 99.8603 326.797 66.1259 299.757C35.31 275.01 6 275.552 6 275.552"
                stroke="#5A2ADD"
                stroke-width="5"
                stroke-miterlimit="10"
              />
              <path
                d="M352.908 295.018C352.908 295.018 323.582 294.461 292.782 319.162C259.032 346.217 225.235 367.882 179.454 367.882C133.672 367.882 99.8603 346.201 66.1259 319.162C35.31 294.461 6 295.018 6 295.018"
                stroke="#5A2ADD"
                stroke-width="5"
                stroke-miterlimit="10"
              />
              <path
                d="M6 314.407C6 314.407 35.31 313.865 66.1259 338.566C99.8603 365.606 133.672 387.272 179.454 387.272C225.235 387.272 259.032 365.59 292.782 338.566C323.582 313.865 352.908 314.407 352.908 314.407"
                stroke="#5A2ADD"
                stroke-width="5"
                stroke-miterlimit="10"
              />
              <path
                d="M6 333.657C6 333.657 35.31 333.115 66.1259 357.816C99.8603 384.856 133.672 406.522 179.454 406.522C225.235 406.522 259.032 384.84 292.782 357.816C323.582 333.115 352.908 333.657 352.908 333.657"
                stroke="#5A2ADD"
                stroke-width="5"
                stroke-miterlimit="10"
              />
              <path
                d="M352.908 353.124C352.908 353.124 323.582 352.582 292.782 377.267C259.032 404.322 225.235 425.988 179.454 425.988C133.672 425.988 99.8603 404.307 66.1259 377.267C35.31 352.582 6 353.124 6 353.124"
                stroke="#5A2ADD"
                stroke-width="5"
                stroke-miterlimit="10"
              />
              <path
                d="M6 372.59C6 372.59 35.31 372.033 66.1259 396.734C99.8603 423.789 133.672 445.439 179.454 445.439C225.235 445.439 259.032 423.758 292.782 396.734C323.582 372.033 352.908 372.59 352.908 372.59"
                stroke="#5A2ADD"
                stroke-width="5"
                stroke-miterlimit="10"
              />
              <path
                d="M352.908 392.041C352.908 392.041 323.582 391.499 292.782 416.185C259.032 443.24 225.235 464.906 179.454 464.906C133.672 464.906 99.8603 443.224 66.1259 416.185C35.31 391.499 6 392.041 6 392.041"
                stroke="#5A2ADD"
                stroke-width="5"
                stroke-miterlimit="10"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
