import React from 'react';
import './App.scss';
import Routes from "../routes/Routes";
import {ApolloClient, InMemoryCache,ApolloProvider} from "@apollo/client";
import configureStore from "../state/store";
import {Provider} from 'react-redux';
import { createUploadLink } from 'apollo-upload-client'

const App: React.FC = () => {

  const client = new ApolloClient({
    link: createUploadLink({
      uri:  'http://localhost:3001/graphql',
    }),
    cache: new InMemoryCache()
  });

  const store = configureStore();
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Routes/>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
