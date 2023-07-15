import styled from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";

import { PeerProvider } from "contexts/PeerContext";
import Routes from "Routes";

const StyledAppWrapper = styled.div`
  height: 100%;
  padding: 36px;
`;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 0,
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
