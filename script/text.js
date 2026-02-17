const name = "hriody";
const students = {
    name : 'hridoy',
    age : 29,
    year : 'last',
    groupe : 'computer'
}

const studentData = JSON.stringify(students);
// localStorage.setItem('student' , studentData)

const friends = ['rahul' , 'rakesh' ,  'jenney' , 'mohit']
friends.push('kishor');
console.log(friends);
friends.push('mahesh')
console.log(friends);
friends.pop()
console.log(friends);

// localStorage.setItem('name' , name);
// const display = () => {
//     const container = document.getElementById("container-storage");
//     const name = localStorage.getItem('name');
//     // container.innerHTML = `
//     // <h2>${name}</h2>
//     // `


// }



// display()