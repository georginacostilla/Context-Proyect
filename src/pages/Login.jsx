import '../../App.css'
import { useContext } from "react";
import { UsersProvider } from '../context/UsersContext';

const Login = () => {

  const { email, setEmail, password, setPassword } = useContext(UsersProvider); // Desestructuración de lo que se obtiene del contexto desde el provider.

  return (
    <>
    </>
  )
}
export default Login
