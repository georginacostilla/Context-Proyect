import { createContext, useState, useEffect } from 'react'; //Para crear el contexto
import axios from 'axios'; //Para hacer peticiones a la API

export const UsersProvider = createContext(); //Creando el contexto, no olvidar exportarlo para usarlo en otros componentes.

const UsersContext = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <UsersProvider.Provider value={{email, setEmail, password, setPassword}}>
      {children}
    </UsersProvider.Provider>
  )
}

export default UsersContext;
