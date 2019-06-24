import React from 'react';
import Header from "./Header";
import MonthView from "./MonthView";
import moment from "moment";

export default class Calendar extends React.PureComponent {
    render() {
        const monthStart = moment().startOf('month');
        return <div>
            <Header/>
            <MonthView currentMonth={monthStart}/>
        </div>;
    }
}