import { v4 } from "uuid";

import Image1 from "assets/images/banners/image1.png";
import Image2 from "assets/images/banners/image2.png";
import Image3 from "assets/images/banners/image3.jpg";
import Image4 from "assets/images/banners/image4.jpg";

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

