import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { BiCheck } from "react-icons/bi";
import { BrowserRouter, Link } from "react-router-dom";
import { SiUdemy } from "react-icons/si";
import ProductPageBanner from "../../Components/BannerSection/ProductPageBanner/ProductPageBanner";
import "./ProductDetailsPage.css";
import AccordionPannel from "../../Components/ProductPageComponent/AccordionPannel/AccordionPannel";
import ProductPageSidebarCard from "../../Components/Carts/ProductPageCard/ProductPageSidebarCard/ProductPageSidebarCard";
import Featuredreview from "../../Components/Carts/ProductPageCard/Featuredreview/Featuredreview";
import Studentalsobought from "../../Components/Carts/ProductPageCard/Studentsalsobought/Studentsalsobought";
import FrequentlyBoughtTogether from "../../Components/Carts/ProductPageCard/FrequentlyBoughtTogether/FrequentlyBoughtTogether";
import { AiOutlinePlus } from "react-icons/ai";
import Instructor from "../../Components/Carts/ProductPageCard/Instructor/Instructor";
import Studentfeedback from "../../Components/ProductPageComponent/Studentfeedback/Studentfeedback";
import Reviews from "../../Components/ProductPageComponent/Reviews/Reviews";
import MoreCoursesby from "../../Components/Carts/ProductPageCard/MoreCoursesby/MoreCoursesby";

export default function ProductDetailsPage() {
  return (

    <div className="">
      <ProductPageBanner />

      <div className="container my-3 card border-0  bg-light">
        <h3 className="h2">Description</h3>
        <div className="card-body">
          <div className="h5 card-title">
            Jyoti Tent Decorators in Borkheda, Kota-rajasthan
          </div>
       
          <p>
            <em>
              "Jyoti Tent Decorators in Kota-rajasthan is one of the leading businesses in the Tent House. Also known for Tent House, Marriage Lawns, Event Organisers, Birthday Party Decorators, Event Management Companies, Flower Decorators, Wedding Planners, Wedding Decorators and much more. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of Jyoti Tent Decorators, Kota-rajasthan."
            </em>{" "}
          
          </p>
          {/* <p>
            <br />
          </p>
          <p>
            JavaScript is the most popular programming language in the
            world. It powers the entire modern web. It provides millions
            of high-paying jobs all over the world.
          </p>
          <p>
            That's why you want to learn JavaScript too. And you came to
            the right place!
          </p>
          <p>
            <br />
          </p>
          <p>
            <strong>
              Why is this the right JavaScript course for you?
            </strong>
          </p> */}
        </div>
  
  
  
      </div>
      <div className="container">
      <div className="my-3">
                <Instructor />
              </div>
              <div className="my-3">
                <Studentfeedback />
              </div>
              <div className="my-3">
                <Reviews />
              </div>
      </div>
    
    </div>

  );
}
