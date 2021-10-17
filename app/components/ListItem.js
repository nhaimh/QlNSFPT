import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";

function ListItem({
  image,
  IconComponent,
  title,
  subTitle,
  onPress,
  rendeRightActions,
  showChevrons = false,
}) {
  return (
    <Swipeable renderRightActions={rendeRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={3}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subtitle} numberOfLines={3}>
                {subTitle}
              </AppText>
            )}
          </View>
          {showChevrons && (
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="chevron-right"
                size={20}
                style={styles.icon}
              />
            </View>
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  iconContainer: {
    justifyContent: "center",
    flex: 1,
  },
  icon: {
    alignSelf: "flex-end",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "500",
  },
  subtitle: {
    color: colors.medium,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
});

export default ListItem;
