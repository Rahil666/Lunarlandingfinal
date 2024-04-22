// // // import "slick-carousel/slick/slick-theme.css";
// // // import "slick-carousel/slick/slick.css";
// // // import Head from "next/head";
// // // import Slider from "react-slick";
// // // import { AnimatePresence, motion } from "framer-motion";
// // // import { useEffect, useState } from "react";
// // // import Link from "next/link";

// // // export default function Home() {


// // //   const settings = {
// // //     dots: false,
// // //     infinite: true,
// // //     speed: 3500,
// // //     slidesToShow: 10,
// // //     slidesToScroll: 10,
// // //     autoplay: true, // Enable autoplay
// // //     autoplaySpeed: 2000, // Set autoplay speed in milliseconds
// // //     arrows: false, // Remove arrows
// // //     responsive: [
// // //       {
// // //         breakpoint: 1024,
// // //         settings: {
// // //           slidesToShow: 5,
// // //           slidesToScroll: 1,
// // //         },
// // //       },
// // //       {
// // //         breakpoint: 600,
// // //         settings: {
// // //           slidesToShow: 3,
// // //           slidesToScroll: 1,
// // //         },
// // //       },
// // //     ],
// // //   };


// // //   const settingswhy = {
// // //     dots: true,
// // //     infinite: true,
// // //     speed: 3500,
// // //     slidesToShow: 3,
// // //     slidesToScroll: 5,
// // //     autoplay: true, // Enable autoplay
// // //     autoplaySpeed: 2000, // Set autoplay speed in milliseconds
// // //     arrows: false, // Remove arrows
// // //     responsive: [
// // //       {
// // //         breakpoint: 1024,
// // //         settings: {
// // //           slidesToShow: 2,
// // //           slidesToScroll: 1,
// // //         },
// // //       },
// // //       {
// // //         breakpoint: 600,
// // //         settings: {
// // //           slidesToShow: 1,
// // //           slidesToScroll: 1,
// // //         },
// // //       },
// // //     ],
// // //   };

// // //   const settingsclient = {
// // //     dots: false,
// // //     infinite: true,
// // //     speed: 3500,
// // //     slidesToShow: 3,
// // //     slidesToScroll: 3,
// // //     autoplay: true, // Enable autoplay
// // //     autoplaySpeed: 2000, // Set autoplay speed in milliseconds
// // //     arrows: false, // Remove arrows
// // //     responsive: [
// // //       {
// // //         breakpoint: 1024,
// // //         settings: {
// // //           slidesToShow: 5,
// // //           slidesToScroll: 1,
// // //         },
// // //       },
// // //       {
// // //         breakpoint: 600,
// // //         settings: {
// // //           slidesToShow: 3,
// // //           slidesToScroll: 1,
// // //         },
// // //       },
// // //     ],
// // //   };
// // //   const settingslap = {
// // //     dots: false,
// // //     infinite: true,
// // //     speed: 3500,
// // //     slidesToShow: 1,
// // //     slidesToScroll: 1,
// // //     autoplay: true, // Enable autoplay
// // //     autoplaySpeed: 2000, // Set autoplay speed in milliseconds
// // //   };



// // //     // State variables for each count
// // //     const [count1, setCount1] = useState(0);
// // //     const [count2, setCount2] = useState(0);
// // //     const [count3, setCount3] = useState(0);
// // //     const [count4, setCount4] = useState(0);
  
// // //     const endCount1 = 500; // The number to count up to for count1
// // //     const endCount2 = 700; // The number to count up to for count2
// // //     const endCount3 = 900; // The number to count up to for count3
// // //     const endCount4 = 400; // The number to count up to for count4
  
// // //     // Effect to count up for each count variable
// // //     useEffect(() => {
// // //       const interval1 = setInterval(() => {
// // //         if (count1 < endCount1) {
// // //           setCount1(count1 + 1);
// // //         }
// // //       }, 3); // Adjust the interval to control the speed of counting
  
// // //       const interval2 = setInterval(() => {
// // //         if (count2 < endCount2) {
// // //           setCount2(count2 + 1);
// // //         }
// // //       }, 3); // Adjust the interval to control the speed of counting
  
// // //       const interval3 = setInterval(() => {
// // //         if (count3 < endCount3) {
// // //           setCount3(count3 + 1);
// // //         }
// // //       }, 3); // Adjust the interval to control the speed of counting

// // //       const interval4 = setInterval(() => {
// // //         if (count4 < endCount4) {
// // //           setCount4(count4 + 1);
// // //         }
// // //       }, 3); // Adjust the interval to control the speed of counting
  
// // //       // Cleanup intervals
// // //       return () => {
// // //         clearInterval(interval1);
// // //         clearInterval(interval2);
// // //         clearInterval(interval3);
// // //         clearInterval(interval4);
// // //       };
// // //     }, [count1, count2, count3,count4, endCount1, endCount2, endCount3, endCount4]);


// // //     const [selectedTab, setSelectedTab] = useState("Show All"); // State to track selected tab

