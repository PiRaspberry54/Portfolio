const textDisplay = document.getElementById("text"); //Fetching the element where I want the words and effect to happen. 
const phrases = ["I enjoy learning",
                 "I enjoy coding",
                 "I enjoy problem solving",
                 "I am a trainee Web Developer"
];
//Storing the four sentences that I want it to display. Storing it in a variable as an array.


let  i = 0; //I is going to be used in a loop to go through element of the phrases array.
let j = 0; //Ussed to run through each letter of the array element. 
let currentPhrase = []; //Used as a placeholder to store the variable of the current string that the loop is running through. 
let isDeleting = false; //Variable used to let the loop know when to stop the deleting loop.

function loop () {
    textDisplay.innerHTML = currentPhrase.join('');    
    if (i < phrases.length) {

        if (!isDeleting && j <= phrases[i].length-1){
            currentPhrase.push(phrases[i][j]); 
            j++;
        } 
        
        if(isDeleting && j <= phrases[i].length-1) {
            currentPhrase.pop(phrases[i][j]);
            j--;
        }
        
        if(j == phrases[i].length-1 && i != 3) {
            isDeleting = true;
        } 
        
        if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
        } 
        
    }
    setTimeout(loop, 200);
}

loop(); //Calling the function

//$(".typing-container").style().display(none); //Not currently working.