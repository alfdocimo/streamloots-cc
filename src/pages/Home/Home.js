import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import CardList from "../../components/CardList";
import Input from "../../components/Input";
import Navbar from "../../components/Navbar";
import {
  fetchAllCards,
  selectAreCardsLoading,
  selectCards,
  selectFilter,
  setFilter,
} from "../../features/cards/cardsSlice";

export default function Home() {
  const allCards = useSelector(selectCards);
  const isLoading = useSelector(selectAreCardsLoading);
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
        <h3 style={{ color: "white" }}>
          {(isLoading && "Loading...") || "Totally not Streamloots"}
        </h3>

        <Input
          onChange={handleSetFilter}
          value={filter}
          placeholder={"Use me to search cards! 🔍"}
        />
        <Button tracking-id={"fetch-cards"} onClick={handleFetchAllCards}>Fetch cards</Button>
      </Navbar>
      <CardList cards={allCards} />
    </div>
  );
}
