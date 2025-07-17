import {
  LayoutDashboardIcon,
  UserRoundPlus,
  UserCheck,
  Pill,
  LogIn,
  BadgeQuestionMark,
} from "lucide-react";
import logo from "../assets/icons/png/neurogest.png";
import ButtonActive from "./ButtonActive";
import Button from "./Button";

function NavBar() {
  return (
    <div className="h-screen w-80 bg-green-400 grid shadow-neutral-700  shadow-2xl">
      <div className="items-center justify-center flex">
        <img src={logo} className="w-44.5 h-44.5" alt="" />
      </div>
      <div className="space-y-4 flex-col ">
        <ButtonActive>
          <LayoutDashboardIcon />
          <div className="w-44 mr-4  items-end flex  ">Status</div>
        </ButtonActive>
        <Button>
          <UserCheck />
          <div className="w-44 mr-4  items-end flex  ">Cadastrar Paciente</div>
        </Button>
        <Button>
          <Pill />
          <div className=" w-60   items-end flex  ">Gestão de Medicamentos</div>
        </Button>
        <Button>
          <UserRoundPlus />
          <div className="w-44 mr-4  items-end flex  ">Cadastrar Medicos</div>
        </Button>
      </div>
      <div className="space-y-4">
        <Button>
          <BadgeQuestionMark />
          <div className="w-44 mr-4  items-end flex  ">Ajuda e Suporte</div>
        </Button>
        <Button>
          <LogIn />
          <div className="w-44 mr-4  items-end flex  ">Sair do Sistema</div>
        </Button>
      </div>
    </div>
  );
}

export default NavBar;
