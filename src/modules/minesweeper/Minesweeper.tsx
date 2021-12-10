import { useState } from "react";

import { Card, Elevation } from "@blueprintjs/core";
import styled from "styled-components";

import { MINE_COUNT, TILE_COUNT_PER_ROW, TILE_SIZE } from "common/constants";
import Tile from "components/tile/Tile";

export type Mine = {
  isMine?: boolean;
  neighborCount?: number;
};

type MinesweeperProps = {};

const Minesweeper = (props: MinesweeperProps): JSX.Element => {
  const [tiles] = useState(() => {
    const initialTiles: Mine[][] = Array(TILE_COUNT_PER_ROW)
      .fill(0)
      .map(() =>
        Array(TILE_COUNT_PER_ROW)
          .fill(0)
          .map(
            () =>
              ({
                isMine:
                  Math.random() * Math.pow(TILE_COUNT_PER_ROW, 2) < MINE_COUNT,
              } as Mine)
          )
      );

    const getNeighborCount = (i: number, j: number): number => {
      const neighbors = [
        [i - 1, j - 1],
        [i - 1, j],
        [i - 1, j + 1],
        [i, j - 1],
        [i, j + 1],
        [i + 1, j - 1],
        [i + 1, j],
        [i + 1, j + 1],
      ];

      return neighbors.reduce((count, [x, y]) => {
        if (
          x >= 0 &&
          y >= 0 &&
          x < TILE_COUNT_PER_ROW &&
          y < TILE_COUNT_PER_ROW &&
          initialTiles[x][y].isMine
        ) {
          return count + 1;
        }

        return count;
      }, 0);
    };

    return initialTiles.map((row, rowIndex) => {
      return row.map((tile, colIndex) => {
        const neighborCount = getNeighborCount(rowIndex, colIndex);
        return {
          ...tile,
          neighborCount,
        };
      });
    });
  });

  const [visitedTiles, setVisitedTiles] = useState<Record<string, boolean>>({});

  const handleTileClick =
    (i: number, j: number): (() => void) =>
    (): void => {
      const tilesToVisitInThisRound: Record<string, boolean> = {};
      visitTile(i, j, tilesToVisitInThisRound);
      setVisitedTiles((prevVisitedTiles) => ({
        ...prevVisitedTiles,
        ...tilesToVisitInThisRound,
      }));
    };

  const getTileKey = (i: number, j: number): string => `${i},${j}`;

  const visitTile = (
    i: number,
    j: number,
    t: Record<string, boolean>
  ): void => {
    t[getTileKey(i, j)] = true;
    const isEmpty = tiles[i][j].neighborCount === 0;
    if (isEmpty) {
      const neighbors = [
        [i - 1, j - 1],
        [i - 1, j],
        [i - 1, j + 1],
        [i, j - 1],
        [i, j + 1],
        [i + 1, j - 1],
        [i + 1, j],
        [i + 1, j + 1],
      ];

      neighbors.forEach(([x, y]) => {
        if (
          x >= 0 &&
          y >= 0 &&
          x < TILE_COUNT_PER_ROW &&
          y < TILE_COUNT_PER_ROW &&
          !t[getTileKey(x, y)]
        ) {
          visitTile(x, y, t);
        }
      });
    }
  };

  return (
    <StyledMinesweeperWrapper>
      {Array(TILE_COUNT_PER_ROW)
        .fill(0)
        .map((_, rowIndex) =>
          Array(TILE_COUNT_PER_ROW)
            .fill(0)
            .map((_, columnIndex) => (
              <Tile
                key={getTileKey(rowIndex, columnIndex)}
                isVisited={visitedTiles[getTileKey(rowIndex, columnIndex)]}
                onClick={handleTileClick(rowIndex, columnIndex)}
                {...tiles[rowIndex][columnIndex]}
              />
            ))
        )}
    </StyledMinesweeperWrapper>
  );
};

const StyledMinesweeperWrapper = styled(Card).attrs({
  elevation: Elevation.ONE,
})`
  display: flex;
  flex-wrap: wrap;
  height: ${TILE_SIZE * TILE_COUNT_PER_ROW}px;
  padding: 0;
  width: ${TILE_SIZE * TILE_COUNT_PER_ROW}px;
`;

export default Minesweeper;
