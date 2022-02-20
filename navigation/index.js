import AppStack from "./AppStack"
import AuthProvider from "../contexts/AuthContext"

const Provider = () =>{
    return(
      <AuthProvider>
        <AppStack/>
      </AuthProvider>
    )
}
export default Provider