import { franc } from "franc";
import langs from 'langs'
import 'colors'

const input = process.argv[2]
const language = franc(input)
try {
    if (!input) {
        console.log("Please Provide Text input..!".red);
    }
    else {
        const languageCode = langs.where('3', language)
        if (languageCode === undefined) {
            console.log("Undefined Language ...Try Again".red);
        }
        else {
            if (languageCode && languageCode.name) {
                console.log(languageCode.name.green);
            }
            else {
                console.log(`Found Code : ${languageCode} but no name found`.red);
            }
        }
    }

} catch (error) {
    console.log("Error..Try with other sample text !!!".red);

}




