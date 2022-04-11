import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import WebView from "react-native-webview";
import { ScrollView } from "react-native";
import { Dimensions } from "react-native";
import { View, Text } from "react-native";

const { width, height } = Dimensions.get("screen");

function AboutScreen() {
  return (
    // <ScrollView>
    //   <View style={{ alignSelf: "center" }}>
    //     <LinearGradient
    //       colors={["#283c86", "#667db6", "#a8c0ff"]}
    //       style={{
    //         borderBottomLeftRadius: 30,
    //         borderBottomRightRadius: 30,
    //         width: width,
    //       }}
    //     >
    //       <View>
    //         <Text
    //           style={{
    //             fontSize: 25,
    //             fontWeight: "bold",
    //             margin: 10,
    //             marginHorizontal: 25,
    //             color: "#f0f0f0",
    //             textAlign: "center",
    //           }}
    //         >
    //           About
    //         </Text>
    //       </View>
    //     </LinearGradient>
    //   </View>
    //   <View
    //     style={{
    //       marginHorizontal: 12,
    //       paddingHorizontal: 12,
    //       marginVertical: 19,
    //       paddingVertical: 8,
    //       borderWidth: 1,
    //       borderColor: "lightgrey",
    //       borderRadius: 8,
    //       elevation: 1,
    //     }}
    //   >
    //     <Text style={{ fontSize: 15, marginTop: 7 }}>
    //       An infotainment platform with content creation, community connect/work
    //       with similar minds, mentorship and content creation challenges also
    //       providing its original content such as transcribed interviews, survey
    //       reports, research summaries, written podcasts, magazines, articles.
    //     </Text>
    //     <Text style={{ fontSize: 15, marginTop: 7 }}>
    //       An infotainment platform for exploring different kind of readable
    //       content, some graphical contents (i.e. memes, gifs, paintings,
    //       sketches, photographs) uploaded by creators all around the Globe. It
    //       will also provide its original readable content such as transcribed
    //       interviews, survey reports, research summaries, written podcasts,
    //       magazines and our own articles and creations. There will be a
    //       community section as well where user can share their thoughts and
    //       interact with others and can collaborate for work and can solve their
    //       queries too regarding similar topics. There will be content creation
    //       challenges/competitions for creators on daily, weekly monthly basis.
    //       Content will be posted through a profile based creator and will be
    //       available for the viewers to like and share, and the number of likes
    //       and views will bring advantages to creators too in the form of money
    //       and popularity.
    //     </Text>
    //     <Text style={{ fontSize: 15, marginTop: 7 }}>
    //       A common platform for those who want to gain knowledge in a casual
    //       way. QuinkPost will also provide its own transcribed Interviews,
    //       Podcast, Research summaries, survey reports and many more in our
    //       ORIGINALS section. And when it comes to entertainment there will be a
    //       huge scope for our creators for being creative and to come up with
    //       humorous or interesting short stories, their past interesting
    //       experiences, Poetries, Blogs and what not. This will help them in
    //       gaining viewers as well as profit in the form of money and popularity.
    //     </Text>
    //   </View>
    // </ScrollView>
      <WebView
        originWhitelist={["*"]}
        // source={{uri: "https://quinkpost.com/Flipbook/flipbook.html"}}
        source={{
          uri: `https://www.quinkpost.com/about`,
        }}
        style={{ flex: 1 }}
        startInLoadingState
        scalesPageToFit
        javaScriptEnabled
        mixedContentMode="always"
      />
  );
}

export default AboutScreen;
