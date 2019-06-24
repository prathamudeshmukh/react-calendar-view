import React from 'react';
import Day from './Day';
import moment from 'moment';

export default class MonthView extends React.PureComponent {
    renderMonth() {
        let { currentMonth } = this.props;
        const lastDayOfMonth = moment(currentMonth).endOf('month');
        for (; currentMonth.isSameOrBefore(lastDayOfMonth); currentMonth.add(1, 'days')) {

        }
    }

    renderWeek() {

    }

    render() {
        return <div className={"calendar"}>
            <div className={"week"}>
                <Day/>
                <Day/>
                <Day/>
                <Day/>
                <Day/>
                <Day/>
                <Day/>
            </div>
            <div className={"week"}><Day/>
                <Day/>
                <Day/>
                <Day/>
                <Day/>
                <Day/>
                <Day/></div>
            <div className={"week"}><Day/>
                <Day/>
                <Day/>
                <Day/>
                <Day/>
                <Day/>
                <Day/></div>
            <div className={"week"}><Day/>
                <Day/>
                <Day/>
                <Day/>
                <Day/>
                <Day/>
                <Day/></div>
            <div className={"week"}><Day/>
                <Day/>
                <Day/>
                <Day/>
                <Day/>
                <Day/>
                <Day/></div>
            <div className={"week"}><Day/>
                <Day/>
                <Day/>
                <Day/>
                <Day/>
                <Day/>
                <Day/>
            </div>
        </div>;
    }
}