// // //     const handleTabClick = (tabName) => {
// // //       setSelectedTab(tabName);
// // //     };
// // //     const cardData = {
// // //       "Show All": [
// // //         {title1: "Infinity Academy | Social Media Design", 
// // //         title2: "Social Media Marketing", image: "/images/Mobile.png" },
// // //         { title: "Card 2", image: "/images/Mobile.png" },
// // //         { title: "Card 1", image: "/images/Mobile.png" },
// // //         { title: "Card 2", image: "/images/Mobile.png" },
// // //         // Add more cards as needed
// // //       ],
// // //       "Mobile App Development": [
// // //         { title1: "Infinity Academy | Social Media Design", 
// // //         title2: "Social Media Marketing",
// // //         image: "/images/Mobile.png" },
// // //         // Add more cards specific to Mobile App Development
// // //       ],
// // //       "App Development": [
// // //         { title2: "App Development", image: "/images/Mobile.png" },
// // //         // Add more cards specific to Mobile App Development
// // //       ],
// // //       " Social Media Marketing": [
// // //         { title2: "Social Media Marketing", image: "/images/Mobile.png" },
// // //         // Add more cards specific to Mobile App Development
// // //       ],
// // //       "IOS Development": [
// // //         { title2: "IOS Development", image: "/images/Mobile.png" },
// // //         // Add more cards specific to Mobile App Development
// // //       ],
// // //       "Brand Promotion": [
// // //         { title2: "Brand Promotion", image: "/images/Mobile.png" },
// // //         // Add more cards specific to Mobile App Development
// // //       ],
// // //       "Web Development": [
// // //         { title2: "Web Development", image: "/images/Mobile.png" },
// // //         // Add more cards specific to Mobile App Development
// // //       ],
// // //       " 3D Design & Animation": [
// // //         { title2: " 3D Design & Animation", image: "/images/Mobile.png" },
// // //         // Add more cards specific to Mobile App Development
// // //       ],
// // //       "Graphic designing": [
// // //         { title2: "Graphic designing", image: "/images/Mobile.png" },
// // //         // Add more cards specific to Mobile App Development
// // //       ],
// // //       "Software Development": [
// // //         { title2: "Software Development", image: "/images/Mobile.png" },
// // //         // Add more cards specific to Mobile App Development
// // //       ],
// // //       // Define data for other tabs similarly
// // //     };
  

// // //   return (
// // //     <>
// // //       <Head>
// // //         <title>Create Next App</title>
// // //         <meta name="description" content="Generated by create next app" />
// // //         <meta name="viewport" content="width=device-width, initial-scale=1" />
// // //         <link rel="icon" href="/favicon.ico" />
// // //       </Head>
// // //       <div id="ea_banner">
// // //         <div className="ea_banner-o ">
// // //           <div class=" container   item mb-3 ">
// // //             <div className="row ">
// // //               <div class="col-6 col-md-5 width bg-danger  ">
// // //                 <img src="/images/lunar white.png" class="logo" alt="Image 1" />
// // //               </div>

// // //               <div class=" col-md-6 d-flex align-items-center item  ">
// // //                 <div class="col-12">
// // //                   <div class="d-flex">
// // //                     <div class=" col-md-5 col-4 contact-item    ">
// // //                       <i class="fas fa-phone  iconww"></i>
// // //                       <h6>0471-3592716</h6>
// // //                     </div>
// // //                     <div class=" col-md-4 col-4 contact-item  ">
// // //                       <i class="fas fa-envelope icon"></i>
// // //                       <h6>info@lunarenp.com</h6>
// // //                     </div>
// // //                     <div class=" col-md-4 col-4 contact-item ">
// // //                       <i class="fas fa-phone icon"></i>
// // //                       <h6>917907574781</h6>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //               </div>
// // //               <div>
              
           

// // //             </div>
// // //           </div>

          

// // //           <div className="container pt-5">
// // //             <div className="d-md-flex col-md-6  ">
// // //               <div className="justify-content-center d-flex">
// // //                 <div className="pcimage">
// // //                   <div className="computer-screen">
// // //                     <div className="screen-content">
// // //                       <Slider {...settingslap}>
// // //                         <div className="computer-display">
// // //                           <img
// // //                             src="http://backergysoft.com/wp-content/uploads/2022/09/Mayon.jpg"
// // //                             alt="Image 1"
// // //                           />
// // //                         </div>
// // //                         <div className="computer-display">
// // //                           <img
// // //                             src="http://backergysoft.com/wp-content/uploads/2022/09/Fortune-Robotics.jpg"
// // //                             alt="Image 1"
// // //                           />
// // //                         </div>
// // //                       </Slider>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //               <div className="  mt-5  col-md-12 justify-content-center d-block  ">
// // //                 <h1 className="contentw">Lunar Enterprises</h1>
// // //                 <p className="contentp">Lorem ipsum dolor sit amet, 
// // //                 consectetur adipiscin
// // //                 . Nullam interdum turpis vitae nibh
// // //                  vestibulum fermentum.</p>
                  
// // //               </div>
              
             
// // //             </div>
// // //           </div>

// // //           <div className="sliderstyle mt-5  container-fluid   ">
// // //           <Slider {...settings}>
// // //             <div>
// // //               <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// // //             </div>
// // //             <div>
// // //               <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// // //             </div>
// // //             <div>
// // //               <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// // //             </div>
// // //             <div>
// // //               <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// // //             </div>
// // //             <div>
// // //               <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// // //             </div>
// // //             <div>
// // //               <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// // //             </div>
// // //             <div>
// // //               <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// // //             </div>
// // //             <div>
// // //               <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// // //             </div>
// // //             <div>
// // //               <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// // //             </div>
// // //             <div>
// // //               <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// // //             </div>
// // //             <div>
// // //               <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// // //             </div>
// // //             <div>
// // //               <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// // //             </div>
// // //           </Slider>
// // //         </div>
// // //         </div>


       
// // //       </div>


// // //       <div id="tabsection">

