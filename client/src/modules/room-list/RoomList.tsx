import { useContext } from "react";

import { PeerContext } from "contexts/PeerContext";
import { useCreateRoom } from "hooks";

const RoomList = (): JSX.Element => {
  const { connection, peerId } = useContext(PeerContext);

  const { mutate: createRoom } = useCreateRoom();

  const handleCreateRoom = () => {
    createRoom({ peerId });
  };

  return (
    <div>{connection && <button onClick={handleCreateRoom}>Create room</button>}</div>
  );
};

export default RoomList;
