"use client";
import { NextFetchEvent } from "next/server";
import React, { useEffect, useState } from "react";

interface Event {
    name: string;
    count: number;
}
async function fetchEvents() {
    const response = await fetch('https://mixpanel.com/api/2.0/events/names', {
        method: 'GET',
        headers: {
            'Authorization': 'Basic ' + btoa('62c706a9cd53d38532801a1b17ab02d3:2378a290e58cdba3d41399c4a0b7786c'),
        },
    });

    const data = await response.json();

    const events: Event[] = data.map((event: string) => ({ name: event, count: 0 }));

    return events;
}

const EventsDashboard: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        fetchEvents().then((events) => setEvents(events));
    }, []);

    return (
        <div>
            <h2>Events Dashboard</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Event Count</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map((event) => (
                        <tr key={event.name}>
                            <td>{event.name}</td>
                            <td>{event.count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EventsDashboard;