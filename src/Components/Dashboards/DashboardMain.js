import React from 'react';
import { Container, Divider } from 'semantic-ui-react';
import ReactSpeedometer from "react-d3-speedometer";
import { Line } from 'react-chartjs-2';

import './DashboardMain.css';

const DashboardMain = () => {

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: '# of Products sold',
            data: [100, 84, 60, 115, 82, 83],
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
            <ReactSpeedometer
                className="salesSpeedometer"
                currentValueText="Sales For Today"
                value={77}
                minValue={0}
                maxValue={100}
                segments={10}
            />

            <Line
              data={data}
              options={options}
            />

        </Container>
    )
};

export default DashboardMain;