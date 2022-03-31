import { v4 } from "uuid";

import { CARDS } from "./ducks";
import { wait } from "../ducks";

const DEFAULT_LIMIT = 12;
const DEFAULT_IS_LOAD_ALL = false;

const EMPTY_CARDS = Array(24)
  .fill(1)
  .map(() => ({
    id: v4(),
    userId: v4(),
    avatar: "",
    name: "",
    type: "",
    typeImage: "",
    taskIcon: "",
  }));

let tasks = CARDS;

export const getTasks = async ({
  limit = DEFAULT_LIMIT,
  pagingToken = null,
  isLoadAll = DEFAULT_IS_LOAD_ALL,
  search = "",
} = {}) => {
  await wait(2000);

  const emptyCards = EMPTY_CARDS.map((el, index) => ({
    ...el,
    name:
      index % limit === 0 || index === 0
        ? `First item in ${
            index === 0 ? index + 2 : Math.ceil(index / limit) + 2
          } page`
        : "",
  }));

  tasks = CARDS.concat(emptyCards);

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

export const addTask = async ({ task, userId } = {}) => {
  await wait(2000);

  tasks = [{ id: v4(), userId, ...task }, ...tasks];

  return { tasks: DEFAULT_IS_LOAD_ALL ? tasks : tasks.slice(0, DEFAULT_LIMIT) };
};
