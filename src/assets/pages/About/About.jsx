import './about.scss';
import 'animate.css/animate.min.css';
// import { AnimationOnScroll } from 'react-animation-on-scroll';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import React from 'react';
import eye from './../.././images/aboutme.svg';
import SectionHeader from '../../components/SectionHeader/sectionHeader';
const About = () => {
  gsap.to('.title', { duration: 5, ease: 'power2.out', y: -5 });
  // const [scrollTop, setScrollTop] = useState(0);
  // const onScroll = () => {
  //   const winScroll = document.documentElement.scrollTop;
  //   let height =
  //     document.documentElement.scrollHeight -
  //     document.documentElement.clientHeight;
  //   const scorlled = (winScroll / height) * 100;
  //   setScrollTop(scorlled);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', onScroll);

  //   return () => window.removeEventListener('scroll', onScroll);
  // }, []);

  return (
    <div className=" containerAbout ">
      <SectionHeader title="About Me" />

      <div className="featured-section">
        <section>
          <div className="featured-row-layout">
            <div>
              <h1>THE </h1>
              <h1>BRANDING</h1>
              <h1>CHALLENGE</h1>
            </div>

            <h3>
              I USE MY PASSION AND SKILLS TO CREATE DIGITAL PRODUCTS AND
              EXPERIENCES. AS AN INDEPENDENT, I WORK ALSO WITH WEB AGENCIES,
              COMPANIES, STARTUPS AND INDIVIDUALS TO CREATE A BLUEPRINT FOR THE
              DIGITAL BUSINESS.
            </h3>
            <div className="btn">
              <Link className="link" to="/about">
                Know More
              </Link>
              <div class="icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 268.832 268.832"
                >
                  <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        <div className="featured-colum-layout">
          <img src={eye} alt="eye" />
        </div>
      </div>
    </div>
  );
};

export default About;
