export let massage ='';

function isPalyndrom(word) {
    let direct ='';
    let reversed ='';
   
    for (let ch of word){
        if(ch !== ' '){
            direct += ch;
        }
    }
    
    for (let ch of word){
        if(ch !== ' '){
            reversed = ch + reversed;
        }
    }
    
    if (direct.toLowerCase() === reversed.toLowerCase()){
        massage = true;
    }
    else
    {
        massage = false;
    }
    return massage;
    };
    
    isPalyndrom("кокос");