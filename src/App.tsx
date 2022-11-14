import { ApolloClientProvider } from "./providers/ApolloClientProvider";
import { GithubWidget } from "./views/GithubWidget";

function App() {
  return (
    <ApolloClientProvider>
      <GithubWidget />
    </ApolloClientProvider>
  );
}

export { App };
