document.querySelector(".urgent").addEventListener('click' , function(e){
    document.getElementById("accesurgent").style.display ='block'
})

document.getElementById('profil').style.display = 'none'
document.getElementById('missions').style.display = 'none'
// document.querySelector(".Accueil").classList.add('isOn');
document.querySelector(".Accueil").addEventListener('click' , function(e){
    // this.classList.add('isOn')
    // document.querySelector(".Profil").classList.remove('isOn');
    // document.querySelector(".Mission").classList.remove('isOn');
    document.getElementById('accueil').style.display = 'grid'
    document.getElementById('profil').style.display = 'none'
    document.getElementById('missions').style.display = 'none'
})

document.querySelector(".Profil").addEventListener('click' , function(e){
    // this.classList.add('isOn')
    // document.querySelector(".Accueil").classList.remove('isOn');
    // document.querySelector(".Mission").classList.remove('isOn');
    document.getElementById('accueil').style.display = 'none'
    document.getElementById('profil').style.display = 'grid'
    document.getElementById('missions').style.display = 'none' 
})

document.querySelector(".Missions").addEventListener('click' , function(e){
    // this.classList.add('isOn')
    // document.querySelector(".Acccueil").classList.remove('isOn');
    // document.querySelector(".Profil").classList.remove('isOn');
    document.getElementById('accueil').style.display = 'none'
    document.getElementById('profil').style.display = 'none'
    document.getElementById('missions').style.display = 'grid'
})
