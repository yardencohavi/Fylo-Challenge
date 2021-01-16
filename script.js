var leftStorage = 10,
    usedStorage = 0;
var precentage = 0;

var domLeft = document.getElementById("left");
var domUsed = document.getElementById("use");
var domBar = document.getElementById("bar");

var inputFile = document.getElementById("file");
var fileList = {};
var sizeFile = 0,
    nameFile;


inputFile.onchange = function () {

    sizeFile = (this.files[0].size / 1024 / 1024); //size in MB
    nameFile = this.files[0].name;

    if (sizeFile > 1.5) {
        alert("File is too big!");
        this.value = "";
    } else {
        if (leftStorage > sizeFile) {
            fileList[nameFile] = sizeFile.toFixed(1);
            usedStorage += sizeFile;
            leftStorage -= sizeFile;
            precentage += ((sizeFile / 10) * 100);
        } else
            alert("There is no enough space!");
    };

    domLeft.textContent = leftStorage.toFixed(1);
    domUsed.textContent = usedStorage.toFixed(1);
    domBar.style.width = precentage.toFixed(1) + "%";

    var rows = "";
    rows += "<tr><td>" + nameFile + "</td><td>" + sizeFile.toFixed(1) +"</td></tr>";
    $(rows).appendTo("#list tbody");
};


