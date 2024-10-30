import React from 'react';
import './ratingIndicator.scss';

const RatingIndicator = ({ rating }) => {
    const radius = 35;
    const strokeWidth = 5;
    const normalizedRadius = radius - strokeWidth * 0.5;
    const circumference = normalizedRadius * 2 * Math.PI;
    const offset = circumference - (rating / 100) * circumference;


    const getGradientColor = (value) => {
        if (value < 40) return '#d60606';
        if (value < 60) return '#f2e30a';
        return '#42f55d';
    };

    return (
        <div className="rating-indicator-container">
            <svg height="80" width="80">
                <circle
                    stroke="lightgrey"
                    fill="transparent"
                    r={normalizedRadius}
                    cx="40"
                    cy="40"
                    strokeWidth={strokeWidth}
                />
                <circle
                    stroke={getGradientColor(rating)}
                    fill="transparent"
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeDashoffset={offset}
                    r={normalizedRadius}
                    cx="40"
                    cy="40"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    transform="rotate(-90 40 40)"
                />
                <text x="50%" y="50%" textAnchor="middle" fill="white" strokeWidth="1px" dy=".3em">
                    {rating}%
                </text>
            </svg>
        </div>
    );
}

export default RatingIndicator;
