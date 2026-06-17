import React, { useState } from "react";

export default function EmojiGenerator() {
  const emojis = [
    "😀", "😂", "😍", "😎", "😢",
    "😡", "🤩", "😴", "😱", "🥳",
    "👍", "🙏", "🔥", "💯", "🎉",
    "❤️", "💀", "👀", "🤔", "😇"
  ];

  const [emoji, setEmoji] = useState("😄");

  const generateEmoji = () => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    setEmoji(emojis[randomIndex]);
  };

  return (
    <div>
      <h1>Emoji Generator 🎲</h1>

      <h2 style={{ fontSize: "60px" }}>{emoji}</h2>

      <button onClick={generateEmoji}>
        Generate Emoji
      </button>
    </div>
  );
}