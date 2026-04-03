const apiResponseTextArea = document.getElementById("apiResponse");

const buildApiRequestUrl = (action) => {
    const apiUrl = "https://1105.api.green-api.com";
    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance = document.getElementById("apiTokenInstance").value;

    return `${apiUrl}/waInstance${idInstance}/${action}/${apiTokenInstance}`;
}

const getSettings = async () => {
    const response = await fetch(buildApiRequestUrl("getSettings"));
    apiResponseTextArea.value = JSON.stringify(await response.json(), null, 4);
}

const getStateInstance = async () => {
    const response = await fetch(buildApiRequestUrl("getStateInstance"));
    apiResponseTextArea.value = JSON.stringify(await response.json(), null, 4);
}

const sendMessage = async () => {
    const payload = {
        chatId: document.getElementById('chatIdForSendMessage').value,
        message: document.getElementById('message').value,
    };

    const response = await fetch(
        buildApiRequestUrl("sendMessage"),
        {
            method: "POST",
            body: JSON.stringify(payload),
        }
    );

    apiResponseTextArea.value = JSON.stringify(await response.json(), null, 4);
}

const sendFileByUrl = async () => {
    const urlFile = document.getElementById('urlFile').value;
    const payload = {
        chatId: document.getElementById('chatIdForSendFileByUrl').value,
        urlFile: urlFile,
        fileName: urlFile.split('/').pop(),
    };

    const response = await fetch(
        buildApiRequestUrl("sendFileByUrl"),
        {
            method: "POST",
            body: JSON.stringify(payload),
        }
    );

    apiResponseTextArea.value = JSON.stringify(await response.json(), null, 4);
}