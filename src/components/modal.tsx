'use client';

export default function Modal({ pokemonEntry, openModal, typeName, handleClick }: { pokemonEntry: PokemonEntry | undefined, openModal: boolean, typeName: string, handleClick: () => void }) {
  // If the openModal state is false, it'll return a null value. 
  if (!openModal) return null;

  // If the openModal state is true, it'll return the dialog with the pokemon name, image and two movements.
  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        {/* Background of the modal, if it's clicked, the modal will close. */}
        <div onClick={() => handleClick()} className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
        
        {/* Structure of the modal */}
        <div className="fixed z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    
                    {/* 
                      Body of the modal, in it is the name, image and moves of the pokemon. Also the button that will 
                      close the modal when is clicked using the handleClick function that was passed by the 
                      parent (grid component). 
                    */}
                    <div className={`flex items-center justify-center content-center text-center bg-${typeName} px-4 pt-5 pb-4 sm:p-6 sm:pb-4`}>
                        <div className="sm:flex sm:items-start">
                            <div className="flex flex-col items-center justify-center content-center mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-base text-palette-black italic font-sans font-semibold capitalize" id="modal-title">{pokemonEntry?.name}</h3>
                                <img src={pokemonEntry?.image} className="2lg:h-40 2lg:w-40 lg:h-40 lg:w-40 md:h-24 md:w-24 justify-center content-center"></img>
                                <div className="mt-2">
                                  <label className="text-sm text-palette-black italic font-sans font-semibold capitalize">{`Move #1: ${pokemonEntry?.firstMove}`}</label>
                                </div>
                                <div className="mt-2">
                                  <label className="text-sm text-palette-black italic font-sans font-semibold capitalize">{`Move #2: ${pokemonEntry?.secondMove}`}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`bg-${typeName} px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6`}>
                        <button type="button" onClick={() => handleClick()} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
}