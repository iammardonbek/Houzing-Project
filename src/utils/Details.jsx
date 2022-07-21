import Contacts from "../components/Contacts/Contacts";
import { Home } from "../components/Home/Home";
import Properties from "../components/Properties/Properties";

export const NavbarDetails = [
  {
    id: "1",
    title: "home",
    path: "/",
    element: <Home />,
  },
  {
    id: "2",
    title: "properties",
    path: "/Properties",
    element: <Properties />,
  },
  {
    id: "3",
    title: "contact us",
    path: "/Contact",
    element: <Contacts />,
  },
];
