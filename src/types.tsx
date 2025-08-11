import type { Dispatch, SetStateAction } from "react"

export type ICardProps = {
  id?: number,
  image?: string | null,
  text?: string,
  ideas?: number | null,
  type?: string,
  unread?: boolean
}

export type ITestPartProps = {
  cards: ICardProps[],
  setCards: Dispatch<SetStateAction<ICardProps>>
}