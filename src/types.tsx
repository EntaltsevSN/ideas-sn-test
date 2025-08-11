import type { Dispatch, SetStateAction } from "react"

export type ICardProps = {
  id: number,
  image?: string | null,
  text?: string,
  ideas?: number | null,
  type?: string,
  unread?: boolean
}

type Setter<T> = Dispatch<SetStateAction<T>>;

export type ITestPartProps = {
  cards: ICardProps[],
  setCards: Setter<ICardProps[]>
}

export type IFormProps = ITestPartProps