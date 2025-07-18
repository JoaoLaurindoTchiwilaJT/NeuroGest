import ApexChart from "react-apexcharts";

const options = {
  chart: {
    id: "grafico-Bar",
    toolbar: { show: false },
  },
  xaxis: {
    categories: ["2020" /*"2021", "2022", "2023", "2024", "2025"*/],
  },
  colors: ["#4990FF", "#FF0000", "#09BB76", "#FFD851"],
  stroke: {
    width: 2,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "50%", // controla o espaçamento entre os dados de cada ano
    },
  },
  legend: {
    show: false,
  },
  tooltip: {
    theme: "light",
    enabled: true,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

const series = [
  {
    name: "Stock",
    data: [50, 60, 55, 70], // valores por ano
  },
  {
    name: "Entrada",
    data: [20, 30, 25, 35],
  },
  {
    name: "Saída",
    data: [10, 15, 12, 20],
  },
  {
    name: "Perdas",
    data: [5, 8, 6, 4],
  },
];

export default function BarChar() {
  return (
    <div className="h-[400px] bg-white rounded-md shadow-2xl">
      <div className="w-full p-4">
        <p className="text-slate-400">Status geral de medicamento</p>
      </div>
      <div className="w-full bg-slate-200 h-0.5"></div>
      <div className="m-4">
        <ApexChart
          options={options}
          series={series}
          type="bar"
          width={500}
          height={200}
        />
      </div>
      <div className="w-full bg-slate-200 h-0.5"></div>
      <div className="flex p-3  justify-center space-x-8 mt-2">
        <div className="flex items-center space-x-2">
          <div className="rounded-full w-4 h-4 bg-[#4990FF]"></div>
          <span>Stock</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="rounded-full w-4 h-4 bg-[#FFD851]"></div>
          <span>Entrada</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="rounded-full w-4 h-4 bg-[#09BB76]"></div>
          <span>Saida</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="rounded-full w-4 h-4 bg-[#FF0000]"></div>
          <span>Perdas</span>
        </div>
      </div>
    </div>
  );
}
