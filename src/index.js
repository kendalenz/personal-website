import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './Components/App';
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter } from 'react-router-dom';

const root = createRoot(document.querySelector('#root'));

root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);


// const ul = document.querySelector('ul');
// import axios from 'axios';

// let users;

// const renderUsers = ()=> {
//     const html = users.map( user => {
//         return `
//             <li>
//                 ${user.firstName}
//             </li>
//         `;
//     }).join('');
//     ul.innerHTML = html;
// }

// const setup = async()=> {
//     try {
        //Equivalent to below
        // const response = await axios.get('/api/users');
        // users = response.data;
//         users = (await axios.get('/api/users')).data;
//         renderUsers();
//     }
//     catch(err) {
//         console.log(err);
//     }
// }

// setup();