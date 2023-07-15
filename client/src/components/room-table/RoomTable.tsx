import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { CONTENT_WIDTH } from "common/constants";
import { useRooms } from "hooks";

type RoomTableProps = {};

export const RoomTable = (props: RoomTableProps): JSX.Element => {
  const { data: rooms = [] } = useRooms();

  const navigate = useNavigate();

  const handleJoinRoom = (id: string) => () => {
    navigate(`room/${id}`);
  };

  return (
    <TableContainer>
      <Table sx={{ width: CONTENT_WIDTH }}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Leader</TableCell>
            <TableCell align="right">&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rooms.map((room) => (
            /* use room id for key */
            <TableRow key={room.name}>
              <TableCell>{room.name}</TableCell>
              <TableCell>{room.leader}</TableCell>
              <TableCell align="right">
                <Button onClick={handleJoinRoom(room.id)} size="small" variant="outlined">Join</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
