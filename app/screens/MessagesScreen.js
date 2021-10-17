import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeperator from "../components/ListItemSeperator";
import Screen from "./../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "Nguyen Tien Dat",
    description: "ok sốp",
    image: require("../assets/couch.jpg"),
  },
  {
    id: 2,
    title: "Đoàn Phan DUy",
    description: "Sốp tín quá",
    image: require("../assets/couch.jpg"),
  },
  {
    id: 3,
    title: "Nguyen Cong thuan",
    description: "10 diem 10",
    image: require("../assets/couch.jpg"),
  },
  {
    id: 4,
    title: "Luong Ngoc Hai",
    description: "qua hay",
    image: require("../assets/couch.jpg"),
  },
  {
    id: 5,
    title: "T4",
    description: "D4",
    image: require("../assets/couch.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Tapped")}
            showChevrons={true}
            rendeRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 5,
              title: "T5",
              description: "D5",
              image: require("../assets/couch.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
