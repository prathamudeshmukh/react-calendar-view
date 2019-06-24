import React from 'react';

export default class Day extends React.PureComponent {
    render() {
        return <div className={"day"}>
            {this.props.children}
        </div>;
    }
}