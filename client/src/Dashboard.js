import React, {useEffect, useState} from 'react';
import './dashboard.css'
import TestList from "./TestList";
import axios from "axios";
import ButtonSort from "./ButtonSort";

const Dashboard = () => {
    const [data, setData] = useState([])
    const [tests, setTests] = useState([])
    const [sites, setSites] = useState([])

    async function fetchSites() {
        const response = await axios.get('http://localhost:3100/sites')
        setSites(response.data)
    }

    useEffect(() => {
        fetchSites()
    }, [])

    function getUrl(siteId) {
        const urls = sites.find(x => x.id === siteId).url
        return urls.replace(/https?:\/\/|www.|\/$/g, '')
    }

    async function fetchPosts() {
        const response = await axios.get('http://localhost:3100/tests')
        setData(response.data)
        setTests(response.data)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    const sortTests = (column) => {
        const isUseSort = document.getElementById(column).classList.contains('arrow_down')
        for (let element of document.getElementsByClassName('arrow')) {
            element.classList.remove('arrow_up')
            element.classList.remove('arrow_down')
        }
        let tests;
        if (column === 'status') {
            tests = data.sort((a, b) => status.indexOf(a[column]) - status.indexOf(b[column]));
        } else if (column === 'siteId') {
            tests = data.sort((a, b) => getUrl(a[column]).localeCompare(getUrl(b[column])));
        } else {
            tests = data.sort((a, b) => a[column].localeCompare(b[column]));
        }
        if (isUseSort) {
            setTests([...tests])
            document.getElementById(column).classList.add('arrow_up')
        } else {
            setTests([...tests].reverse())
            document.getElementById(column).classList.add('arrow_down')
        }
    }

    const status = ["ONLINE", "PAUSED", "STOPPED", "DRAFT"]
    function resetSearch() {
        setTests([...data])
        document.getElementById("input").value = ""
    }

    function search(testName) {
        if (testName.length  <= 0) {
            setTests([...data])
        } else {
            setTests([...data].filter(test => test.name.toLowerCase().includes(testName)))
        }
    }
    return (
        <div>
            <div>
                <h1>Dashboard</h1>
            </div>
            <div className="search">
                <input
                    onChange={e => search(e.target.value)}
                    id="input"
                    type="text"
                    placeholder="What test are you looking for?"/>
                <div className="count_tests">{tests.length} tests</div>

            </div>
            {tests.length === 0
                ? <div>
                    <div className="search_not_found">Your search did not match any results.</div>
                    <button onClick={() => resetSearch()} className="reset">Reset</button>
                </div>
                :
                <div className="App">
                    <div className="header">
                        <ButtonSort
                            className="header_p"
                            onClick={() => sortTests("name")}>
                            NAME {<div id='name' className="arrow"></div>}
                        </ButtonSort>

                        <ButtonSort
                            className="header_p"
                            onClick={() => sortTests("type")}>
                            TYPE {<div id='type' className="arrow"></div>}
                        </ButtonSort>

                        <ButtonSort
                            className="header_p"
                            onClick={() => sortTests('status')}>
                            STATUS {<div id='status' className="arrow"></div>}
                        </ButtonSort>

                        <ButtonSort
                            className="header_p"
                            onClick={() => sortTests('siteId')}>
                            SITE {<div id='siteId' className="arrow"></div>}
                        </ButtonSort>
                    </div>
                    <TestList tests={tests} sites={sites}/>
                </div>
            }
        </div>
    );
};

export default Dashboard;