function CreateCustomer()
{
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/CreateCustomer";
    var customerid = document.getElementById("custid").value;
    var customername = document.getElementById("custname").value;
    var customercity = document.getElementById("custcity").value;
    var newcustomer = '{"CustomerID":"' + customerid + '","CompanyName":"' + customername +'"}';    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var result = JSON.parse(objRequest.responseText);
            CreateResult(result);
        }
    }
    objRequest.open("POST", url, true);
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest.send(newcustomer);
}

function UpdateOrder()
{
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/updateOrderAddress";
    var ordernum = document.getElementById("ordernumber").value;
    var customername = document.getElementById("shipname").value;
    var customeraddress = document.getElementById("shipaddress").value;
    var customercity = document.getElementById("shipcity").value;
    var customerzip = document.getElementById("zipcode").value;
    var updaterecord = '{"OrderID":' + ordernum + '","ShipAddress":"' + customeraddress + '","ShipCity":"' + customercity + '","ShipName":"' + customername + '","ShipPostcode":"' + customerzip + '"}';
    objRequest.onreadystatechange = function()
    {
        if (objRequest.status == 200)
        {
            var result = JSON.parse(objRequest.responseText);
            UpdateResult(result);
        }
    }    
    objRequest.open("POST", url, true);
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest.send(updaterecord);
}

function DeleteCustomer()
{
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/deleteCustomer/";
    var customerid = document.getElementById("custiddel").value;
    url += customerid;
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var result = JSON.parse(objRequest.responseText);
            DeleteResult(result);
        }
    }
    objRequest.open("GET", url, true);
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest.send();
}

function CreateResult(output)
{        
    if (output.WasSuccessful == 1)
    {
        alert("The operation was successful!");
    }
    else
    {
        alert("The operation was not successful!" + "-" + output.Exception);
    }
}

function DeleteResult(output)
{        
    if (output.DeleteCustomerResult.WasSuccessful == 1)
    {
        alert("The operation was successful!");
    }
    else
    {
        alert("The operation was not successful!" + "-" + output.DeleteCustomerResult.Exception);
    }
}

function UpdateResult(output)
{        
    if (output.WasSuccessful == -1)
    {
        alert("Operation failed! Unexpected Error!");
    }
    if (output.WasSuccessful == -2)
    {
        alert("Operation failed! Invalid input data!");
    }
    if (output.WasSuccessful == -3)
    {
        alert("Operation failed! Order ID not found!");
    }
    if (output.WasSuccessful == 0)
    {
        alert("The operation was successful!");
    }
}
