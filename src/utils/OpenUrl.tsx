import { Linking } from "react-native";

const OpenUrl = {
    call: function(url:string){
        Linking.canOpenURL(url).then((supported:Boolean) => {
            if (supported) {
              Linking.openURL(url);
            } else {
              console.log("Don't know how to open URI: " + url);
            }
          });
    },
}

export default OpenUrl;