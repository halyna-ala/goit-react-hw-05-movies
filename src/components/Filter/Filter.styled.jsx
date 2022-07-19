import styled from "styled-components";

export const InputFilter = styled.input`
background-color: var(--color-input);
height: 40px;
margin: 0;
padding: 0 15px 0 15px;
border-radius: 5px;
&:not(:last-child){
	margin-right: 10px;
}
`

export const LabelFilter = styled.label`
margin: 10px 0 10px 0;
display: flex;
flex-direction: column;
font-size: 22px;
color: var(--color-label);
`