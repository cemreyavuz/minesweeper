import { useContext, useEffect } from "react";

import { PeerContext } from "contexts/PeerContext";
import RoomList from "modules/room-list/RoomList";
import Peer from "peerjs";

const Routes = (): JSX.Element => {
  const { setConnection, setPeerId } = useContext(PeerContext);

  useEffect(() => {
    const generatedId = (
      Math.random().toString(36) + "0000000000000000000"
    ).substring(2, 16);
    const serverConnection = new Peer(
      generatedId,
      {
        host: "localhost",
        port: 4000,
        path: "/peer-connection",
      }
    );

    serverConnection.on("open", (peerId: string) => {
      setConnection(serverConnection);

      if (peerId !== generatedId) {
        console.warn(
          `Peer id (${peerId}) is not equal to generated id (${generatedId})`
        );
      } else {
        console.log(`Peer is connected with the id: ${peerId}`);
      }
      setPeerId(peerId);
    });
  }, [setConnection, setPeerId]);

  return <RoomList />;
};

export default Routes;
