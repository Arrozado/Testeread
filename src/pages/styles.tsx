import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Separator = styled.div<{ flex: number }>`
  display: flex;
  flex: ${(props) => props.flex};
  justify-content: space-between;
`;

export const AlignText = styled.div`
  display: flex;
  align-self: center;
  flex: 1;
  justify-content: space-evenly;
`;

export const Content = styled.div`
  display: flex;
  max-width: 980px;
  margin: auto;
  margin-top: 18px;
  flex-direction: row;
`;

export const CardListVertical = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(129px, 1fr));
  grid-gap: 10px;
`;

export const CardListHorizontal = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`;

export const Sections = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Aside = styled.aside`
  margin-left: auto;
  margin-left: 60px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const SideBar = styled.aside`
  background-color: ${(props) => props.theme.colors.background_shadow};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 240px;

  padding-right: 10px;
  padding-left: 10px;

  @media (max-width: 800px) {
    width: 170px;
  }
`;
