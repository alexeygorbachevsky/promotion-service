import Facebook from "assets/icons/social-networks/facebook.svg";
import {PALETTE} from "constants/styles";
import Twitter from "assets/icons/social-networks/twitter.svg";
import Vk from "assets/icons/social-networks/vk.svg";

export const SOCIAL_MEDIA = [
    { name: "facebook", label: "Facebook", Icon: Facebook, iconBackground: PALETTE.facebook },
    {
        name: "twitter",
        label: "Twitter",
        Icon: Twitter,
        iconBackground: PALETTE.twitter,
    },
    {
        name: "vkontakte",
        label: "VKontakte",
        Icon: Vk,
        iconBackground: PALETTE.vk,
    },
];
