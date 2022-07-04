import React, { useEffect, useState, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const Chart = () => {
    const [chartData, setChartData] = useState([]);
    const chartRef = useRef();

    useEffect(() => {
        const chart = createChart(chartRef.current, {
            width: 700,
            height: 280,
        });
        const areaSeries = chart.addAreaSeries({
            lineColor: '#33b868',
            topColor: '#33b868',
            bottomColor: '#c1f5d6',
        });
        areaSeries.setData([
            { time: '2019-04-11', value: 80.01 },
            { time: '2019-04-12', value: 96.63 },
            { time: '2019-04-13', value: 76.64 },
            { time: '2019-04-14', value: 81.89 },
            { time: '2019-04-15', value: 74.43 },
            { time: '2019-04-16', value: 80.01 },
            { time: '2019-04-17', value: 96.63 },
            { time: '2019-04-18', value: 76.64 },
            { time: '2019-04-19', value: 81.89 },
            { time: '2019-04-20', value: 74.43 },
        ]);
        chart.timeScale().fitContent();
    }, []);

    return (
        <>
            <div ref={chartRef} />
        </>
    );
};

export default Chart;
