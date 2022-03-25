export const makePaginatedLastNews = ({ lastNews, page, itemsPerPage = 5 }) => {
  if (page) {
    return { [page]: lastNews };
  }

  let currentPage = 1;
  return lastNews.reduce((memo, lastNew) => {
    if (memo[currentPage]?.length >= itemsPerPage) {
      currentPage += 1;
    }

    if (!memo[currentPage]) {
      memo[currentPage] = [];
    }

    memo[currentPage] = [...memo[currentPage], lastNew];

    return memo;
  }, {});
};
