// import CardProduct from './CardProduct';
// import CarToyProduct from './CarToyProduct';
import ModalSlider from './ModalSlider';
//  import ThreeDots from './ThreeDots';
// import MouseOver from './Mouseover';
import Responsive from './Responsive';
// import Askquestion from "./Askquestion";
// import Modal from "./Modal";
// import React, { useState } from "react";
// import UseEffectAPi from './UseEffectAPi';
// import Askquestion from "./Askquestion";
// import ShareModal from './ShareModal';
// import SmallCardProduct from './SmallCardProduct';
// import FetchApi from "./FetchApi";
// import VideoSection from './VideoSection';
// import Iframe from './Iframe';
function App() {

  // const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="">
      
      <Responsive />   
      <div  style={{display : "none"}}>   
      <ModalSlider  />
      </div>
      {/* <MouseOver /> */}
      {/* <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />} */}


      
      {/* <Askquestion /> */}
       {/* <ShareModal /> */}
       {/* <CardProduct /> */}
       {/* <SmallCardProduct /> */}
       {/* <CarToyProduct /> */}
       {/* <ThreeDots /> */}
       {/* <UseEffectAPi /> */}
       {/* <FetchApi /> */}
       {/* <VideoSection /> */}
       {/* <Iframe /> */}
            
    </div>
  );
}

export default App;


