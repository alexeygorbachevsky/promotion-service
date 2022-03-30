import { v4 } from "uuid";


import { PALETTE } from "constants/styles";

import Image1 from "assets/images/banners/image1.png";
import Image2 from "assets/images/banners/image2.png";
import Image3 from "assets/images/banners/image3.jpg";
import Image4 from "assets/images/banners/image4.jpg";

import Vk from "assets/icons/social-networks/vk.svg";
import Twitter from "assets/icons/social-networks/twitter.svg";
import Facebook from "assets/icons/social-networks/facebook.svg";

import LikeIcon from "assets/icons/personal-statistic/like.svg";
import AddPersonIcon from "assets/icons/personal-statistic/person-add.svg";
import CalendarIcon from "assets/icons/personal-statistic/calendar.svg";
import MoneyIcon from "assets/icons/personal-statistic/money.svg";

// TODO: move to redux

export const BANNERS = [
  {
    id: v4(),
    icon: Image1,
    title: "Dribbble Russia VK Community officially launched!",
    description:
      "Send your portfolio to our manager on e-mail and get a chance to be a part of our new big Dribbblers group!",
    date: "Aug 14, 2020",
  },
  {
    id: v4(),
    icon: Image2,
    title: "Dribbble USA VK Community officially launched!",
    description:
      "Send your portfolio to our manager on e-mail and get a chance to be a part of our new big Dribbblers group!",
    date: "Aug 14, 2020",
  },
  {
    id: v4(),
    icon: Image3,
    title: "Dribbble Belarus VK Community officially launched!",
    description:
      "Send your portfolio to our manager on e-mail and get a chance to be a part of our new big Dribbblers group!",
    date: "Aug 14, 2020",
  },
  {
    id: v4(),
    icon: Image4,
    title: "Dribbble Georgia VK Community officially launched!",
    description:
      "Send your portfolio to our manager on e-mail and get a chance to be a part of our new big Dribbblers group!",
    date: "Aug 14, 2020",
  },
];

export const SOCIAL_MEDIA = [
  { name: "Facebook", Icon: Facebook, iconBackground: PALETTE.facebook },
  {
    name: "Twitter",
    Icon: Twitter,
    iconBackground: PALETTE.twitter,
  },
  {
    name: "VKontakte",
    Icon: Vk,
    iconBackground: PALETTE.vk,
  },
];

export const PERSONAL_STATISTIC = [
  {
    id: v4(),
    name: "like",
    icon: LikeIcon,
    description: "Likes delivered for all time",
    iconBackground: PALETTE.lightPink,
    statistic: "2 562",
  },
  {
    id: v4(),
    name: "followers",
    icon: AddPersonIcon,
    description: "New users invited",
    iconBackground: PALETTE.lightPurple,
    statistic: "15",
  },
  {
    id: v4(),
    name: "calendar",
    icon: CalendarIcon,
    description: "Days since registration",
    iconBackground: PALETTE.lightGreen,
    statistic: "329",
  },
  {
    id: v4(),
    name: "money",
    icon: MoneyIcon,
    description: "Real money spent",
    iconBackground: PALETTE.lightOrange,
    statistic: "$ 1456,23",
  },
];
