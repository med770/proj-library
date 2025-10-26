
let h1=  document.querySelector('h1') ;
let inp1 = document.querySelector('form #inp1') ; 
let inp2 = document.querySelector('form #inp2') ; 
let inp3 = document.querySelector('form #inp3') ; 
let btnApp = document.getElementById('subm') ;
let clearD = document.getElementById('clear') ;
let mess = document.getElementById('Pmess') ;
let label = document.querySelectorAll('label') ;

let inpuChek = document.getElementById('Moodtogle')
let labelCheck = document.querySelector('.switch')
let span = document.querySelector('#darkmood span')
let p = document.querySelectorAll('p') ;
let li = document.querySelectorAll('ul li') ;


let obj = {
    book : '' ,
    author: '' ,
    isbn: '' ,
}


function main(){ 
    if (inp1.value !== '' && inp2.value !== '' && inp3.value !== '') {
         obj.book = inp1.value ;
         obj.author = inp2.value ;  
         obj.isbn = inp3.value ;  
         
         // check from autohr and clean inputs
        Checkinp2(obj.book , obj.author, obj.isbn) ; 
 
    } 
    else{
       alert('أدخل  بيانات أماكن الفارغة') 
    } 
      
}


// check with result inp2
function Checkinp2(book, value , isbn){
    let isNum = false ; 
      for (let i = 0; i < value.length ; i++) { 
        // if that is a number remove value inp2
          if (parseInt(value[i]) ) {
                isNum = true ;
          } } 
      if (isNum === true) {
          value = '' ;      
          alert('write name withOut Numbers')  ;   
          inp2.value = ''  ;  
      } 
      else{
        addBook(book , value , isbn)
         value = inp2.value  ; 
         inp1.value = '' ; 
         inp2.value = '' ; 
         inp3.value = '' ; 
      }   
}

// take the dates and go them to screen with title author and ISBN.

function addBook(book , author , isbn){ 
    let eleP = [] ;
    let ul = document.createElement('ul') ;  
    let li ; 
    let p ;
    let btnRem ;
      for (let i = 0; i < 4 ; i++) {
          li = document.createElement('li')  ;  
           p = document.createElement('p')  ; 
           btnRem = document.createElement('button') ;
          if (i === 0) {
              li.innerText = book ;
              p.id = 'p1' ;   
              p.className = 'P1' 
              eleP.push(p) ;
          } 
          else if( i === 1){
              li.innerText = author ; 
              p.id = 'p2' ;
              p.className = 'P2' ; 
              eleP.push(p) ;
          }
          else if (i === 2){
            li.innerText = isbn ;
            li.style.position = 'relative' ; 
            li.style.left = '30px'
            p.id = 'p3' ; 
            p.className = 'P3' ;
            eleP.push(p) ;
          } 
          else{    
            p.id = 'p4' ;
            p.className = 'P4' ; 
            eleP.push(p) ;
              btnRem.innerText = 'x'  ;
              li.appendChild(btnRem)  ;    
              li.id = 'li4' ;
                // css
                btnRem.style.color = 'rgb(27, 210, 210)'  ; 
                btnRem.style.cursor = 'pointer'  ; 
                btnRem.style.fontSize = 'small'   ;
                btnRem.style.border = 'none'  ;
                btnRem.style.backgroundColor = 'inherit'  ;
                btnRem.style.position = 'relative' ; 
                btnRem.style.left = '5px'  ;  
          }
          //
        ul.className ='uls' ;
        ul.appendChild(li)  ;  
        document.body.appendChild(ul)  ;  
        document.body.appendChild(p)    ;
        document.body.appendChild(clearD)   ;
        style(ul , li , p)   ;    
      } 
      mess.style.display = 'block' ; 
      mess.innerText = 'Book Added!' ; 
      mess.style.top = '42px ' ;   
      h1.style.bottom ='27px'  ;
      labelCheck.style.top = '65px ' ;  
      for (let i = 0; i < label.length; i++) {
         label[i].style.marginTop = '10px' ;    
      }  

      setTimeout(() => {
          mess.style.display = 'none' ;    
          h1.style.bottom ='23px'  ;
          labelCheck.style.top = '60px ' ;  
          for (let i = 0; i < label.length; i++) {
             label[i].style.marginTop = '3px' ;    
      }  
      }, 3000) ;  // 3 seconds

     btnRem.addEventListener('click' , function (){
           removeX(ul  , eleP) ;
     })
     // clear All
     clearD.addEventListener('click' , function (){
             clear(ul , eleP) ;
     })
 
}


// remove info of book
function removeX(ul ,p){ 
    ul.remove() ;  
    for (let i = 0; i < p.length; i++) {
       p[i].style.display = 'none' ;
        
    }
     mess.style.display = 'block' ; 
     mess.innerText = 'Book removed!' ; 
     mess.style.top = '42px ' ;   
     h1.style.bottom ='27px'  ;
     labelCheck.style.top = '65px ' ;  
      for (let i = 0; i < label.length; i++) {
         label[i].style.marginTop = '10px' ;    
      }  
    setTimeout(() => {
          mess.style.display = 'none'  ; 
            h1.style.bottom ='23px'  ;
          labelCheck.style.top = '60px ' ;  
          for (let i = 0; i < label.length; i++) {
             label[i].style.marginTop = '3px' ; 

           } } , 3000)
      
    }

