import React from "react";
import WebView from "react-native-webview";

function ImageEdior() {
  return (
    <>
      <WebView
        originWhitelist={["*"]}
        source={{uri: "https://lakheraakshay.github.io/quinkpostimageeditor/"}}
        style={{ flex: 1 }}
        startInLoadingState
        scalesPageToFit
        javaScriptEnabled
        mixedContentMode="always"
      />
    </>
  );
}

export default ImageEdior;
