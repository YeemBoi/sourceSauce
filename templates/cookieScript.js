function setCookie()
{
    if (document.getElementsByName("lengthSort")[0].checked == false)
	document.cookie = "lengthSort=false";
    else
	document.cookie = "lengthSort=true";
}

function readCookie()
{
    if (!document.cookie.includes("false"))
	document.getElementsByName("lengthSort")[0].checked = true;
}
