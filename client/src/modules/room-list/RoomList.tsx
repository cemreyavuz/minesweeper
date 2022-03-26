import { useContext } from "react";

import { PeerContext } from "contexts/PeerContext";

const RoomList = (): JSX.Element => {
  const { connection, peerId } = useContext(PeerContext);

  const createRoom = (): void => {
    fetch("http://localhost:4000/rooms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `${peerId}'s room`,
        leader: peerId,
      }),
    });
  };

  return (
    <div>{connection && <button onClick={createRoom}>Create room</button>}</div>
  );
};

export default RoomList;
