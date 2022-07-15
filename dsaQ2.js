// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
    
    
console.log("Welcome to Programiz!");
let s1="";
let s2="";
function convert(s){
    let v=s.charAt(8);
    let millitary ="";
    if(v=="A"){
        if(s.substring(0,2)=="12"){
            millitary="00";
        }
        else{
            millitary=s.substring(0,2);
        }
    }
    else{
        if(s.substring(0,2)=="12"){
            millitary=s.substring(0,2);
        }
        else{
            millitary=parseInt(s.substring(0,2),10)+12;
        }
    }
    s1=millitary + s.substring(2,8);
    return millitary + s.substring(2,8);
}


function add(s){
    let final="";
    let sec=parseInt(s.substring(6,8))+45;
    let m=parseInt(s.substring(3,5))+45;
    let h=parseInt(s.substring(0,2));
    
    if(sec>=60)
    {
        sec=60-sec;
        m=m+1;
        if(m>=60)
        {
            m=60-m;
            if(h==23)
            {
                h=0;
            }
            else{
                h=h+1;
            }
        }
    }
    
    s2=h+":"+m+":"+sec;
    return s2;
    
}

let s= "12:01:00AM";
add(convert(s));
console.log(s2);

