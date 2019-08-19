

const URL_demo = 'https://ajaxkode.firebaseio.com/'



var xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function () {
    // console.log(this.readyState, this.status)
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.response);
        document.write(this.response)
    } else if (this.readyState === 4 && this.status === 404) {
        console.log('No encontre nada perro');
    }
}
xhttp.open("GET", `${URL_demo}.json`)
xhttp.send()
345




/*

///////POST  ////////

const URL_demo = 'https://ajaxkode.firebaseio.com/'

const names = {
        'firstName': 'Daniel',
        'lastName': 'Lechuga',
        'age' : 24
              }

        
 const name = JSON.stringify(names)



var xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function () {
    // console.log(this.readyState, this.status)
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.response);
        document.write(this.response)
    } else if (this.readyState === 4 && this.status === 404) {
        console.log('No encontre nada perro');
    }
}
xhttp.open("POST", `${URL_demo}.json`)
xhttp.send(`${name}`)

*/
