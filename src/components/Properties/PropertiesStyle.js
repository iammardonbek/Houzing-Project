import styled from "styled-components";

export const Container = styled.div``;
export const Body = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  margin-top: 64px;
`;
export const SortingPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1180px;
  width: 100%;
  margin-top: 70px;
  margin-bottom: 16px;
  p {
    margin-bottom: 0;
    text-transform: capitalize;
  }
  select {
    border: none;
    outline: none;
    text-transform: capitalize;
    color: rgba(0, 0, 0, 0.5);
  }
`;
export const Sort = styled.div`
  text-transform: capitalize;
  border-bottom: 1px solid #e6e9ec;
`;
export const CardWrapper = styled.div`
  display: flex;
  grid-template-columns: auto auto auto;
  flex-wrap: wrap;
  /* justify-content: center; */
  gap: 20px;
  max-width: 1180px;
`;
