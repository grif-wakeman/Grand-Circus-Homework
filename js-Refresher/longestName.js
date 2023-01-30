const name1 = "a";
const name2 = "b";
const name3 = "c";





if (name1.length > name2.length && name1.length > name3.length ) {
    console.log(`${name1} is the longest name.`);
} else if (name2.length > name1.length && name2.length > name3.length) {
    console.log(`${name2} is the longest name.`);
} else if (name3.length > name1.length && name3.length > name2.length) {
    console.log(`${name3} is the longest name.`);
} else {
    '';
}

if (name1.length === name2.length && name1.length === name3.length) {
    console.log(`All of the names are the same length.`)
} else if (name1.length === name2.length) {
    console.log(`${name1} and ${name2} are the same length.`);
} else if (name1.length === name3.length) {
    console.log(`${name1} and ${name3} are the same length.`);
} else if (name2.length === name3.length) {
    console.log(`${name2} and ${name3} are the same length.`);
} else {
    '';
}






//https://docs.google.com/document/d/1mQlvenKOZbvBfRL2Q9VhC-bRX4WbDqm1nXgBg0XF69k/preview