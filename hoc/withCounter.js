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

        onPress = () => {
            this.setState(prevState => {
                return {
                    count: prevState.count + incrementNumber,
                };
            });
        }

        render() {
            const { count } = this.state;
            return <WrappedComponent
                count={count}
                onPress={this.onPress}
                {...this.props}
            />;
        }
    }
    return WithCounter;
};

export default withCounter;
