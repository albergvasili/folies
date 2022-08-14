/* Scripts */

function reponse () {
        const textArea = document.getElementById("philosophe");
        const quiSuisJe = "Qui suis-je? ";
        let repetition = ""

        for (let i = 0; i < quiSuisJe.length; i++) {
                repetition += quiSuisJe;
        }
        textArea.value = repetition;
        console.log(repetition);
        return repetition;

}

