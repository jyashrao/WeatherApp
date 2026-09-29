console.log('kaha maiiiiiiiiii');

const API_KEY="e26bcbf6f2b96d86d82e7d975c85c4ec";



async function showWeather(){
    let city="goa";

    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

    const data=await response.json();
    console.log("Whether data:"+ data);

    let newPara=document.createElement('p');
    newPara.textContent=`${data?.main?.temp.toFixed(2)} degree Celcius` 
    document.body.appendChild(newPara);  
}

