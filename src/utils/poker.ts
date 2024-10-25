import cards from "../fixtures/cards.json"
type Card = {
  id: number
  nom: string
  description: string
  image: string
  type: string
  valeur: number
}

type HandRank = {
  rank: string
  highestCard: number
}

export type Result = {
  winner: number
  reason: string
}

export const initCardsDeckGame = () => {
  return cards.map((card) => ({ ...card, isVisible: false, isSelected: false }))
}

export const getHandFromDeck = (cardsDeck: any[], handSize: number) => {
  const hand = []
  for (let i = 0; i < handSize; i++) {
    const randomIndex = Math.floor(Math.random() * cardsDeck.length)
    hand.push(cardsDeck[randomIndex])
    cardsDeck.splice(randomIndex, 1)
  }
  return hand
}

export const findWinner = (
  playerHand: Card[],
  computerHand: Card[]
): Result => {
  const getHandRank = (hand: Card[]): HandRank => {
    const values = hand.map((card) => card.valeur)
    const valueCount = values.reduce(
      (count: Record<number, number>, value: number) => {
        count[value] = (count[value] || 0) + 1
        return count
      },
      {}
    )

    const counts = Object.values(valueCount).sort(
      (a: number, b: number) => b - a
    )
    let rank = ""
    if (counts[0] === 4) {
      rank = "Carré"
    } else if (counts[0] === 3) {
      rank = "Brelan"
    } else if (counts[0] === 2) {
      rank = counts[1] === 2 ? "Double Paire" : "Paire"
    }

    const highestCard = Math.max(...values)
    return { rank, highestCard }
  }

  const playerHandRank = getHandRank(playerHand)
  const computerHandRank = getHandRank(computerHand)

  const handStrength: Record<string, number> = {
    Carré: 4,
    Brelan: 3,
    "Double Paire": 2,
    Paire: 1,
    "": 0,
  }

  if (handStrength[playerHandRank.rank] > handStrength[computerHandRank.rank]) {
    return {
      winner: 2,
      reason: `Le joueur a gagné avec un ${playerHandRank.rank}`,
    }
  } else if (
    handStrength[playerHandRank.rank] < handStrength[computerHandRank.rank]
  ) {
    return {
      winner: 1,
      reason: `L'ordinateur a gagné avec un ${computerHandRank.rank}`,
    }
  } else {
    if (playerHandRank.highestCard > computerHandRank.highestCard) {
      return {
        winner: 2,
        reason: `Le joueur a gagné avec une carte haute : ${playerHandRank.highestCard}`,
      }
    } else if (playerHandRank.highestCard < computerHandRank.highestCard) {
      return {
        winner: 1,
        reason: `L'ordinateur a gagné avec une carte haute : ${computerHandRank.highestCard}`,
      }
    } else {
      return { winner: 0, reason: "Égalité parfaite" }
    }
  }
}
