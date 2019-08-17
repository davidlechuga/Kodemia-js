const URL_demo = 'https://ajaxkode.farebaseio.com/'

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
xhttp.open("GET",  '${URL_demo}')
xhttp.send()
