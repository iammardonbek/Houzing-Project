import styled from "styled-components";
import { ReactComponent as fullscreen } from "../../../Assets/fullscreen.svg";
import { ReactComponent as favorite } from "../../../Assets/favorite.svg";

export const CardWrapper = styled.div`
  max-width: ${({ width }) => (width ? width : `380px`)};
  min-width: 320px;
  width: 100%;
  text-align: start;
  border: 1px solid #e6e9ec;
  :hover {
    box-shadow: 2px 3px 5px 3px rgba(0, 0, 0, 0.1);
  }
`;
export const TopCard = styled.div`
  position: relative;
  height: 220px;
  overflow: hidden;
  display: flex;
  align-items: center;
  img {
    width: 100%;
  }
`;
export const BottomCard = styled.div`
  padding: 24px 20px;
  border-bottom: 1px solid #e6e9ec;
  border-top: 1px solid #e6e9ec;
  position: relative;
  h2 {
    white-space: nowrap;
    overflow: hidden;
  }
  p {
    overflow: hidden;
    white-space: nowrap;
  }
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
export const Favorite = styled(favorite)`
  path {
    fill: #696969;
  }
`;
export const Owner = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
  position: absolute;
  left: 80%;
  top: -21px;
  overflow: hidden;
  img {
    width: 100%;
  }
`;
