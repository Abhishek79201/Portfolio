import './about.scss';
import 'animate.css/animate.min.css';
// import { AnimationOnScroll } from 'react-animation-on-scroll';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import React from 'react';
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
          <div className="abt-svg-container">
            <div className="abtsvg s01">
              <svg
                width="348"
                height="466"
                viewBox="0 0 348 466"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 72.6391V392.139C10.8333 389.972 43 396.639 73.5 425.639C114 458.139 154.732 467.669 177.5 465.139C191.5 463.584 218 468.296 273.5 427.139C314.417 396.796 333.648 392.139 348 392.139V72.6391C345.5 75.1391 301.5 64.1391 275.5 40.1391C245.111 12.0874 197.167 0.80572 175.5 0.139053C157.5 -1.02761 112.5 4.63905 76.4999 36.6391C40.4999 68.6391 10.5 73.9724 0 72.6391Z"
                  fill="#111111"
                />
              </svg>
            </div>
            <div className="abtsvg s02">
              <svg
                width="276"
                height="276"
                viewBox="0 0 276 276"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M137.928 200.724C172.609 200.724 200.724 172.609 200.724 137.928C200.724 103.246 172.609 75.1315 137.928 75.1315C103.246 75.1315 75.1316 103.246 75.1316 137.928C75.1316 172.609 103.246 200.724 137.928 200.724Z"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M137.928 218.251C182.289 218.251 218.251 182.289 218.251 137.928C218.251 93.5664 182.289 57.6045 137.928 57.6045C93.5664 57.6045 57.6045 93.5664 57.6045 137.928C57.6045 182.289 93.5664 218.251 137.928 218.251Z"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M137.928 236.29C192.252 236.29 236.29 192.252 236.29 137.928C236.29 83.6035 192.252 39.5652 137.928 39.5652C83.6035 39.5652 39.5652 83.6035 39.5652 137.928C39.5652 192.252 83.6035 236.29 137.928 236.29Z"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M137.928 254.329C202.214 254.329 254.329 202.214 254.329 137.928C254.329 73.6407 202.214 21.5259 137.928 21.5259C73.6407 21.5259 21.5259 73.6407 21.5259 137.928C21.5259 202.214 73.6407 254.329 137.928 254.329Z"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M137.928 272.974C212.512 272.974 272.974 212.512 272.974 137.928C272.974 63.3435 212.512 2.8811 137.928 2.8811C63.3435 2.8811 2.8811 63.3435 2.8811 137.928C2.8811 212.512 63.3435 272.974 137.928 272.974Z"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M137.928 182.809C162.715 182.809 182.809 162.715 182.809 137.928C182.809 113.141 162.715 93.0466 137.928 93.0466C113.141 93.0466 93.0466 113.141 93.0466 137.928C93.0466 162.715 113.141 182.809 137.928 182.809Z"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M137.928 165.701C153.266 165.701 165.701 153.266 165.701 137.928C165.701 122.589 153.266 110.155 137.928 110.155C122.589 110.155 110.155 122.589 110.155 137.928C110.155 153.266 122.589 165.701 137.928 165.701Z"
                  fill="#5A2ADD"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
              </svg>
            </div>
            <div className="abtsvg s03">
              <svg
                width="347"
                height="297"
                viewBox="0 0 347 297"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M346.225 146.828C342.871 146.828 315.315 147.837 286.44 171.03C252.706 198.152 218.894 219.87 173.112 219.87C127.331 219.87 93.5188 198.136 59.7843 171.03C30.9245 147.837 3.35326 146.859 0 146.828C3.35326 146.828 30.9245 145.819 59.7843 122.625C93.5188 95.5044 127.331 73.7858 173.112 73.7858C218.894 73.7858 252.706 95.5199 286.44 122.625C315.315 145.819 342.871 146.797 346.225 146.828H346.566V0H0V296.5H346.566V146.828H346.225Z"
                  fill="#111111"
                />
              </svg>
            </div>
            <div className="abtsvg s04">
              <svg
                width="348"
                height="464"
                viewBox="0 0 348 464"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M347.908 231.612C347.908 231.612 318.582 232.17 287.782 207.469C254.032 180.414 220.235 158.748 174.454 158.748C128.672 158.748 94.8603 180.429 61.1259 207.469C30.31 232.17 1 231.612 1 231.612"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M347.908 211.805C347.908 211.805 318.582 212.362 287.782 187.661C254.032 160.622 220.235 138.956 174.454 138.956C128.672 138.956 94.8603 160.637 61.1259 187.661C30.31 212.362 1 211.805 1 211.805"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M347.908 192.354C347.908 192.354 318.582 192.896 287.782 168.21C254.032 141.155 220.235 119.49 174.454 119.49C128.672 119.49 94.8603 141.171 61.1259 168.21C30.31 192.896 1 192.354 1 192.354"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M347.908 172.887C347.908 172.887 318.582 173.445 287.782 148.744C254.032 121.689 220.235 100.039 174.454 100.039C128.672 100.039 94.8603 121.72 61.1259 148.744C30.31 173.445 1 172.887 1 172.887"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M347.908 153.436C347.908 153.436 318.582 153.994 287.782 129.215C254.032 102.176 220.235 80.51 174.454 80.51C128.672 80.51 94.8603 102.191 61.1259 129.215C30.31 153.994 1 153.436 1 153.436"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M347.908 134.248C347.908 134.248 318.582 134.79 287.782 110.089C253.97 83.0499 220.235 61.3843 174.454 61.3843C128.672 61.3843 94.8603 83.0654 61.1259 110.089C30.31 134.79 1 134.248 1 134.248"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M347.908 114.782C347.908 114.782 318.582 115.324 287.782 90.6381C254.032 63.5831 220.235 41.9175 174.454 41.9175C128.672 41.9175 94.8603 63.5986 61.1259 90.6381C30.31 115.277 1 114.782 1 114.782"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M347.908 95.3152C347.908 95.3152 318.582 95.8727 287.782 71.1717C254.032 44.1167 220.235 22.4666 174.454 22.4666C128.672 22.4666 94.8603 44.1477 61.1259 71.1717C30.31 95.8727 1 95.3152 1 95.3152"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M1 75.8641C1 75.8641 30.31 76.4061 61.1259 51.7826C94.8603 24.6657 128.672 3 174.454 3C220.235 3 254.032 24.6811 287.782 51.7206C318.582 76.4061 347.908 75.8641 347.908 75.8641"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M347.908 232.294C347.908 232.294 318.582 231.736 287.782 256.437C254.032 283.492 220.235 305.158 174.454 305.158C128.672 305.158 94.8603 283.476 61.1259 256.437C30.31 231.736 1 232.294 1 232.294"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M347.908 252.101C347.908 252.101 318.582 251.543 287.782 276.244C254.032 303.284 220.235 324.95 174.454 324.95C128.672 324.95 94.8603 303.268 61.1259 276.244C30.31 251.559 1 252.101 1 252.101"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M347.908 271.552C347.908 271.552 318.582 271.01 287.782 295.695C253.97 322.797 220.235 344.478 174.454 344.478C128.672 344.478 94.8603 322.797 61.1259 295.757C30.31 271.01 1 271.552 1 271.552"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M347.908 291.018C347.908 291.018 318.582 290.461 287.782 315.162C254.032 342.217 220.235 363.882 174.454 363.882C128.672 363.882 94.8603 342.201 61.1259 315.162C30.31 290.461 1 291.018 1 291.018"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M1 310.407C1 310.407 30.31 309.865 61.1259 334.566C94.8603 361.606 128.672 383.272 174.454 383.272C220.235 383.272 254.032 361.59 287.782 334.566C318.582 309.865 347.908 310.407 347.908 310.407"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M1 329.657C1 329.657 30.31 329.115 61.1259 353.816C94.8603 380.856 128.672 402.522 174.454 402.522C220.235 402.522 254.032 380.84 287.782 353.816C318.582 329.115 347.908 329.657 347.908 329.657"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M347.908 349.124C347.908 349.124 318.582 348.582 287.782 373.267C254.032 400.322 220.235 421.988 174.454 421.988C128.672 421.988 94.8603 400.307 61.1259 373.267C30.31 348.582 1 349.124 1 349.124"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M1 368.59C1 368.59 30.31 368.033 61.1259 392.734C94.8603 419.789 128.672 441.439 174.454 441.439C220.235 441.439 254.032 419.758 287.782 392.734C318.582 368.033 347.908 368.59 347.908 368.59"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M347.908 388.041C347.908 388.041 318.582 387.499 287.782 412.185C254.032 439.24 220.235 460.906 174.454 460.906C128.672 460.906 94.8603 439.224 61.1259 412.185C30.31 387.499 1 388.041 1 388.041"
                  stroke="#5A2ADD"
                  stroke-width="5"
                  stroke-miterlimit="10"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
