// triangle calculation
document.getElementById("triangle-btn").addEventListener("click", () => {
  const triangleBaseInput = getInputField("triangle-base-input");

  const triangleInputHeight = getInputField("triangle-height-input");

  const triangleArea = 0.5 * triangleBaseInput * triangleInputHeight;
  setTextField("triangle-area", triangleArea);
  calculationAreaEntry("triangle", triangleArea);
});

// rectangle calculation
document.getElementById("rectangle-btn").addEventListener("click", () => {
  const rectangleWidthInput = getInputField("rectangle-width-input");

  const rectangleInputLength = getInputField("rectangle-length-input");

  const rectangleArea = rectangleWidthInput * rectangleInputLength;
  setTextField("rectangle-area", rectangleArea);
  calculationAreaEntry("rectangle", rectangleArea);
});

// parallelogram calculation

document.getElementById("parallelogram-btn").addEventListener("click", () => {
  const parallelogramBaseInput = getInputField("parallelogram-base-input");

  const parallelogramHeightInput = getInputField("parallelogram-height-input");
  const newParallelogramArea =
    parallelogramBaseInput * parallelogramHeightInput;

  setTextField("parallelogram-area", newParallelogramArea);
  calculationAreaEntry("parallelogram", newParallelogramArea);
});

// ellipse calculation
const ellipseCalculation = () => {
  const ellipseMajor = getInputField("ellipse-major-input");
  const ellipseMinor = getInputField("ellipse-minor-input");
  const ellipseArea = 3.1416 * ellipseMajor * ellipseMinor;
  const ellipseToDecimal = ellipseArea.toFixed(2);
  setTextField("ellipse-area", ellipseToDecimal);
  calculationAreaEntry("Ellipse", ellipseArea);
};

// calculation functionality
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

  if (isNaN(area)) {
    return;
  }
  previousFieldText.innerText = area;

  return previousFieldText;
};

// calculation area entry

const calculationAreaEntry = (areaType, area) => {
  const areaCalculationContainer = document.getElementById("area-calculation");
  const count = areaCalculationContainer.childElementCount;
  const p = document.createElement("p");
  p.classList.add("my-2");

  p.innerHTML = ` ${
    count + 1
  }. ${areaType} ${area} <span>cm</spam><sup>2</sup> <button class="btn btn-secondary w-16 btn-sm text-black">converted</button>`;
  areaCalculationContainer.appendChild(p);
};
