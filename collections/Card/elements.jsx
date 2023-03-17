import styled from "styled-components";

export const StyledContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  justify-content: center;
  background-color: #f9f9f9;
  width: 450px;
  height: 140px;
  border-radius: 20px;
  text-align: center;
  align-items: center;
  &:nth-child(2) {
    width: 477px;
    background-color: #f4f4f4;
  }
  &:nth-child(3) {
    width: 506px;
    background-color: #f1f1f1;
    border: solid 3px #0872fd;
  }
`;
export const StyledPicture = styled(({ ...props }) => <div {...props} />)`
  width: 37%;
  text-align: center;
  align-items: center;
`;
export const StyledTitleDescription = styled(({ ...props }) => (
  <div {...props} />
))`
  font-family: Poppins;
  width: 63%;
  text-align: left;
  margin-right: 48px;

  h2 {
    margin: 0;
    color: ${(props) => props.underline && "#0872fd"};
    text-decoration: ${(props) => props.underline && "underline"};
    text-decoration-color: ${(props) => props.underline && "#7ab0f7"};
  }
  p {
    font-weight: 400;
    margin: 0;
    color: black;
  }
`;
