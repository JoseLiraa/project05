import React, { useEffect } from "react";
import RNBootSplash from "react-native-bootsplash";
import NavigationConfig from "./NavigationConfig";

function App(){  

  useEffect(() => {
    const init = async () => {
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
    });
  }, []);

  return(
      <NavigationConfig />
    )
}
export default App;