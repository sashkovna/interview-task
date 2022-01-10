import React from 'react';
import TestItem from "./TestItem";

const TestList = ({tests, sites}) => {
    function getUrl(siteId) {
        const urls = sites.find(x => x.id === siteId).url
        return urls.replace(/https?:\/\/|www.|\/$/g, '')
    }
    return (
        <div>
            {tests.map(test =>
                <TestItem test={test} url={getUrl(test.siteId)} key={test.id}/>
            )}
        </div>
    );
};

export default TestList;