import { useContext, useEffect } from "react";

import Peer from "peerjs";
import {
  BrowserRouter,
  Route,
  Routes as ReactRouterRoutes,
} from "react-router-dom";

import { PeerContext } from "contexts/PeerContext";
import RoomList from "modules/room-list/RoomList";
import Room from "modules/room/Room";

const Routes = (): JSX.Element => {
  const { setConnection, setPeerId } = useContext(PeerContext);

  useEffect(() => {
    const generatedId = (
      Math.random().toString(36) + "0000000000000000000"
    ).substring(2, 18);
    const serverConnection = new Peer(generatedId, {
      host: "localhost",
      port: 4000,
      path: "/peer-connection",
    });

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

  return (
    <BrowserRouter>
      <ReactRouterRoutes>
        <Route index element={<RoomList />} />
        <Route path="room/:roomId" element={<Room />} />
      </ReactRouterRoutes>
    </BrowserRouter>
  );
};

export default Routes;
