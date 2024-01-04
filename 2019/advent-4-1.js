let input = `372037-905157`;

input = input.split("-").map((str) => parseInt(str));

let output = 0;
loop: for (let password = input[0]; password <= input[1]; password++) {
  let str = password.toString();
  for (let i = 0; i < str.length - 1; i++)
    if (str[i] > str[i + 1]) continue loop;
  for (let i = 0; i < str.length - 1; i++)
    if (str[i] === str[i + 1]) {
      output++;
      continue loop;
    }
}

console.log(output);
