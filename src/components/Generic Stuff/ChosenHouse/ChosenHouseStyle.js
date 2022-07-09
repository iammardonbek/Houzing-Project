import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  user-select: none;
`;
export const Body = styled.div`
  max-width: 1180px;
  width: 100%;
  padding: 88px 0px 96px;
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
  @media (max-width: 1000px) {
    gap: 0px;
  }
`;
export const MainText = styled.div`
  max-width: 880px;
  width: 100%;
  iframe {
    width: 100%;
    height: 450px;
    @media (max-width: 571px) {
      height: 300px;
    }
    @media (max-width: 471px) {
      height: 200px;
    }
  }
  @media (max-width: 1000px) {
    max-width: 1000px;
  }
  .start {
    text-align: left;
  }
  .heading {
    font-size: 18px;
    color: var(--headerColor);
    margin: 48px 0 16px;
    text-transform: capitalize;
  }
`;
export const SendEmail = styled.form`
  max-width: 280px;
  align-self: start;
  border: 1px solid #e6e9ec;
  position: sticky;
  top: 84px;
  width: 100%;
  border-radius: 3px;
  padding: 24px;
  user-select: none;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    display: none;
  }
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
  margin-bottom: 8px;

  h1 {
    margin-bottom: 0;
  }
`;
export const ShareAndSave = styled.div`
  display: flex;
  justify-content: space-between;
  width: 190px;
  user-select: none;
  @media (max-width: 776px) {
    width: fit-content;
    gap: 15px;
  }
  div {
    display: flex;
    align-items: center;
    cursor: pointer;
    p {
      margin-left: 10px;
      @media (max-width: 776px) {
        display: none;
      }
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
export const HouseSpecs = styled.div`
  display: flex;
  column-gap: 25px;
  row-gap: 15px;
  flex-wrap: wrap;
  margin-top: 32px;
  span {
    display: flex;
    gap: 8px;
  }
`;
export const SecondHeadline = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 32px;
  .real_price {
    font-size: 24px;
    color: var(--headerColor);
    margin-bottom: 0;
  }
`;
export const Download = styled.div`
  display: flex;
  span {
    display: flex;
    p {
      margin-left: 10px;
      text-transform: lowercase;
    }
    a {
      text-decoration: underline;
      text-transform: uppercase;
      color: var(--primaryColor);
      margin-left: 10px;
      font-weight: 25px;
    }
  }
`;
export const DocumentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 50px;
`;
export const Location = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  row-gap: 25px;
  @media (max-width: 571px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 571px) {
    grid-template-columns: auto;
  }
  div {
    display: flex;
    align-items: center;
    .font14 {
      color: var(--headerColor);
      text-transform: capitalize;
      font-size: 14px;
      margin-bottom: 0;
      margin-right: 8px;
    }
  }
`;
