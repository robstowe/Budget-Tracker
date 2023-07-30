// import React from 'react';
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SignIn from './components/SignIn/';
// import SignUp from './components/SignUp';
// import Dashboard from './components/Dashboard';
// import Home from './components/Home';
// import Chart from './components/Home/chart'; // Import the Chart component

// import 'bootstrap/dist/css/bootstrap.min.css';

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// // Construct request middleware that will attach the JWT token to every request as an `authorization` header
// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('id_token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

// export default function App() {
//   return (
//     <ApolloProvider client={client}>
//       <Router>
//         <div style={{ height: '500px', width: '100%' }}>
//           {/* You can adjust the height and width values as needed */}
//           <Routes>
//             <Route path="/sign-in" element={<SignIn />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/sign-up" element={<SignUp />} />
//             <Route path="/" element={<Home />} />
//           </Routes>
//           <Chart /> {/* Render the Chart component */}
//         </div>
//       </Router>
//     </ApolloProvider>
//   );
// }


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
import Dashboard from './components/Dashboard'
import Chart from './components/Dashboard/chart'


import 'bootstrap/dist/css/bootstrap.min.css'

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
          <Route
            path="/dashboard"
            element={<Dashboard />} />
          <Route
            path="/sign-up"
            element={<SignUp />} />
            
        </Routes>
        <Chart />

      </Router>
    </ApolloProvider>
  );
};