function clear(ul , p){ 
        if (ul.className === 'uls') { 
            ul.remove() ; 
            for (let i = 0; i < p.length; i++) {
                  p[i].style.display = 'none' ;
        
    }
        }
        
        }
     


// 
function style(ul , li , p){ 
        ul.style.marginTop = '-5px' ;
        ul.style.display = 'flex' ;  
        ul.style.marginBottom = '2px'
        ul.style.justifyContent = 'space-between' ; 
        ul.style.position = 'relative' ;
        ul.style.bottom = '60px' ;  
        if (document.body.style.color === 'black') {
             li.style.color = 'rgba(255, 255, 255, 0.64)' ;
        } 
        else if(document.body.style.color === 'white'){
            li.style.color = 'rgba(33, 29, 29, 0.93)' ;
        }
        li.style.fontSize = 'small' ;   
        if (p.id === 'p1') { 
            if (document.body.style.width > '1200px') {
                p.style.width = '26%' ; 
                p.style.backgroundColor = '#000' ;
            }
            p.style.width = '23%' ;  
            p.style.backgroundColor = '#000' 
        }

    if (p.id === 'p2') {
            p.style.width = '31%' ; 
            p.style.bottom = '17.5px' ;  
            p.style.backgroundColor = '#000' 
        
    } 
    else if(p.id === 'p3' ){ 
       
            p.style.left = '350px' ; 
            p.style.width = '28.5% ; ' ;
            p.style.backgroundColor = '#000' 
        
    } 
    else if(p.className === 'P4'){ 
            p.style.bottom = '64.5px' ;  
            p.style.backgroundColor = '#000'  ;

        }
    } 



// dark mood 
let isdarkMode = true ;
function toggleMode () { 
    if (isdarkMode) {  
        whiteB() ; 
    }
    else{
        darkB()
    }    
    isdarkMode = !isdarkMode  ;
} 



function whiteB(){
        document.body.className = 'dark' ; 
    inp1.style.backgroundColor = '#fff'  ; 
    inp2.style.backgroundColor = '#fff' ; 
    inp3.style.backgroundColor = '#fff' ; 
    inp1.style.borderColor = 'black' ; 
    inp2.style.borderColor = 'black' ; 
    inp3.style.borderColor = 'black' ;  
    btnApp.style.borderColor = 'black' ;
    btnApp.style.backgroundColor = '#fff' ; 
    inp1.style.backgroundColor = '#fff' ; 
    inp2.style.backgroundColor = '#fff' ; 
    inp3.style.backgroundColor = '#fff' ; 
    btnApp.style.color = '#000' ;
    labelCheck.style.backgroundColor = '#000' ; 
    inp1.style.color = '#000'  ;  
    inp2.style.color = '#000' ;  
    inp3.style.color = '#000'   ;
    clearD.style.color = 'black' ;  
    clearD.style.borderColor = 'rgba(0, 0, 5, 0.52)' ;
    clearD.style.backgroundColor = 'rgb(255 , 255, 255)' ; 
    for (let i = 0; i < p.length; i++) { 
        p[i].style.borderColor = 'rgba(42, 40, 40, 0.58)'  ; 
    }  
    
    
  
}

function darkB(){
        document.body.removeAttribute('class') ;
        inp1.style.backgroundColor = ' rgba(36, 41, 41, 0.53)'  ; 
        inp2.style.backgroundColor = ' rgba(32, 36, 36, 0.49)' ; 
        inp3.style.backgroundColor = ' rgba(30, 33, 33, 0.49)' ; 
        inp1.style.borderColor = 'white' ; 
        inp2.style.borderColor = 'white' ; 
        inp3.style.borderColor = 'white' ;  
        btnApp.style.borderColor = '#fff' ;
        btnApp.style.backgroundColor = ' rgba(26, 29, 29, 0.65)' ;  
        btnApp.style.color = '#fff'
        labelCheck.style.backgroundColor = '#fff' ; 
        inp1.style.color = '#fff'  ;  
        inp2.style.color = '#fff' ;  
        inp3.style.color = '#fff'   ;
        clearD.style.color = 'white' ;
        clearD.style.backgroundColor =' rgba(21, 30, 30, 0.927) ' ;   
        clearD.style.borderColor = '#ffffff7e' ;
        for (let i = 0; i < p.length; i++) { 
            p[i].style.borderColor = '#ffffff7e'  ; 
        }  
        localStorage.setItem('Background' , 'rgba(10, 19, 19, 0.927)') ;  
        localStorage.setItem('isDark'  , false)   ;
    }    


inpuChek.addEventListener("change" , toggleMode) ;

btnApp.addEventListener('click' , main) ;
