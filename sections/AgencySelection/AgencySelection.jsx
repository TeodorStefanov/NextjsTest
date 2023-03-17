import Image from "next/image";
import { Card } from "../../collections/Card/";
import {
  Container,
  StyledTitleContainer,
  StyledTitle,
  StyledSubTitle,
  StyledMiddle,
  StyledVideo,
  StyledBackgroundVideo,
  StyledCards,
} from "./element";
export const AgencySelection = ({
  title,
  subTitle,
  backGroundPicture,
  video,
  cards,
  ...props
}) => {
  return (
    <Container {...props}>
      <StyledTitleContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubTitle>{subTitle}</StyledSubTitle>
      </StyledTitleContainer>
      <StyledMiddle>
        <StyledVideo>
          <StyledBackgroundVideo>
            <Image src={backGroundPicture} />
          </StyledBackgroundVideo>
          <Image src={video} />
        </StyledVideo>
        <StyledCards>
          {cards.map((el, index) => {
            return (
              <Card
                key={index}
                title={el.title}
                description={el.description}
                image={el.image}
                underline={el.underline}
              />
            );
          })}
        </StyledCards>
      </StyledMiddle>
    </Container>
  );
};
