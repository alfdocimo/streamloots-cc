import React from "react";
import { Link } from "react-router-dom";
import styles from "./CardList.module.css";
import AutoSizer from "react-virtualized-auto-sizer";

import { FixedSizeList as List } from "react-window";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCards,
  selectFilter,
  deleteCard,
} from "../../features/cards/cardsSlice";
import Button from "../Button";

export default function CardList() {
  const cards = useSelector(selectCards);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const filteredItems = cards.filter((item) => {
    return item.name.toLowerCase().includes(filter.toLowerCase());
  });

  function handleDeleteCard(id) {
    dispatch(deleteCard(id));
  }

  const Row = ({ index, style }) => {
    return (
      <div className={styles.ItemList__Element__Link}>
        <div
          className={
            index % 2
              ? styles["ItemList__Element--even"]
              : styles["ItemList__Element--uneven"]
          }
          style={style}
        >
          {filteredItems[index].name}
          <div className={styles.ItemList__Element__Actions}>
            <Link to={`/card-details/${filteredItems[index]._id}`}>
              <Button tracking-id={`edit-card-${filteredItems[index]._id}`}>
                🖋
              </Button>
            </Link>
            <Button
              tracking-id={`delete-card-${filteredItems[index]._id}`}
              onClick={() => handleDeleteCard(filteredItems[index]._id)}
            >
              ❌
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.CardList}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            className={styles.ItemsList}
            height={height}
            itemCount={filteredItems.length}
            itemSize={50}
            width={width}
          >
            {Row}
          </List>
        )}
      </AutoSizer>
    </div>
  );
}
