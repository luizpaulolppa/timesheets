import styled from 'styled-components';
import { shade } from 'polished';

export const ContainerClocks = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5636D3;
  height: 100px;
`;

export const Time = styled.a`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #fff;

  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 0 6px 0 rgba(0,0,0,0.1);

  position: relative;
  top: 50px;

  &:hover {
    background-color: #f7f9fc;
  }

  &.inative {
    background-color: #efeff2;
  }

  &.active {
    background-color: #FF872C;
    color: #fff;
  }
`;

export const NameOfTheWeek = styled.p`
  color: #c6c6c6;
  font-size: 14px;
  font-weight: 500;
  margin-top: 1rem;
  margin-bottom: 0;
`;

export const NumOfTheMonth = styled.p`
  font-size: 42px;
  font-weight: 700;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const AmountOfTimeOfDay = styled.p`
  color: #c6c6c6;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const ContainerEntriesMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 60px;

  > div {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 930px;
    height: 30px;
    width: 100%;

    button {
      background-color: #5636D3;
      border: 0;
      padding: 8px;
      border-radius: 6px;
      color: #fff;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#5636D3')};
      }
    }

    p {
      color: #c6c6c6;
      font-weight: 600;
    }

    .box-navigation-week {
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        background-color: #fff;
        border: 0;
        padding: 8px;
        border-radius: 6px;
        color: #5636D3;
        transition: background-color 0.2s;
        margin-right: 6px;
        margin-left: 6px;
      }

      svg {
        cursor: pointer;
      }
    }
  }
`;