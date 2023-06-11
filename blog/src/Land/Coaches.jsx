import React from "react";
import Coaches_Component from "../Component/Coaches_Component";

import styles from "../Component/Coaches.module.css";

function Coaches() {
  let Coaches_data = [
    {
      id: 1,
      img: "https://w0.peakpx.com/wallpaper/207/306/HD-wallpaper-sight-see-ing-pretty-sun-beautiful-sunset-adorable-sea-sweet-nice-anime-beauty-anime-girl-sunrise-scenery-female-horizon-lovely-ocean-brown-hair-skirt-blouse-sky-short-hair-cute.jpg",
      body: "What Critical Thinking Is—And 7 Ways to Improve Yours",
      title: "Alyse Kalish",
    },

    {
      id: 2,
      img: "https://w0.peakpx.com/wallpaper/207/306/HD-wallpaper-sight-see-ing-pretty-sun-beautiful-sunset-adorable-sea-sweet-nice-anime-beauty-anime-girl-sunrise-scenery-female-horizon-lovely-ocean-brown-hair-skirt-blouse-sky-short-hair-cute.jpg",
      body: "What Critical Thinking Is—And 7 Ways to Improve Yours",
      title: "samheat Kalish",
    },
    {
      id: 3,
      img: "https://w0.peakpx.com/wallpaper/207/306/HD-wallpaper-sight-see-ing-pretty-sun-beautiful-sunset-adorable-sea-sweet-nice-anime-beauty-anime-girl-sunrise-scenery-female-horizon-lovely-ocean-brown-hair-skirt-blouse-sky-short-hair-cute.jpg",
      body: "What Critical Thinking Is—And 7 Ways to Improve Yours",
      title: "samheat Kalish",
    },

    {
      id: 4,
      img: "https://w0.peakpx.com/wallpaper/207/306/HD-wallpaper-sight-see-ing-pretty-sun-beautiful-sunset-adorable-sea-sweet-nice-anime-beauty-anime-girl-sunrise-scenery-female-horizon-lovely-ocean-brown-hair-skirt-blouse-sky-short-hair-cute.jpg",
      body: "What Critical Thinking Is—And 7 Ways to Improve Yours",
      title: "samheat Kalish",
    },

    {
      id: 5,
      img: "https://w0.peakpx.com/wallpaper/207/306/HD-wallpaper-sight-see-ing-pretty-sun-beautiful-sunset-adorable-sea-sweet-nice-anime-beauty-anime-girl-sunrise-scenery-female-horizon-lovely-ocean-brown-hair-skirt-blouse-sky-short-hair-cute.jpg",
      body: "What Critical Thinking Is—And 7 Ways to Improve Yours",
      title: "samheat Kalish",
    },

    {
      id: 6,
      img: "https://w0.peakpx.com/wallpaper/207/306/HD-wallpaper-sight-see-ing-pretty-sun-beautiful-sunset-adorable-sea-sweet-nice-anime-beauty-anime-girl-sunrise-scenery-female-horizon-lovely-ocean-brown-hair-skirt-blouse-sky-short-hair-cute.jpg",
      body: "What Critical Thinking Is—And 7 Ways to Improve Yours",
      title: "samheat Kalish",
    },
  ];
  return (
    <div className="coaches-container">
      <div className="sub-coaches-container">
        <h2 className="heading"> Try Coach Connect</h2>
        <p className="body">
          {" "}
          Meet hundreds of certified coaches who are trained to help you improve{" "}
          <br></br>
          your resume, create a strategy for your job search, and more
        </p>
      </div>

      <div className="coach-content-wrapper">
        <div className={styles["coach-ul"]}>
          <Coaches_Component ourdata={Coaches_data} />
        </div>
      </div>
      <a href="/" className="btn-link">
        {" "}
        Meet The Coaches{" "}
      </a>
    </div>
  );
}

export default Coaches;
