import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { AiFillStar } from "react-icons/ai";
import { IoMdArrowDropright } from "react-icons/io";

import "./ProductPageBanner.css";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";
export default function ProductPageBanner() {
  return (
  
      <div className="ProductPageBanner pt-5 pb-5 bg-dark text-white">
        <Container>
          <Row>
            <Col sm={7}>
              {" "}
              <div className="ProductPageBannerlink">
                <Link to="/" className=" text-decoration-none">
                  Home <IoMdArrowDropright color="white" size={20} />
                </Link>

                <Link to="/Product" className=" text-decoration-none" >
                  Tent House
                  {/* <IoMdArrowDropright color="white" size={20} /> */}
                </Link>
{/* 
                <Link to="" className=" text-decoration-none" >
                  JavaScript
                </Link> */}
              </div>
              <div className="ProductPageBannerHeading">
              <div className="h2">Jyoti Tent Decorators</div>
              
               
              </div>
              <div className="ProductPageBannerSubHeading">
               <div className="h5">Tent House, Marriage Lawns, Event Organisers, Birthday Party Decorators, Event Management Companies, Flower Decorators, Wedding Planners, Wedding Decorators and much more.</div>
              </div>
              <div className="ProductPageBannercontent1">
                
                <span>
                  <Link to="" className="text-warning text-decoration-none">
                    <span>4.7</span>
                    <AiFillStar className="text-warning" />
                    <AiFillStar className="text-warning" />{" "}
                    <AiFillStar className="text-warning" />{" "}
                    <AiFillStar className="text-warning" />{" "}
                    <AiFillStar className="text-warning" />
                  </Link>
                </span>
                <span>
                
                    (113,418 ratings)
                  
                </span>
              
              </div>
            
              <div className="ProductPageBannercontent3">
                <span>
                  <BiPhoneCall color="white" />
                </span>
                <Link to="">9001719627</Link>
                
              </div>
            </Col>
            <Col sm={5}></Col>
          </Row>{" "}
        </Container>
      </div>

  );
}
