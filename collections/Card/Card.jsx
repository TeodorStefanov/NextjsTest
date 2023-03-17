import Image from "next/image";
import {
  StyledContainer,
  StyledPicture,
  StyledTitleDescription,
} from "./elements";
export const Card = ({ title, description, image, underline }) => {
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
      <StyledTitleDescription underline={underline}>
        <h2>{title}</h2>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </StyledTitleDescription>
    </StyledContainer>
  );
};
