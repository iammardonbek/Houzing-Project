import styled from "styled-components";

export const CardWrapper = styled.div`
  width: ${({ width }) => (width ? width : "380px")};
  height: ${({ height }) => (height ? height : "429px")};
  text-align: start;
`;
export const TopCard = styled.div`
  object-fit: contain;
  > img {
    width: 100%;
  }
`;
export const BottomCard = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 24px;
  padding-bottom: 16px;
  background-color: aqua;
  > h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: var(--headerColor);
  }
  > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: var(--secondaryColor);
  }
`;
