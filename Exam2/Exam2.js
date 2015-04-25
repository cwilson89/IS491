function DisplayCategories()
{
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getAllCategories";
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var result = JSON.parse(objRequest.responseText);
            var table = document.getElementById("catdisplay");
            for (count = 1; count <result.GetAllCategoriesResult.length; count++)
            {
                
                var cid = result.GetAllCategoriesResult[count].CID;
                var name = result.GetAllCategoriesResult[count].CName;
                var desc = result.GetAllCategoriesResult[count].CDescription;
                var row = table.insertRow(count);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                cell1.innerHTML = cid;
                cell2.innerHTML = name;
                cell3.innerHTML = desc;
                GenerateCategoriesOutput(output);
            }
        }
    }
    
    objRequest.open("GET",url,true);
    objRequest.send();
}

function UpdateCategories()
{
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/updateCatDescription";
    var cid = document.getElementById("cid3");
    
}

function CreateCategories() 
{
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getAllCategories";
    
    var CID = document.getElementById("cid3");
    var category = document.getElementById("category3");
    var description = document.getElementById("description3");
    
    var newcategory = '{"CName":"' + category + '", "CDescription":"' + description +'"}';
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var result = JSON.parse(objRequest.responseText);
            OperationResult(result);
        }
    }
    
    objRequest.open("GET",url,true);
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest.send(newcategory);
}

function DeleteCategory()
{
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/deleteCategory";    
    var CID = document.getElementById("cid4");
    var url=+CID;
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var result = JSON.parse(objRequest.responseText);
            GenerateDeleteResult(result);
        }
    }
    
    objRequest.open("GET",url,true);
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest.send();
}

function View()
{
    document.getElementById("sec1").style.visibility = visible;
}

function About()
{
    
}

function UpdateCategory()
{
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getAllCategories";
    
    var category = '{"CID":"' + categoryid + '","CDescription":"' + categorydesc + '"}';
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var result = JSON.parse(objRequest.responseText);
            GenerateUpdateResult(result);
        }
    }
    
    objRequest.open("POST",url,true)
    objRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    objRequest.send(category);
}

function GenerateUpdateResult(output)
{
    if (output.WasSuccessful == 1)
    {
        alert("Operation completed successfully.");
    }
    if (output.WasSuccessful == 0)
    {
        alert("Operation failed with an unspecified error.");
    }
    if (output.WasSuccessful == -2)
    {
        alert("Operation failed because the data string supplied could not be deserialized into the service object.");
    }
    if (output.WasSuccessful == -3)
    {
        alert("Operation failed because a record with the supplied Order ID could not be found.");
    }
}

function GenerateCategoriesOutput(result)
{
    
}

function GenerateCreateResult(output)
{
    if (output.WasSuccessful == 1)
    {
        document.getElementById("result").innerHTML = "The operation was successful!";
    }
    if (output.WasSuccessful == 0)
    {
        document.getElementById("result").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
    }
}

function GenerateDeleteResult(output)
{
    if (output.WasSuccessful == 1)
    {
        document.getElementById("result").innerHTML = "The operation was successful!";
    }
    if (output.WasSuccessful == 0)
    {
        document.getElementById("result").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
    }
}