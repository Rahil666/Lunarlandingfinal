import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Head from "next/head";
import Link from "next/link";
import Slider from "react-slick";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";

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
        title1: "Mobile App | IOS",
        title2: "App Development",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-1.webp ",
      },
  
      {
        title1: "Mobile App | IOS",
        title2: "App Development",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-5.webp",
      },

      {
        title1: "Mobile App | IOS",
        title2: "App Development",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/Robotics.webp",
      },
    
     
      {
        title1: "Mobile App | IOS",
        title2: "App Development",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-3.webp",
      },

      {
        title1: "Mobile App | IOS",
        title2: "App Development",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/GraphyLounge.webp",
      },
      {
        title1: "Mobile App | IOS",
        title2: "App Development",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-2.webp",
      },

      {
      
        title1: "Bhakshanagal | Web development & Web design",
        title2: "Web Development & Web design",
        image:
          "/images/graphics design 1.jpg",
      },
      {
        title1: "Mayon Pager Bags | Web development & Web design",
        title2: "Web Development & Web design ",
        image:
          " https://backergysoft.com/wp-content/uploads/2022/10/ezgif.com-gif-maker-2-600x450.webp",
      },
      {
        title1: "Sahasrara Cinemas | UI/UX design & Web development",
        title2: "Web Development & Web design ",
        image:
          "  https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-1-600x497.webp",
      },

      {
        title1: "Starline Crypto | UI/UX design & Web development",
        title2: "Web Development & Web design ",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-3-100x100.webp",
      },
      
  
      {
        title1: "LMC Company | Social Media Marketing",
        title2: "Digital Marketing",
        image:
          '/images/keyword2.jpg',
      },
      {
        title1: "Starline Crypto | Social Media Marketing",
        title2: "Digital Marketing",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-2.webp",
      },
      {
        title1: "Legend Maritime | Social Media Marketing",
        title2: "Digital Marketing",
        image:
          '/images/keyword.jpg',
      },
     
      {
        title1: "Unikuk Popcorn | Brand Promotion",
        title2: "Digital Marketing",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker.webp",
      },
     
      {
        title1: "Infinity Academy | Social Media Marketing",
        title2: "Digital Marketing",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-6.webp",
      },
    

      {
        title1: "Optimus Robo | Social Media Marketing",
        title2: "Digital Marketing",
        image:
          "      https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-7.webp",
      },
      {
        title1: "Technology | Business",
        title2: "3D Design & Animation",
        image:
          "/images/animation icon.jpg",
      },

      {
      
        title1: "Wika | Education",
        title2: "Graphic design",
        image:
          "/images/graphics design 3.jpg",
      },

      {
      
        title1: "Bhakshanagal | Online",
        title2: "Graphic design",
        image:
          "/images/graphics design 1.jpg",
      },
      {
      
        title1: "Bhakshanagal | Package",
        title2: "Graphic design",
        image:
          "/images/package.jpg",
      },
      {
        title1: "Star Link | Exporting",
        title2: "Graphic design",
        image:
          "/images/graphics design 2.jpg",
      },
      {
      
        title1: "Bhakshanagal | Brochure",
        title2: "Graphic design",
        image:
          "/images/brochure.jpg",
      },
      {
      
        title1: "AI | Presentation",
        title2: "Graphic design",
        image:
          "/images/presentation.jpg",
      },
    
      {
        title1: "CIPA | Art",
        title2: "Software Development",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/Cipa-2-1.jpg",
      },
      {
        title1: "Fortune Robotics | Technology",
        title2: "Software Development",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/Robotics.webp",
      },
      
  

    ],
  
    "App Development": [
      {
        title1: "Mobile App | IOS",
        title2: "App Development",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-1.webp ",
      },
  
      // Add more cards specific to Mobile App Development
      {
        title1: "Mobile App | IOS",
        title2: "App Development",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-5.webp",
      },

      {
        title1: "Mobile App | IOS",
        title2: "App Development",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/Robotics.webp",
      },
    
     
      {
        title1: "Mobile App | IOS",
        title2: "App Development",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-3.webp",
      },

      {
        title1: "Mobile App | IOS",
        title2: "App Development",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/GraphyLounge.webp",
      },
      {
        title1: "Mobile App | IOS",
        title2: "App Development",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-2.webp",
      },
      // Add more cards specific to Mobile App Development
    ],

 
  
    "Web Development and Web design": [

      {
      
        title1: "Bhakshanagal | Web development & Web design",
        title2: "Web Development & Web design",
        image:
          "/images/graphics design 1.jpg",
      },
      {
        title1: "Mayon Pager Bags | Web development & Web design",
        title2: "Web Development & Web design ",
        image:
          " https://backergysoft.com/wp-content/uploads/2022/10/ezgif.com-gif-maker-2-600x450.webp",
      },
      {
        title1: "Sahasrara Cinemas | UI/UX design & Web development",
        title2: "Web Development & Web design ",
        image:
          "  https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-1-600x497.webp",
      },

      {
        title1: "Starline Crypto | UI/UX design & Web development",
        title2: "Web Development & Web design ",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-3-100x100.webp",
      },
      
  
  

    ],


    "Digital Marketing": [

      {
        title1: "LMC Company | Social Media Marketing",
        title2: "Digital Marketing",
        image:
          '/images/keyword2.jpg',
      },
      {
        title1: "Starline Crypto | Social Media Marketing",
        title2: "Digital Marketing",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-2.webp",
      },
      {
        title1: "Legend Maritime | Social Media Marketing",
        title2: "Digital Marketing",
        image:
          '/images/keyword.jpg',
      },
     
      {
        title1: "Unikuk Popcorn | Brand Promotion",
        title2: "Digital Marketing",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker.webp",
      },
     
      {
        title1: "Infinity Academy | Social Media Marketing",
        title2: "Digital Marketing",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-6.webp",
      },
    

      {
        title1: "Optimus Robo | Social Media Marketing",
        title2: "Digital Marketing",
        image:
          "      https://backergysoft.com/wp-content/uploads/2017/06/ezgif.com-gif-maker-7.webp",
      },
  
  
 
   
    
  
    ],
    " 3D Design & Animation": [
      {
        title1: "Technology | Business",
        title2: "3D Design & Animation",
        image:
          "/images/animation icon.jpg",
      },

    

      // Add more cards specific to Mobile App Development
    ],


    "Graphic Design": [
      {
      
        title1: "Wika | Education",
        title2: "Graphic design",
        image:
          "/images/graphics design 3.jpg",
      },

      {
      
        title1: "Bhakshanagal | Online",
        title2: "Graphic design",
        image:
          "/images/graphics design 1.jpg",
      },
      {
      
        title1: "Bhakshanagal | Package",
        title2: "Graphic design",
        image:
          "/images/package.jpg",
      },
      {
        title1: "Star Link | Exporting",
        title2: "Graphic design",
        image:
          "/images/graphics design 2.jpg",
      },
      {
      
        title1: "Bhakshanagal | Brochure",
        title2: "Graphic design",
        image:
          "/images/brochure.jpg",
      },
      {
      
        title1: "AI | Presentation",
        title2: "Graphic design",
        image:
          "/images/presentation.jpg",
      },
    

      // Add more cards specific to Mobile App Development
    ],
    "Software Development": [
      {
        title1: "CIPA | Art",
        title2: "Software Development",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/Cipa-2-1.jpg",
      },
      {
        title1: "Fortune Robotics | Technology",
        title2: "Software Development",
        image:
          "https://backergysoft.com/wp-content/uploads/2017/06/Robotics.webp",
      },
      
    ],
   
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
  const [selectedOptionsb, setSelectedOptionsb] = useState([]);

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
        service: selectedOptionsb,
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
    "Social Media Management",
    "Brand Promotion",
    "Mobile App Development",
    "Social Media Marketing",
    "Software Development",
    "Web Development",
    "Web Design",
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





  const [isOpena, setIsOpena] = useState(true);

  const handleClose = () => {
    setIsOpena(false);
  };
  






  const [isOpenb, setIsOpenb] = useState(false);

  const toggleDropdownb = () => {
    setIsOpenb(!isOpenb);
  };
  
  const handleOptionClickb = (option) => {
    const index = selectedOptionsb.indexOf(option);
    if (index === -1) {
      setSelectedOptionsb([...selectedOptionsb, option]);
    } else {
      const updatedOptions = [...selectedOptionsb];
      updatedOptions.splice(index, 1);
      setSelectedOptionsb(updatedOptions);
    }
  };

  const dropdownRefb = useRef(null);
