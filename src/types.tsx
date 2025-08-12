import type { Dispatch, ReactElement, SetStateAction, SVGProps } from "react"

export type ICardProps = {
  id: number,
  image?: string | null,
  text?: string,
  ideas?: string,
  type?: string
}

type Setter<T> = Dispatch<SetStateAction<T>>;

export type ITestPartProps = {
  cards: ICardProps[],
  setCards: Setter<ICardProps[]>
}

export type IFormProps = ITestPartProps

export type ICardType = {
  id: string,
  icon: ReactElement<SVGProps<SVGSVGElement>>
}

export type IResizableTextareaProps = {
  className?: string;
  value: string;
  onChange: (value: string) => void;
}