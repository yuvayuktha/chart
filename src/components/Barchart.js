import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' ,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  }, 
};

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = {
  labels: ['jan' , 'feb', 'mar'],
  datasets: [
    {
      label:'present',
      data: [11,13,12],
      backgroundColor:"rgba(255,99,132,0.5)"
    },
    {
      label:'absent',
      data: [11,6,2],
      backgroundColor:"rgba()"
    }
  ]
}
export default function Barchart() {
  return (
    <div style={{width:600, height:400}}>
       <Bar options={options} data={data}/>
    </div>
    // <Bar options={options} data={data}/>
  )
}
