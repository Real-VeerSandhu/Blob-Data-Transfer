// Blob script works (NodeJS)

import {Blob} from 'node:buffer';

let blob = new Blob(["<html>…</html>"], {type: 'text/html'});

console.log('blob:', blob)
