var alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЬЫЬЭЮЯ';
function shiftAlphabet(shift)
{
    var shiftedAlphabet = "";
    for (var i = 0; i < alphabet.length; i++)
	{
        currentLetter = (alphabet[i + shift] === undefined) ? (alphabet[i + shift - alphabet.length]) : (alphabet[i + shift]);
        shiftedAlphabet = shiftedAlphabet.concat(currentLetter);
    }
    return shiftedAlphabet;
}
function encrypt()
{
    var message = document.getElementById("message").value;
    var shift = parseInt(document.getElementById("shift").value);
    var shiftedAlphabet = shiftAlphabet(shift);
    var encryptedMessage = "";
    for (var i = 0; i < message.length; i++)
	{
        var indexOfLetter = alphabet.indexOf(message[i].toUpperCase());
        encryptedMessage = encryptedMessage.concat(shiftedAlphabet[indexOfLetter]);
    }
    document.getElementById("result").value = encryptedMessage.toLowerCase();
}
function decrypt()
{
    var message = document.getElementById("message2").value;
    var shift = parseInt(document.getElementById("shift2").value);
    var shiftedAlphabet = shiftAlphabet(shift);
    var encryptedMessage = "";
    for (var i = 0; i < message.length; i++)
	{
        if (message[i] == " ")
		{
            encryptedMessage = encryptedMessage.concat(' ');
            continue
		};
        var indexOfLetter = shiftedAlphabet.indexOf(message[i].toUpperCase());
        encryptedMessage = encryptedMessage.concat(alphabet[indexOfLetter]);
    }
    document.getElementById("result2").value = encryptedMessage.toLowerCase();
}