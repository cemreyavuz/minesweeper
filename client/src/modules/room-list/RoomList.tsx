import { useContext } from "react";
import { Button } from "@blueprintjs/core";

import { PeerContext } from "contexts/PeerContext";
import { useCreateRoom } from "hooks";

const RoomList = (): JSX.Element => {
  const { peerId } = useContext(PeerContext);

  const { mutate: createRoom } = useCreateRoom();

  const handleCreateRoom = () => {
    createRoom({ peerId });
  };

  return (
    <div>
      <Button intent="success" onClick={handleCreateRoom}>
        Create room
      </Button>
    </div>
  );
};

export default RoomList;
