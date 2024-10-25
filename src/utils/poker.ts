import cards from "../fixtures/cards.json"

export const initCards = () => {
  return cards.map((card) => {
    return {
      ...card,
      isVisible: false,
    }
  })
}
