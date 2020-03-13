const dataURL = "https://api.myjson.com/bins/jcmhn";
const fields = [
  "var1",
  "var2",
  "var3",
  "var4",
  "var5",
  "var6",
  "speach"
]

function getValues() {
  let values = {};
  fields.forEach(function(field) {
    values[field] = $("input[name=" + field + "]")[0].value;
  });
  return values;
}

function handleButton(event) {
  $.getJSON(dataURL, handleData);
  event.preventDefault();
}

function handleData(data) {
  let resultText = "";
  let values = getValues();

  data["text"].forEach(function(line) {
    for (key in values) {
      line = line.replace("{" + key + "}", values[key]);
    }
    resultText = resultText + line + "<br>";
  });

  $(".result").html(resultText);
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
