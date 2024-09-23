/* https://www.npmjs.com/package/react-donut-chart?activeTab=readme */


import React, { useState } from "react";
import EtablissementCard from "./EtablissementCard";
const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
    <button id="open-modal-btn" 
        className="px-4 py-2 my-2 border-gray-600 bg-indigo-400 text-white rounded-tr-lg rounded-bl-lg" 
        onClick={() => setShowModal(true)}>
            Plus d'info
    </button>
    
      {showModal ? (
        <>
          <div className="bg-slate-950/75 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-3xl">
              <div className=" bg-slate-200 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-sm text-center">Fiche Etablissement</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="relative p-6 flex-auto w-full">
                 <EtablissementCard/>
                </div>
                
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal
