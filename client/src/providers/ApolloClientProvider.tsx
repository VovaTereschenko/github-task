import * as React from "react";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { GITHUB_PERSONAL_ACCESS_TOKEN } from "../constants";

const authLink = setContext(() => ({
  headers: {
    Authorization: `bearer ${GITHUB_PERSONAL_ACCESS_TOKEN}`,
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
