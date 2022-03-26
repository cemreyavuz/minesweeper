import styled from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";

import { PeerProvider } from "contexts/PeerContext";
import Routes from "Routes";

const StyledAppWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <PeerProvider>
        <StyledAppWrapper>
          <Routes />
        </StyledAppWrapper>
      </PeerProvider>
    </QueryClientProvider>
  );
};

export default App;
