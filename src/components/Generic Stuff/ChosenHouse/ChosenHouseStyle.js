import styled from "styled-components";
export const Container = styled.div`
  padding: 64px 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Body = styled.div`
  max-width: 1180px;
  width: 100%;
  padding-top: 24px;
`;
export const Pictures = styled.div`
  display: flex;
  justify-content: space-between;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
  }
`;
export const MainPic = styled.div`
  max-width: 580px;
  width: 100%;
  height: 400px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    max-width: 100%;
  }
  @media (max-width: 776px) {
    max-height: 200px;
  }
  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`;
export const SmallPics = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
  width: 100%;
  background-color: aqua;
  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
  }
  .none {
    @media (max-width: 1000px) {
      display: none;
    }
  }
  div {
    width: 100%;
    height: 190px;
    max-width: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    @media (max-width: 1000px) {
      max-width: 50%;
    }
    @media (max-width: 776px) {
      max-height: 150px;
    }
    @media (max-width: 481px) {
      max-height: 100px;
    }
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
export const MainText = styled.div`
  max-width: 880px;
  width: 100%;
  .start {
    text-align: left;
  }
`;
export const SendEmail = styled.form`
  max-width: 280px;
  border: 1px solid #e6e9ec;
  width: 100%;
  border-radius: 3px;
  padding: 24px;
  user-select: none;
  display: flex;
  flex-direction: column;
  > div {
    margin: 24px 0;
    > .terms {
      margin-left: 8px;
    }
  }
`;
export const Headline = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    margin-bottom: 0;
  }
`;
export const ShareAndSave = styled.div`
  display: flex;
  justify-content: space-between;
  width: 190px;
  user-select: none;
  div {
    display: flex;
    align-items: center;
    cursor: pointer;
    p {
      margin-left: 10px;
    }
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #f6f8f9;
  }
`;
export const Details = styled.section`
  display: flex;
  align-items: center;
`;
export const OwnerAvatar = styled.div`
  margin-right: 10px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 2px solid white;
  overflow: hidden;
  box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
  img {
    width: 100%;
  }
`;
export const OwnerContacts = styled.div`
  h2 {
    text-transform: capitalize;
  }
  p {
    text-align: start;
    margin-bottom: 0;
  }
`;
