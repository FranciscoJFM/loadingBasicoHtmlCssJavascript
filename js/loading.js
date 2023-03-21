var loading = document.getElementById("loading")
var letters = ['E','A','S','Y','A','N','D','R','O','I','D']
var currentLetter = 0;
var interval = setInterval(function(){
    loading.innerHTML += letters[currentLetter];
    currentLetter++;
    if(currentLetter == letters.length){
        currentLetter = 0;
        loading.innerHTML = 'Loading...';

    }
},500)