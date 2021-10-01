import React from 'react'
import { Pie } from 'react-chartjs-2'

var colors = [
    '#AFC1D6',
    '#DAD2BC',
    '#70B77E',
    '#065143',
    '#EFD6AC',
    '#183A37',
    '#04151F',
    '#432534',
    '#A26769',
    '#151E3F',
    '#C16E70',
    '#335C67',
    '#9E2A2B',
    '#E09F3E'
]



const PieChart = (props) => {
    const labels = props.data.map(d => { var l = d.label;  return l });
    const Clrs = () => { if(props.colors !== undefined && props.colors !== "" ) {return props.colors} else {return colors}};
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Visitors last month',
                data: props.data.map(d => { return d.data }),
                backgroundColor: Clrs
            }
        ]
    };
    return (
        <>
            <div>
                <Pie 
                    data={data}
                    height={400}
                    width={600}
                    options={{
                        maintainAspectRatio: false,
                    }}
                />
            </div>
        </>
    );
}

export default PieChart;