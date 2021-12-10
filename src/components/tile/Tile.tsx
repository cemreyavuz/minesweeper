import { Colors } from "@blueprintjs/core";
import styled from "styled-components";

import { TILE_SIZE } from "common/constants";
import { Mine } from "modules/minesweeper/Minesweeper";

type TileProps = {
  isVisited?: boolean;
  onClick: () => void;
} & Mine;

const Tile = ({
  isVisited,
  isMine,
  neighborCount,
  onClick,
}: TileProps): JSX.Element => {
  if (!isVisited) {
    return <StyledTileWrapper onClick={onClick} />
  }

  if (!isMine) {
    return <StyledTileWrapper>{neighborCount}</StyledTileWrapper>
  }
  
  return <StyledTileWrapper>X</StyledTileWrapper>;
};

const StyledTileWrapper = styled.button`
  align-items: center;
  background-color: ${Colors.LIGHT_GRAY5};
  border: 1px solid ${Colors.LIGHT_GRAY3};
  display: flex;
  height: ${TILE_SIZE}px;
  justify-content: center;
  outline: none;
  width: ${TILE_SIZE}px;

  :hover {
    background-color: ${Colors.LIGHT_GRAY4};
  }
`;

export default Tile;
