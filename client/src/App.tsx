import styled from "styled-components";

import { PeerProvider } from "contexts/PeerContext";
import RoomList from "modules/room-list/RoomList";

const StyledAppWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

const App = (): JSX.Element => {
  return (
    <PeerProvider>
      <StyledAppWrapper>
        <RoomList />
      </StyledAppWrapper>
    </PeerProvider>
  );
};

export default App;
