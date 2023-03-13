import React from "react";
import Chart from "react-apexcharts";

const Grafic = ({tip}) => {
  const options = {
    
  colors: ["#212121"],
  
  chart: {
    id: "basic-bar",  
    toolbar: {
        show: false,
        
    },   
  },


  xaxis: {

      labels: {
        style:{colors:"#fff", fontSize: 16}
      },
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      
      
    },
  yaxis: {

      labels: {
        style:{colors:"#fff", fontSize: 16}
      }
    }
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ];

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart ">
          <Chart
            options={options}
            series={series}
            type={tip}
            width="100%"
            height="220"
          />
        </div>
      </div>
    </div>
  );
};

export default Grafic;