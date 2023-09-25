// import { BiListPlus } from "react-icons/bi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineDashboard } from "react-icons/ai";

import { ImLab } from "react-icons/im";
import { FaLaptopMedical } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { BsListTask } from "react-icons/bs";


export const menu = [
  {
    id: 1,
    listItems: [
      {
        id: 1,
        title: "Dashboard",
        url: "/",
        icon: <AiOutlineDashboard className="nav-img"/>,
      },
      {
        id: 2,
        title: "Create Task",
        url: "/",
        icon: <AiOutlinePlusCircle className="nav-img"/>,
      },
    ],
  },
  {
    id: 2,
    title: "Task lists",
    listItems: [
      {
        id: 1,
        title: "Lab Work",
        url: "/lab",
        icon: <ImLab className='nav-img'/>,
      },
      {
        id: 2,
        title: "Development",
        url: "/development",
        icon: <BsListTask className="nav-img big"/>,
      },
      {
        id: 3,
        title: "Data Analysis",
        url: "/analysis",
        icon: <GoChecklist className="nav-img big"/>,
      },
      {
        id: 4,
        title: "Data Curation",
        url: "/datacuration",
        icon:  <FaLaptopMedical className="nav-img big"/>,
      },
    ],
  },
];
