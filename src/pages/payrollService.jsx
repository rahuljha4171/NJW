import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderFive";
import Footer from "../component/footer/FooterTwo";

import payrollServiceImg from "../assets/images/service/payroll-01.jpg";
import payrollServiceImg2 from "../assets/images/service/payroll-02.jpg";

class PayrollServicesDetails extends Component {
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
                <PageHelmet pageTitle="Payroll Services Details" />
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
                                    <h2 className="title theme-gradient">PAYROLL SERVICES</h2>
                                    <p>Streamline Your Payroll Process</p>
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
                                                        src={payrollServiceImg}
                                                        alt="Payroll Services"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>
                                                        Our payroll services are designed to simplify your payroll process,
                                                        ensuring timely and accurate payment to your employees. We handle
                                                        all aspects of payroll management, from calculations to compliance.
                                                    </p>
                                                    <p>
                                                        With our services, you can focus on your core business activities
                                                        while we take care of the complexities of payroll processing.
                                                    </p>
                                                    <h4 className="title">Our Payroll Services Process</h4>
                                                    <ul className="liststyle">
                                                        <li>Payroll Calculation and Processing</li>
                                                        <li>Tax Filing and Compliance</li>
                                                        <li>Employee Self-Service Portal</li>
                                                        <li>Direct Deposit and Paycheck Distribution</li>
                                                        <li>Comprehensive Reporting</li>
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
                                                        Our team of payroll experts will work with you to ensure
                                                        compliance with all relevant regulations and provide support
                                                        for any payroll-related queries.
                                                    </p>
                                                    <p>
                                                        We use the latest technology to deliver efficient and reliable
                                                        payroll solutions tailored to your business needs.
                                                    </p>
                                                    <h4 className="title">Why Choose Us?</h4>
                                                    <ul className="liststyle">
                                                        <li>Experienced Payroll Professionals</li>
                                                        <li>Customized Payroll Solutions</li>
                                                        <li>Reliable and Accurate Service</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img
                                                        className="w-100"
                                                        src={payrollServiceImg2}
                                                        alt="Payroll Services"
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

export default PayrollServicesDetails;