useEffect(() => {
  const handleClickOutsideb = (event) => {
    if (dropdownRefb.current && !dropdownRefb.current.contains(event.target)) {
      setIsOpensb(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutsideb);
  return () => {
    document.removeEventListener("mousedown", handleClickOutsideb);
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


      {isOpena && (
        <div id="up">
        <div className=" popup">
          <div className="popup-inner">
          <div className='close-btn'>
           
            <h2 className="">Quick Contact</h2>
            <div className="buttonstylecont" onClick={handleClose}>
            <IoCloseSharp />
          </div>
            </div>
            <h5 className="mb-3">Welcome to Lunar Enterprises!</h5>
          
            <div class="col-lg-12 col-md-12">
            <div class="contactform">
              <form
              className=""
                onSubmit={(e) => {
                  handleSubmit3(e);
                }}
                class="needs-validation "
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
                    class="inputnamepop"
                  />
                  <div class="invalid-feedback">Please type your Name</div>
                </div>
                <div class="form-field has-validation ">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    aria-describedby="inputGroupPrepend"
                    placeholder="Your Email"
                    pattern="[a-zA-Z0-9]+.+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]{2,4}$"
                    required=""
                    class="inputnamepop"
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
                    class="inputnamepop"
                  />
                  <div class="invalid-feedback">Please enter phone no.</div>
                </div>

                <div className="custom-dropdown has-validation" ref={dropdownRef}>
    <input
      type="text"
      className="inputnamepop"
      onClick={toggleDropdownb}
      placeholder="Our Services"
      value={selectedOptionsb.join(", ")}
      readOnly
    />
    {isOpenb && (
      <div className="dropdown-optionsqu mt-2 mb-2 ">
        {options.map((option, index) => (
          <div
            key={index}
            className={`option ${
              selectedOptionsb.includes(option)
                ? "selectedservicesed m-1"
                : "m-1 selectedservices"
            }`}
            onClick={() => handleOptionClickb(option)}
            style={{
              zIndex: "999",
              backgroundColor: selectedOptionsb.includes(option)
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
                    class="inputnamepop"
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
      )}
      
      <div class="side-bars" style={{zIndex:999}}>
      <div class="s-bar clearfix" style={{right:0}}>
        <a href="tel:+917907574781" class="clicktocall">
          <span class="call-spr "><svg class="svg-inline--fa fa-mobile-alt fa-w-10"
           aria-hidden="true" data-prefix="fas" data-icon="mobile-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="">
           <path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z">
           </path>
           </svg>
          </span>
          <h4>Mobile:</h4>
          <h3 class="pnumlive"><div class="textwidget custom-html-widget">+91 7907574781</div></h3>
        </a>
      </div>
 
    </div>

    <div class="side-barss mt-0" style={{zIndex:999}}>

    <div class="s-barss clearfixs  " style={{right: 0}}>
    <a href="https://api.whatsapp.com/send?phone=7907574781&amp;text= Hi Lunar Seo Team,"  target="_blank" title="Live Chat" class="chatwraps">
      <div class="chat-sprs"><svg class="svg-inline--fa fa-whatsapp fa-w-14" aria-hidden="true" data-prefix="fab" data-icon="whatsapp"
       role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
       <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z">
       </path>
      </svg>
   
      
      </div>
      <h4>Whatsapp:</h4>
      <h3 class="pnumlives"><div class="textwidget custom-html-widget"> +91 7907574781</div></h3>
    </a>
  </div>
  </div>
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
                      <div class="col-md-4 col-3 contact-item  ">
                       {/* <i
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




 */}
                       

















                        
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
                            +91 7907574781
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
              <p className="contentwp">
              NO. 1 Digital Marketing And Web <br/> Development Company
            </p>
              <p className="contentp">
                We are excited to present our proposal for your digital
                marketing, website design, and development needs. At Borcelle,
                we combine creativity, innovation, and strategy to deliver
                exceptional digital solutions that will help your business
                thrive online.
              </p>
              <div className="align-content-center   ">
                <a href="#contactus">
                  <button   className="buttonstyle ">
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
      <div class="container-fluid">
      
        <div class="row text-center mb-3 d-flex justify-content-center align-items-center tabiss itemdis">
         
          {Object.keys(cardData).map((tabName, index) => (
            <div
              class={` widthser col-md-2 col-6 text-center mt-2 d-flex  tab ${
                selectedTab === tabName ? "" : ""
              }`}
              key={index}
              onClick={() => handleTabClick(tabName)}
            >
              <Button className={`   widthser   ${  selectedTab === tabName ? "active-tab" : "non-active"
            }`}>
                <p className=" tab-name  justify-center">{tabName}</p>
              </Button>
            </div>
          ))}
        </div>
    
        <div class="row">
          {cardData[selectedTab].map((card, index) => (
            <div class="col-md-3 col-6" key={index}>
              <div class="cardwhy card animate__animated">
                <img src={card.image} alt={card.title} />
                <div class="card-body content">
                  <h2>{card.title1 || card.title}</h2>
                  <p>{card.title2}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>s
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
                  <a href="tel:917907574781">India: +91 7907574781</a>
                </p>
              </div>
              <div class="d-flex mb-3">
                <i class="fas fa-phone mt-1 me-3 fs-4 color-primary iconww"></i>
                <p class="fs-5">
                  <a href="tel:971502490087">UAE: +971 502490087</a>
                </p>
              </div>
              <div class="d-flex mb-3">
                <i class="fa fa-envelope mt-1 me-3 fs-4 color-primary"></i>
                <p class="fs-5">
                  <a href="mailto:info@lunarenp.com">info@lunarenp.com</a>
                </p>
              </div>
              <div class="d-flex mb-3">
                <a href="https://api.whatsapp.com/send?phone=7907574781&amp;text= Hi Lunar Seo Team,">
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
