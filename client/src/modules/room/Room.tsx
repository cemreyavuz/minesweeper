import { Breadcrumbs } from "@blueprintjs/core";
import { useParams } from "react-router-dom";

const Room = (): JSX.Element => {
  const params = useParams<{ roomId: string }>();

  return (
    <div>
      <Breadcrumbs
        items={[{ href: "/", text: "Rooms" }, { text: params.roomId }]}
      />
    </div>
  );
};

export default Room;
