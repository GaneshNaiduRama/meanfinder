FindAvg = () => {
    if(document.getElementById('numbers').value==''  )  {
        alert("Please enter any numbers");
        document.getElementById('numbers').style.borderColor='red'
        let id=['text','inputValues','count','exp']
        for(let i of id)  {
            document.getElementById(i).innerHTML = '';
        }
    } else {
         document.getElementById('numbers').style.borderColor='green'
        let arr = document.getElementById('numbers').value.split(',').map(Number);
    
        let sum = 0;
        for (let a of arr) {
            sum += a;
        }
    
        document.getElementById('text').innerHTML = `<h1>The Total is ${sum}</h1>`;
    
     
    
        document.getElementById('inputValues').innerHTML = ` <h1> The Entered values are - ${arr}</h1>`;
    
        document.getElementById('count').innerHTML=`<h1>The No of Elements are ${arr.length}</h1>`
    
        let str1 = arr.join(' + ');
        document.getElementById('exp').innerHTML = `<h2>(${str1}) / ${arr.length}</h2>=<h1>${sum}/${arr.length}</h1>=<h1>The Mean is ${sum/arr.length}</h1>`;
    
    }
    }
    
    freeUp=()=> {
        let id=['text','inputValues','count','exp']
        for(let i of id)  {
            document.getElementById(i).innerHTML = '';
        }
           
        
    }
    