import { franc } from "franc";
import langs from 'langs'
import 'colors'

const input = process.argv[2];

const language = franc(input)

try {
    if (!input) {
        console.log("Please provide text...!".red);

    }
    else {
        const languageCode = langs.where('3', language)
        if (languageCode === undefined) {
            console.log("Language not found...".red);
        }
        else {
            if (languageCode && languageCode.name) {
                console.log(languageCode.name.green);
            }
            else {
                console.log("Language name not Found...!".red);

            }
        }
    }
}
catch (e) {
    console.log("Try with another sample text..!".red);

}
