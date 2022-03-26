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

  const handleJoinRoom = (leaderId: string) => () => {
    navigate(`room/${peerId}`);
  };

  return (
    <StyledRoomListContainer>
      {rooms.map(({ leader, name }) => (
        <StyledJoinRoomButton
          key={`join-room-button-${leader}`}
          onClick={handleJoinRoom(leader)}
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
