//////////////////// MAIN SECTION /////////////////////////////////////////////
///// Global Variables 
var shape;
var shapeSideLenght;
var shapeWidthLenght;
var shapeVersion;
//////////// FUNCTIONS CALL //////////////
if (mainFunctioninputs()) {
    drawThis();
}
/////////////// FUNCTIONS SECTION //////////////
function mainFunctioninputs() {
    shape = Number(prompt("Please Select Your Shape: \n 1. Square \n 2. Triangele \n 3. Rectangle"));
    if (shape != 1 && shape != 2 && shape != 3) {
        alert("You Didn't Chose The Correct Option - Goodbye");
        return false;
    }
    shapeSideLenght = Number(prompt("Please Enter Shape Side Lenght "));
    if (parseInt(shapeSideLenght.toString()) != shapeSideLenght) {
        alert("You Didn't Insert A Valid Parameter - Goodbye! ");
        return false;
    }
    if (shape == 3) {
        shapeWidthLenght = Number(prompt("Please Enter Shape Width Lenght "));
        if (parseInt(shapeWidthLenght.toString()) != shapeWidthLenght) {
            alert("YYou Didn't Insert A Valid Parameter - Goodbye!");
            return false;
        }
        1;
    }
    shapeVersion = Number(prompt("Please select the shape type you would like to recieve: \n 1. Shape Made Of Asterisks \n 2. Shape Made Of Ascending Numbers (Made of the Inseted Number) \n 3.Shape Made Of Descending Numbers (Made of the Inseted Number) \n 4.Shape Made Of Asterisks Frame."));
    if (shapeVersion != 1 && shapeVersion != 2 && shapeVersion != 3 && shapeVersion != 4) {
        alert("You Didn't Chose The Correct Option - Goodbye");
        return false;
    }
    return true;
}
function drawThis() {
    ////SQUARE
    if (shape == 1 && shapeVersion == 1) {
        squerPrint2(shapeSideLenght);
    }
    if (shape == 1 && shapeVersion == 2) {
        squerPrint(shapeSideLenght);
    }
    if (shape == 1 && shapeVersion == 3) {
        squer1Print(shapeSideLenght);
    }
    if (shape == 1 && shapeVersion == 4) {
        squerPrint3(shapeSideLenght);
    }
    /// TRIANGLE 
    if (shape == 2 && shapeVersion == 1) {
        triangle1(shapeSideLenght);
    }
    if (shape == 2 && shapeVersion == 2) {
        triangleNumbers(shapeSideLenght);
    }
    if (shape == 2 && shapeVersion == 3) {
        triangleNumbersReverseOrder(shapeSideLenght);
    }
    if (shape == 2 && shapeVersion == 4) {
        triangle1Contour(shapeSideLenght);
    }
    /// RETRIANGLE 
    if (shape == 3 && shapeVersion == 1) {
        asteriskRectangle(shapeSideLenght, shapeWidthLenght);
    }
    if (shape == 3 && shapeVersion == 2) {
        rectangleNumber(shapeSideLenght, shapeWidthLenght);
    }
    if (shape == 3 && shapeVersion == 3) {
        rectangleNumberRevers(shapeSideLenght, shapeWidthLenght);
    }
    if (shape == 3 && shapeVersion == 4) {
        asteriskRectangleFrame(shapeSideLenght, shapeWidthLenght);
    }
}
///////////////////////////// FONT FUNCTIONS ///////////////////////////////////////////
function writeEmptyChar() {
    document.write("<font color=white>&nbsp&nbsp*&nbsp&nbsp</font>");
}
function writeFullChar() {
    document.write("&nbsp&nbsp*&nbsp&nbsp");
}
////////////////////////////////////////////////////////////////////////////////////// DRAWER FUNCTIONS //////////////////////////////////////////////////////////////////////
//////////////SQUARE////////////////////////////////////////////////SQUARE///////////////////////////////SQUARE/////////////////////////////////////////SQUARE/////////////////////////////////////////////
///////// Square Ascending Numbers
function squerPrint(side) {
    for (var outerIndex = 1; outerIndex <= side; outerIndex++) {
        for (var innerIndex = 1; innerIndex <= side; innerIndex++) {
            document.write(innerIndex + " ");
        }
        document.write("<br/>");
    }
}
///// Square Descending Numbers
function squer1Print(side1) {
    for (var outerIndex1 = 1; outerIndex1 <= side1; outerIndex1++) {
        for (var innerIndex1 = side1; innerIndex1 >= 1; innerIndex1--) {
            document.write(innerIndex1 + " ");
        }
        document.write("<br/>");
    }
}
////  Asterisk Square
function squerPrint2(side3) {
    for (var outerIndex = 1; outerIndex <= side3; outerIndex++) {
        for (var innerIndex2 = 1; innerIndex2 <= side3; innerIndex2++) {
            writeFullChar();
        }
        document.write("<br/>");
    }
}
///// Asterisk Square Frame
function squerPrint3(rrSideLenght) {
    for (var rownum = 1; rownum <= rrSideLenght; rownum++) {
        for (var colnum = 1; colnum <= rrSideLenght; colnum++) {
            if (rownum < rrSideLenght && rownum > 1 && colnum < rrSideLenght && colnum > 1) {
                //document.write(`&nbsp`);
                writeEmptyChar();
            }
            else {
                writeFullChar();
            }
        }
        document.write("<br/>");
    }
}
/////////////////////////////Triangle////////////////////////////////////////Triangle//////////////////////////////////// Triangle /////////////////////////////////////////////Triangle/////////////////
//////// Triangle Asterisk Full 
function triangle1(sideLength) {
    var height = sideLength;
    var width = 1;
    for (var rownum = 1; rownum <= height; rownum++) {
        for (var column = 1; column <= width; column++) {
            writeFullChar();
        }
        width++;
        document.write("<br/> ");
    }
}
///// Triangle Asterisk Frame
function triangle1Contour(sideLength) {
    var height = sideLength;
    var width = 1;
    for (var rownum = 1; rownum <= height; rownum++) {
        for (var column = 1; column <= width; column++) {
            if (rownum == 1 || rownum == height || column == 1 || column == width) {
                writeFullChar();
            }
            else {
                writeEmptyChar();
            }
        }
        width++;
        document.write("<br/> ");
    }
}
/////// Triangle Number Acsending
function triangleNumbers(sideLength) {
    var height = sideLength;
    var width = 1;
    for (var rownum = 1; rownum <= height; rownum++) {
        for (var column = 1; column <= width; column++) {
            document.write("" + column);
        }
        width++;
        document.write("<br/> ");
    }
}
/////Triangle Number Decsending
function triangleNumbersReverseOrder(sideLength) {
    var height = sideLength;
    var width = 1;
    for (var rownum = 1; rownum <= height; rownum++) {
        var symbolNum = sideLength;
        for (var column = 1; column <= width; column++) {
            document.write("" + symbolNum);
            symbolNum--;
        }
        width++;
        document.write("<br/> ");
    }
}
/////////////////////////////////Rectangle///////////////////////// Rectangle //////////////////////////////////Rectangle///////////////////////////////////Rectangle///////////////////////////////////////////
function asteriskRectangleFrame(height, width) {
    for (var rownum = 0; rownum < height; rownum++) {
        for (var colnum = 0; colnum < width; colnum++) {
            if (colnum == 0 || colnum == width - 1 || rownum == 0 || rownum == height - 1) {
                writeFullChar();
            }
            else {
                writeEmptyChar();
            }
        }
        document.write("<br/>");
    }
}
function asteriskRectangle(row, column) {
    for (var outerIndex = 1; outerIndex <= row; outerIndex++) {
        for (var innerIndex = 1; innerIndex <= column; innerIndex++) {
            writeFullChar();
        }
        document.write("<br/>");
    }
}
function rectangleNumber(row, column) {
    for (var outerIndex = 1; outerIndex <= row; outerIndex++) {
        for (var innerIndex = 1; innerIndex <= column; innerIndex++) {
            document.write("" + innerIndex);
        }
        document.write("<br/>");
    }
}
function rectangleNumberRevers(row, column) {
    for (var outerIndex = 1; outerIndex <= row; outerIndex++) {
        for (var innerIndex = column; innerIndex >= 1; innerIndex--) {
            document.write(innerIndex + " ");
        }
        document.write("<br/>");
    }
}
//# sourceMappingURL=app.js.map