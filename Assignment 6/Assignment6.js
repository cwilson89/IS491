function CreateCustomer()
{
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/CreateCustomer";
    
    //Collect Customer data from web page
    var customerid = document.getElementById("custid").value;
    var customername = document.getElementById("custname").value;
    var customercity = document.getElementById("custcity").value;
    
    //Create the parameter string
    var newcustomer = '{"CustomerID":"' + customerid + '","CompanyName":"' + customername +'"}';
    
    //Checking for AJAx operation return
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var result = JSON.parse(objRequest.responseText);
            OperationResult(result);
        }
    }

    //Start AJAX request
    objRequest.open("POST", url, true);
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest.send(newcustomer);

}

function OperationResult(output)
{        
    if (output.WasSuccessful == 1)
    {
        document.getElementById("result").innerHTML = "The operation was successful!"
    }
    else
    {
        document.getElementById("result").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
    }
}

function GetCustomer()
{
    window.alert.toString("Let's go!");
    var custid = document.getElementById("getCust3input").value;
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
    url += custid;
    window.alert.toString(url);
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest ==200)
        {
            var output = JSON.parse(objRequest.responseText);
            GenerateOutput(output);
        }
    }
    
    objRequest.open("GET",url,true);
    objRequest.send();
}

function Hey()
{
    window.alert.toString("Let's go!");
}

function GenerateOutput(result)
{
    var count = 0;
    var displaytext = "";
    
    for (count = 0; count < result.GetOrdersForCustomerResult.length; count++)
    {
        displaytext += result.GetOrdersForCustomerResult[count].OrderDate + "," + result.GetOrdersForCustomerResult[count].OrderID + "<br>";
    }
    window.alert.toString(displaytext);
    document.getElementById("orderdisplay3").innerHTML = displaytext;
}