const boxes = document.getElementsByTagName('button');
      let display = document.getElementById("showans");
      let ans = 0;
      let pre = "";
      let flag = 0;
      document.addEventListener('keydown',(e)=>{
            e.preventDefault();
            if(e.key == 'Enter'){
                let input = display.innerHTML.replaceAll("x","*");
                let ans = eval(input);
                display.innerHTML = ans;
                pre = ans;
            }
            else if(e.key == 'Escape'){
                display.innerHTML = 0;
                pre = "";
            }
        })
        const btns = (e) =>{
            if(e.innerHTML === '='){
                let input = display.innerHTML.replaceAll("x","*");
                let ans = eval(input);
                display.innerHTML = ans;
                pre = ans;
            }
            else if(e.innerHTML == 'C'){
                display.innerHTML = 0;
                pre = "";
            }
            else if(e.innerHTML == 'x<sup>2</sup>'  && flag == 0){
                let ans = Number(display.innerHTML) * Number(display.innerHTML);
                display.innerHTML = ans;
                pre = "";
            }
            else if(e.innerHTML == '√'  && flag == 0){
                let ans = Math.sqrt(Number(display.innerHTML));
                display.innerHTML = ans;
                pre = "";
            }
            else if(e.innerHTML == '1/x'  && flag == 0){
                let ans = 1/Number(display.innerHTML);
                display.innerHTML = ans;
                pre = "";
            }
            else{
                
                if(e.innerHTML == '+' || e.innerHTML == '-' || e.innerHTML == 'x' || e.innerHTML == '/' || e.innerHTML == '.' || e.innerHTML == 'x<sup>2</sup>' || e.innerHTML == '√' || e.innerHTML == '1/x'){
                    if(flag == 0){
                        flag = 1;
                        pre = pre + e.innerHTML;
                        display.innerHTML = pre;
                        console.log(display.innerHTML);
                        console.log(pre);
                    }
                }
                else{
                    if(flag == 1){
                        pre = pre + e.innerHTML;
                        display.innerHTML = pre;
                        flag = 0;
                    }
                    else{
                        pre = pre + e.innerHTML;
                        display.innerHTML = pre;
                        flag = 0;
                    }
                }
                
            }
      }