// // //       <div className="container-fluid">
// // //       {/* Tab buttons */}
// // //       <div className="row text-center d-flex justify-content-center align-items-center">
// // //         {Object.keys(cardData).map((tabName, index) => (
// // //           <div className="col-md-2 col-6 text-center d-flex justify-content-center align-items-center" key={index} 
// // // onClick={() => handleTabClick(tabName)}>
// // //             <h4 className="text-wrap justify-center">{tabName}</h4>
// // //           </div>
// // //         ))}
// // //       </div>
// // //       <div className="row">
// // //       {cardData[selectedTab].map((card, index) => (
// // //         <div className="col-md-3 col-6" key={index}>
// // //           <div className=" cardwhy card   ">
// // //             <img src={card.image} alt={card.title} />
// // //             <div className="card-body content">
// // //             <h2>{card.title1}</h2>
// // //               <p >{card.title2}</p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   </div>


          

     

// // //     </div>




// // //     <div id="bannercout">

// // //     <div className="container">
// // //     <motion.div
// // //     className="numbers"
// // //     initial={{ opacity: 0, scale: 0.5 }}
// // //     animate={{ opacity: 1, scale: 1 }}
// // //     transition={{ duration: 1 }}
// // //   >
// // //     <AnimatePresence>
// // //       <div className="number">
// // //         <h3>{count1}+</h3>
// // //         <h3>Happy 
// // //         Customer
// // //         </h3>
// // //       </div>
// // //       <div className="number">
// // //         <h3>{count2} +</h3>
// // //         <h3>Project</h3>
// // //       </div>
// // //       <div className="number">
// // //         <h3>{count3}+</h3>
// // //         <h3>Clients</h3>
// // //       </div>
// // //       <div className="number">
// // //       <h3>{count4}+</h3>
// // //       <h3>Ecommerce Sales</h3>
// // //     </div>
// // //     </AnimatePresence>
// // //   </motion.div>
    
// // //     </div>
    
// // //     </div>




// // //      <div id="ourserivceses">
// // //       <h1> Our Services </h1>
      

// // //       <div className=" Services container col-md-12" >
// // //       <div className=" topspace  ">
// // //       <div id="ourserivces" className="">
// // //       <Link href='#' className="link">
// // //           <i className="fa fa-angle-double-right space" aria-hidden="true"></i>
// // //           Web Development
// // //       </Link>
// // //   </div>

// // //   <div id="ourserivces" class="d-flex align-items-center full">
// // //   <Link href='#' className="link">
// // //       <i className="fa fa-angle-double-right space" aria-hidden="true"></i>
// // //       Mobile App Development
// // //   </Link>
// // // </div>
// // // <div id="ourserivces" class="d-flex align-items-center full">
// // // <Link href='#' className="link">
// // //     <i className="fa fa-angle-double-right space" aria-hidden="true"></i>
// // //     IOS App Development
// // // </Link>
// // // </div>

// // // <div id="ourserivces" class="d-flex align-items-center full">
// // // <Link href='#' className="link">
// // //     <i className="fa fa-angle-double-right space" aria-hidden="true"></i>
// // //     Software Development
// // // </Link>
// // // </div>
// // // <div id="ourserivces" class="d-flex align-items-center full">
// // // <Link href='#' className="link">
// // //     <i className="fa fa-angle-double-right space" aria-hidden="true"></i>
// // //     Wordpress
// // // </Link>
// // // </div>
      
      
   
// // //       </div>
// // //       <div className=" mobileno ">
// // //       <img src="/images/servicesMobile.jpg" class=" logo" alt="Image 1" />
// // //       </div>
   
// // //       <div className=" topspace  ">
// // //       <div id="ourserivces" className="">
// // //       <Link href='#' className="link">
// // //           <i className="fa fa-angle-double-right space" aria-hidden="true"></i>
// // //           3D Design & Animation
// // //       </Link>
// // //   </div>

// // //   <div id="ourserivces" class="d-flex align-items-center full">
// // //   <Link href='#' className="link">
// // //       <i className="fa fa-angle-double-right space" aria-hidden="true"></i>
// // //       Social Media Marketing
// // //   </Link>
// // // </div>
// // // <div id="ourserivces" class="d-flex align-items-center full">
// // // <Link href='#' className="link">
// // //     <i className="fa fa-angle-double-right space" aria-hidden="true"></i>
// // //     Digital Marketing
// // // </Link>
// // // </div>

// // // <div id="ourserivces" class="d-flex align-items-center full">
// // // <Link href='#' className="link">
// // //     <i className="fa fa-angle-double-right space" aria-hidden="true"></i>
// // //     Graphic designing
// // // </Link>
// // // </div>
// // // <div id="ourserivces" class="d-flex align-items-center full">
// // // <Link href='#' className="link">
// // //     <i className="fa fa-angle-double-right space" aria-hidden="true"></i>
// // //     Brand Promotion
// // // </Link>
// // // </div>
      
      
   
// // //       </div>
// // //       </div>
      
// // //       </div>




// // //       <div id="client">
// // //       <h1> Our Clients </h1>
// // // <div className="d-flex col-md-12 ">
// // // <div className=" mobileno col-md-4  ">
// // // <img src="/images/client.png" class="clientimg " alt="Image 1" />
// // // </div>
// // // <div className="  centerclient col-md-8 mb-5  container">
// // // <Slider {...settingsclient}>
// // //   <div>
// // //     <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// // //   </div>
// // //   <div>
// // //     <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// // //   </div>
// // //   <div>
// // //     <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// // //   </div>
// // //   <div>
// // //     <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// // //   </div>
// // //   <div>
// // //     <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// // //   </div>
// // //   <div>
// // //     <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// // //   </div>
// // //   <div>
// // //     <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// // //   </div>
// // //   <div>
// // //     <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// // //   </div>
// // //   <div>
// // //     <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// // //   </div>
// // //   <div>
// // //     <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// // //   </div>
// // //   <div>
// // //     <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// // //   </div>
// // //   <div>
// // //     <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// // //   </div>
// // // </Slider>
// // // </div>
// // // </div>
// // // </div>







