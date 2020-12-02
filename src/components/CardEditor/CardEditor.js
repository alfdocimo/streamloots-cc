import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCard } from "../../features/cards/cardsSlice";
import Button from "../Button";
import Input from "../Input";
import styles from "./CardEditor.module.css";

export default function CardEditor({ card }) {
  const dispatch = useDispatch();

  const [cardName, setCardName] = useState(card.name);
  const [cardImageUrl, setCardImageUrl] = useState(card.imageUrl);
  const [saved, setSaved] = useState(false);

  function handleEditCardName(e) {
    setCardName(e.target.value);
  }

  function handleEditCardUrl(e) {
    setCardImageUrl(e.target.value);
  }

  function handleSaveImage() {
    dispatch(
      updateCard({
        ...card,
        name: cardName,
        imageUrl: cardImageUrl,
      })
    );

    // Could implement throttle, debounce to avoid bugs...
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 500);
  }

  return (
    <div className={styles.CardEditor}>
      <h4>
        {cardName} count: {card.count.total}
      </h4>
      <img
        alt={cardName}
        src={cardImageUrl}
        className={styles.CardEditor__Image}
      />
      <Input value={cardName} onChange={handleEditCardName} />
      <Input value={cardImageUrl} onChange={handleEditCardUrl} />
      <Button onClick={handleSaveImage} tracking-id={`save-card-${card._id}`}>
        <span>{(saved && "Saved successfully! 😊") || "Save ✅"}</span>
      </Button>
    </div>
  );
}
