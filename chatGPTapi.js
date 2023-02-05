const request = require("request");

function getText(text, params) {
    //params = a list of string
    var promptText = "To target" + params[1] + " " + params[0];
    if (params.length > 2) {
        promptText += " intesrested in ";
    }
    for (var i = 2; i < params.length; ++i) {
        promptText += i + ", ";
    }
    promptText += " rewrite: " + text;

    var OPENAI_API_KEY = "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";

    const options = {
        url: "https://api.openai.com/v1/completions",
        method: "POST",
        headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + OPENAI_API_KEY,
        },
        json: {
            model: "text-davinci-003",
            prompt: promptText,
        },
    };

    request(options, (error, response, body) => {
        if (error) {
            console.error(error);
        } else if (response.statusCode === 200) {
            console.log(body.choices[0].text);
        } else {
            console.error(
                `Request failed with status code: ${response.statusCode}`
            );
        }
    });
}
export { getText };

//to use, put import {getText} from "chatGPTapi.js"; then make call to function getText(text, params)
