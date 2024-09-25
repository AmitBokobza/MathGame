const ex = document.getElementById("exArea");
let num1, num2, result;

// function to generate a equation and take it in a variable as eval
function generateNum() {
    const numberRange = document.getElementById("numberRange").value;
    const op = document.getElementById("operator").value;

    if (numberRange === "1-10") {
        num1 = Math.floor(Math.random() * 10 + 1);
        num2 = Math.floor(Math.random() * 10 + 1);
    }
    else if (numberRange === "1-100") {
        num1 = Math.floor(Math.random() * 100 + 1);
        num2 = Math.floor(Math.random() * 100 + 1);
    }
    else if (numberRange === "1-1000") {
        num1 = Math.floor(Math.random() * 1000 + 1);
        num2 = Math.floor(Math.random() * 1000 + 1);
    }

    const eq = `${num1} ${op} ${num2}`;
    ex.innerText = eq;
    result = eval(eq);
}

//takes the user answer and checks if it matches with the equation and adds to table
function exc1() {
    const userAns = Number(document.getElementById("ans").value);

    if(document.getElementById("tableBody").rows.length >= 3){
        document.getElementById("tableBody").deleteRow(0);
    }

    const newRow = document.createElement("tr");
    
    const cell1 = document.createElement("td");
    cell1.innerText = ex.innerText;
    newRow.appendChild(cell1);

    const cell2 = document.createElement("td");
    cell2.innerText = result;
    newRow.appendChild(cell2);

    const cell3 = document.createElement("td");
    cell3.innerText = userAns;
    newRow.appendChild(cell3);

    const cell4 = document.createElement("td");
    cell4.innerText = userAns === result ? "10" : "0";
    newRow.appendChild(cell4);
    
    document.getElementById("tableBody").appendChild(newRow);

    if (userAns === result){
        document.getElementById("rvw").innerText = `תשובה נכונה!`;
    } else {
        document.getElementById("rvw").innerText = `תשובה שגויה.`;
    }

    generateNum();
}
window.onload = generateNum;
