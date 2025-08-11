import type { PropsWithChildren } from "react";
import { Link } from "react-router";

type IButtonProps = {
  onClick?: () => void,
  to?: string | null,
  disabled?: boolean
}

function Button(
  { children, onClick = () => 0, to = null, disabled = true }: 
    PropsWithChildren & IButtonProps
) {
  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    onClick()
  }

  return (
    to === null
        ? <button 
          className="button" 
          onClick={(e) => handleClick(e)}
          disabled={disabled}
        >{children}</button>
        : <Link 
          className="button" 
          to={to}
          aria-disabled={disabled}  
        >{children}</Link>
  )
}

export default Button;