import { CardStatus } from '../../cards/cardstatus.js'
import { CardOrganizer } from '../cardorganizer.js'

function newRecentMistakesFirstSorter (): CardOrganizer {
  // /**
  //  * Computes the most recent mistake's time stamp for a card and helps in
  //  * determining the sequence of cards in the next iteration, based on the
  //  * rules that those answered incorrectly in the last round appear first.
  //  *
  //  * @param cardStatus The {@link CardStatus} object with failing
  //  * @return The most recent incorrect response time stamp
  //  */
  return {
    reorganize: function (cards: CardStatus[]): CardStatus[] {
      return cards.sort((a, b) => {
        const aResult = a.getResults().at(-1) ?? false
        const bResult = b.getResults().at(-1) ?? false
        return (aResult === bResult) ? 0 : aResult ? 1 : -1
      })
    }
  }
};

export { newRecentMistakesFirstSorter }
