import React from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';

const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular']; // Move genres outside the component

const EventsGenresChart = ({ events }) => {
    const [data, setData] = useState([]);
    const colors = ['#DD0000', '#00DD00', '#0000DD', '#DDDD00', '#DD00DD'];

    useEffect(() => {
        const getData = () => {
            const data = genres.map((genre) => {
                const filteredEvents = events.filter(event => event.summary.includes(genre));
                return {
                    name: genre,
                    value: filteredEvents.length
                };
            });
            return data;
        };

        setData(getData());
    }, [events]); // No need to include genres in the dependency array as it is now outside the component

    const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
        const RADIAN = Math.PI / 180;
        const radius = outerRadius;
        const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
        const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
        return percent ? (
            <text
                x={x}
                y={y}
                fill="#8884d8"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
            >
                {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
            </text>
        ) : null;
    };

    return (
        <ResponsiveContainer width="99%" height={400}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    fill="#8884d8"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={130}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index]} />
                    ))}
                </Pie>
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default EventsGenresChart;
