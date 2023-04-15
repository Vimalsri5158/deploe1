function lablecreate(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}
// Function linebreaks
function linebreaks(tagname){
    var ele=document.createElement(tagname);
    return ele;
}
function inputele(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2);
    ele.innerHTML=content;
    return ele;
}
var tagname1=lablecreate("lable","for","Firstname","Firstname");
var br1=linebreaks("br");
var input1=inputele("input","type" ,"text","name","Firstname","id","Firstname");
var br2=linebreaks("br");
document.body.append(tagname1,br1,input1,br2)

var tagname1=lablecreate("lable","for","Middlename","Middlename");
var br1=linebreaks("br");
var input1=inputele("input","type","text","name","Middlename","id","Middlename");
var br2=linebreaks("br");
document.body.append(tagname1,br1,input1,br2)

var tagname1=lablecreate("lable","for","Lastname","Lastname");
var br1=linebreaks("br");
var input1=inputele("input","type","text","name","Lastname","id","Lastname");
var br2=linebreaks("br");
document.body.append(tagname1,br1,input1,br2)

var email=lablecreate("lable","for","email","Email");
var br1=linebreaks("br");
var emailinput=inputele("input","type","email","name","email","id","email");
var br2=linebreaks("br");
document.body.append(email,br1,emailinput,br2)

var tagname1=lablecreate("lable","for","password","Password");
var br1=linebreaks("br");
var input1=inputele("input","type","password","name","password","id","password");
var br2=linebreaks("br");
document.body.append(tagname1,br1,input1,br2)

var br1=linebreaks("br");
var btn1=lablecreate("button","type","submit","Submit");
document.body.append(br1,btn1)














