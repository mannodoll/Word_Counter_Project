import inquirer from "inquirer";

const userAns:{
   sentence :string
}= await inquirer.prompt(
    [
        {
            name : "sentence",
            type : "input",
            message : "Enter Your Sentence To Count The Word:"
        }
    ]
)
const Words = userAns.sentence.trim().split(" ")
console.log(Words);

console.log(`your sentence word count is ${Words.length}`);
