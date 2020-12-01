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

  function handleEditCardName(e) {
    setCardName(e.target.value);
  }

  function handleEditCardUrl(e) {
    setCardImageUrl(e.target.value);
  }

  return (
    <div className={styles.CardEditor}>
      <img src={cardImageUrl} className={styles.CardEditor__Image} />
      <div className={styles.CardEditor__Form}>
        <Input value={cardName} onChange={handleEditCardName} />
        <Input value={cardImageUrl} onChange={handleEditCardUrl} />
        <Button
          onClick={() =>
            dispatch(
              updateCard({
                ...card,
                name: cardName,
                imageUrl: cardImageUrl,
              })
            )
          }
        >
          Save ✅
        </Button>
      </div>
    </div>
  );
}
