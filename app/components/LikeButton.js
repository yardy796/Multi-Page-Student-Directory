"use client";
import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button
      onClick={() => setLikes(likes + 1)}
      className="border border-ai px-4 py-2 text-sm tracking-wide text-ai transition hover:bg-ai hover:text-washi"
    >
      Appreciate: {likes}
    </button>
  );
}
