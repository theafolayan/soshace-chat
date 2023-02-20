import React, { useCallback, useState, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { ref, onValue, set, push, getDatabase } from "firebase/database";
import { auth } from "../firebaseConfig";
export default function ChatScreen() {
  const [messages, setMessages] = useState([]);

  const database = getDatabase();
  const chatRef = ref(database, `chats`);
  useEffect(() => {
    const listen = onValue(chatRef, (querySnapshot) => {
      const unserialized = JSON.stringify(querySnapshot);
      const serialized = JSON.parse(unserialized);
      if (serialized) {
        const data = Object.values(serialized);
        setMessages(
          data
            .map((item) => ({
              _id: item._id,
              user: item.user,
              text: item.text,
              createdAt: item.createdAt,
            }))
            .reverse()
        );
      }
    });

    return () => listen();
  });

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, text, user } = messages[0];
    const newChatRef = push(chatRef);
    const date = new Date();
    set(newChatRef, {
      _id,
      createdAt: date.toDateString(),
      text,
      user: {
        name: user.name,
        _id: user._id,
      },
    });
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: auth.currentUser.uid,
        name: "Anonymous",
      }}
    />
  );
}
