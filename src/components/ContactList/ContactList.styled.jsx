import styled from "styled-components";

export const Item = styled.li`
&:not(:last-child){
	margin-bottom: 10px;
}
display: flex;
align-items: center;
justify-content: space-between;
font-size: 24px;
`

export const Contact = styled.p`
margin-right: 10px;
font-size: 20px;
`

export const ButtonClose = styled.button`
padding: 0 5px 5px 5px;
font-size: 30px;
width: 40px;
background-color: inherit;
border: 1px solid var(--color-button);
border-radius: 5px;
color: var(--color-button);
`