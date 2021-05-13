import React from 'react';
import { Container, Divider } from 'semantic-ui-react';
import { Line } from 'react-chartjs-2';

import './DashboardMain.css';

const DashboardMain = () => {

    const data = {
        labels: ['Informatics',
        'Vegetables',
        'Office',
        'Crockery',
        'Fruits',
        'Alcohol and Tobacco',
        'Duty Free'],
        datasets: [
          {
            label: 'Sales Today',
            data: [100, 84, 60, 115, 82, 83,77],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
    };

    const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
    };

    return (
        <Container className="dashboardMain-container">
            <Divider horizontal>Dashboard</Divider>
            <Line
              data={data}
              options={options}
              width={75}
              height={40}
            />

        </Container>
    )
};

export default DashboardMain;