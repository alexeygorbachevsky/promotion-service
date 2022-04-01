import { v4 } from "uuid";
import styled from "styled-components";

import NativeAvatarIcon from "assets/icons/avatars/avatar-main40.svg";

import like from "assets/icons/task-types/like.svg";
import comment from "assets/icons/task-types/comment.svg";
import followers from "assets/icons/task-types/followers.svg";
import view from "assets/icons/task-types/view.svg";

import { CARDS } from "./ducks";
import { wait } from "../ducks";

const AvatarIcon = styled(NativeAvatarIcon)`
  width: 50px;
  height: 50px;
`;

// TODO: refactor

const DEFAULT_LIMIT = 12;
const DEFAULT_IS_LOAD_ALL = false;

// const EMPTY_CARDS = Array(24)
//   .fill(1)
//   .map(() => ({
//     id: v4(),
//     userId: v4(),
//     avatar: "",
//     name: "",
//     taskType: "",
//     taskTypeImage: "",
//     taskIcon: "",
//   }));

const TASK_TYPE_IMAGES = {
  Like: like,
  Comment: comment,
  Followers: followers,
  Views: view,
};

const getAvatarByUserId = userId =>
  userId === "promotion_service_admin_user_id" ? AvatarIcon : "";

const MY_CARDS = Array(24)
  .fill(1)
  .map(() => ({
    id: v4(),
    userId: "promotion_service_admin_user_id",
    avatar: getAvatarByUserId("promotion_service_admin_user_id"),
    name: "David McConaughey",
    taskType: "",
    taskTypeImage: "",
    taskIcon: "",
  }));

const types = {
  1: {
    taskType: "Like",
    taskTypeImage: like,
  },
  2: {
    taskType: "Comment",
    taskTypeImage: comment,
  },
  3: {
    taskType: "Followers",
    taskTypeImage: followers,
  },
  4: {
    taskType: "Views",
    taskTypeImage: view,
  },
};

const myCards = MY_CARDS.map(card => {
  const min = 1;
  const taskIconNumber = Math.floor(Math.random() * (10 - min + 1) + min);
  const taskTypeNumber = Math.floor(Math.random() * (4 - min + 1) + min);

  return {
    ...card,
    ...types[taskTypeNumber],
    taskIcon: `task${taskIconNumber}.svg`,
  };
});

let tasks = CARDS;

export const getTasks = async ({
  limit = DEFAULT_LIMIT,
  pagingToken = null,
  isLoadAll = DEFAULT_IS_LOAD_ALL,
  search = "",
} = {}) => {
  await wait(2000);

  // const emptyCards = EMPTY_CARDS.map((el, index) => ({
  //   ...el,
  //   name:
  //     index % limit === 0 || index === 0
  //       ? `First item in ${
  //           index === 0 ? index + 2 : Math.ceil(index / limit) + 2
  //         } page`
  //       : "",
  // }));

  tasks = CARDS.concat(myCards);

  if (search) {
    const searchText = search.toLowerCase();
    tasks = tasks.filter(({ name }) => name.toLowerCase().includes(searchText));
  }

  if (isLoadAll) {
    return { tasks, isLoadedAll: true };
  }

  if (pagingToken) {
    const firstRequestedIndex =
      tasks.findIndex(el => el.id === pagingToken) + 1;

    const newTasks = tasks.slice(
      firstRequestedIndex,
      firstRequestedIndex + limit,
    );

    return {
      tasks: newTasks,
      isLoadedAll:
        newTasks[newTasks.length - 1].id === tasks[tasks.length - 1].id,
    };
  }

  return { tasks: tasks.slice(0, limit), isLoadedAll: tasks.length <= limit };
};

export const addTask = async ({ task } = {}) => {
  await wait(2000);

  const avatar = getAvatarByUserId(task.userId);

  tasks = [
    {
      id: v4(),
      ...task,
      avatar,
      taskTypeImage: TASK_TYPE_IMAGES[task.taskType],
    },
    ...tasks,
  ];

  return { tasks: DEFAULT_IS_LOAD_ALL ? tasks : tasks.slice(0, DEFAULT_LIMIT) };
};
