import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import CardList from "../../components/CardList";
import Input from "../../components/Input";
import Navbar from "../../components/Navbar";
import {
  fetchAllCards,
  selectCards,
  selectFilter,
  setFilter,
} from "../../features/cards/cardsSlice";

export default function Home() {
  const allCards = useSelector(selectCards);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  function handleFetchAllCards() {
    dispatch(fetchAllCards());
  }

  function handleSetFilter(e) {
    dispatch(setFilter(e.target.value));
  }

  return (
    <div>
      <Navbar>
        <h3 style={{ color: "white" }}>Totally not Streamloots</h3>

        <Input
          onChange={handleSetFilter}
          value={filter}
          placeholder={"Use me to search cards! 🔍"}
        />
        <Button onClick={handleFetchAllCards}>Fetch cards</Button>
      </Navbar>
      <CardList cards={allCards} />
    </div>
  );
}