// // // <div id="whyppl" class="container ">
// // // <h1> What People Say's </h1>

// // // <div className="col-md-12 mt-5  ">
// // // <Slider {...settingswhy}>
  
// // // <div class=" ">
// // //   <div class="cardwhy px-3 pt-4 m-3">
// // //       <div class="d-flex align-items-center">
// // //         <img src="/images/Dp.jpg" class="round" />
// // //         <h4 class="px-3">Arun B K <br/> Accountant</h4>
// // //       </div>
// // //       <h4>Amazing Working Atmosphere</h4>
// // //       <p>
// // //         I discovered Lunar as I was searching for a good firm to start my accountant journey as a fresher. I was given the opportunity to get trained under the senior accountant at Lunar. Since Lunar had many clients from abroad, I got exposed to new laws, which added to my skills. This helped me gain a high paid salary abroad.
// // //       </p>
// // //     </div>
// // //   </div>
// // //   <div>
// // //   <div class=" ">
// // //   <div class="cardwhy px-3 pt-4  m-3">
// // //     <div class="d-flex align-items-center">
// // //       <img src="/images/Dp.jpg" class="round" />
// // //       <h4 class="px-3">Arun B K <br/> Accountant</h4>
// // //     </div>
// // //     <h4>Amazing Working Atmosphere</h4>
// // //     <p>
// // //       I discovered Lunar as I was searching for a good firm to start my accountant journey as a fresher. I was given the opportunity to get trained under the senior accountant at Lunar. Since Lunar had many clients from abroad, I got exposed to new laws, which added to my skills. This helped me gain a high paid salary abroad.
// // //     </p>
// // //   </div>
// // // </div>
// // //   </div>
  
 
// // //   <div>
// // //   <div class="">
// // //   <div class="cardwhy px-3 pt-4  m-3">
// // //     <div class="d-flex align-items-center">
// // //       <img src="/images/Dp.jpg" class="round" />
// // //       <h4 class="px-3">Arun B K <br/>Accountant</h4>
// // //     </div>
// // //     <h4>Amazing Working Atmosphere</h4>
// // //     <p>
// // //       I discovered Lunar as I was searching for a good firm to start my accountant journey as a fresher. I was given the opportunity to get trained under the senior accountant at Lunar. Since Lunar had many clients from abroad, I got exposed to new laws, which added to my skills. This helped me gain a high paid salary abroad.
// // //     </p>
// // //   </div>
// // // </div>
// // //   </div>
// // //   <div>
// // //   <div class="">
// // //   <div class="cardwhy px-3 pt-4  m-3">
// // //     <div class="d-flex align-items-center">
// // //       <img src="/images/Dp.jpg" class="round" />
// // //       <h4 className="px-3 col-md-5">Roshan<br/> Accountant</h4>
// // //     </div>
// // //     <h4>Amazing Working Atmosphere</h4>
// // //     <p>
// // //       I discovered Lunar as I was searching for a good firm to start my accountant journey as a fresher. I was given the opportunity to get trained under the senior accountant at Lunar. Since Lunar had many clients from abroad, I got exposed to new laws, which added to my skills. This helped me gain a high paid salary abroad.
// // //     </p>
// // //   </div>
// // // </div>
// // //   </div>
 
 
 


// // // </Slider>
// // // </div>





// // // </div>



// // // <div id="contactus">


// // // <div class="container mt-5 ">
// // // <h2 class="heading lh-1 mb-5">
// // // <span className='headingspan'>It is Easy to connect us</span>
// // // </h2><div class="row">
// // // <div class="col-lg-6 col-md-6">
// // // <div class="d-flex mb-3">

// // // <i class="fas fa-phone mt-1 me-3 fs-4 color-primary iconww"></i>
// // // <p class="fs-5">India: +91 7347482489</p></div><div class="d-flex mb-3">
// // // <i class="fas fa-phone mt-1 me-3 fs-4 color-primary iconww"></i>
// // // <p class="fs-5">UK: +1 9777812319</p>
// // // </div>
// // // <div class="d-flex mb-3"><i class="fa fa-envelope mt-1 me-3 fs-4 color-primary">
// // // </i><p class="fs-5">lunarenterprises.com</p></div>
// // // <div class="d-flex mb-3">

// // // <i class="fa-brands fa-square-whatsapp mt-1 me-3 fs-2 color-primary"></i>
// // // <i class="fa-brands fa-facebook  mt-1 me-3 fs-2 color-primary"></i>
// // // <i class="fa-brands fa-square-instagram  mt-1 me-3 fs-2 color-primary"></i>
// // // <i class="fa-brands fa-square-x-twitter  mt-1 me-3 fs-2 color-primary"></i>
// // // </div>
// // // </div>
// // // <div class="col-lg-6 col-md-6">
// // // <div class="contactform">
// // // <form class="needs-validation" autocomplete="off" novalidate="">
// // // <div class="form-field has-validation">
// // // <input type="hidden" name="action" value="/"/>

// // // <input type="text" id="name" name="name" aria-describedby="inputGroupPrepend"
// // //  placeholder="Your Name" required  className="inputname"/>

