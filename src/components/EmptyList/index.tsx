import Lottie from "react-lottie";
import { useEffect, useRef, useState } from "react";
import image from "../../assets/87266-add-to-libraryfile.json";
import { Container } from "./styles";

const EmptyList = () => {
  const [animate] = useState({ isStopped: false, isPaused: false });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: image,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container className="emptyTechs">
      Adicione novas tecnologias!
      <Lottie
        options={defaultOptions}
        isStopped={animate.isStopped}
        isPaused={animate.isPaused}
      />
    </Container>
  );
};

export default EmptyList;
