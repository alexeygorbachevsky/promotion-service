import LikeIcon from "assets/icons/task-types/like.svg";
import FollowersIcon from "assets/icons/task-types/followers.svg";
import CommentsIcon from "assets/icons/task-types/comment.svg";
import ViewIcon from "assets/icons/task-types/view.svg";

import { PALETTE } from "constants/styles";

export const TASK_TYPES = [
  { type: "Like", Icon: LikeIcon, iconBackground: PALETTE.lightPink },
  {
    type: "Followers",
    Icon: FollowersIcon,
    iconBackground: PALETTE.lightPurple,
  },
  {
    type: "Comments",
    Icon: CommentsIcon,
    iconBackground: PALETTE.lightGreen,
  },
  { type: "Views", Icon: ViewIcon, iconBackground: PALETTE.lightOrange },
];
