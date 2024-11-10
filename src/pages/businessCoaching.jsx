import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderFive";
import Footer from "../component/footer/FooterTwo";

import businessCoachingImg from "../assets/images/service/business-coaching-01.jpg";
import businessCoachingImg2 from "../assets/images/service/business-coaching-02.jpg";

class BusinessCoachingDetails extends Component {
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
                <PageHelmet pageTitle="Business Coaching Details" />
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
                                    <h2 className="title theme-gradient">BUSINESS COACHING</h2>
                                    <p>Empower Your Business Growth</p>
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
                                                        src={businessCoachingImg}
                                                        alt="Business Coaching"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>
                                                        Business coaching is a process used to take a business
                                                        from where it is now to where the business owner wants it to be.
                                                        Our coaching services provide guidance and support to help you
                                                        achieve your business goals.
                                                    </p>
                                                    <p>
                                                        We offer personalized coaching sessions tailored to your
                                                        specific needs, helping you to develop strategies for growth
                                                        and success.
                                                    </p>
                                                    <h4 className="title">Our Business Coaching Process</h4>
                                                    <ul className="liststyle">
                                                        <li>Goal Setting and Planning</li>
                                                        <li>Performance Monitoring</li>
                                                        <li>Leadership Development</li>
                                                        <li>Strategic Decision Making</li>
                                                        <li>Continuous Improvement</li>
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
                                                        Our team of experienced coaches will work with you to
                                                        identify opportunities for growth and improvement.
                                                    </p>
                                                    <p>
                                                        We use proven methodologies to help you overcome challenges
                                                        and achieve your business objectives.
                                                    </p>
                                                    <h4 className="title">Why Choose Us?</h4>
                                                    <ul className="liststyle">
                                                        <li>Experienced and Certified Coaches</li>
                                                        <li>Customized Coaching Plans</li>
                                                        <li>Proven Success Strategies</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img
                                                        className="w-100"
                                                        src={businessCoachingImg2}
                                                        alt="Business Coaching"
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

export default BusinessCoachingDetails;
