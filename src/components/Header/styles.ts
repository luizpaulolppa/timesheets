import styled from 'styled-components';

export const Main = styled.main`
  height: 80px;
  background-color: #312f38;
  display: flex;
  align-items: center;
  justify-content: center;

  section {
    width: 100%;
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px 0 8px;

    a {
      display: flex;
      align-items: center;
      text-decoration: none;

      img {
        width: 38px;
      }

      p {
        color: #fff;
        font-size: 30px;
        margin-left: 12px;
      }
    }
  }
`;

export const ContainerMenus = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;

  .selected {
    border-bottom: 2px solid #FF872C;
    font-weight: 600;
  }

  a {
    color: #fff;
    margin-left: 12px;
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 8px;
    border-bottom: 2px solid #312f38;
  }

  a:hover {
    border-bottom: 2px solid #FF872C;
  }
`;
