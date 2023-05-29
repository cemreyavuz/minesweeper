import { useContext, useState } from "react";

import { Button } from "@blueprintjs/core";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { PeerContext } from "contexts/PeerContext";
import { useCreateRoom, useRooms } from "hooks";
import { RoomTable } from "components/room-table/RoomTable";
import { Modal } from "components/modal/Modal";
import { TextField } from "@mui/material";

const StyledRoomListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledJoinRoomButton = styled(Button)`
  margin-bottom: 8px;
`;

const RoomList = (): JSX.Element => {
  const { peerId } = useContext(PeerContext);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const [roomName, setRoomName] = useState("");

  const navigate = useNavigate();

  const { data: rooms = [] } = useRooms();
  const { mutate: createRoom } = useCreateRoom({
    onSuccess: () => {
      navigate(`room/${peerId}`);
    },
  });

  const handleCreateRoom = () => {
    createRoom({ peerId });
  };

  const handleJoinRoom = (roomName: string) => () => {
    navigate(`room/${roomName}`);
  };

  return (
    <StyledRoomListContainer>
      <RoomTable />
      {rooms.map(({ name }) => (
        <StyledJoinRoomButton
          key={`join-room-button-${name}`}
          onClick={handleJoinRoom(name)}
        >
          Join to room: {name}
        </StyledJoinRoomButton>
      ))}
      <Button intent="success" onClick={() => setIsCreateModalOpen(true)}>
        Create room
      </Button>
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
    </StyledRoomListContainer>
  );
};

export default RoomList;
