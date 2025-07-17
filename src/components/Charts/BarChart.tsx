import ApexChart from "react-apexcharts";

const options = {
  Chart: {
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
      endingShape: "rounded",
    },
  },
  legend: {
    show: false,
  },
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
    <div className="bg-white rounded-md shadow-2xl">
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
          height={300}
        />
      </div>
      <div className="w-full bg-slate-200 h-0.5"></div>
      <div className="flex p-3 mb-2  justify-center space-x-8 mt-2">
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
