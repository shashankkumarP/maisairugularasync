document.querySelector("form").addEventListener("submit",myfunc);

function my(a,b,c){
    
    var e = Number(a);
    var w = Number(b);
    var q = Number(c);
    var p = ((e+w+q)/30)*100
    p = Math.round(p);
    return p;
}
function my2(a){
    if(a=="Regular") return "green";
    else return "red";
}
function my1(a){
    if(a>50) return "Regular";
    else return "Async"
}
function myfunc(){
    event.preventDefault()
    var r = document.createElement("tr");
    var td1 = document.createElement("td");
    var i = document.createElement("img");
    i.src = document.querySelector("#image").value;
    td1.append(i);
    var n = document.createElement("td");
    n.innerText = document.querySelector("#name").value;
    var b = document.createElement("td");
    b.innerText = document.querySelector("#batch").value;
    var d = document.createElement("td");
    d.innerText = document.querySelector("#dsa").value;
    var comm = document.createElement("td");
    comm.innerText = document.querySelector("#cs").value;
    var code = document.createElement("td");
    code.innerText = document.querySelector("#coding").value;
    var per = document.createElement("td");
    per.innerText = my(code.innerText,d.innerText,comm.innerText);
    var st = document.createElement("td");
    st.innerText = my1(per.innerText);
    st.style.backgroundColor = my2(st.innerText);
    r.append(td1,n,b,d,comm,code,per,st);
    document.querySelector("tbody").append(r);
}
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

