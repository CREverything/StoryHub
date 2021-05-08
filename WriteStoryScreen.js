import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  KeyboardAvoidingView,
} from "react-native";
import { createAppContainer } from "react-navigation";
import { Header } from "react-native-elements";
import db from "../config";

export default class WriteStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      story: "",
    };
  }

  submitStory = () => {
    db.collection("stories").add({
      title: this.state.title,
      author: this.state.author,
      story: this.state.story,
    });
    ToastAndroid.show("Your story has been added!", ToastAndroid.LONG);
  };
  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
        <Header
          backgroundColor={"pink"}
          centerComponent={{
            text: "StoryHub",
            style: { color: "white", fontWeight: "bold", fontSize: 30 },
          }}
        />
        <TextInput
          placeholder="Story Name"
          maxLength={50}
          value={this.state.title}
          onChangeText={(value) => {
            this.setState({
              title: value,
            });
          }}
          style={{
            height: 40,
            borderWidth: 2,
            marginTop: 20,
            marginLeft: 20,
            paddingLeft: 10,
            marginRight: 20,
            backgroundColor: "pink",
            borderRadius: 10,
            color: "white",
            fontWeight: "bold",
          }}
        />
        <TextInput
          placeholder="Author"
          maxLength={50}
          style={{
            height: 40,
            borderWidth: 2,
            marginTop: 20,
            marginLeft: 20,
            paddingLeft: 10,
            marginRight: 20,
            backgroundColor: "cyan",
            borderRadius: 10,
            color: "white",
            fontWeight: "bold",
          }}
          value={this.state.author}
          onChangeText={(value) => {
            this.setState({
              author: value,
            });
          }}
        />
        <TextInput
          placeholder="Write your story here"
          multiline={true}
          style={{
            height: 350,
            borderWidth: 2,
            marginTop: 20,
            marginLeft: 20,
            paddingLeft: 10,
            marginRight: 20,
            backgroundColor: "lime",
            borderRadius: 10,
            color: "white",
          }}
          value={this.state.story}
          onChangeText={(value) => {
            this.setState({
              story: value,
            });
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "pink",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 20,
            marginTop: 20,
          }}
          onPress={() => {
            this.submitStory();
          }}
        >
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
