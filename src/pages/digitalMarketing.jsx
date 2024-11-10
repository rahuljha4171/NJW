import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderFive";
import Footer from "../component/footer/FooterTwo";

import digitalMarketingImg from "../assets/images/service/digital-01.jpg";
import digitalMarketingImg2 from "../assets/images/service/digital-02.jpg";

class DigitalMarketingDetails extends Component {
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
                <PageHelmet pageTitle="Digital Marketing Details" />
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
                                    <h2 className="title theme-gradient">DIGITAL MARKETING</h2>
                                    <p>Enhance Your Online Presence</p>
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
                                                        src={digitalMarketingImg}
                                                        alt="Digital Marketing"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>
                                                        Digital marketing encompasses all marketing efforts
                                                        that use an electronic device or the internet.
                                                        Businesses leverage digital channels such as search
                                                        engines, social media, email, and other websites to
                                                        connect with current and prospective customers.
                                                    </p>
                                                    <p>
                                                        Our digital marketing services help you reach a
                                                        larger audience than you could through traditional
                                                        methods and target the prospects who are most
                                                        likely to buy your product or service.
                                                    </p>
                                                    <h4 className="title">Our Digital Marketing Process</h4>
                                                    <ul className="liststyle">
                                                        <li>Research and Strategy Development</li>
                                                        <li>Content Creation and Optimization</li>
                                                        <li>Social Media Management</li>
                                                        <li>Search Engine Optimization (SEO)</li>
                                                        <li>Performance Analysis and Reporting</li>
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
                                                        Our team of experts will work with you to create a
                                                        comprehensive digital marketing strategy that
                                                        aligns with your business goals and objectives.
                                                    </p>
                                                    <p>
                                                        We use the latest tools and techniques to ensure
                                                        your brand stands out in the digital landscape.
                                                    </p>
                                                    <h4 className="title">Why Choose Us?</h4>
                                                    <ul className="liststyle">
                                                        <li>Proven Track Record of Success</li>
                                                        <li>Customized Solutions for Your Business</li>
                                                        <li>Dedicated Support and Guidance</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img
                                                        className="w-100"
                                                        src={digitalMarketingImg2}
                                                        alt="Digital Marketing"
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

export default DigitalMarketingDetails;
