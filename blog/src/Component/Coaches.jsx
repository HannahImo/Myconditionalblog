import React from "react";
import Coaches_Component from "./Coaches_Component";

import styles from "../Component/Coaches.module.css";

function Coaches() {
  let Coaches_data = [
    
    {
      id: 1,
      img: "/", alt:'/',
      title: 'Amanda Moxham',
      name: "Mentor",
      width: '80',
      height: '80',
      body: "Specialties: College/New Grads, New Managers, Mid Career",
      
    },

    {
      id: 2,
      img: "/", alt: '/',
      title: "Joy C. Lin",
      name: 'Coach',
      width: '80',
      height: '80',
      body: "Specialties: Mid Career, Executives, Women",
      
    },

    {
      id: 3,
      img: "/", alt: '/',
      title: 'Alex Durand',
      name: 'Master Coach',
      body: "Specialties: New Managers, Mid Career, Executives",
    },
    {
      id: 4,
      img: "/", alt:'/',
      title: 'Tamara Ellison',
      name: 'Mentor',
      body: "Specialties: New Managers, Mid Career, Executives",
    },

    {
      id: 5,
      img: "/", alt:'/',
      title: 'Steven Davis',
      name: 'Coach',
      body: "Specialties: College/New Grads, Startups, Engineering/Tech",
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
        Meet The Coaches{" "}
      </a>
    </div>
  );
}

export default Coaches;
