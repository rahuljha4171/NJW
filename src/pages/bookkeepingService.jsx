import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderFive";
import Footer from "../component/footer/FooterTwo";

import bookkeepingImg from "../assets/images/service/bookkeeping-01.jpg";
import bookkeepingImg2 from "../assets/images/service/bookkeeping-02.jpg";

class BookkeepingDetails extends Component {
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
                <PageHelmet pageTitle="Bookkeeping Details" />
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
                                    <h2 className="title theme-gradient">BOOKKEEPING</h2>
                                    <p>Manage Your Finances Efficiently</p>
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
                                                        src={bookkeepingImg}
                                                        alt="Bookkeeping"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>
                                                        Bookkeeping involves the recording, on a daily basis,
                                                        of a company's financial transactions. With proper
                                                        bookkeeping, companies are able to track all
                                                        information on their books to make key operating,
                                                        investing, and financing decisions.
                                                    </p>
                                                    <p>
                                                        Our bookkeeping services ensure that your financial
                                                        records are accurate and up-to-date, helping you
                                                        manage your finances efficiently.
                                                    </p>
                                                    <h4 className="title">Our Bookkeeping Process</h4>
                                                    <ul className="liststyle">
                                                        <li>Transaction Recording</li>
                                                        <li>Reconciliation</li>
                                                        <li>Financial Reporting</li>
                                                        <li>Accounts Payable and Receivable Management</li>
                                                        <li>Budgeting and Forecasting</li>
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
                                                        Our team of experienced bookkeepers will work with you
                                                        to ensure your financial records are maintained
                                                        accurately and efficiently.
                                                    </p>
                                                    <p>
                                                        We use the latest accounting software to provide you
                                                        with timely and accurate financial information.
                                                    </p>
                                                    <h4 className="title">Why Choose Us?</h4>
                                                    <ul className="liststyle">
                                                        <li>Experienced and Professional Team</li>
                                                        <li>Customized Solutions for Your Business</li>
                                                        <li>Reliable and Accurate Financial Reporting</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img
                                                        className="w-100"
                                                        src={bookkeepingImg2}
                                                        alt="Bookkeeping"
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

export default BookkeepingDetails;
