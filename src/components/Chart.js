import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Line } from 'react-chartjs-2';

export default class Chart extends Component {

  render() {
    const data = {
      labels: this.props.labels,
      datasets: [
        {
          queue: 'queue1',
          label: 'High Temperature (\xB0C)',
          // 
          backgroundColor: '#FFC1BF',
          hoverBackgroundColor: '#F98783',
          borderColor: '#FB7671',
          hoverBorderColor: '#D73933',
          data: this.props.temp_max
        },
        {
          queue: 'queue1',
          label: 'Low Temperature (\xB0C)',
          // 
          backgroundColor: '#FFC1BF',
          hoverBackgroundColor: '#F98783',
          borderColor: '#FB7671',
          hoverBorderColor: '#D73933',
          data: this.props.temp_min
        },

      ]
    }
    return (
      <div>
        <Line
          data={data}
          width={120}
          height={70}
          options={{
            maintainAspectRatio: true,
            duration: 2000
          }}
        />
        <div className="text-center">
          <button className="btn btn-light" onClick={this.props.getPresent}><i className="fas fa-angle-left mr-1"></i>Back</button>
        </div>
      </div>
    )
  }
}
