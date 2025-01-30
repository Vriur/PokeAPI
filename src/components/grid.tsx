'use client'

import { useEffect, useState } from 'react';
import Modal from "./modal";

export default function Grid ( 
    { pokemon, typeName }: { pokemon: Pokemon[], typeName: string } 
){
    /*
        State variables used for manage the state of the data shown on the grid and the modal state.
        - openModal:        When true the modal is shown, when false it's hide.
        - PokemonInfo:      State variable that kept an array of lenght ItemsPerPage in which every entry is a pokemon that'll
                            be shown on the screen.
        - modalPokemonInfo: Is the information corresponding to the pokemon that will be shown on the modal. It'll change
                            when some pokemon card is clicked.
    */
    const [openModal, setOpenModal] = useState(false);
    const [pokemonInfo, setPokemonInfo] = useState<PokemonEntry[]>([]);
    const [modalPokemonInfo, setModalPokemonInfo] = useState<PokemonEntry | undefined>(undefined);

    /* 
        This UseEffect hook will be trigger every time that the pokemon array is changed, so it'll be trigger every time
        when the page is changed.
    */
    useEffect(() => {
        setPokemonInfo([]); // Clean the pokemonInfo state.
        
        /*
            Function to get the information of the Pokemon that will be shown on the grid.
            The election of the moves is random just for make it more dinamic.
        */
        const fetchPokemonInfo = async (pokemon: Pokemon) => {
            // Get the information of each Pokemon that will be show on the current grid page.
            const jsonPokemonData = await fetch(pokemon.pokemon.url).then((response) => response.json());

            // Pick the first move by a random choice.
            const firstMove: string = jsonPokemonData.moves[Math.floor(Math.random() * jsonPokemonData.moves.length)].move.name;
            let secondMove: string = "";

            // Pick the second move by a random choice until it is different from the first move.
            do {
                secondMove = jsonPokemonData.moves[Math.floor(Math.random() * jsonPokemonData.moves.length)].move.name;
            } while(firstMove.localeCompare(secondMove) === 0);

            // Make an entry on the array that'll be passed through the grid component.
            const pokemonEntry: PokemonEntry = {
                "name": pokemon.pokemon.name,
                "image": jsonPokemonData.sprites.front_default,
                "firstMove": firstMove,
                "secondMove": secondMove
            }

            // Add the entry into the array
            setPokemonInfo((previousState) => [
                ...previousState,
                pokemonEntry
            ]);
        }

        // Map function that call fetchPokemonInfo for each pokemon is pokemon array.
        pokemon.map((pokemon: Pokemon) => {
            fetchPokemonInfo(pokemon);
        });
    }, [pokemon]);

    // Funtion that handle the update of the pokemon info that will be shown of the modal.
    const handlePokemonModalInfo = (searchName: string) => {
        // Look for the information corresponding to the pokemon name that had triggered the handle function.
        const modalPokemon: PokemonEntry | undefined = pokemonInfo.find(
            (pokemon) => pokemon.name.localeCompare(searchName) == 0
        ); 
        
        // Update the data inside ModalPokemonInfo state.
        setModalPokemonInfo(modalPokemon);
    }

    // Function that handle the change of state corresponding to the modal display value. 
    const handleClick = () => {
        setOpenModal(!openModal);    
    }

    /*
        It'll return the modal component (or not) depending on the value of the openModal state. If the state is true, 
        it'll return the modal component; if the state is false, it'll return a null. Also, it'll return the grid of the 
        pokemon corresponding to the selected type and the number of the current page.
    */
    return (
        <>
            <Modal pokemonEntry={modalPokemonInfo} openModal={openModal} typeName={typeName} handleClick={() => handleClick()} />
            <div className='grid md:grid-cols-5 grid-cols-2 gap-4 p-10'>
                {
                    pokemonInfo.map((pokemon: PokemonEntry) => {
                        return (
                            <div key={pokemon.name} onClick={() => { handlePokemonModalInfo(pokemon.name); handleClick() }} className={`group justify-center content-center text-center border-4 rounded-lg transition delay-200 duration-300 ease-in-out text-${typeName} border-${typeName} bg-${typeName} hover:bg-opacity-50`}>
                                <div className="flex items-center justify-center content-center text-center">
                                    <img src={pokemon.image} className='2lg:lg:md:h-32 2lg:lg:md:w-32'></img>
                                </div>
                                <div className="justify-center content-center text-center">
                                    <label className='group-hover:text-palette-black italic font-sans font-semibold lg:text-xl md:text-lg sm:text-md max-sm:text-xs text-xs text-center capitalize'>{pokemon.name}</label>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};