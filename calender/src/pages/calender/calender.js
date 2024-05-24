
import React, { useEffect, useState } from 'react';
import './calender.css';

export function Calender(props) {

    /*-----------------------USING API-----------------------/*
    // const [date, setDate] = useState(null);
    // const [month, setMonth] = useState(null);

    // useEffect(() => {
    //     fetch('')
    //         .then(response => response.json())
    //         .then(data => {
    //             setDate(data.date);
    //             setMonth(data.month);
    //         });
    // }, []);

    // if (!date || !month) {
    //     return <div> </div>;
    // }

    /*----------------------------------------------------------*/
        const currentDate = new Date();
        const date = currentDate.getDate();
        const month = currentDate.toLocaleString('default', { month: 'short' });
    return (
        <div>
            <div className="calender_head">
                <div className="calender_heading">
                    <div className="title">Upcoming Events</div>
                    <div className="view_all">View All</div>
                </div>
            </div>
            <div className="calender_body">
                <div className="calender_date">
                    <div className="date">{date}</div>
                    <div className="month">{month}</div>
                </div>
                <div className="calender_content">
                    <div className="calender_title">
                        Event Title Here
                    </div>
                    <div className="calender_time">
                        11:00 AM - 2:00 PM
                    </div>
                    <div className="calender_add">
                        Full Address Comes Here
                    </div>
                </div>
            </div>
            <div className="calender_body">
                <div className="calender_date">
                    <div className="date">{date}</div>
                    <div className="month">{month}</div>
                </div>
                <div className="calender_content">
                    <div className="calender_title">
                        Event Title Here
                    </div>
                    <div className="calender_time">
                        11:00 AM - 2:00 PM
                    </div>
                    <div className="calender_add">
                        Full Address Comes Here
                    </div>
                </div>
            </div>
            <div className="calender_body">
                <div className="calender_date">
                    <div className="date">{date}</div>
                    <div className="month">{month}</div>
                </div>
                <div className="calender_content">
                    <div className="calender_title">
                        Event Title Here
                    </div>
                    <div className="calender_time">
                        11:00 AM - 2:00 PM
                    </div>
                    <div className="calender_add">
                        Full Address Comes Here
                    </div>
                </div>
            </div>
            <div className="calender_body">
                <div className="calender_date">
                    <div className="date">{date}</div>
                    <div className="month">{month}</div>
                </div>
                <div className="calender_content">
                    <div className="calender_title">
                        Event Title Here
                    </div>
                    <div className="calender_time">
                        11:00 AM - 2:00 PM
                    </div>
                    <div className="calender_add">
                        Full Address Comes Here
                    </div>
                </div>
            </div>
            <div className="calender_body">
                <div className="calender_date">
                    <div className="date">{date}</div>
                    <div className="month">{month}</div>
                </div>
                <div className="calender_content">
                    <div className="calender_title">
                        Event Title Here
                    </div>
                    <div className="calender_time">
                        11:00 AM - 2:00 PM
                    </div>
                    <div className="calender_add">
                        Full Address Comes Here
                    </div>
                </div>
            </div>

        </div>
    )
}