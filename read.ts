import {Blob} from 'node:buffer';

function readBlob(blob: Blob): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject(new Error('Failed to read Blob as a string.'));
        }
      };
  
      reader.onerror = () => {
        reject(new Error('Error reading Blob.'));
      };
  
      reader.readAsText(blob);
    });
  }
  
// Usage example
const blob = new Blob(['Hello, world!'], { type: 'text/plain' });

readBlob(blob)
.then((content) => {
    console.log(content);
})
.catch((error) => {
    console.error(error);
});