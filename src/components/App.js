import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
   const [init, setInit] = useState(false);
   const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
   const [userObj, setUserObj] = useState(null);

   useEffect(() => {
      authService.onAuthStateChanged( (user) => {
         if (user) {
            setIsLoggedIn(user);
            setUserObj(user);
         }else{
            setIsLoggedIn(false);
         }
         setInit(true);
      });
   }, []);
   //setInterval(() => console.log(authService.currentUser), 2000);
   return (
      <>
      {init ? (
      <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />
      ) : (
         "initialzing..."
      )}
      </>
   );
}

export default App;
