import { useContext, useState } from "react";

import { Button, TextField, Typography } from "@mui/material";
import { v4 as uuid } from 'uuid';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { PeerContext } from "contexts/PeerContext";
import { useCreateRoom } from "hooks";
import { RoomTable } from "components/room-table/RoomTable";
import { Modal } from "components/modal/Modal";

const RoomList = (): JSX.Element => {
  const { peerId } = useContext(PeerContext);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const [roomName, setRoomName] = useState("");

  const navigate = useNavigate();

  const { mutate: createRoom } = useCreateRoom({
    onSuccess: (_, variables) => {
      navigate(`room/${variables.id}`);
    },
  });

  const handleCreateRoom = () => {
    if (peerId) {
      createRoom({ id: uuid(), name: roomName, leader: peerId });
    }
  };

  return (
    <Container>
      <Header>
        <Typography variant="h6">Rooms</Typography>
        <Button onClick={() => setIsCreateModalOpen(true)} size="small" variant="contained">Create room</Button>
      </Header>
      <RoomTable />
      <Modal
        okDisabled={roomName.length === 0}
        onClose={() => setIsCreateModalOpen(false)}
        onOk={handleCreateRoom}
        open={isCreateModalOpen}
        title="Create room"
      >
        <TextField
          fullWidth
          label="Name"
          onChange={(e) => setRoomName(e.target.value)}
          size="small"
          value={roomName}
        />
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default RoomList;
