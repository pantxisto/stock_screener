const path = require("path");
const fs = require("fs");

// TODO: AUMENTAR BUFFER PARA GESTIONAR 16000 JSON
generateInterface();

function generateInterface() {
  const fileNames = getFileNames();
  let finalInterface = {};
  for (let i = 0; i < fileNames.length; i++) {
    const parsedElement = parseFile(fileNames[i]);
    let interface = {};
    createFileInterface(parsedElement, interface);
    createFinalInterface(interface, finalInterface);
  }
  writeParsedFile(finalInterface, "secInterface.json");
}

/******************** NORMAL *********************** */
function createFileInterface(parsedElement, interface) {
  for (let property in parsedElement) {
    const propertyType = Object.prototype.toString.call(
      parsedElement[property]
    );
    if (propertyType == "[object Object]") {
      interface[property] = {};
      createFileInterface(parsedElement[property], interface[property]);
    } else if (propertyType == "[object String]")
      interface[property] = "String";
    else if (propertyType == "[object Number]")
      interface[property] = "mongoose.Schema.Types.Mixed";
    else if (propertyType == "[object Null]")
      interface[property] = "mongoose.Schema.Types.Mixed";
    else if (propertyType == "[object Array]") {
      interface[property] = [];
      createArrayFileInterface(parsedElement[property], interface[property]);
    }
  }
}

function createArrayFileInterface(parsedArray, interface) {
  for (let i = 0; i < parsedArray.length; i++) {
    const propertyType = Object.prototype.toString.call(parsedArray[i]);
    if (propertyType == "[object Object]") {
      interface.push({});
      createFileInterface(parsedArray[i], interface[interface.length - 1]);
    } else if (propertyType == "[object String]") interface.push("String");
    else if (propertyType == "[object Number]")
      interface.push("mongoose.Schema.Types.Mixed");
    else if (propertyType == "[object Null]")
      interface.push("mongoose.Schema.Types.Mixed");
    else if (propertyType == "[object Array]") {
      interface.push([]);
      createArrayFileInterface(parsedArray[i], interface[interface.length - 1]);
    }
  }
  const mergedObjects = mergeArrayObjects(interface);
  interface.splice(0, interface.length);
  interface.push(mergedObjects);
}

/******************** FINAL *********************** */
function createFinalInterface(fileInterface, finalInterface) {
  for (let property in fileInterface) {
    const propertyType = Object.prototype.toString.call(
      fileInterface[property]
    );
    if (propertyType == "[object Object]") {
      if (finalInterface[property])
        fileInterface[property] = {
          ...finalInterface[property],
          ...fileInterface[property],
        };
      else finalInterface[property] = {};
      createFinalInterface(fileInterface[property], finalInterface[property]);
    } else if (propertyType == "[object String]") {
      if (!finalInterface[property]) finalInterface[property] = "String";
    } else if (propertyType == "[object Number]") {
      if (!finalInterface[property])
        finalInterface[property] = "mongoose.Schema.Types.Mixed";
    } else if (propertyType == "[object Null]") {
      if (!finalInterface[property])
        finalInterface[property] = "mongoose.Schema.Types.Mixed";
    } else if (propertyType == "[object Array]") {
      if (finalInterface[property])
        fileInterface[property] = [
          ...finalInterface[property],
          ...fileInterface[property],
        ];
      else finalInterface[property] = [];
      createArrayFinalInterface(
        fileInterface[property],
        finalInterface[property]
      );
    }
  }
}

function createArrayFinalInterface(fileArrayInterface, finalArrayInterface) {
  for (let i = 0; i < fileArrayInterface.length; i++) {
    const propertyType = Object.prototype.toString.call(fileArrayInterface[i]);
    if (propertyType == "[object Object]") {
      if (finalArrayInterface.length > 0) {
        fileArrayInterface[i] = {
          ...finalArrayInterface[0],
          ...fileArrayInterface[i],
        };
        finalArrayInterface.splice(0, finalArrayInterface.length);
      }
      finalArrayInterface.push({});
      createFileInterface(
        fileArrayInterface[i],
        finalArrayInterface[finalArrayInterface.length - 1]
      );
    } else if (propertyType == "[object String]") {
      finalArrayInterface.splice(0, finalArrayInterface.length);
      finalArrayInterface.push("String");
    } else if (propertyType == "[object Number]") {
      finalArrayInterface.splice(0, finalArrayInterface.length);
      finalArrayInterface.push("mongoose.Schema.Types.Mixed");
    } else if (propertyType == "[object Null]") {
      finalArrayInterface.splice(0, finalArrayInterface.length);
      finalArrayInterface.push("mongoose.Schema.Types.Mixed");
    } else if (propertyType == "[object Array]") {
      finalArrayInterface[property] = [];
      createArrayFileInterface(
        fileArrayInterface[i],
        finalArrayInterface[property]
      );
    }
  }
  const mergedObjects = mergeArrayObjects(finalArrayInterface);
  finalArrayInterface.splice(0, finalArrayInterface.length);
  finalArrayInterface.push(mergedObjects);
}

function mergeArrayObjects(interface) {
  let mergedObject = {};
  for (let i = 0; i < interface.length; i++) {
    mergedObject = { ...mergedObject, ...interface[i] };
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

function getFileNames() {
  let fileNames = [];
  fs.readdirSync("./").forEach((file) => {
    if (file.includes("CIK")) fileNames.push(file);
  });
  return fileNames;
}
