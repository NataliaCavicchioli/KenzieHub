import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  color: var(--white);

  .userName {
    display: flex;
    margin: 1rem 0;
    flex-direction: column;
    gap: 10px;

    p {
      font-weight: 700;
      font-size: 19px;
    }

    span {
      opacity: 0.5;
    }
  }
  .title_button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    button {
      background-color: var(--gray-less-dark);
      color: white;
      width: 32px;
      height: 32px;
      border-radius: 4px;
      margin: 10px 0;
      cursor: pointer;
    }
  }

  .emptyTechs {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 300;
  }

  @media screen and (min-width: 500px) {
    .userName {
      flex-direction: row;
      justify-content: space-between;
      margin: 1rem 0;
      align-items: center;
    }
  }

  .container {
    width: 200px;
  }
`;

export const ContainerContent = styled.div`
  background-color: var(--gray-less-dark);
  border-radius: 5px;
  height: 70%;

  display: flex;
  flex-direction: column;

  .listItem {
    height: 48px;
    background-color: var(--gray-extra-dark);
    color: white;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 10px 0;
    padding: 0 10px;
    box-shadow: 0px 0px 5px 0.5px #ffffff;

    span {
      opacity: 0.6;
      margin: 0 10px;
    }

    button {
      background: transparent;
      color: white;
      cursor: pointer;
    }
  }

  @media screen and (min-width: 500px) {
    .listItem {
      padding: 0 20px;
      margin: 20px 20px 0 20px;
    }
    .span_button {
      display: flex;
      gap: 20px;
    }
  }
`;
