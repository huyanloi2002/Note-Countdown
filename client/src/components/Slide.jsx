import React, { useState, useCallback } from "react";

const Slide = ({ data, Content, show = 1 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prevState) => {
      if (prevState > 0) {
        return prevState - 1;
      }
      return prevState;
    });
  }, []);

  const handleNext = useCallback(() => {
    setCurrentSlide((prevState) => {
      if (prevState < data.length - 1) {
        return prevState + 1;
      }
      return prevState + 1 - data.length;
    });
  }, [data]);

  return (
    <React.Fragment>
      <div className="w-full h-full overflow-hidden relative group">
        <div
          className="absolute flex h-full w-full justify-between items-center p-2 z-[1] 
        
        "
        >
          <button
            className="border px-3 py-2 aspect-square rounded-full bg-white
             flex items-center justify-center
             opacity-0 group-hover:opacity-100 
            translate-y-[50px] group-hover:translate-y-[0] 
            transition-all duration-500 ease-in-out"
            style={
              currentSlide === 0
                ? {
                    opacity: "0",
                    transform: "translateY(50px)",
                  }
                : {}
            }
            onClick={handlePrev}
          >
            <i
              className="fa-solid fa-chevron-left text-[0px] group-hover:text-[22px]
             transition-all duration-500 ease-in-out"
              style={
                currentSlide === 0
                  ? {
                      fontSize: 0,
                    }
                  : {}
              }
            ></i>
          </button>
          <button
            className="border px-3 py-2 aspect-square rounded-full bg-white flex 
            items-center justify-center opacity-0 group-hover:opacity-100 
             translate-y-[50px] group-hover:translate-y-[0] 
            transition-all duration-500 ease-in-out"
            onClick={handleNext}
          >
            <i
              className="fa-solid fa-chevron-right text-[0px] group-hover:text-[22px]
              transition-all duration-500 ease-in-out"
            ></i>
          </button>
        </div>
        <div
          className={`w-full h-full flex `}
          style={{
            transform: `translateX(-${(currentSlide * 100) / show}%)`,
            transition: "all 1s ease-in-out",
          }}
        >
          {data &&
            data.map((item, index) => (
              <div className="w-full" key={index}>
                <Content item={item} style={{ width: `${100 / show}vw` }} />
              </div>
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Slide;
