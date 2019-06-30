import React from 'react';

export default class Day extends React.PureComponent {
    render() {
        return <div className={"column"}>
            <div className={"notification"}>
            {this.props.children}
            </div>
        </div>;
    }
}