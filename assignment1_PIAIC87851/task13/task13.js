let a = 10;

// create a new preformatted element to display the results
let output = document.createElement("pre");

// set the text content of the preformatted element
output.textContent =
  "Result:\n" +
  "The value of a is: " +
  a +
  "\n" +
  ".................................\n\n" +
  "The value of ++a is: " +
  ++a +
  "\n" +
  "Now the value of a is: " +
  a +
  "\n\n" +
  "The value of a++ is: " +
  a++ +
  "\n" +
  "Now the value of a is: " +
  a +
  "\n\n" +
  "The value of --a is: " +
  --a +
  "\n" +
  "Now the value of a is: " +
  a +
  "\n\n" +
  "The value of a-- is: " +
  a-- +
  "\n" +
  "Now the value of a is: " +
  a +
  "\n";

// add the preformatted element to the doucment body
document.body.appendChild(output);
