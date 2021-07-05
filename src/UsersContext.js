import React from 'react';

 const UsersContext = React.createContext({
    users: [],
    registerUser: () => {},
    validateUser: () => {},
    loginUser: () => {},
    dummyPosts: [],
})

export default UsersContext;
