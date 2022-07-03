import React from 'react';
import './Chart.css';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: '1K',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: '2K',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: '3K',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: '4K',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: '5K',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: '6K',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: '7K',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const Chart = () => {
    return (
        <>
            <ResponsiveContainer
                width="100%"
                height={300}
            >
                <AreaChart
                    // width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="uv"
                        stroke="#8884d8"
                        fill="#8884d8"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </>
    );
};

export default Chart;
