import MonthView from '../../src/components/MonthView';
import { shallow } from 'enzyme';
import React from 'react';

describe('Test MonthView', () => {
    it('Render with all the elements', () => {
        const monthView = shallow(<MonthView/>);
        expect(monthView.find('.calendar').exists).toBeTruthy()
    })
});