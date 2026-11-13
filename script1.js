function runcalculator(){
    let n=prompt("Want to edit the div lines in the script  enter y or n ");
    if(n==='y'||n==="yea"||n==='yes'){
        let g= document.querySelectorAll(".box");
        for(let i of g){
            i.innerText=prompt("Enter you name to get printed  ");
        }
        document.querySelector("#hide").style.visibility = "visible";
    }
    var M,N, result=0;
    let choice=Number(prompt("Enter the operation number "));
    switch(choice){
        case 1:
            N=Number(prompt("Enter a number"));
            M=Number(prompt("Enter the second number"));
            result=N+M;
            break;
        case 2:
            N=Number(prompt("Enter a number"));
            M=Number(prompt("Enter the second number"));
            result=N-M;
            break;
        case 3:
            N=Number(prompt("Enter a number"));
            M=Number(prompt("Enter the second number"));
            result=N*M;
            break;
        case 4 :
            N=Number(prompt("Enter a number"));
            M=Number(prompt("Enter the second number"));
            if(M===0){
                alert("ERROR! zero division error")
                return ;
            }
            result=N/M;
            break;
        default:
            alert("wrong selection ");
            return ;
    }
    document.querySelector("#output").innerText=" "+result;
    document.querySelector("#visible").style.visibility="visible";
}
document.querySelector("#refresh").addEventListener("click", runcalculator);

runcalculator()