// // // <div class="invalid-feedback">Please type your Name</div>

// // // </div>
// // // <div class="form-field has-validation">
// // // <input type="email" id="email" name="email" aria-describedby="inputGroupPrepend" 
// // // placeholder="Your Email" pattern="[a-zA-Z0-9]+.+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]{2,4}$" required=""
// // // className="inputname"
// // // />
// // // <div class="invalid-feedback">Please enter valid email address</div></div><div class="form-field has-validation">
// // // <input type="text" id="phonefield" name="phonefield" aria-describedby="inputGroupPrepend"
// // //  placeholder="Phone Number" pattern="[0-9 ,+]*" minlength="10" maxlength="14" required=""
 
// // //  className="inputname"
// // //  />
// // // <div class="invalid-feedback">Please enter phone no.</div></div><div class="form-field has-validation"/>
// // // <textarea rows="4" id="comments" name="comments" aria-describedby="inputGroupPrepend"
// // //  placeholder="Enter your message here..." required className="inputname"></textarea>
// // // <div class="invalid-feedback">Please enter message field</div>


// // // </form>
// // // <button type="submit" class="btn btn-primary btn-rounded btn-lg mt-5">Submit <i class="fa fa-arrow-right"></i>
// // // </button>
// // // </div></div></div>
// // // </div>

// // // </div>


// // // <div id='globalpresence'>

// // // <div>
// // // <h1>Global Presence</h1>
// // // </div>

// // // <div class="container">
// // //   <div class="row justify-content-center">
// // //     <div class="cardwhy px-3 pt-4 m-3 col-lg-3 col-md-4 col-sm-12 col">
// // //       <div class="d-flex">
// // //         <img src="/images/dubai.png" class="dubai" />
// // //       </div>
// // //       <h4>Dubai</h4>
// // //       <p>
// // //       Building A2 IFZA BusinessmPark – <br/>Dubai Silicon Oasis – Dubai
// // //       </p>
// // //     </div>
    
// // //     <div class="cardwhy px-3 pt-4 m-3 col-lg-3 col-md-4 col-sm-12 col">
// // //       <div class="d-flex">
// // //         <img src="/images/india.jpg" class="dubai" />
// // //       </div>
// // //       <h4>India</h4>
// // //       <p>
// // //       Building A2 IFZA BusinessmPark – <br/>Dubai Silicon Oasis – Dubai
// // //       </p>
// // //     </div>

// // //     <div class="cardwhy px-3 pt-4 m-3 col-lg-3 col-md-4 col-sm-12 col">
// // //       <div class="d-flex">
// // //         <img src="/images/dubai.png" class="dubai" />
// // //       </div>
// // //       <h4>Dubai</h4>
// // //       <p>
// // //       Building A2 IFZA BusinessmPark – <br/>Dubai Silicon Oasis – Dubai
// // //       </p>
// // //     </div>
// // //   </div>
// // // </div>




// // // </div>
// // //     </>
// // //   );
// // // }



// // // /*----------------------tabsection------------------- */
// // // #tabsection {
// // //   background-color: #f3f3f3;
// // //   padding-top: 50px;
// // //   padding-bottom: 100px;
// // // }

// // // .text-wrap{
// // //   color:black;
// // //   font-size: 18px;

// // // }





// // // .bgimage{
  
// // // padding-top: 50dvi;
// // // padding-bottom: 50dvi;
// // // margin: 5px;

// // //   background-image: url('../public/images/Mobile.png');
// // //   background-repeat: no-repeat;
// // //   background-size: cover;
// // // }

// // // .card {
// // //   position: relative;
// // //   width: 100%;
// // //   margin: 5px;
// // //   height: 300px;
// // //   border: 1px solid #ccc;
// // //   overflow: hidden;
// // // }

// // // .card:hover .content {
// // //   opacity: 1;
// // // }


// // // .content {
// // //   position: absolute;
// // //   top: 0;
// // //   left: 0;
// // //   width: 100%;
// // //   height: 100%;
// // //   background-color: rgba(0, 0, 0, 0.80); /* Adjust background color and opacity as needed */
// // //   color: white;
// // //   display: flex;
// // //   flex-direction: column;
// // //   justify-content: center;
// // //   align-items: center;
// // //   padding: 20px;
// // //   opacity: 0;
// // //   transition: opacity 0.3s;
// // // }

// // // .content h2{
// // //   z-index:9999;
// // //   margin: 0;
// // //   color:white;
// // //   font-size: 15px;

// // // }
// // // .content p {
// // //   z-index:9999;
// // //   margin: 0;
// // //   color:white;
// // //   font-size: 15px;
// // //   font-weight: 700px;
// // // }













// // <div id="tabsection">
// // //   <div className="container-fluid">
// // //     <div className="row text-center d-flex justify-content-center align-items-center">
// // //       {Object.keys(cardData).map((tabName, index) => (
// // //         <div
// // //           className="col-md-auto col-6 text-center d-flex justify-content-center align-items-center"
// // //           key={index}
// // //           onClick={() => handleTabClick(tabName)}
// // //           // whileHover={{ scale: 1.1 }}
// // //           // whileTap={{ scale: 0.9 }}
// // //           // style={{ cursor: 'pointer' }}
// // //         >
// // //           <h4  className="text-wrap justify-center">{tabName}</h4>
// // //         </div>
// // //       ))}
// // //     </div>
// // //     <div className="row">
// // //       {cardData[selectedTab]?.map((card, index) => ( // Use optional chaining to avoid errors if selectedTab is null or undefined
// // //         <motion.div
// // //           className="col-md-3 col-6"
// // //           key={index}
// // //           initial={{ opacity: 0, scale: 0.5 }}
// // //           animate={{ opacity: 1, scale: 1 }}
// // //           transition={{ duration: 0.5 }}
// // //         >
// // //           <div className="cardwhy card">
// // //             <img src={card.image} alt={card.title} />
// // //             <div className="card-body content">
// // //               <h2>{card.title1}</h2>
// // //               <p>{card.title2}</p>
// // //             </div>
// // //           </div>
// // //         </motion.div>
// // //       ))}
// // //     </div>
// // //   </div>
// // // </div>



































