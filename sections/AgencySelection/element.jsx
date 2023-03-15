import styled from "styled-components";
import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "~/components";
export const Container = styled(({ ...props }) => (
  <SectionContainer {...props} />
))`
  align-items: center;
  flex-direction: column;
`;
export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 5rem 0 0 0;
`;
export const StyledSubTitle = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 0 0 5rem 0;
`;
export const StyledMiddle = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  gap: 65px;
  position: relative;
`;
export const StyledVideo = styled(({ ...props }) => <div {...props} />)`
  width: 50%;
`;
export const StyledCards = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 34px;
`;
