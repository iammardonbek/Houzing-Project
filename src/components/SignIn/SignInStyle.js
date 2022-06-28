import styled from "styled-components";

export const Container = styled.div``;
export const MainBody = styled.div`
  padding: 64px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Form = styled.div`
  padding: 24px 30px 48px;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  max-width: 580px;
  width: 100%;
  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    user-select: none;
    a {
      text-decoration: underline;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 125px;
    }
  }
  h1 {
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    text-transform: capitalize;
    color: var(--headerColor);
    text-align: start;
    margin-bottom: 68px;
  }
`;
export const NewAccount = styled.p`
  margin-top: 10px;
  text-decoration: underline;
  cursor: pointer;
  color: var(--headerColor);
`;
