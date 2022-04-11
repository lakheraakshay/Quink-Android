import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";
import WebView from "react-native-webview";

function CommunityScreen() {
  return (
    <>
    <LinearGradient
          colors={["#283c86", "#667db6", "#a8c0ff"]}
          style={{
            elevation: 11,
          }}
        >
          <View>
            <Text
              style={{
                color: "#f0f0f0",
                fontWeight: "bold",
                fontSize: 25,
                fontFamily: "Montserrat_700Bold",
                marginTop: 15,
                marginBottom: 5,
                zIndex: 2,
                textAlign: "center",
              }}
            >
              Trends & Analytics 
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Montserrat_400Regular",
                zIndex: 2,
                lineHeight: 25,
                color: "lightgrey",
                paddingHorizontal: 15,
                marginBottom: 7,
              }}
            >
              Research for Trends & Keywords
            </Text>
          </View>
        </LinearGradient>
      <WebView
        originWhitelist={["*"]}
        source={{uri: "https://www.quinktrendingkeyword.com/home/trends/daily"}}
        style={{ flex: 1 }}
        startInLoadingState
        scalesPageToFit
        javaScriptEnabled
        mixedContentMode="always"
      />
    </>
  );
}

export default CommunityScreen;
