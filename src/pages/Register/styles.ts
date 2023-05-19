import styled from "styled-components";

export const Container = styled.div`
  @keyframes fadeInTop {
    from {
      opacity: 0;
      transform: translate3d(0px, -30px, 0px);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--white);
  height: 100vh;
  width: 100vw;
  animation: fadeInTop 0.6s;

  .container_register {
    width: 25rem;
    height: 100%;
    margin-top: 4rem;
  }

  @media screen and (max-width: 500px) {
    .container_register {
      width: 80%;
      /* margin: 0 auto; */
    }
  }
`;

export const ContainerForm = styled.div`
  background-color: var(--gray-dark);
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  h3 {
    margin: 2rem 0 0 0;
    text-align: center;
    font-size: 1.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin: 2rem;

    label {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    input,
    select,
    textarea {
      background: var(--gray-less-dark);
      border-radius: 5px;
      height: 3rem;
      padding: 0.5rem;
      border: 1px solid var(--white);
      color: var(--white);
      width: 100%;
      margin-bottom: 1rem;
      font-family: "Inter";
    }

    textarea {
      padding-top: 1.2rem;
    }

    p {
      font-size: 1.1rem;
      opacity: 0.5;
      margin-top: -1.25rem;
    }
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.625rem;
  align-items: center;
`;
