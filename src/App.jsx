import {GlobalProvider} from "./Context/GlobalContext"
import Header from "./Components/Header"
import Main from "./Components/Main"

function App() {
  

  return (
   <GlobalProvider>
   
   <Header />
   <Main />
   
   </GlobalProvider>
  )
}

export default App