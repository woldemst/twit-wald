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
      "https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=742&q=80",
  },
  {
    id: "t2",
    creator: {
      id: "u2",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
      name: "John Doe",
      nickname: "@johndoe",
    },
    postedDate: "May 28",
    description: "Enjoying a beautiful day at the beach",
    imageUrl:
      "https://images.unsplash.com/photo-1685665535340-c3b6d390a15f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "t3",
    creator: {
      id: "u3",
      image:
        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=800",
      name: "Jane Smith",
      nickname: "@janesmith",
    },
    postedDate: "Jun 1",
    description: "Exploring the stunning landscapes of the mountains",
    imageUrl:
      "https://images.unsplash.com/photo-1682686581264-c47e25e61d95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "t4",
    creator: {
      id: "u4",
      image:
        "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=800",
      name: "Alex Johnson",
      nickname: "@alexjohnson",
    },
    postedDate: "May 30",
    description: "Having a delicious meal at a fancy restaurant",
    imageUrl:
      "https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=742&q=80",
  },
];
const UserTwitts = () => {
  const loadedTwitts = DUMMY_TWITTS.filter((twitt) => twitt.creator);
  return <TwittList items={loadedTwitts} />;
};

export default UserTwitts;
