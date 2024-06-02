document.getElementById("triangle-btn").addEventListener("click", () => {
  const triangleBaseInput = document.getElementById("triangle-base-input");
  const triangleBaseInputString = triangleBaseInput.value;

  const triangleBaseInputNumber = parseFloat(triangleBaseInputString);
  console.log(triangleBaseInputNumber);
  const triangleInputHeight = document.getElementById("triangle-height-input");
  const triangleInputHeightString = triangleInputHeight.value;
  const triangleInputHeightNumber = parseFloat(triangleInputHeightString);
  console.log(triangleInputHeightNumber);
  const triangleArea =
    0.5 * triangleBaseInputNumber * triangleInputHeightNumber;
  const previousTriangleAreaText = document.getElementById("triangle-area");
  const previousTriangleAreaString = previousTriangleAreaText.innerText;
  const previousTriangleAreaNumber = parseFloat(previousTriangleAreaString);
  const newTriangleArea = previousTriangleAreaNumber + triangleArea;
  previousTriangleAreaText.innerText = newTriangleArea;
});

// rectangle
document.getElementById("rectangle-btn").addEventListener("click", () => {
  const rectangleWidthInput = document.getElementById("rectangle-width-input");
  const rectangleWidthInputString = rectangleWidthInput.value;

  const rectangleWidthInputNumber = parseFloat(rectangleWidthInputString);
  console.log(rectangleWidthInputNumber);
  const rectangleInputLength = document.getElementById(
    "rectangle-length-input"
  );
  const rectangleInputLengthString = rectangleInputLength.value;
  const rectangleInputLengthNumber = parseFloat(rectangleInputLengthString);
  console.log(rectangleInputLengthNumber);
  const rectangleArea = rectangleWidthInputNumber * rectangleInputLengthNumber;
  const previousTriangleAreaText = document.getElementById("rectangle-area");
  const previousTriangleAreaString = previousTriangleAreaText.innerText;
  const previousTriangleAreaNumber = parseFloat(previousTriangleAreaString);
  const newTriangleArea = previousTriangleAreaNumber + rectangleArea;
  previousTriangleAreaText.innerText = newTriangleArea;
});
