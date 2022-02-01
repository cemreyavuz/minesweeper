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
  setConnection: Dispatch<SetStateAction<Peer | undefined>>;
};

const PeerContext = createContext<PeerState>({} as PeerState);

const PeerProvider = ({ children }: { children: ReactNode }) => {
  const [connection, setConnection] = useState<Peer | undefined>();

  return (
    <PeerContext.Provider
      value={{
        connection,
        setConnection,
      }}
    >
      {children}
    </PeerContext.Provider>
  );
};

export { PeerContext, PeerProvider };
