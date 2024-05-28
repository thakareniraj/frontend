import React, { useContext, useEffect, useRef, useState, } from 'react';
import { DashboardContext } from '../contexts/DashboardProvider';
import { Bar, Chart, Line, Scatter } from 'react-chartjs-2';

import {
    Chart as ChartJs,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    PointElement,
    LineElement
} from 'chart.js';



ChartJs.register(
    BarElement,
    CategoryScale,
    LinearScale, //y
    Tooltip,
    Legend,
    PointElement,
    LinearScale,
    LineElement
)








const Dashboard = () => {

    const { rawdata, loading } = useContext(DashboardContext);
    // const [EndYear, setEndYear] = useState(null);

    const [selectedEndYear, setSelectedEndYear] = useState(null);
    const [endYearFilterData, setEndyearFilterData] = useState([]);

    const [selectedTopic, setSelectedTopic] = useState('');
    const [topicsFilterData, settopicsFilterData] = useState([]);

    const [selectedsector, setSelectedsector] = useState('');
    const [sectorsFilterData, setsectorsFilterData] = useState([]);

    const [selectedcountry, setSelectedcountry] = useState('');
    const [countrysFilterData, setcountrysFilterData] = useState([]);








    let country = rawdata.map(p => p.country);
    let countrys = rawdata.map(p => p.country);
    const Intensity = rawdata.map(p => p.intensity)
    const Likelihood = rawdata.map(p => p.likelihood)
    const Relevance = rawdata.map(p => p.relevance)
    const StartYear = rawdata.map(p => p.start_year)
    let EndYear = rawdata.map(p => p.end_year)
    let EndYears = rawdata.map(p => p.end_year)
    let Topics = rawdata.map(p => p.topic)
    let Sector = rawdata.map(p => p.sector)
    let Sectors = rawdata.map(p => p.sector)
    let Topicss = rawdata.map(p => p.topic)

    const scatterData = Intensity.map((value, index) => ({ x: value, y: Likelihood[index] }));



    console.log('asdfadfasdf', selectedEndYear)

    const handleEndYearFilter = () => {
        let filteredEndYear = rawdata.filter(z => z.end_year === parseInt(selectedEndYear)).map(p => p.end_year)
        console.log('clicked', selectedEndYear, filteredEndYear)
        setEndyearFilterData(filteredEndYear)
    }

    const handleTopicsFilter = () => {
        let filteredTopics = rawdata.filter(z => z.topic === selectedTopic).map(p => p.topic)
        console.log('clicked', selectedEndYear, filteredTopics)
        settopicsFilterData(filteredTopics)
    }

    const handleSectorsFilter = () => {
        let filteredsector = rawdata.filter(z => z.sector === selectedsector).map(p => p.sector)
        console.log('clicked', selectedEndYear, filteredsector)
        setsectorsFilterData(filteredsector)
    }

    const handleCountryFilter = () => {
        let filteredcountry = rawdata.filter(z => z.country === selectedcountry).map(p => p.country)
        console.log('clicked', selectedEndYear, filteredcountry)
        setcountrysFilterData(filteredcountry)
    }

    EndYear = endYearFilterData;
    Topics = topicsFilterData;
    Sector = sectorsFilterData;
    country = countrysFilterData;

    console.log(EndYear)



    console.log(scatterData);


















    // console.log('Loading...', loading);

    //Intensity / country
    const intensityData = {
        labels: Topics,
        datasets: [
            {
                label: 'Intensity',
                data: Intensity,
                backgroundColor: 'green',
                borderColor: 'green',
                borderWidth: 0,
            },
            {
                label: 'Relevance',
                data: Relevance,
                backgroundColor: 'red',
                borderColor: 'red',
                borderWidth: 0,
            },
            {
                label: 'LikeHood',
                data: Relevance,
                backgroundColor: 'blue',
                borderColor: 'blue',
                borderWidth: 0,
            }
        ]
    }


    const intensityData2 = {
        labels: Sector,
        datasets: [
            {
                label: 'Intensity',
                data: Intensity,
                backgroundColor: 'purple',
                borderColor: 'purple',
                borderWidth: 0,
            },
        ]
    }

    const intensityOptions = {

    }



    //Relationship between intensity and likelihood
    const relData = {
        datasets: [
            {
                label: 'Intensity , LikeHood',
                data: scatterData,
                backgroundColor: 'blue',
            },
        ],
    }

    const relOptions = {

    }

    //
    const labels = country;

    const lineData = {
        labels,
        datasets: [
            {
                label: 'Intensity',
                data: Intensity,
                borderColor: 'red',
                backgroundColor: 'red',
                borderWidth: 1,
            },
            {
                label: 'Relevance',
                data: Relevance,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'LikeHood',
                data: Likelihood,
                borderColor: 'green',
                backgroundColor: 'green',
            },
            {
                label: 'Start Year',
                data: StartYear,
                borderColor: 'pink',
                backgroundColor: 'pink',
            },
            {
                label: 'End Year',
                data: EndYear,
                borderColor: 'yellow',
                backgroundColor: 'yellow',
            },
        ],
    };
    const lineOptions = {
        plugins: {
            legend: {
                position: 'top'
            },
        }
    }







    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    {/* <Outlet></Outlet> */}
                    {
                        loading ?

                            <div className='flex flex-col items-center justify-center mt-[20%]'>
                                <div className="radial-progress animate-spin" style={{ "--value": 20 }}></div>
                                <p>Please wait</p>
                            </div>

                            :
                            <div className='mx-10 my-10 space-y-10'>
                                <div>
                                    <div className="bg-base-100">
                                        <h className=" font-bold normal-case text-xl">Intensity , Relevance and LikeHood with country</h>
                                    </div>
                                    <Line
                                        data={lineData}
                                        options={lineOptions}
                                    ></Line>
                                </div>

                                <div>
                                    <div className="bg-base-100">
                                        <h className=" font-bold normal-case text-xl">Relationship between intensity and likelihood</h>
                                    </div>
                                    <Scatter
                                        data={relData}
                                        options={relOptions}
                                    ></Scatter>
                                </div>

                                <div>
                                    <div className="bg-base-100">
                                        <h className=" font-bold normal-case text-xl">Topics with Relevance and LikeHood</h>
                                    </div>
                                    <Bar
                                        data={intensityData}
                                        options={intensityOptions}
                                    ></Bar>
                                </div>

                                <div>
                                    <div className="bg-base-100">
                                        <h className=" font-bold normal-case text-xl">Sector with Intensity</h>
                                    </div>
                                    <Bar
                                        data={intensityData2}
                                        options={intensityOptions}
                                    ></Bar>
                                </div>


                            </div>
                    }

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-40 border bg-base-300 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <p className='font-semibold text-xl'>Filter</p>
                        <div className='border'>
                            <p className='mt-5 text-xs font-semibold'>Region</p>
                            <select className='select select-bordered select-sm w-full max-w-xs' value={selectedEndYear} onClick={handleCountryFilter} onChange={(e) => {
                                setSelectedcountry(e.target.value)

                            }}>
                                <option className='' value=''>Select Region</option>
                                {countrys.map((region) => (
                                    <option key={region} value={region}>
                                        {
                                            typeof (region) === 'string' ?
                                                region : null
                                        }
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='border'>
                            <p className='mt-5 text-xs font-semibold'>End Year</p>
                            <select className='select select-bordered select-sm w-full max-w-xs' value={selectedEndYear} onClick={handleEndYearFilter} onChange={(e) => {
                                setSelectedEndYear(e.target.value)

                            }}>
                                <option className='' value=''>Select year</option>
                                {EndYears.map((year) => (
                                    <option key={year} value={year}>
                                        {
                                            typeof (year) === 'number' ?
                                                year : null
                                        }
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='border'>
                            <p className='mt-5 text-xs font-semibold'>Topics</p>
                            <select className='select select-bordered select-sm w-full max-w-xs' value={selectedEndYear} onClick={handleTopicsFilter} onChange={(e) => {
                                setSelectedTopic(e.target.value)

                            }}>
                                <option className='' value=''>Select topics</option>
                                {Topicss.map((topic) => (
                                    <option key={topic} value={topic}>
                                        {
                                            typeof (topic) === 'string' ?
                                                topic : null
                                        }
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Sector */}
                        <div className='border'>
                            <p className='mt-5 text-xs font-semibold'>Sector</p>
                            <select className='select select-bordered select-sm w-full max-w-xs' value={selectedEndYear} onClick={handleSectorsFilter} onChange={(e) => {
                                setSelectedsector(e.target.value)

                            }}>
                                <option className='' value=''>Select Sector</option>
                                {Sectors.map((topic) => (
                                    <option key={topic} value={topic}>
                                        {
                                            typeof (topic) === 'string' ?
                                                topic : null
                                        }
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* region */}


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;