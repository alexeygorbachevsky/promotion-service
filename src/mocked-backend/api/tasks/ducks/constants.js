import { v4 } from "uuid";

import avatar1 from "assets/icons/avatars/avatar1.svg";
import avatar2 from "assets/icons/avatars/avatar2.svg";
import avatar3 from "assets/icons/avatars/avatar3.svg";
import avatar4 from "assets/icons/avatars/avatar4.svg";
import avatar5 from "assets/icons/avatars/avatar5.svg";
import avatar6 from "assets/icons/avatars/avatar6.svg";
import avatar7 from "assets/icons/avatars/avatar7.svg";
import avatar8 from "assets/icons/avatars/avatar8.svg";
import avatar9 from "assets/icons/avatars/avatar9.svg";
import avatar10 from "assets/icons/avatars/avatar10.svg";

import task1 from "assets/icons/tasks/task1.svg";
import task2 from "assets/icons/tasks/task2.svg";
import task3 from "assets/icons/tasks/task3.svg";
import task4 from "assets/icons/tasks/task4.svg";
import task5 from "assets/icons/tasks/task5.svg";
import task6 from "assets/icons/tasks/task6.svg";
import task7 from "assets/icons/tasks/task7.svg";
import task8 from "assets/icons/tasks/task8.svg";
import task9 from "assets/icons/tasks/task9.svg";
import task10 from "assets/icons/tasks/task10.svg";

import like from "assets/icons/task-types/like.svg";
import comment from "assets/icons/task-types/comment.svg";
import followers from "assets/icons/task-types/followers.svg";
import view from "assets/icons/task-types/view.svg";

export const CARDS = [
  {
    id: v4(),
    avatar: avatar1,
    name: "Tran Mau Tri Tam",
    type: "Like",
    typeImage: like,
    task: task1,
  },
  {
    id: v4(),
    avatar: avatar2,
    name: "Anastasia",
    type: "Comment",
    typeImage: comment,
    task: task2,
  },
  {
    id: v4(),
    avatar: avatar3,
    name: "Martin David",
    type: "Like",
    typeImage: like,
    task: task3,
  },
  {
    id: v4(),
    avatar: avatar4,
    name: "Dwinawan",
    type: "Followers",
    typeImage: followers,
    task: task4,
  },
  {
    id: v4(),
    avatar: avatar5,
    name: "Anton Tkachev",
    type: "Views",
    typeImage: view,
    task: task5,
  },
  {
    id: v4(),
    avatar: avatar6,
    name: "Adam Anderson",
    type: "Followers",
    typeImage: followers,
    task: task6,
  },
  {
    id: v4(),
    avatar: avatar7,
    name: "Taras Migulko",
    type: "Like",
    typeImage: like,
    task: task7,
  },
  {
    id: v4(),
    avatar: avatar8,
    name: "Brent Schoepf",
    type: "Comment",
    typeImage: comment,
    task: task8,
  },
  {
    id: v4(),
    avatar: avatar9,
    name: "Dmitry Lauretsky",
    type: "Like",
    typeImage: like,
    task: task9,
  },
  {
    id: v4(),
    avatar: avatar10,
    name: "Outcrowd",
    type: "Comment",
    typeImage: comment,
    task: task10,
  },
  {
    id: v4(),
    avatar: "",
    name: "",
    type: "",
    typeImage: "",
    task: "",
  },
  {
    id: v4(),
    avatar: "",
    name: "",
    type: "",
    typeImage: "",
    task: "",
  },
];
