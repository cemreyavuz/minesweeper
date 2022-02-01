import { useContext, useEffect } from "react";

import { PeerContext } from "contexts/PeerContext";
import RoomList from "modules/room-list/RoomList";
import Peer from "peerjs";

const Routes = (): JSX.Element => {
  const { setConnection, setPeerId } = useContext(PeerContext);

  useEffect(() => {
    const serverConnection = new Peer(
      (Math.random().toString(36) + "0000000000000000000").substring(2, 16),
      {
        host: "localhost",
        port: 4000,
        path: "/peer-connection",
      }
    );

    serverConnection.on("open", (id: string) => {
      setConnection(serverConnection);
      setPeerId(id);
    });
  }, [setConnection, setPeerId]);

  return <RoomList />;
};

export default Routes;
