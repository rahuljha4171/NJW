import React, { Component, Fragment } from "react";
import ScrollToTop from "react-scroll-up";
import Slider from "react-slick";
import { slideSlick } from "../page-demo/script";
import BlogContent from "../elements/blog/BlogContent";
import Header from "../component/header/HeaderFive";
import FooterTwo from "../component/footer/FooterTwo";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css'

import Helmet from "../component/common/Helmet";

import {
    FiCast,
    FiLayers,
    FiUsers,
    FiChevronUp
} from "react-icons/fi";

import Portfolio from "../component/HomeLayout/homeOne/Portfolio";

const SlideList = [
    {
        textPosition: "text-right",
        bgImage: "bg_image--34",
        category: "",
        title: "Business.",
        description:
            "There are many variations of passages but the majority have suffered alteration.",
        buttonText: "Contact Us",
        buttonLink: "/contact",
    },
    {
        textPosition: "text-left",
        bgImage: "bg_image--31",
        category: "",
        title: "Agency.",
        description:
            "There are many variations of passages but the majority have suffered alteration.",
        buttonText: "Contact Us",
        buttonLink: "/contact",
    },
];

const ServiceListOne = [
    {
        icon: <FiCast />,
        title: "Business Stratagy",
        description:
            "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
    {
        icon: <FiLayers />,
        title: "Website Development",
        description:
            "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
    {
        icon: <FiUsers />,
        title: "Marketing & Reporting",
        description:
            "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
    {
        icon: <FiCast />,
        title: "Business Stratagy",
        description:
            "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
    {
        icon: <FiLayers />,
        title: "Website Development",
        description:
            "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
    {
        icon: <FiUsers />,
        title: "Marketing & Reporting",
        description:
            "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
];


class Home extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
        };
        this.openModal = this.openModal.bind(this);
    }
    openModal() {
        this.setState({ isOpen: true });
    }
    render() {
        var namesItemOne = [
            "The Philosophy Of business analytics",
            "Fast-Track Your business",
            "Lies And Damn Lies About business",
            "The Ultimate Deal On business",
        ];
        var namesItemTwo = [
            "Proof That business Really Works",
            "Here Is What You Should Do For Your business",
            "The Hidden Mystery Behind business",
        ];

        const PostList = BlogContent.slice(0, 3);

        const testimonials = [
            {
                id: 1,
                quote: "I love working with not just website. The work on out of box solution and provide dedicated support to resolve issues and make changes. The best team to work with. ",
                reviewer: "Marley",
                image: "https://www.findtherightclick.com/wp-content/uploads/2017/07/Matt-T-Testimonial-pic.jpg",
            },
            {
                id: 1,
                quote: "I love working with not just website. The work on out of box solution and provide dedicated support to resolve issues and make changes. The best team to work with. ",
                reviewer: "Marley",
                image: "https://www.findtherightclick.com/wp-content/uploads/2017/07/Matt-T-Testimonial-pic.jpg",
            },
            {
                id: 1,
                quote: "I love working with not just website. The work on out of box solution and provide dedicated support to resolve issues and make changes. The best team to work with. ",
                reviewer: "Marley",
                image: "https://www.findtherightclick.com/wp-content/uploads/2017/07/Matt-T-Testimonial-pic.jpg",
            },
            {
                id: 1,
                quote: "I love working with not just website. The work on out of box solution and provide dedicated support to resolve issues and make changes. The best team to work with. ",
                reviewer: "Marley",
                image: "https://www.findtherightclick.com/wp-content/uploads/2017/07/Matt-T-Testimonial-pic.jpg",
            },
            {
                id: 1,
                quote: "I love working with not just website. The work on out of box solution and provide dedicated support to resolve issues and make changes. The best team to work with. ",
                reviewer: "Marley",
                image: "https://www.findtherightclick.com/wp-content/uploads/2017/07/Matt-T-Testimonial-pic.jpg",
            },

        ];

        return (
            <Fragment>
                <Helmet pageTitle="Not Just Website" />

                {/* Start Header Area  */}
                <Header
                    headerPosition="header--static logoresize"
                    logo="all-dark"
                    color="color-black"
                />
                {/* End Header Area  */}

                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    <div className="slider-activation">
                        <Slider className="rn-slick-dot dot-light" {...slideSlick}>
                            {SlideList.map((value, index) => (
                                <div
                                    className={`slide slide-style-2 slider-box-content without-overlay d-flex align-items-center justify-content-center bg_image ${value.bgImage}`}
                                    key={index}
                                >
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className={`inner ${value.textPosition}`}>
                                                    {value.category ? <span>{value.category}</span> : ""}
                                                    {value.title ? (
                                                        <h1 className="title">{value.title}</h1>
                                                    ) : (
                                                        ""
                                                    )}
                                                    {value.description ? (
                                                        <p className="description">{value.description}</p>
                                                    ) : (
                                                        ""
                                                    )}
                                                    {value.buttonText ? (
                                                        <div className="slide-btn">
                                                            <a
                                                                className="rn-button-style--2 btn-solid"
                                                                href={`${value.buttonLink}`}
                                                            >
                                                                {value.buttonText}
                                                            </a>
                                                        </div>
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                {/* End Slider Area   */}


                <div className="container pt--50">
                    <div className="section-title">
                        <h2 className="title">Services</h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but.
                        </p>

                    </div>
                </div>


                {/* Start Service Area */}
                <div className="service-area ptb--30 bg_color--1">
                    <div className="container">
                        <div className="row service-one-wrapper">
                            {ServiceListOne.map((val, i) => (
                                <div
                                    className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                                    key={i}
                                >
                                    <a className="text-center" href="/service-details">
                                        <div className="service service__style--2">
                                            <div className="icon">{val.icon}</div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Service Area */}

                {/* Start Featured Service Area  */}
                <div className="rn-featured-service-area pt--90 pb--120 bg_color--5">
                    <div className="container w-75">
                        <div className="row">
                            {/* Start Single Service  */}
                            <div className="col-lg-3 col-md-6 col-12 mt--30">
                                <div className="section-title">
                                    <h2 className="title">Why</h2>
                                    <h3>Choose Us?</h3>

                                </div>
                            </div>
                            {/* End Single Service  */}

                            {/* Start Single Service  */}
                            <div className="col-lg-9">
                                <div className="row">
                                    <div className="">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur nostrum, nesciunt unde repudiandae cupiditate magnam quia assumenda, a eos sed nobis accusamus architecto eum consequatur ipsum exercitationem dolores debitis error.
                                            Voluptatem iusto reprehenderit labore quia repudiandae voluptas eum fugit blanditiis quod obcaecati minus, est, illum nemo! Quo ducimus saepe, blanditiis qui, voluptatum recusandae optio distinctio perspiciatis quod tempore ut veritatis.</p>

                                    </div>
                                </div>
                            </div>
                            {/* End Single Service  */}
                        </div>
                    </div>
                </div>
                {/* End Featured Service Area  */}


                {/* Start Portfolio Area */}
                <div className="portfolio-area ptb--120 bg_color--1">
                    <div className="portfolio-sacousel-inner mb--55">
                        <Portfolio />
                    </div>
                </div>
                {/* End Portfolio Area */}



                <div className="testimonial-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2>Our Portfolio</h2>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Carousel interval={3000} pause={false} /* Adjust interval (in milliseconds) as needed */>
                            {testimonials.map(testimonial => (
                                <Carousel.Item key={testimonial.id}>
                                    <div className="testimonial-container">
                                        <p className="quote">{testimonial.quote}</p>
                                        <img
                                            className="d-block mx-auto testimonial-img"
                                            src={testimonial.image}
                                            alt={testimonial.reviewer}
                                        />
                                        <p className="reviewer">{testimonial.reviewer}</p>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>


                </div>



                {/* Start Footer Style  */}
                <FooterTwo />
                {/* End Footer Style  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
            </Fragment>
        );
    }
}
export default Home;