// //   <div id="tabsection">
// //   <div className="container-fluid">
// //     {/* Tab buttons */}
// //     <div className="row text-center mb-3 d-flex justify-content-center align-items-center">
// //       {Object.keys(cardData).map((tabName, index) => (
// //         <div className={`col-md-2 col-6 text-center mt-2 d-flex justify-content-center align-items-center ${activeTab === tabName ? "active-tab" : ""}`} key={index} onClick={() => handleTabClick(tabName)}>
// //           <h4 className="text-wrap justify-center">{tabName}</h4>
// //         </div>
// //       ))}
// //     </div>
// //     <div className="row">
// //       {cardData[activeTab].map((card, index) => (
// //         <div className="col-md-3 col-6" key={index}>
// //           <div className="cardwhy card">
// //             <img src={card.image} alt={card.title} />
// //             <div className="card-body content">
// //               <h2>{card.title}</h2>
// //               <p>{card.subtitle}</p>
// //             </div>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   </div>
// // </div>






// <div id="ea_banner">
// <div className="ea_banner-o ">
//   <div class=" container   item mb-3 ">
//     <div className="row ">
//       <div class="col-6 col-md-5 width   ">
//         <img src="/images/lunar white.png" class="logo" alt="Image 1" />
//       </div>

//       <div class=" col-md-6 d-flex align-items-center item  ">
//         <div class="col-12">
//           <div class="d-flex">
//             <div class=" col-md-5 col-4 contact-item    ">
//               <i class="fas fa-phone  iconww"></i>
//               <h6>0471-3592716</h6>
//             </div>
//             <div class=" col-md-4 col-4 contact-item  ">
//               <i class="fas fa-envelope icon"></i>
//               <h6>info@lunarenp.com</h6>
//             </div>
//             <div class=" col-md-4 col-4 contact-item ">
//               <i class="fas fa-phone icon"></i>
//               <h6>917907574781</h6>
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
//       <div>
      
   

//     </div>
//   </div>

  

//   <div className="container pt-5">
//     <div className="d-md-flex col-md-6  ">
//       <div className="justify-content-center d-flex">
//         <div className="pcimage">
//           <div className="computer-screen">
//             <div className="screen-content">
//               <Slider {...settingslap}>
//                 <div className="computer-display">
//                   <img
//                     src="http://backergysoft.com/wp-content/uploads/2022/09/Mayon.jpg"
//                     alt="Image 1"
//                   />
//                 </div>
//                 <div className="computer-display">
//                   <img
//                     src="http://backergysoft.com/wp-content/uploads/2022/09/Fortune-Robotics.jpg"
//                     alt="Image 1"
//                   />
//                 </div>
//               </Slider>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="  mt-5  col-md-12 justify-content-center d-block  ">
//         <h1 className="contentw">Lunar Enterprises</h1>
//         <p className="contentp">Lorem ipsum dolor sit amet, 
//         consectetur adipiscin
//         . Nullam interdum turpis vitae nibh
//          vestibulum fermentum.</p>
          
//       </div>
      
     
//     </div>
//   </div>

//   <div className="sliderstyle mt-5  container-fluid   ">
//   <Slider {...settings}>
//     <div>
//       <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
//     </div>
//     <div>
//       <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
//     </div>
//     <div>
//       <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
//     </div>
//     <div>
//       <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
//     </div>
//     <div>
//       <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
//     </div>
//     <div>
//       <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
//     </div>
//     <div>
//       <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
//     </div>
//     <div>
//       <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
//     </div>
//     <div>
//       <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
//     </div>
//     <div>
//       <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
//     </div>
//     <div>
//       <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
//     </div>
//     <div>
//       <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
//     </div>
//   </Slider>
// </div>
// </div>



// </div>



// <div id="tabsection">
// <div className="container-fluid">
//   {/* Tab buttons */}
//   <div className="row text-center mb-3 d-flex justify-content-center align-items-center">
//     {Object.keys(cardData).map((tabName, index) => (
//       <div className="col-md-2 col-6 text-center mt-2 d-flex justify-content-center align-items-center" key={index} 
//       onClick={() => handleTabClick(tabName)}>
//         <h4 className={`text-wrap justify-center ${selectedTab === tabName ? 'active' : ''}`}>{tabName}</h4>
//       </div>
//     ))}
//   </div>
//   <div className="row">
//     {cardData[selectedTab].map((card, index) => (
//       <div className="col-md-3 col-6" key={index}>
//         <div className={`cardwhy card animate__animated ${animations[(index + animationKey) % animations.length]}`}>
//           <img src={card.image} alt={card.title} />
//           <div className="card-body content">
//             <h2>{card.title1}</h2>
//             <p>{card.title2}</p>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>
// </div>

// <div id="bannercout">

