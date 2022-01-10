import React from 'react';
import {TESTS} from "./paths";

const DashboardResults = () => {
    return (
        <div>
            <h1>Results</h1>
            <p className="paragraph">Order basket redesing</p>
            <div className="btn">
                <div className="arrow_back"></div>
                <button onClick={() => window.location.href=TESTS} className="button_back">Back</button>
            </div>
        </div>
    );
};

export default DashboardResults;