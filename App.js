import React, { useEffect } from "react";
import Home from './src/Screens/Home'
import RNBootSplash from "react-native-bootsplash";

function App(){  
  //https://github.com/jhen0409/react-native-debugger
  //zindex --> zindex:1 or zindex: 2 --> se muestra adelante el que tiene mayor valor
  
  useEffect(() => {
    const init = async () => {
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
      console.log("Bootsplash has been hidden successfully");
    });
  }, []);


  return(
      <Home />
    )
}
export default App;