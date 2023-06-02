import TwittList from "../components/TwittList";

const DUMMY_TWITTS = [
  {
    id: 't1',
    title: 'One Year Ago',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    creator: 'u1'
  },
  {
    id: 't2',
    title: 'NEwerland',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    creator: 'u2'
  },
]
const UserTwitts = () => {

  const loadedTwitts = DUMMY_TWITTS.filter(twitt => twitt.creator)
  return <TwittList items={loadedTwitts} />
}

export default UserTwitts;