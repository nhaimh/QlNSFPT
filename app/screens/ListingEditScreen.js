import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "./../components/Screen";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import FormImagePicker from "./../components/forms/FormImagePicker";
import CategoryPickerItem from "./../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().min(1).max(10000).required().label("Price"),
  category: Yup.object().nullable().required().label("Category"),
  description: Yup.string().optional(),
  images: Yup.array().min(1, "Please select at leaste 1 image."),
});

const items = [
  {
    value: 0,
    lable: "Cameras",
    backgroundColor: "#fed330",
    icon: "camera",
  },
  {
    value: 1,
    lable: "Clothing",
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
  },
  {
    value: 2,
    lable: "Furniture",
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
  },
  {
    value: 3,
    lable: "Cars",
    backgroundColor: "#fd9644",
    icon: "car",
  },
  {
    value: 4,
    lable: "Games",
    backgroundColor: "#26de81",
    icon: "cards",
  },
  {
    value: 5,
    lable: "Sports",
    backgroundColor: "#45aaf2",
    icon: "basketball",
  },
  {
    value: 6,
    lable: "Movies & Music",
    backgroundColor: "#4b7bec",
    icon: "headphones",
  },
];

function ListingEditScreen(props) {

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
          images: [],
        }}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField
          autoCapitlize="words"
          autoCorrect={false}
          maxLength={255}
          name="title"
          placeholder="Title"
          textContentType="none"
        />
        <AppFormField
          autoCorrect={false}
          keyboardType="numeric"
          placeholder="Price"
          maxLength={8}
          name="price"
          textContentType="none"
          width={120}
        />
        <AppFormPicker
          items={items}
          name="category"
          numberOfColumns={3}
          placeholder="Category"
          PickerItemComponent={CategoryPickerItem}
          width="50%"
        />
        <AppFormField
          autoCorrect={true}
          maxLength={255}
          multiline
          numberOfLines={3}
          placeholder="Description"
          name="description"
          textContentType="none"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
