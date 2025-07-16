import { add, sub, mul, div } from "../lib/math.js";
import readline from "readline/promises";
import fs from "fs/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const main = async () => {
  try {
    const num1 = await rl.question("Enter num1 => ");
    const num2 = await rl.question("Enter num2 => ");
    const operation = await rl.question("Choose operation (add/sub/mul/div) => ");

    const input1 = parseFloat(num1);
    const input2 = parseFloat(num2);

    let result;

    switch (operation.toLowerCase()) {
      case "add":
        result = add(input1, input2);
        break;
      case "sub":
        result = sub(input1, input2);
        break;
      case "mul":
        result = mul(input1, input2);
        break;
      case "div":
        result = div(input1, input2).toFixed(2);
        break;
      default:
        console.log("❌ Invalid Operation");
        rl.close();
        return;
    }

    console.log(`✅ Result: ${result}`);

    const data = `${input1}, ${input2}, ${operation}: ${result}\n`;
    await fs.appendFile("result.csv", data);
    console.log("✅ Added to result.csv successfully");
  } catch (err) {
    console.error("❌ Error:", err.message);
  } finally {
    rl.close();
  }
};

main();
