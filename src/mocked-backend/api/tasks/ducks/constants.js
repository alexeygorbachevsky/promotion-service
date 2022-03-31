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

import like from "assets/icons/task-types/like.svg";
import comment from "assets/icons/task-types/comment.svg";
import followers from "assets/icons/task-types/followers.svg";
import view from "assets/icons/task-types/view.svg";

export const CARDS = [
  {
    id: v4(),
    userId: v4(),
    avatar: avatar1,
    name: "Tran Mau Tri Tam",
    type: "Like",
    typeImage: like,
    taskIcon: "task1.svg",
  },
  {
    id: v4(),
    userId: v4(),
    avatar: avatar2,
    name: "Anastasia",
    type: "Comment",
    typeImage: comment,
    taskIcon: "task2.svg",
  },
  {
    id: v4(),
    userId: v4(),
    avatar: avatar3,
    name: "Martin David",
    type: "Like",
    typeImage: like,
    taskIcon: "task3.svg",
  },
  {
    id: v4(),
    userId: v4(),
    avatar: avatar4,
    name: "Dwinawan",
    type: "Followers",
    typeImage: followers,
    taskIcon: "task4.svg",
  },
  {
    id: v4(),
    userId: v4(),
    avatar: avatar5,
    name: "Anton Tkachev",
    type: "Views",
    typeImage: view,
    taskIcon: "task5.svg",
  },
  {
    id: v4(),
    userId: v4(),
    avatar: avatar6,
    name: "Adam Anderson",
    type: "Followers",
    typeImage: followers,
    taskIcon: "task6.svg",
  },
  {
    id: v4(),
    userId: v4(),
    avatar: avatar7,
    name: "Taras Migulko",
    type: "Like",
    typeImage: like,
    taskIcon: "task7.svg",
  },
  {
    id: v4(),
    userId: v4(),
    avatar: avatar8,
    name: "Brent Schoepf",
    type: "Comment",
    typeImage: comment,
    taskIcon: "task8.svg",
  },
  {
    id: v4(),
    userId: v4(),
    avatar: avatar9,
    name: "Dmitry Lauretsky",
    type: "Like",
    typeImage: like,
    taskIcon: "task9.svg",
  },
  {
    id: v4(),
    userId: v4(),
    avatar: avatar10,
    name: "Outcrowd",
    type: "Comment",
    typeImage: comment,
    taskIcon: "task10.svg",
  },
  {
    id: v4(),
    userId: v4(),
    avatar: "",
    name: "",
    type: "",
    typeImage: "",
    taskIcon: "",
  },
  {
    id: v4(),
    userId: v4(),
    avatar: "",
    name: "",
    type: "",
    typeImage: "",
    taskIcon: "",
  },
];
