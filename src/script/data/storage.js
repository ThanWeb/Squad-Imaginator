import $ from 'jquery';
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

const getStorage = key => {
    let data;
    if(checkForStorage())
        data = JSON.parse(localStorage.getItem(key));
    return data;
}

const setFormation = value => {
    if(checkForStorage()){
        let data = { chosenFormation: formation[value].name };
        localStorage.setItem(formationLocalStorageKey, JSON.stringify(data));
    }
}

const searchFormation = () => {
    if(checkForStorage()){
        let data = getStorage(formationLocalStorageKey);
        let chosenFormation = data.chosenFormation;
        for(let i = 0; i < formation.length; i++){
            if(formation[i].name === chosenFormation)
                return i;
        }
    }
}

const showAlert = (elemen, message) => {
    elemen.html(message);
    elemen.show();
    setTimeout(() => {
        elemen.hide();
    }, 2000);
}

const storePlayer = data => {
    const duplicateAlert = $(".duplicate-alert"), successAlert = $(".success-alert"), maximumAlert = $(".maximum-alert");
    if(checkForStorage()){
        if(getStorage(playersLocalStorageKey) == null)
            playerList = {players : []};
        else 
            playerList = getStorage(playersLocalStorageKey);

        if(playerList.players.length <= 25){
            if(checkForPlayers(playerList.players, data.id)){
                showAlert(duplicateAlert, `${data.name} already on the list`);
            }   
            else {
                playerList.players.push(data);
                showAlert(duplicateAlert, `${data.name} successfully added to the list`);
            }
        } else
            showAlert(maximumAlert, "25 Players Max");
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
    return flag;
}

const removePlayer = id => {
    let playersArray = [];
    let data = getStorage(playersLocalStorageKey);
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

const changeBenchStatus = (id, position) => {
    let playersArray = [];
    let data = getStorage(playersLocalStorageKey);
    data = data.players;

    for(let i = 0; i < data.length; i++){
        if(data[i].id == id){
            if(data[i].bench == false)
                data[i].bench = true;
            else if(data[i].bench == true)
                data[i].bench = false;
            data[i].position = position;
        }
        playersArray.push(data[i]);
    }
    resetStorage(playersLocalStorageKey);
    data = {players : playersArray};
    localStorage.setItem(playersLocalStorageKey, JSON.stringify(data));
    renderSelectedPlayers();
}

export { formationLocalStorageKey, getStorage, checkForStorage, resetStorage, setFormation, searchFormation, storePlayer, playersLocalStorageKey, removePlayer, changeBenchStatus };