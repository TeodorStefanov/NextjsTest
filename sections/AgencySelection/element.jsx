import styled from "styled-components";
import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "~/components";
export const Container = styled(({ height, ...props }) => (<SectionContainer {...props} />))`
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-top: 2rem;
`;
export const StyledTitleContainer = styled(({...props}) => <div {...props}/>)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
color: black;
margin-bottom: 50px;

`
export const StyledTitle = styled(({...props}) => <SectionBigHeading {...props} />)`
  font-size: 2.5rem;
  margin: 8px;
  line-height: 2rem;
`;
export const StyledSubTitle = styled(({...props}) => (<SectionSubheading {...props} />))`
  font-size: 1.22rem;
  margin: 0;
`;
export const StyledMiddle = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5rem;
  margin-bottom: 5rem;
  gap: 68px;
  @media (max-width: 1024px) { 
   flex-direction: column;
  }

`;
export const StyledVideo = styled((props) => <div {...props}/>)`
  display: flex;
  flex-direction: row; 
  position: relative; 
  align-items: center;
  justify-content: center;

`
export const StyledBackgroundVideo = styled(({...props}) => <div {...props}/>)`
position: absolute;
top: 20px;
left: -200px;
z-index: -1;
`
export const StyledCards = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 34px;
`;
export const StyledBackgroundPicture = styled(({...props}) => <div {...props}/>)`
position: absolute;
top: 35%;
left: 6%;
z-index: -1;

`
