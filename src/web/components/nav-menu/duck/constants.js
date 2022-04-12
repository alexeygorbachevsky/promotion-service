import Menu24Icon from "assets/icons/menu24.svg";
// import History24Icon from "assets/icons/history24.svg";
import Settings24Icon from "assets/icons/settings24.svg";
import News24Icon from "assets/icons/news24.svg";

import { ROUTES } from "constants/routes";

export const NAV_MENU_ITEMS = [
  {
    title: "Task list",
    Icon: Menu24Icon,
    to: ROUTES.taskList,
  },
  // {
  //   title: "Task history",
  //   Icon: History24Icon,
  //   to: ROUTES.taskHistory,
  // },
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
];
