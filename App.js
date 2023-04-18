import * as React from "react";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";
import { StyleSheet, Button, View } from "react-native";

export default function App() {
  const [recording, setRecording] = React.useState();
  const [sound, setSound] = React.useState({});

  async function startRecording() {
    try {
      console.log("Requesting permissions..");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording.getURI();
    setSound(uri);
    console.log("Recording stopped and stored at", uri, filePath);
  }

  async function playSound(uri) {
    const sound = new Audio.Sound();
    const fileUri = (await FileSystem.getInfoAsync(uri)).uri;
    try {
      await sound.loadAsync({
        uri: fileUri,
      });
      await sound.playAsync();
    } catch (error) {
      console.log("Error playing sound: ", error);
    }
  }

  return (
    <View style={styles.button}>
      <Button
        title={recording ? "Stop Recording" : "Start Recording"}
        onPress={recording ? stopRecording : startRecording}
      />
      <Button title="Play Sound" onPress={() => playSound(sound)} />
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    margin: 100,
  },
});
