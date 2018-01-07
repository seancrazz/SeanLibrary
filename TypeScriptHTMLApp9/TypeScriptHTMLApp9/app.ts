





////////////////// MAIN SECTION /////////////////////////////////////////////

var shapeLength: number = Number(prompt("What is the Limp length"));

triangleNumbers(shapeLength);

///////////////////////////// General ///////////////////////////////////////////

function writeEmptyChar(): void {
    document.write(`<font color=white>&nbsp&nbsp*&nbsp&nbsp</font>`);
}


function writeFullChar(): void {
    document.write(`&nbsp&nbsp*&nbsp&nbsp`);
}

////////////////////////////////////////////////////////////////////////////////////// Squre Print //////////////////////////////////////////////////////////////////////

/////// Square Ascending Numbers
function squerPrint(side: number): void {

    for (let outerIndex: number = 1; outerIndex <= side; outerIndex++) {
        for (let innerIndex: number = 1; innerIndex <= side; innerIndex++) {

            document.write(`${innerIndex} `);
        }

        document.write("<br/>");
    }
}


///// Square Descending Numbers

function squer1Print(side1: number): void {

    for (let outerIndex1: number = 1; outerIndex1 <= side1; outerIndex1++) {
        for (let innerIndex1: number = side1; innerIndex1 >= 1; innerIndex1--) {

            document.write(`${innerIndex1} `);
        }

        document.write("<br/>");
    }

}

////  Asterisk Square

function squerPrint2(side3: number): void {

    for (let outerIndex: number = 1; outerIndex <= side3; outerIndex++) {
        for (let innerIndex2: number = 1; innerIndex2 <= side3; innerIndex2++) {

            writeFullChar();
        }

        document.write("<br/>");
    }
}




///// Asterisk Square Frame


function squerPrint3(rrSideLenght: number): void {

    for (let rownum: number = 1; rownum <= rrSideLenght; rownum++) {
        for (let colnum: number = 1; colnum <= rrSideLenght; colnum++) {
            if (rownum < rrSideLenght && rownum > 1 && colnum < rrSideLenght && colnum > 1) {
                //document.write(`&nbsp`);
                writeEmptyChar();
            }
            else {
                writeFullChar();
            }
        }
        document.write(`<br/>`);
    }

}





/////////////////////////////////////////// Triangle //////////////////////////////////////////////////////////////



//////// Triangle Asterisk Full 

function triangle1(sideLength: number): void {

    let height: number = sideLength;
    let width: number = 1;
    for (let rownum: number = 1; rownum <= height; rownum++) {
        for (let column: number = 1; column <= width; column++) {
            //if (rownum < rrSideLenght && rownum > 1 && colnum < rrSideLenght && colnum > 1) {
            //    document.write(`&nbsp`);
            //}
            //else {
            writeFullChar();
       
        }
        width++;
        document.write(`<br/> `);
    }

}




///// Triangle Asterisk Frame

function triangle1Contour(sideLength: number): void {

    let height: number = sideLength;
    let width: number = 1;



    for (let rownum: number = 1; rownum <= height; rownum++) {
        for (let column: number = 1; column <= width; column++) {
            if (rownum == 1 || rownum == height || column == 1 || column == width) {
                writeFullChar();
            }
            else {
                writeEmptyChar();
            }
        }
        width++;
        document.write(`<br/> `);
    }

}

/////// Triangle Number Acsending

function triangleNumbers(sideLength: number): void {

    let height: number = sideLength;
    let width: number = 1;

    for (let rownum: number = 1; rownum <= height; rownum++) {
        for (let column: number = 1; column <= width; column++) {

            document.write(`${column}`);
        }
        width++;
        document.write(`<br/> `);
    }
}

/////Triangle Number Decsending

function triangleNumbersReverseOrder(sideLength: number): void {

    let height: number = sideLength;
    let width: number = 1;

    for (let rownum: number = 1; rownum <= height; rownum++) {
        let symbolNum: number = sideLength;
        for (let column: number = 1; column <= width; column++) {
        
            document.write(`${symbolNum}`);
            symbolNum--;
        }
        width++;
        document.write(`<br/> `);
    }

}