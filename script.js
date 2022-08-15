/* Scripts */
const textArea = document.getElementById("philosophe");
textArea.value = null;

function sleep (time){
        return new Promise(r => setTimeout (r, time));
}

async function reponse () {
        const quiSuisJe = "Qui suis-je? ";
        let recomposeMessage = "";

        const decomposeMessage = quiSuisJe.split('');
        console.log(decomposeMessage);

        for (let i = 0; i < decomposeMessage.length; i++) {
                recomposeMessage += decomposeMessage[i];
                await sleep(100);
                textArea.value = recomposeMessage;
        }
}

