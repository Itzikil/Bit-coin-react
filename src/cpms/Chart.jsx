import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
export function Chart({ stats, headline }) {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                //   position: 'top' as const,
            },
            // title: {
            //     display: true,
            //     text: 'Chart.js Line Chart',
            // },
        },
    };

    const labels = stats?.map((stat) => new Date(+(stat.x + '000')).toISOString().slice(0, 10));

    const data = {
        labels,
        datasets: [
            {
                label: headline,
                data: labels?.map((label, i) => stats ? stats[i].y : ''),
                borderColor: (headline === 'Market Price' ? 'rgb(255, 99, 132)' : 'rgb(62, 109, 117)'),
                backgroundColor: (headline === 'Market Price' ? 'rgb(255, 99, 132,0.5)' : 'rgb(53, 162, 235,0.5)'),
            },
        ],
    };
    if (!stats) return <div>Loading..</div>
    return <Line options={options} data={data} className='chart'/>;
}


// import React from 'react';
// import { Sparklines, SparklinesLine } from 'react-sparklines';

// export function Chart({ stats , headline}) {

//     return (
//         <div>
//             <p>Bitcoin {headline} Chart</p>
//             <Sparklines data={stats ? stats : []} width={100} height={20} margin={5}>
//                 <SparklinesLine />
//             </Sparklines>
//         </div>
//     )
// }
