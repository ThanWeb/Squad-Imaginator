import '../component/player-search-field.js';
import $ from 'jquery';
import { playersLocalStorageKey, getStorage, storePlayer, checkForStorage, removePlayer } from './storage.js';

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
    let result = '', array = [], temp = '';
    for(let i = 0; i < string.length; i++){
        if(string[i] != ' ')
            temp = temp + string[i];
        else{
            array.push(temp);
            temp = '';
        }
    }
    array.push(temp);

    array.forEach(string => {
        if(string != '')
            result = result + string + '%20'
    });
    result = result.slice(0, -3);
    return result;
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
    let tempPlayers = {id: '', name: '', team: '', nationality: '', img: '', bench: true, position: -1};

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
    const chosenPlayerField = $("chosen-player-field");
    if(checkForStorage()){
        if(getStorage(playersLocalStorageKey) !== null){
            let data = getStorage(playersLocalStorageKey);
            $("chosen-player-field").show();
            if($("chosen-player-list"))
                $("chosen-player-list").remove();
            const chosenPlayerList = document.createElement("chosen-player-list");
            chosenPlayerList.players = data.players;
            chosenPlayerField.append(chosenPlayerList);
            setRemoveButton();
            checkTotalBench(data);
            renderLineUp(data);
            $(".modal-player-list").empty();
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

const checkTotalBench = data => {
    let benchPlayers = 0;
    data.players.forEach(player => {
        if(player.bench == true)
            benchPlayers++;
    });

    if(benchPlayers == 0)
        $(".zero-bench").show();
    else
        $(".zero-bench").hide();
}

const renderLineUp = data => {
    const allPlayerImage = $(".starting-player-image"), allPlayerId = $(".starting-player-id"), allPlayerName = $(".starting-player-name"), allPlayerTeam = $(".starting-player-team"), allPlayerNationality = $(".starting-player-nationality"), selectStarting = $(".select-starting");
    data.players.forEach(player => {
        if(player.bench == false){
            allPlayerImage[player.position].setAttribute("src", `${player.img}`);
            allPlayerId[player.position].innerHTML = `${player.id}`;
            allPlayerName[player.position].innerHTML = `${player.name}`;
            allPlayerTeam[player.position].innerHTML = `${player.team}`;
            allPlayerNationality[player.position].innerHTML = `${player.nationality}`;
            selectStarting[player.position].innerHTML = "Bench";
            selectStarting[player.position].classList.add("go-to-bench");
        }
    });
}

export { searchPlayer, renderSelectedPlayers };