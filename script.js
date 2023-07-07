function addNewWEField() {

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",5);
    newNode.setAttribute("placeholder", "Enter here");

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",5);
    newNode.setAttribute("placeholder", "Enter here");

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

function addNewPField() {

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("pField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",5);
    newNode.setAttribute("placeholder", "Enter here");

    let pOb=document.getElementById("p");
    let pAddButtonOb=document.getElementById("pAddButton");

    pOb.insertBefore(newNode, pAddButtonOb);
}

// generating cv
function generateCV() {
    // name in first col
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");

    nameT1.innerHTML = nameField;

    // name in second col
    let nameT2 = document.getElementById("nameT2");
    nameT2.innerHTML = nameField;

    // contact
    let contactField = document.getElementById("contactField").value;
    let contactT = document.getElementById("contactT");
    contactT.innerHTML = contactField;

    // address
    let addressField = document.getElementById("addressField").value;
    let addressT = document.getElementById("addressT");
    addressT.innerHTML = addressField;

    // fb
    let fbField = document.getElementById("fbField").value;
    let fbT = document.getElementById("fbT");
    fbT.href = fbField;

    // insta
    let instaField = document.getElementById("instaField").value;
    let instaT = document.getElementById("instaT");
    instaT.href = instaField;

    // linkedin
    let linkedField = document.getElementById("LinkedField").value;
    let linkedT = document.getElementById("LinkedT");
    linkedT.href = linkedField;

    // objective
    let objectiveField = document.getElementById("ObjectiveField").value;
    let objectiveT = document.getElementById("objectiveT");
    objectiveT.innerHTML = objectiveField;

    // workexp
    let wes = document.getElementsByClassName("weField");
    let str = "";

    for (let e of wes) {
        str += `<li>${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML = str;

    let aqs = document.getElementsByClassName("aqField");
    let str1 = "";

    for (let e of aqs) {
        str1 += `<li>${e.value}</li>`;
    }
    document.getElementById("aqT").innerHTML = str1;
    let ps = document.getElementsByClassName("pField");
    let str2 = "";

    for (let e of ps) {
        str2 += `<li>${e.value}</li>`;
    }
    document.getElementById("pT").innerHTML = str2;

    // setting image
    let file=document.getElementById("imgField").files[0];
    let reader=new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend=function (){
        document.getElementById("img-template").src=reader.result;
    };
    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
}
function printCV(){
    window.print();
}
