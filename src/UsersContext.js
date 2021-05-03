import React from 'react';

 const UsersContext = React.createContext({
    users: [],
    registerUser: () => {},
    loginUser: () => {},
})

export default UsersContext;
