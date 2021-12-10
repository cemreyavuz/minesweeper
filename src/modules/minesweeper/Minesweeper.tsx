import React from 'react';

import styled from 'styled-components';

import { MINESWEEPER_CANVAS_SIZE } from 'common/constants';

type MinesweeperProps = {
};

const Minesweeper = (props: MinesweeperProps): JSX.Element => {
  return (
    <StyledMinesweeperWrapper>Minesweeper</StyledMinesweeperWrapper>
  );
};

const StyledMinesweeperWrapper = styled.div`
  height: ${MINESWEEPER_CANVAS_SIZE}px;
  width: ${MINESWEEPER_CANVAS_SIZE}px;
`;

export default Minesweeper;
