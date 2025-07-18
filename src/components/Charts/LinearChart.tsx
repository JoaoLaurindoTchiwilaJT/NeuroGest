import ApexChart from "react-apexcharts";

const options = {
  chart: {
    id: "grafico-linear",
    toolbar: { show: false },
  },
  xaxis: {
    categories: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Julh",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
  },
  markers: {
    size: 5,
  },
  legend: {
    show: false,
  },
  colors: ["#FFD851", "#22c55e"], // <- Aqui define as cores das linhas
  stroke: {
    curve: "smooth" as const, // ou "straight", "stepline"
    width: 3,
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
    name: "Entrada",
    data: [20, 15, 15, 5, 35, 25, 55, 65, 75, 85, 95, 99],
  },
  {
    name: "Saida",
    data: [0, 5, 10, 15, 20, 30, 40, 50, 70, 80, 90, 100],
  },
];

export default function GraficLinear() {
  return (
    <div className="h-[350] rounded-md  bg-white shadow-xl border border-0">
      <div className="p-4">
        <p className="text-slate-500">Total de Entradas e Saidas</p>
      </div>
      <div className="w-full bg-slate-200 h-0.5"></div>
      <div className="m-4">
        <ApexChart
          options={options}
          series={series}
          type="line"
          height={200}
          width={500}
        />
      </div>
      <div className="w-full bg-slate-200 h-0.5"></div>
      <div className="flex  p-3 mb-2 justify-center space-x-8 mt-2">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-[#FFD851] rounded-full"></div>
          <span className="text-gray-700 font-medium">Entrada</span>
        </div>
        <div className="flex  items-center space-x-2">
          <div className="w-4 h-4 bg-[#22c55e] rounded-full"></div>
          <span className="text-gray-700 font-medium">Saída</span>
        </div>
      </div>
    </div>
  );
}
