import '../component/title-field.js';
import '../component/dialog-box.js';
import '../component/formation-field.js';
import '../component/chosen-formation.js';
import '../component/line-up-field.js';
import '../component/chosen-player-field.js';
import '../component/player-search-field.js';
import '../component/modal-all-player.js';
import '../component/copyright.js';
import $ from 'jquery';
import formation from "../data/formation.js";
import { searchPlayer, renderSelectedPlayers } from "../data/player.js";
import { formationLocalStorageKey, checkForStorage, resetStorage, setFormation, searchFormation, getStorage, playersLocalStorageKey, changeBenchStatus } from "../data/storage.js"; 

const main = () => {
    let temp;
    const dialogBox = $("dialog-box"), formationField = $("formation-field"), chosenFormation = $("chosen-formation"), chosenPlayerField = $("chosen-player-field"), playerSearchField = $("player-search-field"), allFormationImage = $(".formation-image"), lineUpField = $("line-up-field"), modalAllPlayer = $("modal-all-player");

    const changePicture = value => {
        if(value == 1){
            temp = formation[0];
            formation.shift();
            formation.push(temp);
        } else {
            temp = formation[15];
            formation.pop();
            formation.unshift(temp);
        }
        allFormationImage[1].setAttribute("src", `${formation[0].image}`);
        allFormationImage[0].setAttribute("src", `${formation[15].image}`);
        allFormationImage[2].setAttribute("src", `${formation[1].image}`);
        $(".formation-name").html(`${formation[0].name}`);
    }

    const chooseNewOrContinue = () => {
        if(getStorage(formationLocalStorageKey) !== null){
            let selectedFormationIndex = searchFormation();
            $(".chosen-formation-image").attr("src", `${formation[selectedFormationIndex].image}`);
            $(".chosen-formation-name").html(`${formation[selectedFormationIndex].name}`);
            showDisplay([{elemen: dialogBox, status: "show"}]);
            $(".create-new").click(function(){
                resetStorage(formationLocalStorageKey);
                showDisplay([{elemen: dialogBox, status: "hide"}, {elemen: formationField, status: "show"}]);
            });
            $(".continue").click(function(){
                showDisplay([{elemen: dialogBox, status: "hide"}, {elemen: chosenFormation, status: "show"}, {elemen: playerSearchField, status: "show"}]);
                renderSelectedFormation(selectedFormationIndex);
                showDisplay([{elemen: chosenPlayerField, status: "show"}]);
                renderSelectedPlayers();
            });
        } else {
            showDisplay([{elemen: formationField, status: "show"}]);
        }
    }

    const resetDisplay = () => {
        dialogBox.hide(), chosenFormation.hide(), playerSearchField.hide(), formationField.hide(), chosenPlayerField.hide(), $(".loading").hide(), lineUpField.hide(), modalAllPlayer.hide();
    }

    const showDisplay = queues => {
        queues.forEach(queue => {
            if(queue.status == "hide")
                queue.elemen.hide();
            else
                queue.elemen.show();
        });
    }

    const setEachPosition = index => {
        const playerPositions = $(".player-position");
        for(let i = 0; i < playerPositions.length; i++){
            // playerPositions[i].classList.add(`${formation[index].position[i]}`);
            playerPositions[i].innerHTML = `${formation[index].positionName[i]}`;
        }
    }

    const renderSelectedFormation = index => {
        $(".chosen-formation-image").attr("src", `${formation[index].image}`);
        $(".chosen-formation-name").html(`${formation[index].name}`);
        lineUpField.show();
        setEachPosition(index);
    }

    const showModalAllPlayer = index => {
        const startingList = $(".modal-player-list");
        const data = getStorage(playersLocalStorageKey);
        let eachPlayer, button;
        data.players.forEach(player => {
            if(player.bench == true)
                button = `<button class="line-up-in" id="${player.id}">Select Line-up</button>`;
            else
                button = 'Already Selected';
            eachPlayer = `
                <tr>
                    <td>${player.name}</td>
                    <td>${button}</td>
                </tr>
            `;
            startingList.append(eachPlayer);
        });
        modalAllPlayer.show();
        setButtonLineUp(index);
    }

    const movePlayerToBench = index => {
        const data = getStorage(playersLocalStorageKey);
        let id =  $(".starting-player-id")[index].innerHTML;
        data.players.forEach(player => {
            if(player.id == id){
                changeBenchStatus(id, index);
                const selectStarting = $(".select-starting");
                $(".starting-player-image")[index].setAttribute("src", `http://antekteknologi.my.id/wp-content/uploads/2022/09/player-default-image.png`);
                $(".starting-player-id")[index].innerHTML = `???`;
                $(".starting-player-name")[index].innerHTML = `???`;
                $(".starting-player-team")[index].innerHTML = `???`;
                $(".starting-player-nationality")[index].innerHTML = `???`;
                selectStarting[index].innerHTML = "Select";
                selectStarting[index].classList.remove("go-to-bench");
            }
        });
    }

    const setButtonLineUp = index => {
        const lineUpIn = $(".line-up-in");
        $(".exit-modal").click(function(){
            modalAllPlayer.hide();
            $(".modal-player-list").empty();
        });
        for(let i = 0; i < lineUpIn.length; i++){
            lineUpIn[i].addEventListener("click", function(){
                changeBenchStatus(lineUpIn[i].id, index);
                modalAllPlayer.hide();
                console.log(index);
            });
        }
    }
    
    $(document).ready(function(){
        resetDisplay();
        if(checkForStorage()){
            chooseNewOrContinue();
        } 

        $(".left-button").click(function(){
            changePicture(-1);
        });
    
        $(".right-button").click(function(){
            changePicture(1);
        });
    
        $(".choose-formation").click(function(){
            renderSelectedFormation(0);
            showDisplay([{elemen: chosenPlayerField, status: "show"}]);
            renderSelectedPlayers();
            setFormation(0);
            showDisplay([{elemen: formationField, status: "hide"}, {elemen: chosenFormation, status: "show"}, {elemen: playerSearchField, status: "show"}]);
        });

        $(".change-formation").click(function(){
            resetStorage(formationLocalStorageKey);
            showDisplay([{elemen: formationField, status: "show"}, {elemen: chosenFormation, status: "hide"}, {elemen: playerSearchField, status: "hide"}, {elemen: chosenPlayerField, status: "hide"}]);
            lineUpField.hide();
        });

        $(".submit-player-name").click(function(){
            searchPlayer();
        });

        const startingButton = $(".select-starting");
        for(let i = 0; i < startingButton.length; i++){
            startingButton[i].addEventListener("click", function(){
                if(startingButton[i].innerHTML == "Select")
                    showModalAllPlayer(i);
                else
                    movePlayerToBench(i);
            })
        }
    });
}

export default main;