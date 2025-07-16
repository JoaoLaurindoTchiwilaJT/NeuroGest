import { LayoutDashboardIcon, Settings } from "lucide-react";
import logo from "../assets/icons/png/neurogest.png";
import ButtonActive from "../components/ButtonActive";
import Button from "../components/Button";

function Menu() {
  return (
    <div className="h-screen bg-green-300 flex grid ">
      <img src={logo} className="w-44.5 h-44.5" alt="" />
      <div className="space-y-4 flex-col ">
        <ButtonActive>
          <LayoutDashboardIcon />
          Status
        </ButtonActive>
        <Button> Cadastrar Paciente</Button>
        <Button>Gestão de Medicamentos</Button>
        <Button>Cadastrar Medicos</Button>
      </div>
      <div className="space-y-4">
        <Button>
          <Settings className="" /> Ajuda e Suporte
        </Button>
        <Button>Sair do Sistema</Button>
      </div>
    </div>
  );
}

export default Menu;
