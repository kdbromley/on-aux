import React from 'react';

 const UsersContext = React.createContext({
    users: [],
    registerUser: () => {},
    validateUser: () => {},
    loginUser: () => {},
})

export default UsersContext;
