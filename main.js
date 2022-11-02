$(document).ready(function() {
  console.log("DOM is loaded");  
//id_token=eyJraWQiOiJRM2pqVmRvNFBYV3U3dG9EKzd0MGpUUjA2XC80VjBXZDVjUXM0RXNDdTgxVT0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiak8xaDB1SGlaYzN4a1dVQmN3cFh5USIsInN1YiI6IjQwYTMzMWRjLWViNzItNDlkMy05ODU1LWIxMmU2ZTViMGUyNCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9jQ0lRMkJrbHkiLCJjb2duaXRvOnVzZXJuYW1lIjoiY2hyaXN0aW4iLCJhdWQiOiI2dHFoaWEyZGR2dmpjYmRpMTY1dmVlNm9scSIsImV2ZW50X2lkIjoiZWM4MjhmMDktMDFkZi00ODlkLWE2ZGYtY2E0NmY3ZTdjNGIwIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NjY5OTIxNjYsImV4cCI6MTY2Njk5NTc2NiwiaWF0IjoxNjY2OTkyMTY2LCJqdGkiOiJmMWNlYmYyOS0xNDk2LTQzYzMtOWIxMi05OTM5MzI3NGM1MDUiLCJlbWFpbCI6ImFsbHRyYW5zY2hyaXNAZ21haWwuY29tIn0.SaoFBh4IhklrNYLSZlEVQtQ1ErQKE-Bxd41L-h54ZCdJk0EsBfO67ONSxYBY38sUpzy0KYOOcEp0g1k5m0cGmCMkDmEeAibO0W5oQObcXOQCQe7mxO4gflWWFTwfwyNsEg7yvpUVhxDNGZ4Ji3fS4A0I1cbuTszMpds92oZfUq_HvL0YQYA75BuGIX7qcGB4pu7F767vf5mjBcqUXTN7rdE-INRy8s9xsnffWXK3Zu9Cx9Y-98n5bFj7zPr-AuxG_3-wYk_zvHTyvZixTnJrvarDc2g7XF6WviQEqMLThYHqReZ2y3bskDJ_YWM55_RY4U_Gq2q_sqBZfoEGt5Zb9Q
//access_token=eyJraWQiOiJCY2xJais1eDBqMXhPSmZRc3V2bnJYdnlLSlF5OTdxTERleFwvdVZLb3pGUT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI0MGEzMzFkYy1lYjcyLTQ5ZDMtOTg1NS1iMTJlNmU1YjBlMjQiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9jQ0lRMkJrbHkiLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI2dHFoaWEyZGR2dmpjYmRpMTY1dmVlNm9scSIsImV2ZW50X2lkIjoiZWM4MjhmMDktMDFkZi00ODlkLWE2ZGYtY2E0NmY3ZTdjNGIwIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJvcGVuaWQgZW1haWwiLCJhdXRoX3RpbWUiOjE2NjY5OTIxNjYsImV4cCI6MTY2Njk5NTc2NiwiaWF0IjoxNjY2OTkyMTY2LCJqdGkiOiI2ZjZhZTE1NC1hYzQzLTRlODEtYmZiNy05MzI1OWEwMmNlMzIiLCJ1c2VybmFtZSI6ImNocmlzdGluIn0.V9vku_3It9Fhcs3J7NpPPwNI5QXJV7fzGo8GvLt4uK6b5qrPJo4qgsQURu_6sVUhLRa6GAMtF_d-cMMq4ROas0pvxrMFd_CXMUhjN6vDRaJJ4rNPk688Y8Sbjix1NAg9eB4QFbq130RiHAGgzsikf6jgyYFqRd5Lc8PtPacOtKbo_hTl77GICN0VoyJt3VspNkWVBW7MJRWSk64rKDCgXKp_iHTZLOXmwQ2_RziHzMIEozj7JQsI8cBNyrY0X5u_pRwZXiGWBkm6hhvNqGBapvOtEsLp_out5vwO2QYTBGo3PYgkxTk8QMU2sv37pZ921RikkkRMaFk95_2zreOK3g
//expires_in=3600
//token_type=Bearer
  localStorage.clear();
  debugger
  var pageURL = window.location.href;
  pageURL = pageURL.toString();

  //get URL strings
  var paramIndex = pageURL.indexOf("#");
  if (paramIndex === -1) {
    location.href = './index.html';
  } else {
    var parameters = pageURL.substring(paramIndex + 1);

    console.log("page url: " + pageURL);
    console.log("url parameters: " + parameters);

    var idToken = getParameter(parameters, "id_token=");
    console.log("id token: " + idToken);

    var idTokenDecoded = atob(idToken.split('.')[1]);
    console.log("id token decoded: " + idTokenDecoded);

    var idTokenJson = JSON.parse(idTokenDecoded);
    console.log("id token json: " + idTokenJson);
    console.log("email: " + idTokenJson.email);
    console.log("id: " + idTokenJson.sub);

    localStorage.setItem('id_token', idTokenJson); // write
  
    var accessToken = getParameter(parameters, "access_token=");
    console.log("access token: " + accessToken);

    var aceessTokenDecoded = atob(accessToken.split('.')[1]);    
    var acessTokenJson = JSON.parse(aceessTokenDecoded);
    

    

    // console.log("email: " + idTokenJson.email);
    // console.log("id: " + idTokenJson.sub);
    debugger
    localStorage.setItem('name', idTokenJson['name']); // write
    localStorage.setItem('username', acessTokenJson['username']); // write
    
    if(acessTokenJson['cognito:groups'] != null){
      var loginGroup = acessTokenJson['cognito:groups'][0];
      if (loginGroup.equals('admin')) {
        debugger
        location.href = './admin.html';
        localStorage.setItem('loginGroup', 'admin'); // write        
      } else {
        
      }
    } else {
      location.href = './signin.html';
    }
    
    // console.log(localStorage.getItem('id_token')); // read
    
  }

  
});



function getParameter(url, param) {
  
  var urlVars = url.split('&');
  var returnValue;
  for (var i = 0; i < urlVars.length; i++) {
    var urlParam = urlVars[i];

    var index = urlParam.toString().indexOf("=");
    urlParam = urlParam.substring(0, index + 1);
    if (param === urlParam) {
      returnValue = urlVars[i].replace(param, "");
      break;
    }
  }
  return returnValue;
}