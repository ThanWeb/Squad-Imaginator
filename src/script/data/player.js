import '../component/player-search-field.js';
import $ from 'jquery';
import { playersLocalStorageKey, storePlayer, checkForStorage, removePlayer } from './storage.js';

const baseUrl = 'https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=';

let playerNameValue, searchQuery;

const searchPlayer = async () => {
    playerNameValue = $("#player-name").val();
    searchQuery = checkString(playerNameValue);
    try {
        $("player-search-list").html(" ");
        $(".loading").show();
        const fetchResponse = await fetch(`${baseUrl}${searchQuery}`);
        const responseJson = await fetchResponse.json();
        $(".loading").hide();
        renderResult(responseJson.player);
    } catch (error) {
        alert(error);
        $(".loading").hide();
    }
}

const checkString = string => {
    return string.replace(" ", "%20");
}

const renderResult = players => {
    const playerSearchList = document.createElement("player-search-list");
    const playerSearchField = $("player-search-field");
    playerSearchList.players = players;
    playerSearchField.append(playerSearchList);
    setEventSelectButton();
}

const setEventSelectButton = () => {
    const allPlayerButton = $(".select-player"), allPlayerId = $(".player-id"), allPlayerName = $(".player-name"), allPlayerTeam = $(".player-team"), allPlayersImage = $(".player-image"), allPlayerNationality = $(".player-nationality");
    let tempPlayers = {id: '', name: '', team: '', nationality: '', img: ''}

    for(let i = 0; i < allPlayerButton.length; i++){
        allPlayerButton[i].addEventListener("click", function(){
            tempPlayers.id = allPlayerId[i].innerHTML;
            tempPlayers.name = allPlayerName[i].innerHTML;
            tempPlayers.team = allPlayerTeam[i].innerHTML;
            tempPlayers.nationality = allPlayerNationality[i].innerHTML;
            tempPlayers.img = allPlayersImage[i].src;
            storePlayer(tempPlayers);
            $("player-search-list").remove();
        });
    }
}

const renderSelectedPlayers = () => {  
    const chosenPlayerField = $("chosen-player-field")
    if(checkForStorage()){
        if(localStorage.getItem(playersLocalStorageKey) !== null){
            $("chosen-player-field").show();
            let data = localStorage.getItem(playersLocalStorageKey);
            data = JSON.parse(data);
            if($("chosen-player-list"))
                $("chosen-player-list").remove();
            const chosenPlayerList = document.createElement("chosen-player-list");
            chosenPlayerList.players = data.players;
            chosenPlayerField.append(chosenPlayerList);
            setRemoveButton();
        } else {
            $("chosen-player-field").hide();
        }
    }
}

const setRemoveButton = () => {
    const allRemoveButton = $(".remove-player");
    const allSelectedPlayerId = $(".selected-player-id");
    for(let i = 0; i < allRemoveButton.length; i++){
        allRemoveButton[i].addEventListener("click", function(){
            removePlayer(allSelectedPlayerId[i].innerHTML);
        });
    }
}

export { searchPlayer, renderSelectedPlayers };