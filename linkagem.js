/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
const buttonadd= document.querySelector('.caixa')
const input = document.querySelector('.botao')
function pegarOValorDoInput(){
    console.log(input.value)
}

buttonadd.addEventListener('click', pegarOValorDoInput)
