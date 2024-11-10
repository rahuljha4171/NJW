import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderFive";
import Footer from "../component/footer/FooterTwo";

import hrServiceImg from "../assets/images/service/hr-01.jpg";
import hrServiceImg2 from "../assets/images/service/hr-02.jpg";

class HRServicesDetails extends Component {
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
                <PageHelmet pageTitle="HR Services Details" />
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
                                    <h2 className="title theme-gradient">HR SERVICES</h2>
                                    <p>Optimize Your Human Resources</p>
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
                                                        src={hrServiceImg}
                                                        alt="HR Services"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>
                                                        Our HR services are designed to help you manage your
                                                        workforce effectively and efficiently. We provide
                                                        comprehensive solutions that cover all aspects of
                                                        human resources management.
                                                    </p>
                                                    <p>
                                                        From recruitment and onboarding to performance
                                                        management and compliance, our HR services ensure
                                                        that your business is equipped with the right talent
                                                        and resources to succeed.
                                                    </p>
                                                    <h4 className="title">Our HR Services Process</h4>
                                                    <ul className="liststyle">
                                                        <li>Recruitment and Onboarding</li>
                                                        <li>Employee Training and Development</li>
                                                        <li>Performance Management</li>
                                                        <li>Compliance and Risk Management</li>
                                                        <li>Employee Engagement and Retention</li>
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
                                                        Our team of HR experts will work with you to develop
                                                        customized HR strategies that align with your
                                                        business objectives and enhance your organizational
                                                        performance.
                                                    </p>
                                                    <p>
                                                        We leverage the latest HR technologies and best
                                                        practices to deliver solutions that drive business
                                                        success.
                                                    </p>
                                                    <h4 className="title">Why Choose Us?</h4>
                                                    <ul className="liststyle">
                                                        <li>Experienced HR Professionals</li>
                                                        <li>Tailored HR Solutions</li>
                                                        <li>Proven Track Record of Success</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img
                                                        className="w-100"
                                                        src={hrServiceImg2}
                                                        alt="HR Services"
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

export default HRServicesDetails;
