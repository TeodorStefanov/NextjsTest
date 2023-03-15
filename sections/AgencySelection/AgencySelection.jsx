import Image from "next/image";
import { Card } from "../../collections/Card/";
import {
  Container,
  StyledTitle,
  StyledSubTitle,
  StyledMiddle,
  StyledVideo,
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
      <StyledTitle>{title}</StyledTitle>
      <StyledSubTitle>{subTitle}</StyledSubTitle>
      <StyledMiddle>
        <StyledVideo>
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
              />
            );
          })}
        </StyledCards>
      </StyledMiddle>
    </Container>
  );
};
