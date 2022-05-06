function caesarCipher(text, shift) {
    let ciphertext = "";
    let re = /[a-z]/;

    for(let i=0; i<text.length; i++){ 
        if(re.test(text.charAt(i))) {
            ciphertext += String.fromCharCode((text.charCodeAt(i) - 97 + shift)%26 + 97); 
        } else {
            ciphertext += text.charAt(i); 
        } 
    }
    return ciphertext 
}

module.exports = caesarCipher;