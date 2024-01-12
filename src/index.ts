document.title = "Calculator";

const calculatorButtons = document.querySelectorAll(".calculator-button") as NodeListOf<HTMLInputElement>;
const calculatorDisplay = document.querySelector(".display") as HTMLDivElement;

let calculatorContext: string = calculatorDisplay.textContent || "";

function changeCalculatorDisplay(context: string = ""): void {
    calculatorContext = context;
    calculatorDisplay.textContent = context;
}

function evaluateExpression(expression: string): number {
    return Function('"use strict";return (' + expression + ')')();
}

calculatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.value === "C") {
            changeCalculatorDisplay("");
        } else if (button.value === "=") {
            try {
                const result = evaluateExpression(calculatorContext);
                changeCalculatorDisplay(String(result));
                console.log(result);
            } catch (error) {
                changeCalculatorDisplay("Error");
            }
        } else {
            changeCalculatorDisplay(calculatorContext + button.value);
        }
    });
});
