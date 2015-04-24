function GetCategories()
{
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getAllCategories";
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
            GenerateCategoriesOutput(output);
        }
    }
    
    objRequest.open("GET",url,true);
    objRequest.send();
}

function UpdateCategories()
{
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getAllCategories";
    
    var category = '{"CID":"' + categoryid + '","CDescription":"' + categorydesc + '"}';
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState ==4 && objRequest.status == 200)
        {
            var result = JSON.parse(objRequest.responseText);
            GenerateCategoriesOutput(result);
        }
    }
    
    objRequest.open("POST",url,true)
    objRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    objRequest.send(category);
}

function GenerateUpdateOutput()
{
    var count = 0;
    var displaytest = "";
}

function GenerateCategoriesOutput(result)
{
    var count = 0;
    var displaytext = "";
    
    for (count = 0; count <result.GetAllCategoriesResult.length; count++)
    {
        
    }
}