// <div className="container">
// <motion.div
// className="numbers"
// initial={{ opacity: 0, scale: 0.5 }}
// animate={{ opacity: 1, scale: 1 }}
// transition={{ duration: 1 }}
// >
// <AnimatePresence>
// <div className="number">
//   <h3>{count1}+</h3>
//   <h3>Happy 
//   Customer
//   </h3>
// </div>
// <div className="number">
//   <h3>{count2} +</h3>
//   <h3>Project</h3>
// </div>
// <div className="number">
//   <h3>{count3}+</h3>
//   <h3>Clients</h3>
// </div>
// <div className="number">
// <h3>{count4}+</h3>
// <h3>Ecommerce Sales</h3>
// </div>
// </AnimatePresence>
// </motion.div>

// </div>

// </div>




// <div id="ourserivceses">
// <h1> Our Services </h1>


// <div className=" Services container col-md-12" >
// <div className=" topspace  ">
// <div id="ourserivces" className="">
// <Link href='#' className="link">
//     <i className="fa fa-angle-double-right space" aria-hidden="true"></i>
//     Web Development
// </Link>
// </div>

// <div id="ourserivces" class="d-flex align-items-center full">
// <Link href='#' className="link">
// <i className="fa fa-angle-double-right space" aria-hidden="true"></i>
// Mobile App Development
// </Link>
// </div>
// <div id="ourserivces" class="d-flex align-items-center full">
// <Link href='#' className="link">
// <i className="fa fa-angle-double-right space" aria-hidden="true"></i>
// IOS App Development
// </Link>
// </div>

// <div id="ourserivces" class="d-flex align-items-center full">
// <Link href='#' className="link">
// <i className="fa fa-angle-double-right space" aria-hidden="true"></i>
// Software Development
// </Link>
// </div>
// <div id="ourserivces" class="d-flex align-items-center full">
// <Link href='#' className="link">
// <i className="fa fa-angle-double-right space" aria-hidden="true"></i>
// Wordpress
// </Link>
// </div>



// </div>
// <div className=" mobileno ">
// <img src="/images/servicesMobile.jpg" class=" logo" alt="Image 1" />
// </div>

// <div className=" topspace  ">
// <div id="ourserivces" className="">
// <Link href='#' className="link">
//     <i className="fa fa-angle-double-right space" aria-hidden="true"></i>
//     3D Design & Animation
// </Link>
// </div>

// <div id="ourserivces" class="d-flex align-items-center full">
// <Link href='#' className="link">
// <i className="fa fa-angle-double-right space" aria-hidden="true"></i>
// Social Media Marketing
// </Link>
// </div>
// <div id="ourserivces" class="d-flex align-items-center full">
// <Link href='#' className="link">
// <i className="fa fa-angle-double-right space" aria-hidden="true"></i>
// Digital Marketing
// </Link>
// </div>

// <div id="ourserivces" class="d-flex align-items-center full">
// <Link href='#' className="link">
// <i className="fa fa-angle-double-right space" aria-hidden="true"></i>
// Graphic designing
// </Link>
// </div>
// <div id="ourserivces" class="d-flex align-items-center full">
// <Link href='#' className="link">
// <i className="fa fa-angle-double-right space" aria-hidden="true"></i>
// Brand Promotion
// </Link>
// </div>



// </div>
// </div>

// </div>




// <div id="client">
// <h1> Our Clients </h1>
// <div className="d-flex col-md-12 ">
// <div className=" mobileno col-md-4  ">
// <img src="/images/client.png" class="clientimg " alt="Image 1" />
// </div>
// <div className="  centerclient col-md-8 mb-5  container">
// <Slider {...settingsclient}>
// <div>
// <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// </div>
// <div>
// <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// </div>
// <div>
// <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// </div>
// <div>
// <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// </div>
// <div>
// <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// </div>
// <div>
// <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// </div>
// <div>
// <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// </div>
// <div>
// <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// </div>
// <div>
// <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// </div>
// <div>
// <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// </div>
// <div>
// <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// </div>
// <div>
// <img src="  http://backergysoft.com/wp-content/uploads/2022/09/partnerIcon15as.png" />
// </div>
// </Slider>
// </div>
// </div>
// </div>







// <div id="whyppl" class="container ">
// <h1> What People Say's </h1>

// <div className="col-md-12 mt-5  ">
// <Slider {...settingswhy}>

// <div class=" ">
// <div class="cardwhy px-3 pt-4 m-3">
// <div class="d-flex align-items-center">
//   <img src="/images/Dp.jpg" class="round" />
//   <h4 class="px-3">Arun B K <br/> Accountant</h4>
// </div>
// <h4>Amazing Working Atmosphere</h4>
// <p>
//   I discovered Lunar as I was searching for a good firm to start my accountant journey as a fresher. I was given the opportunity to get trained under the senior accountant at Lunar. Since Lunar had many clients from abroad, I got exposed to new laws, which added to my skills. This helped me gain a high paid salary abroad.
// </p>
// </div>
// </div>
// <div>
// <div class=" ">
// <div class="cardwhy px-3 pt-4  m-3">
// <div class="d-flex align-items-center">
// <img src="/images/Dp.jpg" class="round" />
// <h4 class="px-3">Arun B K <br/> Accountant</h4>
// </div>
// <h4>Amazing Working Atmosphere</h4>
// <p>
// I discovered Lunar as I was searching for a good firm to start my accountant journey as a fresher. I was given the opportunity to get trained under the senior accountant at Lunar. Since Lunar had many clients from abroad, I got exposed to new laws, which added to my skills. This helped me gain a high paid salary abroad.
// </p>
// </div>
// </div>
// </div>


