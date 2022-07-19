import styled from "styled-components";

export const AppContainer = styled.div `
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
height: 100vh;
justify-content: center;
font-size: 40px;
padding-bottom: 30px;
morgin-bottom:30px;
color: var(--color);
`
export const Container = styled.div`
padding: 15px;
width: 440px;
box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.20);
&:not(:last-child){
	margin-right: 5px;
}
`


export const TitleMain = styled.h1`
text-align: center;
font-size: 72px;
`


export const Title = styled.h2`
text-align: center;
font-size: 72px;
`