const { add, sub, mul, div } = require("./lib/math");
const readline = require("readline");
const fs=require("fs")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("enter num1=> ", (num1) => {
  rl.question("enter num2=> ", (num2) => {
    rl.question("Choose operation=> ", (operation) => {
      let res;
      const input1 = parseFloat(num1);
      const input2 = parseFloat(num2);
      switch (operation.toLowerCase()) {
        case "add":
          res = add(input1, input2);

          break;

        case "sub":
          res = sub(input1, input2);

          break;

        case "mul":
          res = mul(input1, input2);

          break;

        case "div":
          res = div(input1, input2).toFixed(2);

          break;
        default:
          console.log("Invalid Operation");

          rl.close();
          return;
      }
      console.log(`Result: ${res}`);
      const data= `${num1}, ${num2} , ${operation}:${res}\n`;
      fs.appendFile("result.csv",data, (err)=>{
        if(err)
        {
            console.log("Error");
            
        }
        else{
            console.log("Added successfully");
            
        }

        rl.close();
      })
    });
  });
});