const students = [
    { name: 'salman khan', movie: 'wanted', id: 5 },
    { name: 'Sharuk khan', movie: 'don', id: 8 },
    { name: 'Ismail', movie: 'gojini', id: 6 },
    { name: 'tarek', movie: 'gojini', id: 12 },
    { name: 'kholil', movie: 'gojini', id: 45 },
    { name: 'rofiq', movie: 'gojini', id: 22 },
    { name: 'alim', movie: 'gojini', id: 18 },
    { name: 'abul', movie: 'gojini', id: 7 },
    { name: 'islam', movie: 'gojini', id: 9 },
    { name: 'korim', movie: 'gojini', id: 15 },
    { name: 'jakir', movie: 'gojini', id: 60 }
]

// const arr = []
// for (let i = 0; i < students.length; i++) {
//     arr.push(students[i].name)
// }
// console.log(arr);

const name = students.map(student => (student.name))
const top = students.filter(student => student.id < 10)
const topper = top.map(t => t.name)

console.log('Top Student: ' + topper);
console.log('all student: ' + name);