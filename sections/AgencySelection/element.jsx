import styled from "styled-components";
import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "~/components";
export const Container = styled(({ ...props }) => (<SectionContainer {...props} />))`
  align-items: center;
  flex-direction: column;
  background-image: url('img/background.png');
  background-size: cover;
  margin-top: 2rem;
`;
export const StyledTitleContainer = styled(({...props}) => <div {...props}/>)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
color: black;

`
export const StyledTitle = styled(({...props}) => <SectionBigHeading {...props} />)`
  font-size: 1.8rem;
  margin: 0;
  line-height: 1.8rem;
`;
export const StyledSubTitle = styled(({...props}) => (<SectionSubheading {...props} />))`
  font-size: 1rem;
  margin: 0;
`;
export const StyledMiddle = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5rem;
  margin-bottom: 5rem;
  gap: 40px;

`;
export const StyledVideo = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
`;
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
