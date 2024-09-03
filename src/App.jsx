import { useEffect, useState } from "react";
import { imageData } from "./utils/constant";

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 2000);
  
    return () => clearInterval(intervalId); 
  }, []);
  

  const handleNext=()=>{
    setCurrentImage((prev)=>prev===imageData.length-1?0:prev+1)
  }
  const handlePrevious=()=>{
    if(currentImage===0){
      return setCurrentImage(imageData.length-1)
    }
    setCurrentImage(currentImage-1);
  }
  return (
    <div>
      <h1 className="font-bold text-3xl text-center">Image Slider</h1>
      <div className="flex justify-center pt-8">
        <div className="flex justify-between">
          <img src="https://www.svgrepo.com/show/70596/left-arrow.svg" alt="imng" className="w-44 cursor-pointer" onClick={handlePrevious}></img>
          <img src={imageData[currentImage]} alt="img" className="w-[600px]"></img>
          <img src="https://www.svgrepo.com/show/70596/left-arrow.svg" alt="imng" className="w-44 rotate-180 cursor-pointer" onClick={handleNext}></img>
        </div>
      </div>
    </div>
  );
};

export default App;
