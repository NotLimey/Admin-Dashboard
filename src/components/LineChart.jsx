import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = (props) => {
    const labels = props.data.map(d => { var l = d.label;  return l });
    const IsFill = () => {if(props.fill !== undefined) {return props.fill}else { return true }};
    const BorderColor = () => {if(props.borderColor !== undefined) {return props.borderColor}else { return 'rgb(92, 184, 92)' }};
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Visitors last month',
                data: props.data.map(d => { return d.data }),
                fill: IsFill,
                borderColor: BorderColor,
                backgroundColor: props.backgroundColor,
                borderWidth: 2,
                tension: .4,
            }
        ]
    };

    return (
        <div>
            <Line 
                data={data}
                height={400}
                width={800}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            id: 'y',
                            title: {
                                display: true,
                                text: 'Number of visitors'
                            },
                            beginAtZero: true
                        },
                        x: {
                            id: 'x',
                            title: {
                                display: true,
                                text: 'Week'
                            }
                        }
                    }
                }}
            />
        </div>
    );
}

export default LineChart;