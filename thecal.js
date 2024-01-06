function cal(){

  const wid=(document.querySelector('.js-w'))

const wI=wid.value;
const len= document.querySelector('.js-l');
const lI=len.value;
let amount = wI * lI;
document.querySelector('.p-amount').innerHTML=`${amount}`;
}


