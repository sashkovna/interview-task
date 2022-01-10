import React from 'react';
import {TESTS} from "./paths";

const DashboardFinalize = () => {
    return (
        <div>
            <h1>Finalize</h1>
            <p className="paragraph">Spring promotion</p>
            <div className="btn">
                <div className="arrow_back"></div>
                <button onClick={() => window.location.href=TESTS} className="button_back">Back</button>
            </div>
        </div>
    );
};

export default DashboardFinalize;