import { Cheerio, load, Element } from 'cheerio';

export interface CollectionCardViewModel {
  side: string;
  blueprintId: string;

  /** Either the number of this card that exists in the current collection call OR the number of copies of this card available */
  count: number;
}

export interface CollectionApiResponse {
  cards: CollectionCardViewModel[];
  count: number;
}

export const convertCollectionCardXmlToViewModel = (
  input: Element
): CollectionCardViewModel => {
  return {
    side: input.attribs.side,
    blueprintId: input.attribs.blueprintId,
    count: Number(input.attribs.count),
  };
};

export const convertCardsToViewModel = (
  cardElements: Cheerio<Element>
): CollectionCardViewModel[] => {
  const cards: CollectionCardViewModel[] = [];
  cardElements.each((_, card) => {
    cards.push(convertCollectionCardXmlToViewModel(card));
  });

  return cards;
};

export const convertGetCollectionFromXml = (
  xml: string
): CollectionApiResponse => {
  const data = load(xml, {
    xmlMode: true,
  });
  const cardsElements = data('collection').children('card');
  return {
    count: Number(data('collection').attr('count')),
    cards: convertCardsToViewModel(cardsElements),
  };
};
