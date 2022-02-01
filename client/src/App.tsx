import styled from "styled-components";

import { PeerProvider } from "contexts/PeerContext";
import Routes from "Routes";

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
        <Routes />
      </StyledAppWrapper>
    </PeerProvider>
  );
};

export default App;
