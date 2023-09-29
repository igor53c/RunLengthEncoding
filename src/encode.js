export function encode(text) {
    let encoded = '';
    let count = 1;

    for (let i = 1; i <= text.length; i++) {
        if (text[i] === text[i - 1]) {
            count++;
        } else {
            encoded += count + text[i - 1];
            count = 1;
        }
    }

    return encoded;
 }