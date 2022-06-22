// Write a function that when given a URL as a string, parses 
//out just the domain name and returns it as a string. 
//For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


function domainName(url){

    //create a regular expression "/www/", "/http/" and "/https/"
    let regExWww = /www/ig;
    let regExhttp = /http/ig;
    let regExhttps = /https/ig;

    //match if each regEx is in the url
    let www = url.match(regExWww)
    let http = url.match(regExhttp)
    let https = url.match(regExhttps)

    //if there is no match,return the 3rd element in the array upon splitting on '/'
    if(http !== null || https !== null){
        if(www === null){
            return url.split('/')[2].split('.')[0];
        }
    
        //if there is no match, further split the 3rd element on '.';
        else{
            return url.split('/')[2].split('.')[1]
        }
    }
    else if(http === null || https === null) {
        if(www !== null)
        return url.split('.')[1]
        else{
            return url.split('.')[0]
        }

    }
    
  }

  // function domainName(url){
  //   return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i);
  //   // return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
  // }

  console.log(domainName("http://github.com/carbonfive/raygun"));
  console.log(domainName("http://www.zombie-bites.com"));
  console.log(domainName("https://www.cnet.com"));
  console.log(domainName("http://google.com"));
  console.log(domainName("www.xakep.ru"));
console.log(domainName("xakep.ru"));
console.log(domainName("http://yzoo62ytnvu1n5i.info/index.php"));

//Clever codewar solution 
// function domainName(url){
//     url = url.replace("https://", '');
//     url = url.replace("http://", '');
//     url = url.replace("www.", '');
//     return url.split('.')[0];
//   };

