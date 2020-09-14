import './SeasonDisplay.css';
import React from 'react';

const seasonCongfig = {
    summer: {
        text: 'Yooo lets hit the beach bitchesss!!',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr, it is cold af',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer': 'winter';
    } else {
        return lat < 0 ? 'summer': 'winter';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName} = seasonCongfig[season]

    return (
    <div className={`season-display ${season}`}>
        <i className={`icon-left ${iconName} icon massive`}/>
        <h1 className="text">{text}</h1>
        <i className={`icon-right ${iconName} icon massive`}/>
    </div>
    );
};

export default SeasonDisplay;