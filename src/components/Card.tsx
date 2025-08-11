import type { JSX } from "react"
import type { ICardProps } from "../types";



function Card({ image = null, text = '', ideas = null, unread = false, type = 'left-right' }: ICardProps): JSX.Element {
  function optionsClick() {
    alert('Скоро у меня появятся функции')
  }

  return (
    <div className={['card', `card--${type}`].join(' ')}>
      <div className="card__body">
        <div className="card__options" onClick={() => optionsClick()}>•••</div>
        {ideas && <div className={['card__ideas', unread ? 'card__ideas--unread' : ''].join(' ')}>{unread && '+'}{ideas}</div>}
        {
          image && <figure className="card__image">
            <img src={image} />
          </figure>
        }
        <div className="card__content">
          {text}
          {ideas && <i className="card__push" aria-hidden="true"></i>}
        </div>
      </div>
    </div>
  )
}

export default Card;