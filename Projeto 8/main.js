let nota = parseFloat(prompt('Digite sua nota:'));

if(nota < 60){
    alert('Sua grade é F');
} 
else if(nota > 100){
    alert('Nota inválida');
} 
else if(nota <= 69){
    alert('Sua grade é D');
}
else if(nota <= 79){
    alert('Sua grade é C');
}
else if(nota <= 89){
    alert('Sua grade é B');
}
else if(nota <= 100){
    alert('Sua grade é A');
}