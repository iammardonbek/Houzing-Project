import styled from "styled-components";

export const CardWrapper = styled.div`
  width: ${({ width }) => (width ? width : "380px")};
  height: ${({ height }) => (height ? height : "429px")};
  text-align: start;
  border: 1px solid #e6e9ec;
`;
export const TopCard = styled.div`
  object-fit: contain;
  > img {
    width: 100%;
  }
`;
export const BottomCard = styled.div`
  padding: 24px 20px;
  border-bottom: 1px solid #e6e9ec;
`;
export const CardFooter = styled.div`
  padding: 8px 20px;
`;
