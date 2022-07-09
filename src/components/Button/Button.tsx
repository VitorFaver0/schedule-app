import React, { ReactFragment } from "react"
import { StyledButton } from "./style";

interface Props  {
    type?: "button" | "submit" | "reset" | undefined;
    children?: ReactFragment | undefined;
    onClick?: () => void;
}

export const Button: React.FC<Props> = ({onClick, type, children}:Props) =>{   
    return(
        <StyledButton onClick={onClick} type={type}>
            {children}
        </StyledButton>
    )
}

