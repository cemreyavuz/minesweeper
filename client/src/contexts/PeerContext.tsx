import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

import Peer from "peerjs";

type PeerState = {
  connection?: Peer;
  peerId?: string;
  setConnection: Dispatch<SetStateAction<Peer | undefined>>;
  setPeerId: Dispatch<SetStateAction<string | undefined>>;
};

const PeerContext = createContext<PeerState>({} as PeerState);

const PeerProvider = ({ children }: { children: ReactNode }) => {
  const [connection, setConnection] = useState<Peer | undefined>();
  const [peerId, setPeerId] = useState<string | undefined>();

  return (
    <PeerContext.Provider
      value={{
        connection,
        peerId,
        setConnection,
        setPeerId,
      }}
    >
      {children}
    </PeerContext.Provider>
  );
};

export { PeerContext, PeerProvider };
