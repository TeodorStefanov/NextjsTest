import { Hero } from "../sections";
import { AgencySelection } from "../sections";

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};
const agencySelectionProps = {
  title: "Managed Agency Selection",
  subTitle: "Strengthen your onboarding process",
  backGroundPicture: {
    src: "/img/background.png",
    alt: "",
    width: 326,
    height: 520,
  },
  video: {
    src: "/img/video.png",
    alt: "",
    width: 326,
    height: 520,
  },
  cards: [
    {
      title: "Brief",
      description:
        "Complete <b>brief writing or simply guidance</b> on what to include, we've got you covered.",
      image: {
        src: "/img/cardPictureOne.png",
        alt: "",
        width: 80,
        height: 80,
      },
    },
    {
      title: "Search",
      description:
        "In-depth agency search covering; <b>criteria matching,</b> door knocking and due-dilligence vetting.",
      image: {
        src: "/img/cardPictureTwo.png",
        alt: "",
        width: 80,
        height: 80,
      },
    },
    {
      title: "Pitch",
      description:
        "Comprehensive <b>pitch management,</b> including comms, diary management and pitch hosting.",
      image: {
        src: "/img/cardPictureThree.png",
        alt: "",
        width: 80,
        height: 80,
      },
      underline: "true",
    },
  ],
};

export default function Home() {
  return (
    <>
      <div>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </div>
      <div>
        <Hero {...heroProps} />
        {/** Other sections */}
        <AgencySelection {...agencySelectionProps} />
      </div>
    </>
  );
}
