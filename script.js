let a =document.getElementById("i");
let b=document.getElementById("i2");
let c =document.getElementById("b1");
let  d=document.getElementById("p3");
let  g=document.getElementById("p4");
c.onclick=function(){
    let e=a.value;
    let f=b.value;
    if(e!=="" && f!==""){
        
    
    e=e*60*60;
    f=f*60;
    g.classList.add("p2");
    g.textContent=e+f;
    d.textContent="";
    }else if(e==="" && f!==""){
        d.textContent="Please Enter a Valid Number of hours";
        g.classList.remove("p2");
        g.textContent="";
    }
    else if(f==="" && e!==""){
        d.textContent="Please Enter a Valid Number of minutes ";
        g.textContent="";
        g.classList.remove("p2");
        
    }
    else{
        d.textContent="Please Enter a Valid Number of hours and minutes";
        g.textContent="";
        g.classList.remove("p2");
    }
}
