import * as React from "react";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const MY_READ_ONLY_TOKEN = "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";

const authLink = setContext(() => ({
  headers: {
    Authorization: `bearer ${MY_READ_ONLY_TOKEN}`,
  },
}));

const httpLink = new HttpLink({
  uri: "https://api.github.com/graphql",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([authLink, httpLink]),
});

const ApolloClientProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => <ApolloProvider client={client}>{children}</ApolloProvider>;

export { ApolloClientProvider };
