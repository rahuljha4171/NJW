import React, { Component } from "react";
import { Helmet } from 'react-helmet'

class PageHelmet extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || Digital Marketing Agency </title>
                    <meta name="description" content="Not Just Website is a digital marketing agency located in Maryland that specializes in helping small and medium-sized businesses." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
