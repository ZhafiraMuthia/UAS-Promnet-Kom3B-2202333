import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
    this.state = {};
    }

    render() {
        return (
            <header>
                <div className="site-title">
                    <a href="/"><span className="name">Chronicle</span> Lib.</a>
                </div>
            </header>
        );
    }
}

export default HeaderComponent;