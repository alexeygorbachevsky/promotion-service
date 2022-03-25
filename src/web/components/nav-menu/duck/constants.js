import Menu24Icon from "assets/icons/menu24.svg";
import Settings24Icon from "assets/icons/settings24.svg";
import News24Icon from "assets/icons/news24.svg";

import { ROUTES } from "constants/routes";

export const NAV_MENU_ITEMS = [
  {
    title: "Task list",
    Icon: Menu24Icon,
    to: ROUTES.taskList,
  },
  {
    title: "News",
    Icon: News24Icon,
    to: ROUTES.news,
  },
  {
    title: "Settings",
    Icon: Settings24Icon,
    to: ROUTES.settings,
  },
  // {
  //   title: "Contact us",
  //   Icon: ContactUsIcon24,
  //   to: "",
  // },
];
