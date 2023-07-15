import { Breadcrumbs } from "@blueprintjs/core";
import { useRoom } from "hooks";
import { useNavigate, useParams } from "react-router-dom";

const Room = (): JSX.Element => {
  const navigate = useNavigate();
  const { roomId } = useParams<{ roomId: string }>();

  const { data: room } = useRoom(roomId!, { enabled: !!roomId });

  return (
    <div>
      <Breadcrumbs
        items={[
          {
            onClick: () => {
              navigate("/");
            },
            text: "Rooms",
          },
          { text: room?.name },
        ]}
      />
    </div>
  );
};

export default Room;
