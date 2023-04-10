let btn=document.getElementById('gen');
let copy=document.querySelector('#copy');
let colorShow=document.querySelector('.color-show');
let res=document.querySelector('.color-code');
let head=document.querySelector('.head');
let noti=document.querySelector('.notification');
var co=null;
btn.addEventListener('click',()=>{
    var rand=Math.floor(Math.random()*16777215).toString(16);
    colorShow.style.background=`#${rand}`;
   co=res.textContent=`#${rand}`;
    head.style.background=`#${rand}`;
    noti.style.display='none';
    
})

const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(co);
     
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

 
  copy.addEventListener('click',()=>{
    copyContent();
   
    setTimeout(()=>{
    noti.style.display='block';
    },100)
    if(noti.style.display=='block'){
    noti.style.display='none';
        
    }

    

});


