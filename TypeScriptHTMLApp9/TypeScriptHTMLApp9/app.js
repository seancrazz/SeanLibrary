////////////////// MAIN SECTION /////////////////////////////////////////////
var shapeLength = Number(prompt("What is the Limp length"));
triangleNumbers(shapeLength);
///////////////////////////// General ///////////////////////////////////////////
function writeEmptyChar() {
    document.write("<font color=white>&nbsp&nbsp*&nbsp&nbsp</font>");
}
function writeFullChar() {
    document.write("&nbsp&nbsp*&nbsp&nbsp");
}
////////////////////////////////////////////////////////////////////////////////////// Squre Print //////////////////////////////////////////////////////////////////////
/////// Square Ascending Numbers
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
/////////////////////////////////////////// Triangle //////////////////////////////////////////////////////////////
//////// Triangle Asterisk Full 
function triangle1(sideLength) {
    var height = sideLength;
    var width = 1;
    for (var rownum = 1; rownum <= height; rownum++) {
        for (var column = 1; column <= width; column++) {
            //if (rownum < rrSideLenght && rownum > 1 && colnum < rrSideLenght && colnum > 1) {
            //    document.write(`&nbsp`);
            //}
            //else {
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
//# sourceMappingURL=app.js.map