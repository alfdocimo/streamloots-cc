import { createSlice } from "@reduxjs/toolkit";
import { normalizeCards, denormalizeCards } from "../../schemas/cardSchema";
import axios from "axios";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    byId: {},
    byIds: [],
    isLoading: false,
    filter: "",
  },
  reducers: {
    setCards: (state, action) => {
      const {
        entities: { cards: normalizedCards },
        result,
      } = normalizeCards(action.payload);
      state.byId = normalizedCards;
      state.byIds = result;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    updateCard: (state, action) => {
      state.byId[action.payload._id] = action.payload;
    },
  },
});

export const {
  setCards,
  setIsLoading,
  setFilter,
  updateCard,
} = cardsSlice.actions;

export const fetchAllCards = () => async (dispatch) => {
  dispatch(setIsLoading(true));

  const { data: cards } = await axios.get(
    "https://run.mocky.io/v3/d392eb31-51cc-4861-a5e8-7cde7eb6e380"
  );

  dispatch(setCards(cards));

  dispatch(setIsLoading(false));
};

export const selectCards = (state) =>
  denormalizeCards(state.cards.byIds, state.cards.byId);

export const selectFilter = (state) => state.cards.filter;
export const selectCardById = (state, id) => state.cards.byId[id];

export default cardsSlice.reducer;
