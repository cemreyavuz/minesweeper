import { useContext } from "react";

import { PeerContext } from "contexts/PeerContext";

type RoomListProps = {};

const RoomList = (props: RoomListProps): JSX.Element => {
  const { connection, peerId } = useContext(PeerContext);

  console.log(connection, peerId);

  return <div>RoomList</div>;
};

export default RoomList;
