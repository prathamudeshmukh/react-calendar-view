import MonthView from '../../src/components/MonthView';
import { mount } from 'enzyme';
import React from 'react';
import moment from 'moment';

describe('Test MonthView', () => {
    it('Render with all the elements', () => {
        const startOfCurrentMonth = moment('2019-06-01');
        const monthView = mount(<MonthView currentMonth={startOfCurrentMonth}/>);
        expect(monthView.find('.calendar').exists).toBeTruthy();
        expect(monthView.find('.week').length).toBe(6);
        expect(monthView.find('.week').at(0).find('.day').length).toBe(7);
        const expectedDays = [[26, 27, 28, 29, 30, 31, 1],
                              [2, 3, 4, 5, 6, 7, 8],
                              [9, 10, 11, 12, 13, 14, 15],
                              [16, 17, 18, 19, 20,21, 22],
                              [23, 24, 25, 26, 27, 28, 29],
                              [30, 1, 2, 3, 4, 5, 6]];
        expectedDays.forEach((expectedWeek, weekNo) => {
            const actualDays = monthView.find('.week').at(weekNo).find('.day');
            expectedWeek.forEach((expectedWeekDay, actualDayNo) => {
                expect(actualDays.at(actualDayNo).prop('children')).toBe(expectedWeekDay);
            })
        });
    });
});