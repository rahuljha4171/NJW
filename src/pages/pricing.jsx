import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderFive";
import Footer from "../component/footer/FooterTwo";

class PricingDetails extends Component {
    render() {
        return (
            <React.Fragment>
                {/* Start Pagehelmet  */}
                <PageHelmet pageTitle="Pricing Details" />
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
                                    <h2 className="title theme-gradient">PRICING</h2>
                                    <p>Choose the Best Plan for You</p>
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
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="pricing-card">
                                    <div className="pricing-header">
                                        <h4>Basic Plan</h4>
                                        <p>$19/month</p>
                                    </div>
                                    <div className="pricing-body">
                                        <ul className="liststyle">
                                            <li>Feature 1</li>
                                            <li>Feature 2</li>
                                            <li>Feature 3</li>
                                        </ul>
                                    </div>
                                    <div className="pricing-footer">
                                        <button className="btn btn-primary">Choose Plan</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="pricing-card">
                                    <div className="pricing-header">
                                        <h4>Standard Plan</h4>
                                        <p>$49/month</p>
                                    </div>
                                    <div className="pricing-body">
                                        <ul className="liststyle">
                                            <li>Feature 1</li>
                                            <li>Feature 2</li>
                                            <li>Feature 3</li>
                                            <li>Feature 4</li>
                                        </ul>
                                    </div>
                                    <div className="pricing-footer">
                                        <button className="btn btn-primary">Choose Plan</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="pricing-card">
                                    <div className="pricing-header">
                                        <h4>Premium Plan</h4>
                                        <p>$99/month</p>
                                    </div>
                                    <div className="pricing-body">
                                        <ul className="liststyle">
                                            <li>Feature 1</li>
                                            <li>Feature 2</li>
                                            <li>Feature 3</li>
                                            <li>Feature 4</li>
                                            <li>Feature 5</li>
                                        </ul>
                                    </div>
                                    <div className="pricing-footer">
                                        <button className="btn btn-primary">Choose Plan</button>
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

export default PricingDetails;