// <div>
// <div class="">
// <div class="cardwhy px-3 pt-4  m-3">
// <div class="d-flex align-items-center">
// <img src="/images/Dp.jpg" class="round" />
// <h4 class="px-3">Arun B K <br/>Accountant</h4>
// </div>
// <h4>Amazing Working Atmosphere</h4>
// <p>
// I discovered Lunar as I was searching for a good firm to start my accountant journey as a fresher. I was given the opportunity to get trained under the senior accountant at Lunar. Since Lunar had many clients from abroad, I got exposed to new laws, which added to my skills. This helped me gain a high paid salary abroad.
// </p>
// </div>
// </div>
// </div>
// <div>
// <div class="">
// <div class="cardwhy px-3 pt-4  m-3">
// <div class="d-flex align-items-center">
// <img src="/images/Dp.jpg" class="round" />
// <h4 className="px-3 col-md-5">Roshan<br/> Accountant</h4>
// </div>
// <h4>Amazing Working Atmosphere</h4>
// <p>
// I discovered Lunar as I was searching for a good firm to start my accountant journey as a fresher. I was given the opportunity to get trained under the senior accountant at Lunar. Since Lunar had many clients from abroad, I got exposed to new laws, which added to my skills. This helped me gain a high paid salary abroad.
// </p>
// </div>
// </div>
// </div>





// </Slider>
// </div>





// </div>



// <div id="contactus">


// <div class="container mt-5 ">
// <h2 class="heading lh-1 mb-5">
// <span className='headingspan'>It is Easy to connect us</span>
// </h2><div class="row">
// <div class="col-lg-6 col-md-6">
// <div class="d-flex mb-3">

// <i class="fas fa-phone mt-1 me-3 fs-4 color-primary iconww"></i>
// <p class="fs-5">India: +91 7347482489</p></div><div class="d-flex mb-3">
// <i class="fas fa-phone mt-1 me-3 fs-4 color-primary iconww"></i>
// <p class="fs-5">UK: +1 9777812319</p>
// </div>
// <div class="d-flex mb-3"><i class="fa fa-envelope mt-1 me-3 fs-4 color-primary">
// </i><p class="fs-5">lunarenterprises.com</p></div>
// <div class="d-flex mb-3">

// <i class="fa-brands fa-square-whatsapp mt-1 me-3 fs-2 color-primary"></i>
// <i class="fa-brands fa-facebook  mt-1 me-3 fs-2 color-primary"></i>
// <i class="fa-brands fa-square-instagram  mt-1 me-3 fs-2 color-primary"></i>
// <i class="fa-brands fa-square-x-twitter  mt-1 me-3 fs-2 color-primary"></i>
// </div>
// </div>
// <div class="col-lg-6 col-md-6">
// <div class="contactform">
// <form class="needs-validation" autocomplete="off" novalidate="">
// <div class="form-field has-validation">
// <input type="hidden" name="action" value="/"/>

// <input type="text" id="name" name="name" aria-describedby="inputGroupPrepend"
// placeholder="Your Name" required  className="inputname"/>

// <div class="invalid-feedback">Please type your Name</div>

// </div>
// <div class="form-field has-validation">
// <input type="email" id="email" name="email" aria-describedby="inputGroupPrepend" 
// placeholder="Your Email" pattern="[a-zA-Z0-9]+.+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]{2,4}$" required=""
// className="inputname"
// />
// <div class="invalid-feedback">Please enter valid email address</div></div><div class="form-field has-validation">
// <input type="text" id="phonefield" name="phonefield" aria-describedby="inputGroupPrepend"
// placeholder="Phone Number" pattern="[0-9 ,+]*" minlength="10" maxlength="14" required=""

// className="inputname"
// />
// <div class="invalid-feedback">Please enter phone no.</div></div><div class="form-field has-validation"/>
// <textarea rows="4" id="comments" name="comments" aria-describedby="inputGroupPrepend"
// placeholder="Enter your message here..." required className="inputname"></textarea>
// <div class="invalid-feedback">Please enter message field</div>


// </form>
// <button type="submit" class="btn btn-primary btn-rounded btn-lg mt-5">Submit <i class="fa fa-arrow-right"></i>
// </button>
// </div></div></div>
// </div>

// </div>


// <div id='globalpresence'>

// <div>
// <h1>Global Presence</h1>
// </div>

// <div class="container">
// <div class="row justify-content-center">
// <div class="cardwhy px-3 pt-4 m-3 col-lg-3 col-md-4 col-sm-12 col">
// <div class="d-flex">
//   <img src="/images/dubai.png" class="dubai" />
// </div>
// <h4>Dubai</h4>
// <p>
// Building A2 IFZA BusinessmPark – <br/>Dubai Silicon Oasis – Dubai
// </p>
// </div>

// <div class="cardwhy px-3 pt-4 m-3 col-lg-3 col-md-4 col-sm-12 col">
// <div class="d-flex">
//   <img src="/images/india.jpg" class="dubai" />
// </div>
// <h4>India</h4>
// <p>
// Building A2 IFZA BusinessmPark – <br/>Dubai Silicon Oasis – Dubai
// </p>
// </div>

// <div class="cardwhy px-3 pt-4 m-3 col-lg-3 col-md-4 col-sm-12 col">
// <div class="d-flex">
//   <img src="/images/dubai.png" class="dubai" />
// </div>
// <h4>Dubai</h4>
// <p>
// Building A2 IFZA BusinessmPark – <br/>Dubai Silicon Oasis – Dubai
// </p>
// </div>
// </div>
// </div>




// </div>