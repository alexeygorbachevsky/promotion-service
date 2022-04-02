import { v4 } from "uuid";

import { LAST_NEWS_FIRST_PAGE } from "./ducks";
import { wait } from "../ducks";

export const getLastNews = async ({ page, itemsPerPage = 6 }) => {
  await wait(2000);

  const LAST_NEWS_EMPTY_PAGES = Array(42)
    .fill(1)
    .map((el, index) => ({
      id: v4(),
      image: "",
      title:
        index % itemsPerPage === 0 || index === 0
          ? `First item in ${
              index === 0 ? index + 2 : Math.ceil(index / itemsPerPage) + 2
            } page`
          : "",
      date: "",
    }));

  let lastNews = LAST_NEWS_FIRST_PAGE.concat(LAST_NEWS_EMPTY_PAGES);
  let returnedPage = page;

  const totalCount = lastNews.length;

  if (page) {
    const pagesCount = Math.ceil(lastNews.length / itemsPerPage);

    let firstItemIndex = itemsPerPage * (page - 1);
    const isIncorrectPage = Number.isNaN(Number(page));

    if (isIncorrectPage || (!isIncorrectPage && page > pagesCount)) {
      firstItemIndex = 0;
      returnedPage = 1;
    }

    lastNews = lastNews.slice(firstItemIndex, firstItemIndex + itemsPerPage);
  }

  return { lastNews, totalCount, returnedPage };
};
