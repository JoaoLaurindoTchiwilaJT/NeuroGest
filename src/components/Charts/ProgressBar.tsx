import ProgressBar from "@ramonak/react-progress-bar";

export default function Progress() {
  return (
    <div className="bg-white shadow-2xl rounded-xl">
      <div className="flex items-center justify-between p-3">
        <p className="text-xl text-slate-400">Status Geral</p>
        <p className="text-xl text-slate-400">Total</p>
      </div>
      <div className="w-full h-1 bg-slate-300"></div>
      <div className="w-[450px] flex flex-col p-4 gap-4 mb-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p>Medicamentos em stocks</p>
            <p>1222.99</p>
          </div>
          <ProgressBar
            height="10px"
            completed={90}
            isLabelVisible={false}
            animateOnRender={true}
            bgColor="#4990FF"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p>Pacientes</p>
            <p>15.451</p>
          </div>
          <ProgressBar
            completed={90}
            height="10px"
            isLabelVisible={false}
            animateOnRender={true}
            bgColor="#4990FF"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p>Medicos</p>
            <p>11.451</p>
          </div>
          <ProgressBar
            completed={90}
            height="10px"
            isLabelVisible={false}
            animateOnRender={true}
            bgColor="#4990FF"
          />
        </div>
      </div>
    </div>
  );
}
