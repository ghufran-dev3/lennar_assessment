import "@/styles/globals.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

// Create your Apollo client instance
const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />

      <Toaster />
    </ApolloProvider>
  );
}
