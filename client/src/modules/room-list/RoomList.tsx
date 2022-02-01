import { useContext, useEffect } from "react";

import Peer from "peerjs";

import { PeerContext } from "contexts/PeerContext";

type RoomListProps = {};

const RoomList = (props: RoomListProps): JSX.Element => {
  const { connection, setConnection } = useContext(PeerContext);
  
  useEffect(() => {
    const serverConnection = new Peer(
      (Math.random().toString(36) + "0000000000000000000").substring(2, 16),
      {
        host: "localhost",
        port: 4000,
        path: "/peer-connection",
      }
    );

    serverConnection.on("open", (id) => {
      setConnection(serverConnection);
    });
  }, [setConnection]);

  console.log(connection);

  return <div>RoomList</div>;
};

export default RoomList;
