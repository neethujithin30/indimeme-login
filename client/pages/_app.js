import "../styles/globals.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import Layout from "../components/Layout";
import { AuthProvider } from "./context/auth1";

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://localhost:3005/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <AuthProvider>
      <Layout>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Layout>
    </AuthProvider>
  );
}
export default MyApp;
