import styled from "styled-components";

import Minesweeper from "modules/minesweeper/Minesweeper";

const StyledAppWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

const App = (): JSX.Element => {
  return (
    <StyledAppWrapper>
      <Minesweeper />
    </StyledAppWrapper>
  );
};

export default App;
