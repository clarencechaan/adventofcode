let cardPublicKey = 335121;
let doorPublicKey = 363891;

function getLoopSize(publicKey) {
  let loopSize = 0;
  let val = 1;
  for (; val !== publicKey; loopSize++) val = (val * 7) % 20201227;
  return loopSize;
}

let cardLoopSize = getLoopSize(cardPublicKey);

function getEncryptionKey() {
  let val = 1;
  for (let i = 0; i < cardLoopSize; i++) val = (val * doorPublicKey) % 20201227;
  return val;
}

let output = getEncryptionKey();
console.log(output);
