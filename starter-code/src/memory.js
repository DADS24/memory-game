class MemoryGame {
  constructor(card){
    this.cards = cards;
  }
  shuffleCards(cards) {
    let i = cards.length;
    while (i--) {
      const ri = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[ri]] = [cards[ri], cards[i]];
    }
    return cards;
  }
  checkIfPair(card1, card2) {}
  isFinished() {}
}