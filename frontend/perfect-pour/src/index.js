/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import './styles/main.scss';
import './styles/fonts.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { setContext } from 'apollo-link-context';
import {
  ApolloClient, InMemoryCache, HttpLink, ApolloProvider,
} from '@apollo/client';

import App from './App';

const httpLink = new HttpLink({ uri: 'http://localhost:4000' });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('perfectpour-token');
  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : null,
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
