 async function getEmployees(){
    // const url = './Employees.json'
    // fetch('http://127.0.0.1:5500/JS%20exercises/IntroduccionJS/js/Employees.json').then(result => {
    //     return result.json()
    // }).then( data => {
    //     const { employees } = data
    //     console.log(employees);

    //     employees.forEach(employee => {
    //         console.log(employee.id);
    //         console.log(employee.name);
    //         console.log(employee);
    //     });
    // })

    const result = await  fetch('http://127.0.0.1:5500/JS%20exercises/IntroduccionJS/js/Employees.json')
    const data = await result.json()
    console.log(data);
}

getEmployees()