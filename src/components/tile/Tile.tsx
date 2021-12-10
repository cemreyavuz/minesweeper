import { Colors } from "@blueprintjs/core";
import styled from "styled-components";

import { TILE_SIZE } from "common/constants";
import { Mine } from "modules/minesweeper/Minesweeper";

type TileProps = {
  isVisited?: boolean;
  onClick: () => void;
} & Mine;

const getTileColor = (neighborCount?: number): string => {
  switch (neighborCount) {
    case 1:
      return Colors.BLUE3;
    case 2:
      return Colors.GREEN3;
    case 3:
      return Colors.ORANGE3;
    case 4:
      return Colors.RED3;
    case 5:
      return Colors.TURQUOISE3;
    case 6:
      return Colors.LIME3;
    case 7:
      return Colors.GOLD3;
    case 8:
      return Colors.SEPIA3;
    default:
      return '';
  }
};

const Tile = ({
  isVisited,
  isMine,
  neighborCount,
  onClick,
}: TileProps): JSX.Element => {
  if (!isVisited) {
    return <StyledTileWrapper onClick={onClick} />;
  }

  if (!isMine) {
    return (
      <StyledTileWrapper $color={getTileColor(neighborCount)} $isVisited={isVisited}>
        {neighborCount || ""}
      </StyledTileWrapper>
    );
  }

  return <StyledTileWrapper $isVisited={isVisited}>X</StyledTileWrapper>;
};

const StyledTileWrapper = styled.button<{ $color?: string, $isVisited?: boolean; }>`
  align-items: center;
  background-color: ${({ $isVisited }) => $isVisited ? Colors.LIGHT_GRAY5 : Colors.LIGHT_GRAY3};
  border: 1px solid ${Colors.LIGHT_GRAY1};
  color: ${({ $color }) => $color || Colors.DARK_GRAY1};
  display: flex;
  font-family: "Space Mono", monospace;
  font-size: 16px;
  font-weight: bold;
  height: ${TILE_SIZE}px;
  justify-content: center;
  outline: none;
  width: ${TILE_SIZE}px;

  :hover {
    background-color: ${Colors.LIGHT_GRAY4};
  }
`;

export default Tile;
