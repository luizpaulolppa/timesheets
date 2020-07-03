import styled from 'styled-components';

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
  top: 68px;
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