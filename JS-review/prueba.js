
// // Read the content of the file
// const fs = require('fs');
// const path = require('path');

// const filePath = 'C:/Users/beatriz/Udemy/ultimate-react-course/JS-review/coding_qual_input';
// // const numbersSecretWord = [{1},{2,3},{4,5,6}];
// const nestedArray = [
//   [1],
//   [2, 3],
//   [4, 5, 6]
// ];


import { readFileSync } from 'fs';

function decode(message_file) {
    let decodedMessage = "";
    const pyramidNumbers = [
        [1],
        [2, 3],
        [4, 5, 6]
      ];
    try {
        const data = readFileSync(message_file, 'utf8');
        const lines = data.split('\n');

        // Extract pyramid numbers from the end of each line
        for (let i = 0; i < lines.length; i++) {
            const parts = lines[i].split(' ');
            if (parts.length === 2) {
                const number = parseInt(parts[0]);
                pyramidNumbers.push(number);
            }
        }

        // Read the words corresponding to pyramid numbers
        for (let i = 0; i < pyramidNumbers.length; i++) {
            const word = getWordForNumber(pyramidNumbers[i], lines);
            if (word) {
                decodedMessage += word + " ";
            }
        }

    } catch (err) {
        console.error(`Error reading the file: ${err.message}`);
    }

    return decodedMessage.trim();
}

function getWordForNumber(number, lines) {
    for (let i = 0; i < lines.length; i++) {
        const parts = lines[i].split(' ');
        if (parts.length === 2 && parseInt(parts[0]) === number) {
            return parts[1].trim();
        }
    }
    return null;
}

// Example usage
const encodedFile = 'C:/Users/beatriz/Udemy/ultimate-react-course/JS-review/coding_qual_input.txt';

const decodedResult = decode(encodedFile);
console.log(decodedResult);

// const lastElements = nestedArray.map(subarray => subarray[subarray.length - 1]);

// // console.log(lastElements);

// fs.readFile('coding_qual_input.txt', 'utf8', (err, data) => {
//     if (err) {
//       console.error('Error reading the file:', err);
//       return;
//     }
  
//     // Split the data into lines
//     const lines = data.split('\n');
  
//     // Create an array to store id and word pairs
//     const idWordArray = [];
  
//     // Process each line and extract id and word
//     lines.forEach((line, index) => {
//       // Assuming the data in each line is separated by a space
//       const [id, word] = line.split(' ');
  
//       // Check if both id and word are present
//       if (id && word) {
//         // Push id and word as an object to the array
//         idWordArray.push({ id, word });
//       } else {
//         console.warn(`Invalid data in line ${index + 1}: ${line}`);
//       }
//     });
  
//     // Output the resulting array
//     console.log('idWordArray:', idWordArray);
//     // Choose elements from idWordArray based on indices from lastElements
//     console.log(lastElements)

//     // const selectedElements = lastElements.map(index => 
//     //   idWordArray.filter((word) => idWordArray.id === index));console.log(idWordArray.word));
//       // 
//       const xx = idWordArray.filter((word) => idWordArray.id === '1');
//       console.log(xx)
//       // filter((words)=>idWordArray.word);
// //     const longBookswhidtMovie = books.filter((book) => book.pages>500 && getAllReviewCount(book)>15000).
// //   filter((book =>book.hasMovieAdaptation));
// // console.log(longBookswhidtMovie);
//       // console.log(index-1))
//     // (index => idWordArray[index - 1]);

//     // Output the resulting array
//     console.log('Selected Elements:', selectedElements);
//   });