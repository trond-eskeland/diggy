import React from 'react';
import PropTypes from 'prop-types';

class Diggy extends React.Component {
    constructor(props) {
        super(props);
        this.openDiggy = this.openDiggy.bind(this);
    }

    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://582statoil.boost.ai/chatPanel/chatPanel.js";
        script.async = true;
        document.body.appendChild(script);
    }

    openDiggy() {
        const chatPanel = window.boostChatPanel({
            withCredentials: this.props.withCredentials,
            apiUrlBase: this.props.apiUrlBase,
            userToken: this.props.userToken,
            filterValues: this.props.filterValues,
            hyperlinksTargetBlank: this.props.hyperlinksTargetBlank,
        });
        chatPanel.show();
    }

    render() {
        return (
            <>
                <a href onClick={this.openDiggy}>Click here</a>
            </>
        )
    }
}

Diggy.propTypes = {
    withCredentials: PropTypes.bool,
    apiUrlBase: PropTypes.string.isRequired,
    userToken: PropTypes.string,
    filterValues: PropTypes.string,
    hyperlinksTargetBlank: PropTypes.bool,
}

Diggy.defaultProps = {
    withCredentials: false,
    userToken: '',
    filterValues: '',
    hyperlinksTargetBlank: true,
}

export default Diggy;