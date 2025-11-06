const path = require('path')

//some common methods in nodejs path ;

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

const joinPath = path.join('hari', 'sa'); //joined the path
const resolvePath = path.resolve('hari', 'sa'); //append with absolute root path
const normalizePath = path.normalize('sa', '//sa ..'); //Normalize path means // are merged to single .. go to top one folder like that return a absoluet url at the end
console.log(resolvePath)
console.log(normalizePath)

// File system:

const fs = require('fs');

const dataFolder = path.join(__dirname, 'data');

if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log('folder created');
}

//write file in nodejs
const filePath = path.join(dataFolder, 'example.txt')
fs.writeFileSync(filePath, 'Hello world I am Here')
const readFile = fs.readFileSync(filePath, 'utf-8')
console.log(readFile)

// fs.appendFile -- add a new line to the file;

// readFile and write file using async way

fs.writeFile(filePath, 'jjee', (err) => {
    console.log(err) //return null if not an error
})