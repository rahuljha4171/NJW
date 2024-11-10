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
        title: "Digital Marketing",
        description:
            "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
    {
        icon: <FiLayers />,
        title: "Bookkeeping Service",
        description:
            "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
    {
        icon: <FiUsers />,
        title: "Payroll Service",
        description:
            "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
    {
        icon: <FiCast />,
        title: "HR Service",
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
                            Our services offer expert solutions in digital marketing, bookkeeping, HR, and business coaching for growth.

                        </p>

                    </div>
                </div>


                {/* Start Service Area */}
                <div className="service-area ptb--30 bg_color--1">
                    <div className="container">
                        <div className="row service-one-wrapper">
                            <div
                                className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"

                            >
                                <a className="text-center" href="/digital-marketing">
                                    <div className="service service__style--2">
                                        <div className="icon"><FiCast /></div>
                                        <div className="content">
                                            <h3 className="title">Digital Marketing</h3>
                                            <p>Digital Marketing uses online channels to promote brands, engage audiences, and drive business growth.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div
                                className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"

                            >
                                <a className="text-center" href="/bookkeeping-service">
                                    <div className="service service__style--2">
                                        <div className="icon"><FiLayers /></div>
                                        <div className="content">
                                            <h3 className="title">Bookkeeping Service</h3>
                                            <p>Efficiently manage financial records with accurate transaction tracking, reconciliation, and comprehensive financial reporting.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div
                                className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"

                            >
                                <a className="text-center" href="/business-coaching">
                                    <div className="service service__style--2">
                                        <div className="icon"><FiLayers /></div>
                                        <div className="content">
                                            <h3 className="title">Business Coaching</h3>
                                            <p>Business coaching helps businesses achieve goals through personalized guidance and strategic development.                           </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div
                                className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"

                            >
                                <a className="text-center" href="/hr-services">
                                    <div className="service service__style--2">
                                        <div className="icon"><FiCast /></div>
                                        <div className="content">
                                            <h3 className="title">HR Services</h3>
                                            <p>HR Services optimize workforce management through recruitment, training, compliance, and performance management solutions.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div
                                className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"

                            >
                                <a className="text-center" href="/payroll-services">
                                    <div className="service service__style--2">
                                        <div className="icon"><FiUsers /></div>
                                        <div className="content">
                                            <h3 className="title">Payroll Service</h3>
                                            <p>Efficient payroll services ensure accurate employee payments, compliance, and streamlined payroll management for businesses.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>

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
                                        <p>We focus on understanding our clients' business goals before making decisions.
                                            A beautiful website is useless if it doesn't help you achieve your objectives.
                                            We discuss your needs, listen carefully, and then offer plenty of suggestions for improvement.</p>

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
                        <Carousel interval={3000} pause={false}>
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

                <div className="new-section ptb--50 bg_color--3">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
                                <a className="rn-button-style--2 btn-solid" href="/new-action">
                                    Free Consultation
                                </a>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
                                <h2 className="title">
                                    Let's Connect
                                </h2>
                            </div>
                        </div>
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
