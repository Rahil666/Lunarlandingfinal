import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Head from "next/head";
import Link from "next/link";
import Slider from "react-slick";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3500,
    slidesToShow: 10,
    slidesToScroll: 10,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed in milliseconds
    arrows: false, // Remove arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settingswhy = {
    // dots: true,
    infinite: true,
    speed: 3500,
    slidesToShow: 3,
    slidesToScroll: 5,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed in milliseconds
    arrows: false, // Remove arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settingsclient = {
    dots: false,
    infinite: true,
    speed: 10500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed in milliseconds
    arrows: false, // Remove arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settingslap = {
    dots: false,
    infinite: true,
    speed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed in milliseconds
  };

  // State variables for each count
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  const endCount1 = 5; // The number to count up to for count1
  const endCount2 = 3; // The number to count up to for count2
  const endCount3 = 170; // The number to count up to for count3
  const endCount4 = 60; // The number to count up to for count4

  // Effect to count up for each count variable
  useEffect(() => {
    const interval1 = setInterval(() => {
      if (count1 < endCount1) {
        setCount1(count1 + 1);
      }
    }, 3); // Adjust the interval to control the speed of counting

    const interval2 = setInterval(() => {
      if (count2 < endCount2) {
        setCount2(count2 + 1);
      }
    }, 3); // Adjust the interval to control the speed of counting

    const interval3 = setInterval(() => {
      if (count3 < endCount3) {
        setCount3(count3 + 1);
      }
    }, 3); // Adjust the interval to control the speed of counting

    const interval4 = setInterval(() => {
      if (count4 < endCount4) {
        setCount4(count4 + 1);
      }
    }, 3); // Adjust the interval to control the speed of counting

    // Cleanup intervals
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, [
    count1,
    count2,
    count3,
    count4,
    endCount1,
    endCount2,
    endCount3,
    endCount4,
  ]);

  const cardData = {
    "Show All": [
      {
        title2: "App Development",
        image:
          "https://backergysoft.com/wp-content/uploads/2022/10/ezgif.com-gif-maker-2.webp",
      },
      {
        title2: "Graphic Design",
        image:
          "https://backergysoft.com/wp-content/uploads/2022/09/Optimus-2D-1.jpg",
      },
      {
        title2: "Brand Promotion",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-7.webp",
      },
      {
        title2: "Web Development",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-1.webp ",
      },
      {
        title2: "IOS Development",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-5.webp ",
      },
      {
        title4: "Infinity Academy | Social Media Design",
        title2: "Social Media Marketing",
        image:
          "  https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-4.webp",
      },

      // Add more cards as needed
    ],
    "Mobile App Development": [
      {
        title2: "Mobile App Development",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-1.webp ",
      },
      {
        title2: "Mobile App Development",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-5.webp ",
      },
      // Add more cards specific to Mobile App Development
    ],
    "App Development": [
      {
        title2: "App Development",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-5.webp",
      },

      {
        title2: "App Development",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/Robotics.webp",
      },
      { title2: "App Development", image: "/images/Mobile.png" },
      {
        title2: "App Development",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/GraphyLounge.webp",
      },
      // Add more cards specific to Mobile App Development
    ],
    " Social Media Marketing": [
      {
        title2: "Social Media Marketing",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-4.webp",
      },

      {
        title2: "Social Media Marketing",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker.webp",
      },
      {
        title2: "Social Media Marketing",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-2.webp",
      },

      // Add more cards specific to Mobile App Development
    ],
    "IOS Development": [
      {
        title2: "IOS Development",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-3.webp",
      },

      {
        title2: "IOS Development",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/GraphyLounge.webp",
      },
      {
        title2: "IOS Development",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-2.webp",
      },

      // Add more cards specific to Mobile App Development
    ],
    "Brand Promotion": [
      {
        title2: "Brand Promotion",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-6.webp",
      },
      {
        title4: "Infinity Academy | Social Media Design",
        title2: "Brand Promotion",
        image:
          "  https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-4.webp",
      },
      {
        title2: "Brand Promotion",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-2.webp",
      },
      {
        title2: "Brand Promotion",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/GraphyLounge.webp",
      },
      {
        title2: "Brand Promotion",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker.webp",
      },

      // Add more cards specific to Mobile App Development
    ],
    "Web Development": [
      {
        title2: "Web Development",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/Optimus-Robo.webp",
      },
      {
        title2: "Web Development",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/GraphyLounge.webp",
      },
      {
        title2: "Web Development",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/Robotics.webp",
      },

      { title2: "Web Development", image: "/images/Mobile.png" },
    ],
    " 3D Design & Animation": [
      {
        title2: " 3D Design & Animation",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker.webp",
      },

      {
        title2: " 3D Design & Animation",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/Cipa-2-1.jpg",
      },
      { title2: " 3D Design & Animation", image: "/images/Mobile.png" },
      {
        title4: "Infinity Academy | Social Media Design",
        title2: "3D Design & Animation",
        image:
          "  https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-4.webp",
      },

      // Add more cards specific to Mobile App Development
    ],
    "Graphic designing": [
      {
        title2: "Graphic designing",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/GraphyLounge.webp",
      },
      // Add more cards specific to Mobile App Development
    ],
    "Software Development": [
      {
        title2: "Software Development",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/Cipa-2-1.jpg",
      },
      {
        title2: "Software Development",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/Robotics.webp",
      },
      // Add more cards specific to Mobile App Development
      // Add more cards specific to Mobile App Development
    ],
    // Define data for other tabs similarly
  };
  const [selectedTab, setSelectedTab] = useState("Show All"); // State to track selected tab
  const [animationKey, setAnimationKey] = useState(0); // State to control animation key

  // Define animations for each image
  const animations = [
    "animate__fadeInUp",
    "animate__fadeInDown",
    "animate__fadeInLeft",
    "animate__fadeInRight",
    // Add more animations as needed
  ];

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
    setAnimationKey(animationKey + 1); // Change animation key to trigger re-render with new animations
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const QuryUrl = useRouter();
  // const router = useRouter();
  // const UTM = router.query.utm_source;
  // const liveUrl = QuryUrl.query.pageslug;

  const liveUrlinital = QuryUrl.pathname;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneField, setPhoneField] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const [userMsg, setUserMsg] = useState("");

  const [selectedOptions, setSelectedOptions] = useState([]);

  // const [recaptchaToken, setRecaptchaToken] = useState(null);

  // useEffect(() => {
  //   fetch("https://api.testreveal.com:3013/api/get-client-location")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("UserLocation", data);
  //       setLiveLocation(data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  const handleSubmit3 = async (e) => {
    e.preventDefault();
    setLoader(true);

    // Check if any field is empty
    if (!name || !email || !phoneField || !message || !selectedOptions) {
      alert("Please fill in all the required fields");
      setLoader(false);
      return;
    }

    console.log("Sending");
    await fetch("https://lunarsenterprises.com:2000/lunar/homepage-service", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phno: phoneField,
        message: message,
        service: selectedOptions,

        page_location: liveUrlinital,

        website_source: "Lunar Seo",
        apikey: "7dac0fcac909b349",
      }),
    })
    .then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setUserMsg("Our Team Will Connect You Soon");
        // alert("Our Team Will Connect You Soon");
      } else {
        console.log("Something went wrong...please check");
        alert("Something went wrong...please try again later");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error occurred, please try again later");
    })
    .finally(() => {
      setLoader(false);
    });
};

  useEffect(() => {
    // Google tag code
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "AW-11367946432");
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    " Digital Marketing ",
    "3D Design & Animation",
    "Graphic designing",
    "Brand Promotion",
    "Mobile App Development",
    "Social Media Marketing",
    "Software Development",
    "Web Development",
    "IOS Development",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdowns = () => {
    setIsOpen(isOpen);
  };

  const handleOptionClick = (option) => {
    const index = selectedOptions.indexOf(option);
    if (index === -1) {
      setSelectedOptions([...selectedOptions, option]);
    } else {
      const updatedOptions = [...selectedOptions];
      updatedOptions.splice(index, 1);
      setSelectedOptions(updatedOptions);
    }
  };
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Lunar Enterprises</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="ea_banner">
        <div className="ea_banner-o ">
          <div className={scrolled ? "header scrolled" : "header"}>
            <div class=" container mb-3">
              <div class="row">
                <div class="col-6 col-md-5 widthz">
                  <a href="#">
                    <img
                      src={
                        scrolled
                          ? "/images/lunar black.png"
                          : "/images/lunar white.png"
                      }
                      className={scrolled ? "logoscrolled" : "logo"}
                      alt="Image 1"
                    />
                  </a>
                </div>
                <div class="col-md-6 d-flex align-items-center item">
                  <div class="col-12 itemhide">
                    <div class="d-flex">
                      <div class="col-md-5 col-4 contact-item  ">
                        <i
                          className={
                            scrolled
                              ? "fas fa-phone  scrolled-icon"
                              : "fas fa-phone iconww"
                          }
                        ></i>

                        <a href="tel:0471-3592716">
                          <h6
                            className={
                              scrolled ? "scrolled-text" : "text-nowrap"
                            }
                          >
                            0471-3592716
                          </h6>
                        </a>
                      </div>
                      <div class="col-md-4 col-5 contact-item">
                        <i
                          className={
                            scrolled
                              ? "fas fa-envelope  scrolled-icon"
                              : "fas fa-envelope icon"
                          }
                        ></i>

                        <a href="mailto:info@lunarenp.com">
                          <h6
                            className={
                              scrolled ? "scrolled-text" : "colorchange"
                            }
                          >
                            {" "}
                            info@lunarenp.com
                          </h6>
                        </a>
                      </div>
                      <div class="col-md-4 col-4 contact-item">
                        <i
                          className={
                            scrolled
                              ? "fas fa-phone  scrolled-icon"
                              : "fas fa-phone icon"
                          }
                        ></i>
                        <i class=" "></i>
                        <a href="tel:917907574781">
                          <h6
                            className={
                              scrolled ? "scrolled-text" : "colorchange"
                            }
                          >
                            917907574781
                          </h6>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="container tvcontainer col-md-12 col-12  d-md-flex">
            <div className="d-md-flex col-md-6 col-12  ">
              <div className="justify-content-center d-flex">
                <div className="pcimage">
                  <div className="computer-screen">
                    <div className="screen-content">
                      <Slider {...settingslap}>
                        <div className="computer-display">
                          <img
                            src="http://backergysoft.com/wp-content/uploads/2022/09/Mayon.jpg"
                            alt="Image 1"
                          />
                        </div>
                        <div className="computer-display">
                          <img
                            src="http://backergysoft.com/wp-content/uploads/2022/09/Fortune-Robotics.jpg"
                            alt="Image 1"
                          />
                        </div>
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="  mt-5  col-md-6 justify-content-center d-block   ">
              <h1 className="contentw">Welcome to Lunar Enterprises!</h1>
              <p className="contentp">
                We are excited to present our proposal for your digital
                marketing, website design, and development needs. At Borcelle,
                we combine creativity, innovation, and strategy to deliver
                exceptional digital solutions that will help your business
                thrive online.
              </p>
              <div className="align-content-center   ">
                <a href="#contactus">
                  <button className="buttonstyle ">
                    Contact Us
                    <i
                      class="fa fa-chevron-right  arrowstylee"
                      aria-hidden="true"
                    ></i>
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="sliderstyle mt-5  container-fluid">
            <Slider {...settings}>
              <div>
                <img src="http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon1as.png" />
              </div>

              <div>
                <img src="http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon5as.png" />
              </div>
              <div>
                <img src="http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon12as.png" />
              </div>
              <div>
                <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon14as.png" />
              </div>
              <div>
                <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon10as.png" />
              </div>

              <div>
                <img src="http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon1as.png" />
              </div>

              <div>
                <img src="http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon5as.png" />
              </div>

              <div>
                <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon14as.png" />
              </div>
              <div>
                <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon10as.png" />
              </div>

              <div>
                <img src="http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon12as.png" />
              </div>

              <div>
                <img src="http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon1as.png" />
              </div>

              <div>
                <img src="http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon5as.png" />
              </div>

              <div>
                <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon14as.png" />
              </div>
              <div>
                <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon10as.png" />
              </div>

              <div>
                <img src="http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon1as.png" />
              </div>

              <div>
                <img src="http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon5as.png" />
              </div>
              <div>
                <img src="http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon12as.png" />
              </div>
              <div>
                <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon14as.png" />
              </div>
              <div>
                <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon10as.png" />
              </div>

              <div>
                <img src="http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon12as.png" />
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <div id="tabsection">
        <div className="container-fluid ">
          {/* Tab buttons */}
          <div className="itemdis">
            <div className="row text-center mb-3 d-flex justify-content-center align-items-center tabiss itemdis">
              {Object.keys(cardData).map((tabName, index) => (
                <div
                  className={`col-md-2 col-6 text-center mt-2 d-flex justify-content-center align-items-center tab ${
                    selectedTab === tabName ? "active-tab" : "non-active"
                  }`}
                  key={index}
                  onClick={() => handleTabClick(tabName)}
                >
                  <h6 className="text-wrap justify-center">{tabName}</h6>
                </div>
              ))}
            </div>
          </div>

          <div className="itemdissec">
            <div className="d-flex overflow-x-scroll tabiss ">
              {Object.keys(cardData).map((tabName, index) => (
                <div
                  className={`col-md-2 col-4 text-center d-flex justify-content-center align-items-center tab ${
                    selectedTab === tabName ? "active-tab" : "non-active"
                  }`}
                  key={index}
                  onClick={() => handleTabClick(tabName)}
                >
                  <h6 className="text-wrap justify-center">{tabName}</h6>
                </div>
              ))}
            </div>
          </div>
          {/* Card data */}
          <div className="row">
            {cardData[selectedTab].map((card, index) => (
              <div className="col-md-3 col-6" key={index}>
                <div
                  className={`cardwhy card animate__animated ${
                    animations[(index + animationKey) % animations.length]
                  }`}
                >
                  <img src={card.image} alt={card.title} />
                  <div className="card-body content">
                    <h2>{card.title1 || card.title}</h2>
                    <p>{card.title2}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="bannercout">
        <div className="container">
          <motion.div
            className="numbers"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <AnimatePresence>
              <div className="number">
                <h3>{count1}+</h3>
                <h3>Year of operations</h3>
              </div>
              <div className="number">
                <h3>{count2} +</h3>
                <h3>Offices worldwide</h3>
              </div>
              <div className="number">
                <h3>{count3}+</h3>
                <h3>Happy Clients</h3>
              </div>
              <div className="number">
                <h3>{count4}+</h3>
                <h3>Employess</h3>
              </div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <div id="ourserivceses">
        <h1> Our Services </h1>

        <div className=" Services container col-md-12">
          <div className=" topspace  ">
            <div id="ourserivces" className="">
              <Link href="#" className="link">
                <i
                  className="fa fa-angle-double-right space"
                  aria-hidden="true"
                ></i>
                Web Development
              </Link>
            </div>

            <div id="ourserivces" class="d-flex align-items-center full">
              <Link href="#" className="link">
                <i
                  className="fa fa-angle-double-right space"
                  aria-hidden="true"
                ></i>
                Mobile App Development
              </Link>
            </div>
            <div id="ourserivces" class="d-flex align-items-center full">
              <Link href="#" className="link">
                <i
                  className="fa fa-angle-double-right space"
                  aria-hidden="true"
                ></i>
                IOS App Development
              </Link>
            </div>

            <div id="ourserivces" class="d-flex align-items-center full">
              <Link href="#" className="link">
                <i
                  className="fa fa-angle-double-right space"
                  aria-hidden="true"
                ></i>
                Software Development
              </Link>
            </div>
            <div id="ourserivces" class="d-flex align-items-center full">
              <Link href="#" className="link">
                <i
                  className="fa fa-angle-double-right space"
                  aria-hidden="true"
                ></i>
                Wordpress
              </Link>
            </div>
          </div>
          <div className=" mobileno ">
            <img src="/images/servicesMobile.jpg" class=" logo" alt="Image 1" />
          </div>

          <div className=" topspace  ">
            <div id="ourserivces" className="">
              <Link href="#" className="link">
                <i
                  className="fa fa-angle-double-right space"
                  aria-hidden="true"
                ></i>
                3D Design & Animation
              </Link>
            </div>

            <div id="ourserivces" class="d-flex align-items-center full">
              <Link href="#" className="link">
                <i
                  className="fa fa-angle-double-right space"
                  aria-hidden="true"
                ></i>
                Social Media Marketing
              </Link>
            </div>
            <div id="ourserivces" class="d-flex align-items-center full">
              <Link href="#" className="link">
                <i
                  className="fa fa-angle-double-right space"
                  aria-hidden="true"
                ></i>
                Digital Marketing
              </Link>
            </div>

            <div id="ourserivces" class="d-flex align-items-center full">
              <Link href="#" className="link">
                <i
                  className="fa fa-angle-double-right space"
                  aria-hidden="true"
                ></i>
                Graphic designing
              </Link>
            </div>
            <div id="ourserivces" class="d-flex align-items-center full">
              <Link href="#" className="link">
                <i
                  className="fa fa-angle-double-right space"
                  aria-hidden="true"
                ></i>
                Brand Promotion
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div id="client">
        <h1> Our Clients </h1>
        <div className="d-flex col-md-12 ">
          <div className=" mobileno col-md-4  ">
            <img src="/images/client.png" class="clientimg " alt="Image 1" />
          </div>
          <div className="  centerclient col-md-8 mb-5  container">
            <Slider {...settingsclient}>
              <div>
                <img
                  src="/images/aims logo.webp"
                  style={{ width: 100, height: 60 }}
                />
              </div>
              <div>
                <img
                  src="/images/Bhakshanagal.webp"
                  style={{ width: 100, height: 60 }}
                />
              </div>
              <div>
                <img
                  src="/images/Bride of christ.webp"
                  style={{ width: 100, height: 60 }}
                />
              </div>
              <div>
                <img
                  src="/images/LMC Logo.webp"
                  style={{ width: 100, height: 60 }}
                />
              </div>
              <div>
                <img
                  src="/images/Silicon-Institute-Logo.webp"
                  style={{ width: 100, height: 60 }}
                />
              </div>
              <div>
                <img
                  src="/images/STAR LINK PNG.b89762db452c02da0982.webp"
                  style={{ width: 100, height: 60 }}
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <div id="whyppl" class="container ">
        <h1> Client Testimonials </h1>

        <div className="col-md-12 mt-5  ">
          <Slider {...settingswhy}>
            <div>
              <div class=" ">
                <div class="cardwhy px-3 pt-4  m-3">
                  <a href="https://www.instagram.com/aimglobalbusinesscorp/">
                    <div class=" align-items-center">
                      {/*<img src="/images/ananthu.webp" class="round" /> */}
                      <div class="">
                        <h2 className="mt-2 ">SEO Transformation</h2>
                        <p className="mt-1">AIM Business Corp</p>
                        <h5>Numan Mustafa</h5>
                        <p> Aims Business Corp, Project Manager</p>
                      </div>
                    </div>

                    <p>
                      Lunar Enterprises did a great job on increasing website
                      traffic I'd recommend them for optimising the website
                      engagement and traffic.
                    </p>
                    <div className="hegippl"></div>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div class="">
                <div class="cardwhy px-3 pt-4  m-3">
                  <a href="https://www.instagram.com/legendmaritime/">
                    <div class=" align-items-center">
                      {/*<img src="/images/ananthu.webp" class="round" /> */}
                      <div class="">
                        <h2 className="mt-2 "> Digital Marketing</h2>
                        <p className="mt-1">Legend Maritime Cargo</p>
                        <h5>Faiqa Farooq</h5>
                        <p> legend Maritime Cargo, Manager</p>
                      </div>
                    </div>

                    <p>
                      Lunar Enterprises has been professional in providing
                      quality leads which helped us to increase our revenue by
                      135% in 2023 last quarter
                    </p>
                    <div className="hegi"></div>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div class="">
                <div class="cardwhy px-3 pt-4  m-3">
                  <a href="https://www.instagram.com/siliconinstitutedubai/">
                    <div class=" align-items-center">
                      {/*<img src="/images/ananthu.webp" class="round" /> */}
                      <div class="">
                        <h2 className="mt-2  "> Social Media Engagement</h2>
                        <p className="mt-1"> Silicon Institue</p>
                        <h5>Ms.Melissa</h5>
                        <p> Silicon Institute, CEO</p>
                      </div>
                    </div>

                    <p>
                      Their professional and elegant posters has increased brand
                      awareness and engagement among students and parents
                    </p>
                    <div className="heg"></div>
                  </a>
                </div>
              </div>
            </div>

            {/* <div>
              <div class="">
                <div class="cardwhy px-3 pt-4  m-3">
                  <div class="d-flex align-items-center">
                    <img src="/images/divya.webp" class="round" />
                    <div className="px-3">
                      <h4>Ranjitha</h4>
                      <p> Software Tester</p>
                    </div>
                  </div>
                  <h4 className="mt-2">True pleasure</h4>
                  <p>
                    I started my career journey as a software tester trainee at
                    Lunar. The structured training program provided me with a
                    solid foundation in quality assurance methodologies and
                    testing practices. This experience made me get a highly paid
                    job. Now I am working at UST global.
                  </p>
                  <div className='hegihtp'>
                    
                  </div>
                </div>
              </div>
            </div> */}
          </Slider>
        </div>
      </div>

      <div id="contactus">
        <div class="container mt-5 ">
          <h2 class="heading lh-1 mb-5">
            <span className="headingspan">It is Easy to connect us</span>
          </h2>
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="d-flex mb-3">
                <i class="fas fa-phone mt-1 me-3 fs-4 color-primary iconww"></i>
                <p class="fs-5">
                  <a href="tel:917907574781">India: +91 7347482489</a>
                </p>
              </div>
              <div class="d-flex mb-3">
                <i class="fas fa-phone mt-1 me-3 fs-4 color-primary iconww"></i>
                <p class="fs-5">
                  <a href="tel:917907574781">UAE: +971 502490087</a>
                </p>
              </div>
              <div class="d-flex mb-3">
                <i class="fa fa-envelope mt-1 me-3 fs-4 color-primary"></i>
                <p class="fs-5">
                  <a href="mailto:info@lunarenp.com">info@lunarenp.com</a>
                </p>
              </div>
              <div class="d-flex mb-3">
                <a href="https://api.whatsapp.com/send/?phone=%2B917025715775&text=Hello+from+your+website&type=phone_number&app_absent=0">
                  <i class="fa-brands fa-square-whatsapp mt-1 me-3 fs-2 color-primary"></i>
                </a>
                <a href="https://www.facebook.com/lunarenterprises.in">
                  <i class="fa-brands fa-facebook  mt-1 me-3 fs-2 color-primary"></i>
                </a>
                <a href="https://www.instagram.com/lunarenterprises_india/">
                  <i class="fa-brands fa-square-instagram  mt-1 me-3 fs-2 color-primary"></i>
                </a>

                <a href="https://twitter.com/Lunarenter37682">
                  <i class="fa-brands fa-square-x-twitter  mt-1 me-3 fs-2 color-primary"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="contactform">
                <form
                  onSubmit={(e) => {
                    handleSubmit3(e);
                  }}
                  class="needs-validation"
                  autocomplete="off"
                  novalidate=""
                >
                  <div class="form-field has-validation">
                    <input type="hidden" name="action" value="/" />

                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                      aria-describedby="inputGroupPrepend"
                      placeholder="Your Name"
                      required
                      class="inputname"
                    />
                    <div class="invalid-feedback">Please type your Name</div>
                  </div>
                  <div class="form-field has-validation">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      aria-describedby="inputGroupPrepend"
                      placeholder="Your Email"
                      pattern="[a-zA-Z0-9]+.+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]{2,4}$"
                      required=""
                      class="inputname"
                    />
                    <div class="invalid-feedback">
                      Please enter a valid email address
                    </div>
                  </div>
                  <div class="form-field has-validation">
                    <input
                      type="text"
                      id="phonefield"
                      name="phonefield"
                      onChange={(e) => setPhoneField(e.target.value)}
                      aria-describedby="inputGroupPrepend"
                      placeholder="Phone Number"
                      pattern="[0-9 ,+]*"
                      minlength="10"
                      maxlength="14"
                      required=""
                      class="inputname"
                    />
                    <div class="invalid-feedback">Please enter phone no.</div>
                  </div>

                  <div
                    className="custom-dropdown has-validation"
                    ref={dropdownRef}
                  >
                    <input
                      type="text"
                      class="inputname"
                      onClick={toggleDropdown}
                      placeholder="Our Services"
                      value={selectedOptions.join(", ")}
                      readOnly
                    />
                    {isOpen && (
                      <div className="dropdown-options mt-3 ">
                        {options.map((option, index) => (
                          <div
                            key={index}
                            className={`option ${
                              selectedOptions.includes(option)
                                ? "selectedservicesed m-1"
                                : "m-1 selectedservices"
                            }`}
                            onClick={() => handleOptionClick(option)}
                            style={{
                              zIndex: "999",
                              backgroundColor: selectedOptions.includes(option)
                                ? "blue"
                                : "transparent",
                            }}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div class="form-field has-validation">
                    <textarea
                      rows="4"
                      id="comments"
                      name="comments"
                      aria-describedby="inputGroupPrepend"
                      placeholder="Enter your message here..."
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      class="inputname"
                    ></textarea>

                    <div>
                      <div class="invalid-feedback">Please enter a message</div>
                      <button
                        type="submit"
                        class="btn btn-primary btn-rounded btn-lg mt-3"
                        disabled={loader} // Disable button when loader is active
                      >
                      {loader ? "Loading..." : "Submit"} <i class="fa fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </form>
                <h5 className="thanks">{userMsg}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="globalpresence">
        <div className="mb-4">
          <h1>Global Presence</h1>
        </div>

        <div class="container mb-5">
          <div class="row justify-content-center">
            <div class="cardwhy px-3 pt-4 m-3 col-lg-3 col-md-4 col-sm-12 col">
              <div class="d-flex">
                <img src="/images/dubai.png" class="dubai" />
              </div>
              <h4>Dubai</h4>
              <p>
                Building A2 IFZA Business Park- <br />
                Dubai Silicon Oasis – Dubai
              </p>
            </div>

            <div class="cardwhy px-3 pt-4 m-3 col-lg-3 col-md-4 col-sm-12 col">
              <div class="d-flex">
                <img src="/images/india.jpg" class="dubai" />
              </div>
              <h4>India</h4>
              <p>
                2nd Floor MG Corporate Center Ulloor Medical College P. O <br />
                Thiruvananthapuram Kerala 695011
              </p>
            </div>

            <div class="cardwhy px-3 pt-4 m-3 col-lg-3 col-md-4 col-sm-12 col">
              <div class="d-flex">
                <img src="/images/Usa.jpg" class="dubai" />
              </div>
              <h4>USA</h4>
              <p>
                12-07, FL 5, Jackson Avenue, <br />
                Long Island City, NY 11101, USA
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
