function ImportFile() {  
    var excelUrl = "./test.xlsx";  //CHANGE THIS SHIT HERE TO WHAT THE DOWNLOADED FILE NAME IS

    var oReq = new XMLHttpRequest();  
    oReq.open('get', excelUrl, true);  
    oReq.responseType = 'blob';  
    oReq.onload = function () {  
        var blob = oReq.response;  
        excelIO.open(blob, LoadSpread, function (message) {  
            console.log(message);  
        });  
    };  
    oReq.send(null);  
}  
function LoadSpread(json) {  
    jsonData = json;  
    workbook.fromJSON(json);  

    workbook.setActiveSheet("Revenues (Sales)");  //CHANGE THIS SHIT HERE TO WHAT THE SHEET NAME IS

}  