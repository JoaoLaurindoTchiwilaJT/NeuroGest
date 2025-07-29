import {
  LayoutDashboard,
  UserCheck,
  HelpCircle,
  LogOut,
  Pill,
} from "lucide-react";

export default function NavBar() {
  return (
    <div className="w-[390px] h-screen flex flex-col gap-30 bg-green-400 text-white shadow-2xl shadow-black">
      <div className="flex h-46 items-center justify-center">
        <img className="w-40" src="./neurogest.png" alt="Logo" />
      </div>

      <ul className="flex flex-col gap-6">
        <li className="flex gap-4 p-3 items-center text-green-400 bg-white ">
          <LayoutDashboard />
          <p className="text-xl font-semibold">Status Geral</p>
        </li>
        <li className="flex gap-4 p-3 items-center ">
          <UserCheck />
          <p className="text-xl font-semibold">Cadastrar Paciente</p>
        </li>
        <li className="flex gap-4 p-3 items-center">
          <Pill />
          <p className="text-xl font-semibold">Gestão de Medicamentos</p>
        </li>
        <li className="flex gap-4 p-3 items-center">
          <UserCheck />
          <p className="text-xl font-semibold">Cadastrar Medicos</p>
        </li>
      </ul>

      <ul>
        <li className="flex gap-4 p-3 items-center">
          <HelpCircle />
          <p className="text-xl font-semibold">Ajuda e Suporte</p>
        </li>
        <li className="flex gap-4 p-3 items-center">
          <LogOut />
          <p className="text-xl font-semibold">Sair do Sistema</p>
        </li>
      </ul>
    </div>
  );
}
