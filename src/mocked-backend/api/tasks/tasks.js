import { v4 } from "uuid";

import { CARDS } from "./ducks";
import { wait } from "../ducks";

const EMPTY_CARDS = Array(24)
  .fill(1)
  .map(() => ({
    id: v4(),
    avatar: "",
    name: "",
    type: "",
    typeImage: "",
    task: "",
  }));

export const getTasks = async ({
  limit = 12,
  pagingToken = null,
  isLoadAll = false,
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

  let tasks = CARDS.concat(emptyCards);

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
