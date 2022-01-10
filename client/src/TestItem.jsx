import React from 'react';
import {FINALIZE, RESULT} from "./paths";

const TestItem = (props) => {
    function goToPage(pageName) {
        window.location = pageName + '/' + props.test.id
    }
    return (
        <div className={props.test.siteId === 1
            ? "test test_1"
        : props.test.siteId === 2
        ? "test test_2"
        : "test test_3"}>
            <div className="p p_name">{props.test.name}</div>
            <div className="p p_type">{props.test.type === 'MVT' ? props.test.type : props.test.type[0] + props.test.type.slice(1).toLowerCase()}</div>
            <div className={props.test.status === "ONLINE"
            ? "p p_status online"
            : props.test.status === "PAUSED"
            ? "p p_status paused"
            : props.test.status === "DRAFT"
            ? "p p_status draft"
            : "p p_status stopped"}>{props.test.status[0] + props.test.status.slice(1).toLowerCase()}</div>

            <div className="p p_site">{props.url}</div>

                {props.test.status === "DRAFT"
                    ? <button onClick={() => goToPage(FINALIZE)} className="p p_result finalize">Finalize</button>
                    : <button onClick={() => goToPage(RESULT)} className="p p_result results">Results</button>
                }
        </div>
    );
};

export default TestItem;