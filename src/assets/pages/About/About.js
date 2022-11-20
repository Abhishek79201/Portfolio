import './about.scss';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import React from 'react';

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
      <AnimationOnScroll
        animateIn=" animate__fadeInUp animate__fast"
        offset={100}
      >
        <h1 className="title">About me</h1>
      </AnimationOnScroll>
      <div className="featured-section">
        <AnimationOnScroll
          animateIn="  animate__fadeInUp animate__slower "
          offset={1000}
          delay={1}
        >
          <section>
            <div className="featured-row-layout">
              <h1>THE BRANDING CHALLENGE</h1>
              <h3>
                I USE MY PASSION AND SKILLS TO CREATE DIGITAL PRODUCTS AND
                EXPERIENCES. AS AN INDEPENDENT, I WORK ALSO WITH WEB AGENCIES,
                COMPANIES, STARTUPS AND INDIVIDUALS TO CREATE A BLUEPRINT FOR
                THE DIGITAL BUSINESS.
              </h3>
              <div className="btn">
                <Link to="/About">Know More</Link>
              </div>
            </div>
          </section>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn=" animate__fadeInRight animate__slow animate__fast"
          offset={200}
        >
          <div className="featured-colum-layout">
            <svg
              width="349"
              height="467"
              viewBox="0 0 349 467"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_428_70)">
                <path
                  d="M176.186 296.422C210.867 296.422 238.982 268.308 238.982 233.626C238.982 198.945 210.867 170.83 176.186 170.83C141.505 170.83 113.39 198.945 113.39 233.626C113.39 268.308 141.505 296.422 176.186 296.422Z"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M176.186 313.949C220.547 313.949 256.509 277.988 256.509 233.626C256.509 189.265 220.547 153.303 176.186 153.303C131.825 153.303 95.863 189.265 95.863 233.626C95.863 277.988 131.825 313.949 176.186 313.949Z"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M176.186 331.989C230.51 331.989 274.548 287.95 274.548 233.626C274.548 179.302 230.51 135.264 176.186 135.264C121.862 135.264 77.8237 179.302 77.8237 233.626C77.8237 287.95 121.862 331.989 176.186 331.989Z"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M176.186 350.028C240.473 350.028 292.588 297.913 292.588 233.626C292.588 169.339 240.473 117.225 176.186 117.225C111.899 117.225 59.7844 169.339 59.7844 233.626C59.7844 297.913 111.899 350.028 176.186 350.028Z"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M176.186 368.673C250.77 368.673 311.233 308.21 311.233 233.626C311.233 159.042 250.77 98.5798 176.186 98.5798C101.602 98.5798 41.1396 159.042 41.1396 233.626C41.1396 308.21 101.602 368.673 176.186 368.673Z"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M176.186 278.507C200.973 278.507 221.067 258.413 221.067 233.626C221.067 208.839 200.973 188.745 176.186 188.745C151.399 188.745 131.305 208.839 131.305 233.626C131.305 258.413 151.399 278.507 176.186 278.507Z"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M176.186 261.399C191.525 261.399 203.959 248.965 203.959 233.626C203.959 218.288 191.525 205.853 176.186 205.853C160.847 205.853 148.413 218.288 148.413 233.626C148.413 248.965 160.847 261.399 176.186 261.399Z"
                  fill="#5A2ADD"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M348.118 233.828C344.765 233.828 317.209 234.837 288.334 258.031C254.6 285.152 220.788 306.87 175.006 306.87C129.225 306.87 95.4128 285.136 61.6783 258.031C32.8185 234.837 5.24723 233.859 1.89397 233.828C5.24723 233.828 32.8185 232.819 61.6783 209.626C95.4128 182.505 129.225 160.786 175.006 160.786C220.788 160.786 254.6 182.52 288.334 209.626C317.209 232.819 344.765 233.797 348.118 233.828H348.46V4.65735H1.55243V463.682H348.46V233.828H348.118Z"
                  fill="#111111"
                />
              </g>
              <g clip-path="url(#clip1_428_70)">
                <path
                  d="M346.985 233.052C346.985 233.052 317.66 233.611 286.859 208.849C253.109 181.728 219.313 160.01 173.531 160.01C127.75 160.01 93.938 181.744 60.2035 208.849C29.3876 233.611 0.0776367 233.052 0.0776367 233.052"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M346.985 213.196C346.985 213.196 317.66 213.755 286.859 188.994C253.109 161.888 219.313 140.169 173.531 140.169C127.75 140.169 93.938 161.904 60.2035 188.994C29.3876 213.755 0.0776367 213.196 0.0776367 213.196"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M346.985 193.698C346.985 193.698 317.66 194.241 286.859 169.495C253.109 142.374 219.313 120.656 173.531 120.656C127.75 120.656 93.938 142.39 60.2035 169.495C29.3876 194.241 0.0776367 193.698 0.0776367 193.698"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M346.985 174.183C346.985 174.183 317.66 174.742 286.859 149.981C253.109 122.86 219.313 101.157 173.531 101.157C127.75 101.157 93.938 122.891 60.2035 149.981C29.3876 174.742 0.0776367 174.183 0.0776367 174.183"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M346.985 154.685C346.985 154.685 317.66 155.244 286.859 130.405C253.109 103.299 219.313 81.5806 173.531 81.5806C127.75 81.5806 93.938 103.315 60.2035 130.405C29.3876 155.244 0.0776367 154.685 0.0776367 154.685"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M346.985 135.45C346.985 135.45 317.66 135.993 286.859 111.232C253.047 84.1266 219.313 62.408 173.531 62.408C127.75 62.408 93.938 84.1421 60.2035 111.232C29.3876 135.993 0.0776367 135.45 0.0776367 135.45"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M346.985 115.936C346.985 115.936 317.66 116.479 286.859 91.7335C253.109 64.6124 219.313 42.8938 173.531 42.8938C127.75 42.8938 93.938 64.6279 60.2035 91.7335C29.3876 116.433 0.0776367 115.936 0.0776367 115.936"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M346.985 96.4219C346.985 96.4219 317.66 96.9808 286.859 72.2194C253.109 45.0983 219.313 23.3953 173.531 23.3953C127.75 23.3953 93.938 45.1294 60.2035 72.2194C29.3876 96.9808 0.0776367 96.4219 0.0776367 96.4219"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M0.0776367 76.9233C0.0776367 76.9233 29.3876 77.4666 60.2035 52.7829C93.938 25.5997 127.75 3.8811 173.531 3.8811C219.313 3.8811 253.109 25.6152 286.859 52.7208C317.66 77.4666 346.985 76.9233 346.985 76.9233"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M346.985 233.735C346.985 233.735 317.66 233.176 286.859 257.937C253.109 285.058 219.313 306.777 173.531 306.777C127.75 306.777 93.938 285.043 60.2035 257.937C29.3876 233.176 0.0776367 233.735 0.0776367 233.735"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M346.985 253.591C346.985 253.591 317.66 253.032 286.859 277.793C253.109 304.899 219.313 326.617 173.531 326.617C127.75 326.617 93.938 304.883 60.2035 277.793C29.3876 253.047 0.0776367 253.591 0.0776367 253.591"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M346.985 273.089C346.985 273.089 317.66 272.546 286.859 297.292C253.047 324.459 219.313 346.193 173.531 346.193C127.75 346.193 93.938 324.459 60.2035 297.354C29.3876 272.546 0.0776367 273.089 0.0776367 273.089"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M346.985 292.603C346.985 292.603 317.66 292.044 286.859 316.806C253.109 343.927 219.313 365.646 173.531 365.646C127.75 365.646 93.938 343.911 60.2035 316.806C29.3876 292.044 0.0776367 292.603 0.0776367 292.603"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M0.0776367 312.04C0.0776367 312.04 29.3876 311.496 60.2035 336.258C93.938 363.363 127.75 385.082 173.531 385.082C219.313 385.082 253.109 363.348 286.859 336.258C317.66 311.496 346.985 312.04 346.985 312.04"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M0.0776367 331.337C0.0776367 331.337 29.3876 330.793 60.2035 355.555C93.938 382.66 127.75 404.379 173.531 404.379C219.313 404.379 253.109 382.645 286.859 355.555C317.66 330.793 346.985 331.337 346.985 331.337"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M346.985 350.851C346.985 350.851 317.66 350.307 286.859 375.053C253.109 402.174 219.313 423.893 173.531 423.893C127.75 423.893 93.938 402.159 60.2035 375.053C29.3876 350.307 0.0776367 350.851 0.0776367 350.851"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M0.0776367 370.365C0.0776367 370.365 29.3876 369.806 60.2035 394.567C93.938 421.688 127.75 443.391 173.531 443.391C219.313 443.391 253.109 421.657 286.859 394.567C317.66 369.806 346.985 370.365 346.985 370.365"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M346.985 389.864C346.985 389.864 317.66 389.32 286.859 414.066C253.109 441.187 219.313 462.906 173.531 462.906C127.75 462.906 93.938 441.172 60.2035 414.066C29.3876 389.32 0.0776367 389.864 0.0776367 389.864"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
              </g>
              <defs>
                <clipPath id="clip0_428_70">
                  <rect
                    width="346.908"
                    height="459.025"
                    fill="white"
                    transform="translate(1.55243 4.65735)"
                  />
                </clipPath>
                <clipPath id="clip1_428_70">
                  <rect width="347.047" height="466.787" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default About;
