// triangle calculation
document.getElementById("triangle-btn").addEventListener("click", () => {
  const triangleBaseInput = getInputField("triangle-base-input");

  const triangleInputHeight = getInputField("triangle-height-input");

  const triangleArea = 0.5 * triangleBaseInput * triangleInputHeight;
  const previousTriangleAreaText = setTextField("triangle-area", triangleArea);
  // const previousTriangleAreaString = previousTriangleAreaText.innerText;
  // const previousTriangleAreaNumber = parseFloat(previousTriangleAreaString);
  // const newTriangleArea = previousTriangleAreaNumber + triangleArea;
  // previousTriangleAreaText.innerText = newTriangleArea;
});

// rectangle calculation
document.getElementById("rectangle-btn").addEventListener("click", () => {
  const rectangleWidthInput = getInputField("rectangle-width-input");

  const rectangleInputLength = getInputField("rectangle-length-input");

  const rectangleArea = rectangleWidthInput * rectangleInputLength;
  const previousTriangleAreaText = setTextField(
    "rectangle-area",
    rectangleArea
  );
});

// parallelogram calculation

document.getElementById("parallelogram-btn").addEventListener("click", () => {
  const parallelogramBaseInput = getInputField("parallelogram-base-input");

  const parallelogramHeightInput = getInputField("parallelogram-height-input");
  const newParallelogramArea =
    parallelogramBaseInput * parallelogramHeightInput;

  const previousParallelogramArea = setTextField(
    "parallelogram-area",
    newParallelogramArea
  );
});

// ellipse calculation
const ellipseCalculation = () => {
  const ellipseMajor = getInputField("ellipse-major-input");
  const ellipseMinor = getInputField("ellipse-minor-input");
  const ellipseArea = 3.1416 * ellipseMajor * ellipseMinor;
  const ellipseToDecimal = ellipseArea.toFixed(2);
  setTextField("ellipse-area", ellipseToDecimal);
};

const getInputField = (fieldId) => {
  const inputValueField = document.getElementById(fieldId);
  const inputValueString = inputValueField.value;
  if (inputValueField.value < 0 || inputValueField.value == "") {
    alert("provide number");

    return;
  }

  const inputValueNumber = parseFloat(inputValueString);
  inputValueField.value = "";
  return inputValueNumber;
};
const setTextField = (fieldId, area) => {
  const previousFieldText = document.getElementById(fieldId);
  // console.log(area);
  if (isNaN(area)) {
    return;
  }
  previousFieldText.innerText = area;

  return previousFieldText;
};
