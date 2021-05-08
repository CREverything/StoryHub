import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { Header } from "react-native-elements";

export default class ReadStoryScreen extends React.Component {
  render() {
    return (
      <View>
        <Header
          backgroundColor={"pink"}
          centerComponent={{
            text: "StoryHub",
            style: { color: "white", fontWeight: "bold", fontSize: 30 },
          }}
        />
        <Text>Hi</Text>
      </View>
    );
  }
}
