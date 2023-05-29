import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { CONTENT_WIDTH } from "common/constants";
import { useRooms } from "hooks";

type RoomTableProps = {};

export const RoomTable = (props: RoomTableProps): JSX.Element => {
  const { data: rooms = [] } = useRooms();

  return (
    <TableContainer>
      <Table sx={{ width: CONTENT_WIDTH }}>
        <TableHead>
          <TableRow>
            <TableCell>Room ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rooms.map((room) => (
            /* use room id for key */
            <TableRow key={room.name}>
              <TableCell>{room.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
