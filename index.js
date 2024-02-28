const scrambleBtn = document.getElementById('scramble');

scrambleBtn.addEventListener("click", function() {

    const scrambled_word = document.getElementById('scrambled_word');

    const word = document.getElementById('word');
    const unscrambled = word.value;
    console.log("Unscrambled word:", unscrambled);
    
    const scrmblArr = unscrambled.split('');

    for(let i = 0; i < unscrambled.length; i++){
        let j = Math.floor(Math.random() * (i + 1));
        let h = scrmblArr[i];
        scrmblArr[i] = scrmblArr[j];
        scrmblArr[j] = h;
    }
    //console.log("Scrambled array:", scrmblArr);

    const h3 = document.createElement('h3');
    h3.textContent = scrmblArr.join('');
    //console.log("Scrambled word:", h3.textContent);

    scrambled_word.appendChild(h3);
    //console.log("Appended scrambled word to 'scrambled_word' element.");
});





