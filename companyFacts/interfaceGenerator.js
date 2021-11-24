const path = require('path');
const fs = require("fs");

// TODO: MEJORAR ALGORITMO PARA QUE CREE UNA UNICA INTERFAZ PARA TODAS LAS EMPRESAS MERGEANDO
// LAS INTERFACES UNICAS
generateInterface();

function generateInterface() {
  const fileNames = [
    "CIK0000001750.json",
    "CIK0000001800.json",
    "CIK0000001961.json",
    "CIK0000002034.json",
    "CIK0000002098.json",
    "CIK0000002178.json",
    "CIK0000002186.json",
    "CIK0000002488.json",
    "CIK0000002491.json",
    "CIK0000002809.json",
    "CIK0000002969.json",
  ];

  for (let i = 0; i < fileNames.length; i++) {
    const parsedElement = parseFile(fileNames[i]);
    let interface = {};
    createInterface(parsedElement, interface);
    writeParsedFile(interface, fileNames[i]);
  }
}

function createInterface(parsedElement, interface) {
  for (let property in parsedElement) {
    const propertyType = Object.prototype.toString.call(
      parsedElement[property]
    );
    if (propertyType == "[object Object]") {
      interface[property] = {};
      createInterface(parsedElement[property], interface[property]);
    } else if (propertyType == "[object String]")
      interface[property] = "String";
    else if (propertyType == "[object Number]")
      interface[property] = "mongoose.Schema.Types.Mixed";
    else if (propertyType == "[object Null]")
      interface[property] = "mongoose.Schema.Types.Mixed";
    else if (propertyType == "[object Array]") {
      interface[property] = [];
      createArrayInterface(parsedElement[property], interface[property]);
    }
  }
}


function createArrayInterface(parsedArray, interface) {
  for (let i = 0; i < parsedArray.length; i++) {
    const propertyType = Object.prototype.toString.call(parsedArray[i]);
    if (propertyType == "[object Object]") {
      interface.push({});
      createInterface(parsedArray[i], interface[interface.length - 1]);
    } else if (propertyType == "[object String]")
      interface[property] = "String";
    else if (propertyType == "[object Number]")
      interface[property] = "mongoose.Schema.Types.Mixed";
    else if (propertyType == "[object Null]")
      interface[property] = "mongoose.Schema.Types.Mixed";
    else if (propertyType == "[object Array]") {
      interface[property] = [];
      createArrayInterface(parsedArray[i], interface[property]);
    }
  }
  const mergedObjects = mergeArrayObjects(interface);
  interface.splice(0,interface.length)
  interface.push(mergedObjects);
}

function mergeArrayObjects(interface) {
  let mergedObject = {};
  for (let i = 0; i < interface.length; i++) {
    mergedObject = {...mergedObject, ...interface[i]};
  }
  return mergedObject;
}

function parseFile(fileName) {
  const fileString = fs.readFileSync(
    path.join(__dirname, `/${fileName}`),
    "utf8"
  );
  return JSON.parse(fileString);
}

function writeParsedFile(parsedElement, fileName) {
  fs.writeFileSync(
    `./interfaces/interface_${fileName}`,
    JSON.stringify(parsedElement, null, 2)
  );
}
