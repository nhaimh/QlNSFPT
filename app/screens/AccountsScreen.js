import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "./../components/Screen";
import colors from "../config/colors";
import Icon from "./../components/Icon";
import ListItemSeperator from "./../components/ListItemSeperator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen:"Listings"
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

function AccountsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="LuongNgocHai"
          subTitle="luongngochai29@gmail.com"
          image={require("../assets/hai.png")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          ItemSeparatorComponent={ListItemSeperator}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Logout"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountsScreen;
