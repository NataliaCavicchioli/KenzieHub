import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;

  .modalContainer {
    background-color: var(--gray-dark);
    color: var(--white);
    width: 23.0625rem;
    height: 21.375rem;
    border-radius: 5px;

    .modalTitle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 3.125rem;
      background: var(--gray-less-dark);
      border-radius: 4px 4px 0 0;
      padding: 0.9375rem;

      p {
        font-size: 0.9375rem;
        font-weight: 600;
      }

      button {
        background-color: var(--gray-less-dark);
        cursor: pointer;
      }
      svg {
        color: var(--white);
        font-size: 1.25rem;
      }
    }

    .modalContent {
      display: flex;
      flex-direction: column;
      height: 84%;
      justify-content: space-around;
      align-items: center;
    }

    label {
      display: flex;
      flex-direction: column;
      margin-top: 0.3125rem;
      font-size: 13px;

      input,
      select {
        width: 21.25rem;
        height: 2.75rem;
        border-radius: 5px;
        border: 2px solid white;
        background: var(--gray-dark);
        color: var(--white);
        margin: 0.9375rem 0;
        padding: 0.3125rem;
      }
    }
  }
`;
