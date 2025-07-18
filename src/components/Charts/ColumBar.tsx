export default function ColumBar() {
  return (
    <div className="h-[400] w-135 bg-white shadow-2xl rounded-md">
      <div className="w-full flex justify-between">
        <p className="p-5 text-slate-400">Status geral</p>
        <p className="p-5 text-slate-400">Total</p>
      </div>
      <div className="bg-slate-200 h-0.5 w-full"></div>
      <div className="m-6 h-65 space-x-4">
        <div className="space-x-4">
          <div className="flex justify-between p-1">
            <p>Medicamento em Stock</p>
            <p>1222.99</p>
          </div>
          <div className="bg-sky-300 h-0.5 w-full"></div>
        </div>
        <div className="space-x-4">
          <div className="flex justify-between p-1">
            <p>Pacientes</p>
            <p>15.451</p>
          </div>
          <div className="bg-sky-300 h-0.5 w-full"></div>
        </div>
        <div className="space-x-8">
          <div className="flex justify-between p-1">
            <p>Medicos</p>
            <p>11.451</p>
          </div>
          <div className="bg-sky-300 h-0.5 w-100"></div>
        </div>
      </div>
    </div>
  );
}
