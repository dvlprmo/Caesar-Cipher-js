
// This code has been done by me after searching it in how 
// can I do it using JS. 
// GH: @dvlprmo and feel free to interacte with me in it.


function encryepted_text(text, shift)
{
    // base case 
    if(shift<0){
        console.log(text, shift+26)
    }

    // declare a variable for result
    var result = ""

    // looping in each char over the string
    for(var i=0; i < text.length; i++){
        var temp = text[i];

        // check if it is lowercase letter so we code it using unicode id for that specific letter code. 
        if(temp.match(/[a-z]/i)){
            // get the unicode of every letter in the string
            var code = text.charCodeAt(i)

            // uppercase letter. Encrypt uppercase letter
            if(code >= 65 && code <= 90){
                temp = String.fromCharCode(((code-65+shift) % 26) + 65)

            }
            // for lowercase cases. Encrypt lowercase letter
            else if(code >= 97 && code <= 122){
                temp = String.fromCharCode(((code-97+shift)%26) + 97)
            }

        }
        result += temp
    }
    console.log(result)
}
function decrypted_text(text, shift){
     // base case 
     if(shift<0){
        console.log(text, shift+26)
    }

    // declare a variable for result
    var result = ""

    // looping in each char over the string
    for(var i=0; i < text.length; i++){
        var temp = text[i];

        //  // check if it is lowercase letter so we code it using unicode id for that specific letter code. 
        if(temp.match(/[a-z]/i)){
            // get the unicode of every letter in the string
            var code = text.charCodeAt(i)

            // uppercase letter. Encrypt uppercase letter
            if(code >= 65 && code <= 90){
                temp = String.fromCharCode(((code-65-shift) % 26) + 65)

            }
            // for lowercase cases. Encrypt lowercase letter
            else if(code >= 97 && code <= 122){
                temp = String.fromCharCode(((code-97-shift)%26) + 97)
            }

        }
        result += temp
    }
    console.log(result)
}
encryepted_text("defend the east wall of the castle", 1) //Result: efgfoe uif fbtu xbmm pg uif dbtumf
decrypted_text("efgfoe uif fbtu xbmm pg uif dbtumf", 1) // Result: defend the east wall of the castle
encryepted_text("Home where there is no home", 3) // Result: Krph zkhuh wkhuh lv qr krph
decrypted_text("Krph zkhuh wkhuh lv qr krph",3) // Result: Home where there is no home