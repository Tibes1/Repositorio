// function sum(n1 , n2){
//     return n1 + n2
// }



//-------------------------------------------------//



// const sum = function(n1 , n2){
//     return n1 + n2
// }



//-------------------------------------------------//



//  const sum = (n1, n2) => {
//      return n1 + n2
//  }



//-------------------------------------------------//



// const sum = (n1 , n2)=> n1+n2

// console.log(sum(2,2))



//-------------------------------------------------//



// const community = () => 'CollabCode';

// console.log(community())



//-------------------------------------------------//



//  const double = number => number * 2  // apenas um parametro torna os parenteses opcional

//  console.log(double(4))



//-------------------------------------------------//



// const getPerson = () => ({name:"Henri" , eye:"blue"})

// console.log(getPerson())



//-------------------------------------------------//
//arrow function de escopo local que se auto executa com uma arrow function pra colocar nome em array


// (() => {
//     const getPerson =() => ({name:"Henri"})
//     console.log(getPerson())
// })()



//-------------------------------------------------//



// (() => {
//     function Person () {
//         const that = this
//         this.year = 0

//         setInterval(function() {
//             that.year ++
//             console.log(that)
//             console.log('qual a idade', that.year)
//         } , 1000)
//     }

//     const p1 = new Person()

// })()



//-------------------------------------------------//



(() => {
    function Person () {
        this.year = 0

        setInterval(() => {
            this.year ++
            console.log(this)
            console.log('qual a idade', this.year)
        } , 1000)
    }

    const p1 = new Person()

})()


