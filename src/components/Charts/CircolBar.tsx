import ApexChart from "react-apexcharts";

// const series = [
//   { title: "Medicamentos em stokes", value: "1222.99" },
//   { title: "Pacientes", value: "15.451" },
//   { title: "Médicos", value: "11.451" },
// ];

// Gráfico 4: Status geral de pacientes (Gráfico de Pizza)
const options = {
  chart: {
    height: 350,
    toolbar: { show: false },
  },
  colors: ["#4990FF", "#FF2866"],
  legend: {
    show: false,
    position: "left" as const,
  },
};

const series = [8000, 15667];

export default function CircolBar() {
  return (
    <div className="h-[400] bg-slate-50 shadow-2xl rounded-md">
      <div>
        <p className="text-slate-400 p-4">Status geral de pacientes</p>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-30 flex  gap-2 m-4">
          <div className=" flex flex-col items-center justify-center gap-5">
            <div className="h-4 bg-[#4990FF] w-4 rounded-3xl"></div>
            <div className="h-4 bg-[#FF2866] w-4 rounded-3xl"></div>
          </div>
          <div className="flex items-start gap-2 flex-col">
            <span>Recuperados</span>
            <span>Hospitalizados</span>
          </div>
        </div>
        <ApexChart
          options={options}
          series={series}
          type="pie"
          width={400}
          height={300}
        />
      </div>
    </div>
  );
}
