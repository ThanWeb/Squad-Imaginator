import '../component/dialog-box.js';
import '../component/formation-field.js';
import '../component/chosen-formation.js';
import '../component/formation-template.js';
import '../component/chosen-player-field.js';
import '../component/player-search-field.js';
import '../component/copyright.js';
import $ from 'jquery';
import formation from "../data/formation.js";
import { searchPlayer, renderSelectedPlayers } from "../data/player.js";
import { formationLocalStorageKey, checkForStorage, resetStorage, setFormation, searchFormation, playersLocalStorageKey } from "../data/storage.js"; 

const main = () => {
    let temp;
    const dialogBox = $("dialog-box"), formationField = $("formation-field"), chosenFormation = $("chosen-formation"), chosenPlayerField = $("chosen-player-field"), playerSearchField = $("player-search-field"), allFormationImage = $(".formation-image");

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

    const resetDisplay = () => {
        dialogBox.hide(), chosenFormation.hide(), playerSearchField.hide(), formationField.hide(), chosenPlayerField.hide(), $(".loading").hide(), $("formation-template").remove();
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
            playerPositions[i].classList.add(`${formation[index].position[i]}`);
            playerPositions[i].innerHTML = `${formation[index].positionName[i]}`;
        }
    }

    const renderSelectedFormation = index => {
        $(".chosen-formation-image").attr("src", `${formation[index].image}`);
        $(".chosen-formation-name").html(`${formation[index].name}`);
        const template = document.createElement("formation-template");
        chosenFormation.append(template);
        setEachPosition(index);
    }
    
    $(document).ready(function(){
        resetDisplay();
        if(checkForStorage()){
            if(localStorage.getItem(formationLocalStorageKey) !== null){
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
            $("formation-template").remove()
        });

        $(".submit-player-name").click(function(){
            searchPlayer();
        });
    });
}

export default main;