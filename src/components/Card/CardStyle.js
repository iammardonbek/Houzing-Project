import styled from "styled-components";
import { ReactComponent as fullscreen } from "../../Assets/fullscreen.svg";
import { ReactComponent as favorite } from "../../Assets/favorite.svg";

export const CardWrapper = styled.div`
  width: ${({ width }) => (width ? width : "380px")};
  text-align: start;
  max-height: 429px;
  border: 1px solid #e6e9ec;
  :hover {
    box-shadow: 2px 3px 19px -3px rgba(0, 0, 0, 0.55);
  }
`;
export const TopCard = styled.div`
  object-fit: contain;
  position: relative;
  height: 220px;
  img {
    width: 100%;
  }
`;
export const BottomCard = styled.div`
  padding: 24px 20px;
  border-bottom: 1px solid #e6e9ec;
  border-top: 1px solid #e6e9ec;
`;
export const CardFooter = styled.div`
  padding: 8px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    span:nth-child(2) {
      background-color: #f6f8f9;
      padding: 12px;
      border-radius: 50%;
      margin-left: 20px;
    }
  }
`;
export const Featured = styled.span`
  position: absolute;
  left: 20px;
  top: 20px;
  background: #0061df;
  border-radius: 3px;
  padding: 5px 12px;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 10px;
  color: white;
`;
export const ForSale = styled.span`
  position: absolute;
  right: 20px;
  top: 20px;
  background: #0d263b;
  border-radius: 3px;
  text-transform: capitalize;
  padding: 5px 12px;
  font-weight: 600;
  font-size: 10px;
  color: white;
`;
export const FullScreen = styled(fullscreen)``;
export const Favorite = styled(favorite)``;
export const Owner = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
  position: absolute;
  left: 320px;
  top: 201px;
  overflow: hidden;
  img {
    width: 100%;
  }
`;
