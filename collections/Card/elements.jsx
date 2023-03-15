import styled from "styled-components";

export const StyledContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  justify-content: center;
  background-color: #f9f9f9;
  width: 465px;
  height: 140px;
  border-radius: 20px;
  text-align: center;
  align-items: center;
  &:nth-child(2) {
    width: 493px;
  }
  &:nth-child(3) {
    width: 523px;
  }
`;
export const StyledPicture = styled(({ ...props }) => <div {...props} />)`
  width: 20%;
`;
export const StyledTitleDescription = styled(({ ...props }) => (
  <div {...props} />
))`
  display: flex;
`;
