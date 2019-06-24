import MonthView from '../../src/components/MonthView';
import { shallow } from 'enzyme';
import React from 'react';
import moment from 'moment';

describe('Test MonthView', () => {
    it('Render with all the elements', () => {
        const startOfCurrentMonth = moment().startOf('month');
        const monthView = shallow(<MonthView currentMonth={startOfCurrentMonth}/>);
        expect(monthView.find('.calendar').exists).toBeTruthy();

    });
});