let pessoa = {
    nome: 'jose',
    sexo:'M',
    peso:85.4,
    engordar(p=0){
        console.log('engordou')
        this.peso+= p 
    }}
    pessoa.engordar(4)
console.log(`${pessoa.nome} pesa ${pessoa.peso} Kg`)