import { useContext } from "react";

import { Button } from "@blueprintjs/core";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { PeerContext } from "contexts/PeerContext";
import { useCreateRoom, useRooms } from "hooks";

const StyledRoomListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledJoinRoomButton = styled(Button)`
  margin-bottom: 8px;
`;

const RoomList = (): JSX.Element => {
  const { peerId } = useContext(PeerContext);

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
      {rooms.map(({ name }) => (
        <StyledJoinRoomButton
          key={`join-room-button-${name}`}
          onClick={handleJoinRoom(name)}
        >
          Join to room: {name}
        </StyledJoinRoomButton>
      ))}
      <Button intent="success" onClick={handleCreateRoom}>
        Create room
      </Button>
    </StyledRoomListContainer>
  );
};

export default RoomList;
