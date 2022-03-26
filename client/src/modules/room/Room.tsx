import { Breadcrumbs } from "@blueprintjs/core";
import { useNavigate, useParams } from "react-router-dom";

const Room = (): JSX.Element => {
  const navigate = useNavigate();
  const params = useParams<{ roomId: string }>();

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
          { text: params.roomId },
        ]}
      />
    </div>
  );
};

export default Room;
