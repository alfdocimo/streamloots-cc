import { normalize, denormalize, schema } from "normalizr";

const cardSchema = new schema.Entity(
  "cards",
  {},
  {
    idAttribute: "_id",
  }
);

export function normalizeCards(cards) {
  return normalize(cards, [cardSchema]);
}

export function denormalizeCards(byIds, cards) {
  return denormalize(byIds, [cardSchema], { cards });
}
