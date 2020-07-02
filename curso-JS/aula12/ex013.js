var agora = new Date()
var diaSem = agora.getDay
var dia

switch(diaSem) {
    case 0: dia= (`domingo`)
    break
    case 1: dia= (`segunda`)
    break
    case 2: dia= (`terca`)   
    break
    case 3: dia= (`quarta`)    
    break
    case 4: dia= (`quita`)   
    break
    case 5: dia= (`sexta`)    
    break
    case 6: dia= (`sabado`)    
}
console.log(`o dia da semana e ${dia}`)