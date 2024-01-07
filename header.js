//datetime

function getDate(){
    var today = new Date();
    var date = ('0' + today.getDate()).slice(-2)+'/'+( '0' + (today.getMonth()+1)).slice(-2)+'/'+today.getFullYear();
    var time = ('0' +today.getHours()).slice(-2) + ":" + ('0' +today.getMinutes()).slice(-2);
    var dateTime = date+' '+time;
    document.getElementById('datetime').innerHTML =
        date + " : " + time;
    console.log(dateTime)
    }
    getDate();
    setInterval(getDate, 60000);

//LOGOS
document.querySelector(".veille").addEventListener('click', function(e){
    document.getElementById("main").classList.toggle('veille');
    this.classList.toggle('veilleok');
})
//NEWS
let titles = [];
const output = document.querySelector("#news");
const display = s => output.innerText = s;
axios.get('https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=jzelOxun4r6TDK56JVOGDAKFbLZ0AE6p')
    .then(function(response) {
        for (let elem of response.data.results) {
            titles.push(elem.title);
        }
        const delayLoop = (fn, delay) => {
            return (title, i) => {
              setTimeout(() => {
                display(title);
              }, i * 5000);
            }
          };
          
          titles.forEach(delayLoop(display, 1000));
    })
    .catch(function(error) {
        // Handle errors here
    });
