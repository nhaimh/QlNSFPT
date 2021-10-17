import React from "react";
import { FlatList, StyleSheet } from "react-native";

import routes from "../navigation/routes";
import Card from "../components/Card";
import Screen from "./../components/Screen";
import colors from "../config/colors";
//import listings from "../constant/listings.json";

const listings = [
   {
    id: 1,
    title: "Dress!",
    price: 10000,
    image: require("../assets/lv1.png"),
    rcm : "Black 2014 pre-owned sequinned detail dress from Louis Vuitton featuring a round neck, short sleeves, a rear zip fastening and a fitted waist. Please note that pre-owned items are not new and therefore might have minor imperfections.",
  },
  {
    id: 2,
     title: "Hoodie",
     price: 100000,
     image: require("../assets/lv2.png"),
     rcm : "2017 pre-owned x Suprem logo hoodie",
   },
   {
     id: 3,
     title: "V-neck T-shirt",
     price: 150000,
     image: require("../assets/lv5.png"),
     rcm : "Louis Vuitton : pre-owned Graffiti print V-neck T-shirt",
   },
   {
    id: 4,
    title: "V-neck cardigan",
    price: 150000,
    image: require("../assets/lv6.png"),
    rcm : "Nº21 perforated v-neck cardigan Black cotton blend perforated v-neck cardigan from Nº21 featuring decorative perforations, a ribbed hem and cuffs, a v-neck, a front button fastening and long sleeves.",
  },
  {
    id: 5,
    title: "Graffiti leggings",
    price: 150000,
    image: require("../assets/lv7.png"),
    rcm : "Louis Vuitton x Stephen Sprouse 2001 pre-owned Graffiti leggings",
  },

 ];

function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={ item.price +"đ"}
            image={item.image}
            rcm={item.rcm}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 20,
  },
});

export default ListingsScreen;
