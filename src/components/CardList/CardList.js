import React from "react";
import { Link } from "react-router-dom";
import styles from "./CardList.module.css";
import AutoSizer from "react-virtualized-auto-sizer";

import { FixedSizeList as List } from "react-window";
import { useSelector } from "react-redux";
import { selectCards, selectFilter } from "../../features/cards/cardsSlice";
import Button from "../Button";

export default function CardList() {
  const cards = useSelector(selectCards);

  const filter = useSelector(selectFilter);

  const filteredItems = cards.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

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
          <div>
            <Link to={`/card-details/${filteredItems[index]._id}`}>
              <Button>🖋</Button>
            </Link>
            <Button>❌</Button>
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
            itemSize={35}
            width={width}
          >
            {Row}
          </List>
        )}
      </AutoSizer>
    </div>
  );
}
