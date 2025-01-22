import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [initialUrl, setInitialUrl] = useState(null);
  useEffect(() => {
    const handleUrl = async (url) => {
      console.log('Deep link received:', url);
      // Handle your deep link here
    };
    const getInitialURL = async () => {
      let url = await Linking.getInitialURL();
      if (url) {
        setInitialUrl(url)
      }
    }

    const linkSubscription = Linking.addEventListener('url', handleUrl);
    getInitialURL();
    return () => {
      linkSubscription.remove();
    };
  }, []);

  useEffect(()=>{
    if(initialUrl){
      console.log("initial url: ", initialUrl);
      //handle initial url
    }
  },[initialUrl])
  return (
    <><p>Deep Link handling is implemented</p></>
  );
};
export default App;