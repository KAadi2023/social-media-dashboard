
import { Facebook, Instagram, Twitter, YouTube, ThumbUp, Share, Comment, Subscriptions} from '@mui/icons-material';

export const statisticsCardsData = [
  {
    color: "gray",
    icon: ThumbUp,
    title: "Likes",
    value: "53k",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "gray",
    icon: Share,
    title: "Shares",
    value: "2.3K",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "gray",
    icon: Comment,
    title: "Comments",
    value: "3.4K",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than yesterday",
    },
  },
  {
    color: "gray",
    icon: Subscriptions,
    title: "Subscribers",
    value: "103K",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
];

export default statisticsCardsData;
