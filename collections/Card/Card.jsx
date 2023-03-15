import Image from "next/image";
import {
  StyledContainer,
  StyledPicture,
  StyledTitleDescription,
} from "./elements";
export const Card = ({ title, description, image }) => {
  return (
    <StyledContainer>
      <StyledPicture>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </StyledPicture>
      <StyledTitleDescription>
        <h2>{title}</h2>
        <p>{description}</p>
      </StyledTitleDescription>
    </StyledContainer>
  );
};
