const { log } = require('console')
const fs = require('fs')
const folderName = process.argv[2] || 'Project'

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '')
    fs.writeFileSync(`${folderName}/styles.css`, '')
    fs.writeFileSync(`${folderName}/app.js`, '')
    console.log(`Success! Folder ${folderName} and boilerplate files created.`);
} catch (error) {
    console.log("Something Went Wrong...!!");
    console.log(error)

}