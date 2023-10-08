import React from "react";
import "./Projects.scss";
import Navbar from "../Navbar/Navbar";
import pro1_bg1 from "../../assets/images/pro1_1.png";
import pro1_bg2 from "../../assets/images/pro1_5.png";
import pro1_bg3 from "../../assets/images/pro1_3.png";
import pro2_bg1 from "../../assets/images/pro2_1.png";
import pro2_bg2 from "../../assets/images/pro2_2.png";
import pro2_bg3 from "../../assets/images/pro2_3.png";
import { Carousel } from "@material-tailwind/react";

function Projects() {
  return (
    <>
      <div className="introduction">
        <div className="text-white">
          <Navbar></Navbar>
        </div>
        <div className="text-center my-12">
          <h1 className="project-heading text-5xl font-bold">Tavola Italiano</h1>
        </div>
        <div className="introduction-dish-row">
          <div className="introduction-dish-col">
            <p align="justify">
              In restaurant management website, I have combined delicious
              Italian food with modern technology to create wonderful menu. My
              website uses Angular, Tailwind CSS, Node.js and MySQL. Explore the
              blend of great food on my website, making dining a delightful
              experience
            </p>
            <br />
            <p className="font-bold">Key Features: </p>
            <ul>
              <li>
                <span className="font-bold">User-Friendly Reservations</span>:
                Easily reserve a table for your special dining occasions with
                just a few clicks.
              </li>
              <li>
                <span className="font-bold">User Authentication</span>: Secure
                login and logout functionality for customers and admin
              </li>
              <li>
                <span className="font-bold">Menu Management</span>: Admins can
                update and manage the restaurant's menu offerings.
              </li>
              <li>
                <span className="font-bold">Reservation Control</span>: Admins
                have full control over reservations, making it simple to manage
                bookings
              </li>
              <li>
                <span className="font-bold">Azure hosting</span>: My database is
                hosted on Azure, ensuring data safely and reliability
              </li>
              <li>
                <span className="font-bold">GitHub</span>:
                <a
                  className="font-bold underline"
                  href="https://github.com/phthien241/Restaurant-TavolaItaliano"
                >
                  Source
                </a>
              </li>
              <li>
                <span className="font-bold">Live Website</span>:{" "}
                <a
                  className="font-bold underline"
                  href="https://calm-reaches-08548-92688d8f44a5.herokuapp.com/"
                >
                  Restaurant
                </a>
                <p>
                  {" "}
                  <span className="font-bold">Admin access</span>: Email:
                  admin@email.com, Password: 123
                </p>
              </li>
            </ul>
          </div>
          <div className="introduction-dish-col">
            <div className="wrap-dish">
              <Carousel className="carousel rounded-xl">
                <img
                  src={pro1_bg1}
                  alt="image 1"
                  className="h-full object-cover"
                />
                <img src={pro1_bg2} alt="" className="h-full object-cover" />
                <img
                  src={pro1_bg3}
                  alt={pro1_bg3}
                  className="h-full object-cover"
                />
              </Carousel>
            </div>
          </div>
          <div></div>
        </div>
        <div className="text-center my-12">
          <h1 className="project-heading text-5xl font-bold">Voyage Vista</h1>
        </div>
        <div className="introduction-space-row">
          <div className="introduction-space-col">
            <div className="wrap-space">
              <Carousel className="carousel rounded-xl">
                <img
                  src={pro2_bg1}
                  alt="image 1"
                  className="h-full object-cover"
                />
                <img src={pro2_bg2} alt="" className="h-full object-cover" />
                <img
                  src={pro2_bg3}
                  alt={pro1_bg3}
                  className="h-full object-cover"
                />
              </Carousel>
            </div>
          </div>
          <div className="introduction-space-col">
            <p align="justify">
              In traveling website, I show a gateway to a world of wanderlust
              and adventure. This website serves as a platform for users to
              access information about tourist attractions and various
              countries. My website uses Angular, Node.js and NoSQL (MongoDB).
            </p>
            <br />
            <p className="font-bold">Key Features: </p>
            <ul>
              <li>
                <span className="font-bold">User-Friendly Reservations</span>:
                Easily reserve a table for your special dining occasions with
                just a few clicks.
              </li>
              <li>
                <span className="font-bold">User Authentication</span>: Secure
                login and logout functionality for admin
              </li>
              <li>
                <span className="font-bold">Admin Management</span>: Admins can
                update and manage the country and tourist attraction list.
              </li>
              <li>
                <span className="font-bold">Automatic Login and Logout</span>:
                Enjoy the convenience of automatic login and logout, enhancing
                user convenience.
              </li>
              <li>
                <span className="font-bold">GitHub</span>:
                <a
                  className="font-bold underline"
                  href="https://github.com/phthien241/Travel-Website-Voyage-Vista"
                >
                  Source
                </a>
              </li>
              <li>
                <span className="font-bold">Live Website</span>:{" "}
                <a
                  className="font-bold underline"
                  href="https://master--gregarious-taffy-8ade16.netlify.app/"
                >
                  Voyage Vista
                </a>
                <p>
                  {" "}
                  <span className="font-bold">Admin access</span>: Email:
                  thienpham@voyagevista.com.au, Password: 123
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
