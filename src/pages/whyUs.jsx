import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderFive";
import Footer from "../component/footer/FooterTwo";

import whyUsImg from "../assets/images/service/hr-01.jpg";
import whyUsImg2 from "../assets/images/service/digital-02.jpg";

class WhyUs extends Component {
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
        return (
            <React.Fragment>
                {/* Start Pagehelmet  */}
                <PageHelmet pageTitle="Why Us" />
                {/* End Pagehelmet  */}

                <Header
                    headertransparent="header--transparent"
                    colorblack="color--black"
                    logoname="logo.png"
                />

                {/* Start Breadcrump Area */}
                <div
                    className="rn-page-title-area pt--120 pb--190 bg_image bg_image--35"
                    data-black-overlay="5"
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">WHY CHOOSE US?</h2>
                                    <p>Discover the Benefits of Partnering with Us</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Page Wrapper */}
                <div className="rn-service-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="service-details-inner">
                                    <div className="inner">
                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content pb--80 align-items-center">
                                            <div className="col-lg-6 col-12">
                                                <div className="thumb">
                                                    <img
                                                        className="w-100"
                                                        src={whyUsImg}
                                                        alt="Why Us"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>
                                                        Choosing the right partner is crucial for your business success.
                                                        We offer unparalleled expertise and a commitment to excellence
                                                        that sets us apart from the competition.
                                                    </p>
                                                    <p>
                                                        Our team is dedicated to providing personalized solutions that
                                                        meet your unique needs and help you achieve your business goals.
                                                    </p>
                                                    <h4 className="title">Our Unique Advantages</h4>
                                                    <ul className="liststyle">
                                                        <li>Expertise Across Industries</li>
                                                        <li>Customized Solutions</li>
                                                        <li>Proven Track Record</li>
                                                        <li>Commitment to Quality</li>
                                                        <li>Exceptional Customer Service</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12 order-2 order-lg-1">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>
                                                        We believe in building long-term relationships with our clients
                                                        by delivering consistent value and support.
                                                    </p>
                                                    <p>
                                                        Our innovative approach and dedication to your success make us
                                                        the ideal partner for your business.
                                                    </p>
                                                    <h4 className="title">Why We Stand Out</h4>
                                                    <ul className="liststyle">
                                                        <li>Innovative Solutions</li>
                                                        <li>Client-Centric Approach</li>
                                                        <li>Results-Driven Strategies</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img
                                                        className="w-100"
                                                        src={whyUsImg2}
                                                        alt="Why Us"
                                                    />
                                                    <ModalVideo
                                                        channel="youtube"
                                                        isOpen={this.state.isOpen}
                                                        videoId="ZOoVOfieAF8"
                                                        onClose={() => this.setState({ isOpen: false })}
                                                    />
                                                    <button
                                                        className="video-popup"
                                                        onClick={this.openModal}
                                                    >
                                                        <span className="play-icon"></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Wrapper */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                <Footer />
            </React.Fragment>
        );
    }
}

export default WhyUs;
