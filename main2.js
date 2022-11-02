let bool = true;

if(!localStorage.getItem('bool')){

    localStorage.setItem('bool', JSON.stringify(bool));

} else {

    bool = JSON.parse(localStorage.getItem('bool'));

    if(bool == false){
        dark()
    }

}


function dark() {
    
    document.querySelector('body').setAttribute('style', 'background-color: #111111;');
    document.querySelector('div').setAttribute('style', 'background-color: #1C1C1C;');
    document.querySelector('button').setAttribute('style', 'background-color: white; color: black;');
    document.querySelector('h1').setAttribute('style', 'color: white;');
    
}

function white() {

    document.querySelector('body').setAttribute('style', 'background-color: white;');
    document.querySelector('div').setAttribute('style', 'background-color: #C0C0C0;');
    document.querySelector('button').setAttribute('style', 'background-color: black; color: white;');
    document.querySelector('h1').setAttribute('style', 'color: black;');

}

function validation() {

    bool = bool==true ? false : true;

    if(bool == true) {

        white();

    } else if(bool==false) {

        dark();
        
    }
    
    localStorage.setItem('bool', JSON.stringify(bool));

}

document.getElementById('btn').addEventListener("click", ()=>{validation()});
