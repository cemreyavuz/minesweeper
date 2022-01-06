import { useEffect } from "react";

import styled from "styled-components";

import Minesweeper from "modules/minesweeper/Minesweeper";
import Peer from "peerjs";

const StyledAppWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

const App = (): JSX.Element => {
  useEffect(() => {
    const serverConnection = new Peer(
      (Math.random().toString(36) + "0000000000000000000").substring(2, 16),
      {
        host: "localhost",
        port: 4000,
        path: "/peers/connection",
      }
    );

    console.log(serverConnection);

    serverConnection.on("open", (id) => {
      console.log(`connected to peer server with id: ${id}`);
    });
  }, []);

  return (
    <StyledAppWrapper>
      <Minesweeper />
    </StyledAppWrapper>
  );
};

export default App;
