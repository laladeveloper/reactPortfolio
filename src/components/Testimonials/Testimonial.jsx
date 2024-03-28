import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Saqlain was an invaluable asset to my e-commerce startup. He not only built a clean and user-friendly frontend but also ensured a robust backend that could handle our growing traffic. His ability to communicate complex technical concepts in a clear and concise manner made it easy for me, a non-technical founder, to understand the development process. I highly recommend John for any full-stack development project!",
    },
    {
      img: profilePic2,
      review:
        "Saqlain was a fantastic developer to collaborate with on our client's website redesign. She was incredibly responsive and always met deadlines. Her problem-solving skills were exceptional, and she consistently found creative solutions to unexpected challenges. Sarah's strong understanding of both front-end and back-end development made the project run smoothly and efficiently. We'll definitely be requesting her expertise for future projects.",
    },
    {
      img: profilePic3,
      review:
        "Saqlain exceeded our expectations when it came to developing our new internal application. His expertise in full-stack development allowed him to work independently on all aspects of the project, from designing the database schema to building a user-friendly interface. David was highly adaptable and readily incorporated feedback throughout the development process. He's a valuable asset for any team seeking a skilled and reliable full-stack developer.",
    },
    {
      img: profilePic4,
      review:
        "I hired Saqlain to develop a custom website for my bakery. From the initial consultation to the final launch, she was professional, patient, and always took the time to understand my vision. Maria went above and beyond by suggesting SEO best practices and even helping me set up an email marketing campaign. Her full-stack skills and attention to detail resulted in a website that not only looks beautiful but also attracts new customers. I wouldn't hesitate to recommend her services!",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={true}
        loop
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span className="review">{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
