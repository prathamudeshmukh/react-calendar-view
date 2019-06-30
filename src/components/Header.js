import React from 'react';

export default class Header extends React.PureComponent {
    render() {
        return <div className={'header'}>
            <div className='headerExtra'></div>
            <div className={'headerMenu'}>
                <div>Previous</div>
                <div>{this.props.currentMonth.format('MMMM - YYYY')}</div>
                <div>Next</div>
            </div>
            <div className='headerExtra'></div>
        </div>;
    }
}