import { add, sub, mul, div } from "../../src/lib/math.js";
import readline from "readline/promises";
import fs from "fs/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getNumberInput = async (prompt) => {
  let valid = false;
  let number;

  while (!valid) {
    const input = await rl.question(prompt);
    number = parseFloat(input);

    if (!isNaN(number)) {
      valid = true;
    } else {
      console.log("❌ Please enter a valid number.");
    }
  }

  return number;
};

const main = async () => {
  try {
    const num1 = await getNumberInput("Enter num1 => ");
    const num2 = await getNumberInput("Enter num2 => ");
    const operation = await rl.question("Choose operation (add/sub/mul/div) => ");

    let result;

    switch (operation.toLowerCase()) {
      case "add":
        result = add(num1, num2);
        break;
      case "sub":
        result = sub(num1, num2);
        break;
      case "mul":
        result = mul(num1, num2);
        break;
      case "div":
        if (num2 === 0) {
          console.log("❌ Division by zero is not allowed.");
          rl.close();
          return;
        }
        result = div(num1, num2).toFixed(2);
        break;
      default:
        console.log("❌ Invalid Operation");
        rl.close();
        return;
    }

    console.log(`✅ Result: ${result}`);

    const data = `${num1}, ${num2}, ${operation}: ${result}\n`;
    await fs.appendFile("result.csv", data);
    console.log("✅ Added to result.csv successfully");
  } catch (err) {
    console.error("❌ Error:", err.message);
  } finally {
    rl.close();
  }
};

main();
