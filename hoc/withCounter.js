/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

// HOC
const withCounter = (WrappedComponent, incrementNumber) => {
    class WithCounter extends Component {
        constructor(props) {
            super(props);

            this.state = {
                count: 0,
            };
        }

        increment = () => {
            this.setState(prevState => {
                return {
                    count: prevState.count + incrementNumber,
                }
            });
        }

        render() {
            const { count } = this.state;
            return <WrappedComponent
                count={count}
                increment={this.increment}
                {...this.props}
            />;
        }
    }
    return WithCounter;
}

export default withCounter;
