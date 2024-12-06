
const secretKey = [5, 12, 7, 18, 3, 9];
function customEncrypt(input) {
    let encrypted = '';
    let keyIndex = 0;
    for (let i = 0; i < input.length; i++) {
        const charCode = input.charCodeAt(i);
        const shift = secretKey[keyIndex];
        const newCharCode = charCode ^ shift;
        encrypted += String.fromCharCode(newCharCode);
        keyIndex = (keyIndex + 1) % secretKey.length;
    }

   
    return btoa(encrypted);
}