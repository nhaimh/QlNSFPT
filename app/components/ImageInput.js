import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import defaultStyles from "./../config/styles";

function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.getMediaLibraryPermissionsAsync();

    if (false) {
      alert("You need to enable permission to access the library.");
    }
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are You Sure?", [
        {
          text: "Yes",
          onPress: () => onChangeImage(null),
        },
        {
          text: "No",
        },
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      console.log(result.uri);
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error reading image");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            size={35}
            color={defaultStyles.colors.medium}
          />
        )}
        {imageUri && <Image style={styles.image} source={{ uri: imageUri }} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: defaultStyles.colors.light,
    width: 100,
    height: 100,
    justifyContent: "center",
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;
