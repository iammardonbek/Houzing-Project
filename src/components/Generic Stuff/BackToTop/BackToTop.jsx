import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Director } from "../../../style";
import Button from "../Buttons/buttons";

const BackToTop = () => {
  const [backToTop, setBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {backToTop && (
        <div
          onClick={scrollUp}
          style={{
            position: "fixed",
            bottom: "10px",
            right: "10px",
            zIndex: "1000",
          }}
          className="BackToTop"
        >
          <Button type={"primary"}>
            <Director />
          </Button>
        </div>
      )}
    </>
  );
};

export default BackToTop;
