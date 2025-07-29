import ApexChart from "react-apexcharts";

const option = {
  chart: { toolbar: { show: false } },
  legend: { show: false },
  colors: ["#FF2866", "#4990FF"],
};

const series = [25, 45];
export default function CircularChart() {
  return (
    <div className="bg-white flex  flex-col rounded-xl shadow-2xl gap-2">
      <div className="p-3">
        <p className="text-xl text-slate-500">Status Geral de Paciente</p>
      </div>
      <div className="w-full h-1 bg-slate-300"></div>
      <div className="flex">
        <div className="flex flex-col gap-5">
          <div className="flex gap-4">
            <div className="flex flex-col gap-6 p-3 items-center justify-center">
              <span className="bg-sky-400 rounded-2xl w-4 h-4"></span>
              <span className="bg-[#FF2866] rounded-2xl w-4 h-4"></span>
            </div>
            <div className="flex flex-col gap-4 justify-center">
              <p className="text-xl ">Recuperados</p>
              <p className="text-xl ">Hospitalizados</p>
            </div>
          </div>
          <div className="flex flex-col justify-center p-3 ml-10">
            <p className="text-xl">Total</p>
            <p className="text-xl">23,667</p>
          </div>
        </div>
        <ApexChart options={option} series={series} type="pie" />
      </div>
    </div>
  );
}
