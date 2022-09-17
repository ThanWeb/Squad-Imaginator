import formation from './formation.js';
import { renderSelectedPlayers } from "./player.js";

const formationLocalStorageKey = "FORMATION", playersLocalStorageKey = "PLAYERS";
let playerList;

const checkForStorage = () => {
    if (typeof (Storage) === undefined) {
        alert(`
            Browser tidak mendukung Local Storage,
            Data formasi dan pemain tidak bisa disimpan
        `);
        return false;
    }
    else
        return true;
}

const resetStorage = key => {
    if(checkForStorage())
        localStorage.removeItem(key);
}

const setFormation = value => {
    if(checkForStorage()){
        let data = { chosenFormation: formation[value].name };
        localStorage.setItem(formationLocalStorageKey, JSON.stringify(data));
    }
}

const searchFormation = () => {
    if(checkForStorage()){
        let data = JSON.parse(localStorage.getItem(formationLocalStorageKey));
        let chosenFormation = data.chosenFormation;
        for(let i = 0; i < formation.length; i++){
            if(formation[i].name === chosenFormation)
                return i;
        }
    }
}

const storePlayer = data => {
    if(checkForStorage()){
        if(localStorage.getItem(playersLocalStorageKey) == null)
            playerList = {players : []};
        else 
            playerList = JSON.parse(localStorage.getItem(playersLocalStorageKey));

        if(playerList.players.length <= 25){
            if(checkForPlayers(playerList.players, data.id))
                alert(`${data.name} already on the list`);
            else {
                playerList.players.push(data);
                alert(`${data.name} succesfully added to the list`);
            }
        } else
            alert("25 Players Max");
    }
    localStorage.setItem(playersLocalStorageKey, JSON.stringify(playerList));
    renderSelectedPlayers();
}

const checkForPlayers = (players, id)=> {
    let flag = false;
    players.forEach(player => {
        if(player.id == id)
            flag = true;
    });
    return flag
}

const removePlayer = id => {
    let playersArray = [];
    let data = JSON.parse(localStorage.getItem(playersLocalStorageKey));
    data = data.players;

    if(data.length == 1)
        resetStorage(playersLocalStorageKey);
    else {
        for(let i = 0; i < data.length; i++){
            if(data[i].id != id)
                playersArray.push(data[i]);
        }
        resetStorage(playersLocalStorageKey);
        data = {players : playersArray};
        localStorage.setItem(playersLocalStorageKey, JSON.stringify(data));
    }
    renderSelectedPlayers();
}

export { formationLocalStorageKey, checkForStorage, resetStorage, setFormation, searchFormation, storePlayer, playersLocalStorageKey, removePlayer };