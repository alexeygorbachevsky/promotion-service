import { BANNERS } from "./duck";
import { wait } from "../ducks";

export const getBanners = async () => {
  await wait(2000);
  return BANNERS;
};
