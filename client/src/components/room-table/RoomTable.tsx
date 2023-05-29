import { Table, TableContainer } from "@mui/material";

import { CONTENT_WIDTH } from "common/constants";

type RoomTableProps = {};

export const RoomTable = (props: RoomTableProps): JSX.Element => {
  return (
    <TableContainer>
      <Table sx={{ width: CONTENT_WIDTH }}></Table>
    </TableContainer>
  );
};
