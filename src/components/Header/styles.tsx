import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  max-width: 980px;
  margin: auto;
  height: 50px;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-content: space-around;
  align-items: center;
`;

export const Separator = styled.div<{ flex: number }>`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  h3 {
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

export const Item = styled.div`
  display: flex;
  white-space: nowrap;
  margin-right: 5px;
  margin-left: 5px;

  @media (max-width: 600px) {
    display: none;
  }
`;
export const SlimeIcon = styled.div`
  white-space: nowrap;
`;
