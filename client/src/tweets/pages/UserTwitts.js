import TwittList from "../components/TwittList";
import image from "../../images/avatar.jpeg";

const DUMMY_TWITTS = [
  {
    id: "t1",
    creator: {
      id: "u1",
      image: image,
      name: "Waldemar Weinert",
      nickname: "@woldemst",
    },
    postedDate: "Jun 2",
    description:
      "It's just one more day. More work, more experience. More experience, more money",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
  },
  {
    id: "t2",
    creator: {
      id: "u2",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
      name: "John Doe",
      nickname: "@johndoe",
    },
    postedDate: "May 28",
    description: "Enjoying a beautiful day at the beach",
    imageUrl: "https://example.com/beach.jpg",
  },
  {
    id: "t3",
    creator: {
      id: "u3",
      image: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=800",
      name: "Jane Smith",
      nickname: "@janesmith",
    },
    postedDate: "Jun 1",
    description: "Exploring the stunning landscapes of the mountains",
    imageUrl: "https://example.com/mountains.jpg",
  },
  {
    id: "t4",
    creator: {
      id: "u4",
      image: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=800",
      name: "Alex Johnson",
      nickname: "@alexjohnson",
    },
    postedDate: "May 30",
    description: "Having a delicious meal at a fancy restaurant",
    imageUrl: "https://example.com/restaurant.jpg",
  }

];
const UserTwitts = () => {
  const loadedTwitts = DUMMY_TWITTS.filter((twitt) => twitt.creator);
  return <TwittList items={loadedTwitts} />;
};

export default UserTwitts;
