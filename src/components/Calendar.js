import React from 'react';
import Header from "./Header";
import MonthView from "./MonthView";

export default class Calendar extends React.PureComponent {
    render() {
        return <div>
            <Header/>
            <MonthView/>
        </div>;
    }
}