// HorizontalProgress.tsx
import React from "react";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

interface Props {
  progresso: number; // 0 a 100
}

const HorizontalProgress: React.FC<Props> = ({ progresso }) => {
  const options: ApexOptions = {
    chart: {
      type: "bar",
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "50%",
        borderRadius: 5,
      },
    },
    colors: ["#0984e3"],
    xaxis: {
      max: 100,
    },
  };

  const series = [
    {
      data: [progresso],
    },
  ];

  return (
    <div style={{ width: 300 }}>
      <Chart options={options} series={series} type="bar" height={50} />
    </div>
  );
};

export default HorizontalProgress;
