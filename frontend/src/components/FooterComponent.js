import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props);
    this.state = {};
    }

    render() {
        return (
            <footer>
                <div className="footer-content">
                    <span>Copyright &copy; 2024 Zhmuth. All Rights Reserved.</span>
                </div>
            </footer>
        );
    }
}

export default FooterComponent;