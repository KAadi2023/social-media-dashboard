import { createContext, useState } from "react";

 
export const AccountContext = createContext(null);

const UserDefaultValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const AccountProvider = ({children}) => {
    const [loggedUser, setLoggedUser] = useState({});
    const [addUserDialog, setAddUserDialog] = useState(false);
    const [user, setUser] = useState(UserDefaultValue);
    const [users, setUsers] = useState([]);
  return (
    <AccountContext.Provider value={{
        loggedUser,
        setLoggedUser,
        addUserDialog,
        setAddUserDialog,
        user,
        setUser,
        users,
        setUsers
    }}>
        {children}
    </AccountContext.Provider>
  )
}

export default AccountProvider