import React from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn/';
import SignUp from './components/SignUp'
import Navbar from './components/Navbar';
import Subs from './components/Subscriptions'
import Leisure from './components/Leisure'
import Utilities from './components/Utilities'


import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './components/Dashboard';

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        
        <Routes>
          <Route
            path="/"
            element={<SignIn />} />
          <Route path="/dashboard" element={
            <React.Fragment>
              <Navbar /> {/* Navbar will be displayed only on the Dashboard page */}
              <Dashboard />
            </React.Fragment>

          } />
          <Route 
          path="/Subs"
          element= {
          <Subs/>}
          />
          <Route
            path="/Leisure"
            element={<Leisure />} />
            <Route
            path="/Utilities"
            element={<Utilities />} />
          <Route
            path="/sign-up"
            element={<SignUp />} />
            
        </Routes>
       

      </Router>
    </ApolloProvider>
  );
};