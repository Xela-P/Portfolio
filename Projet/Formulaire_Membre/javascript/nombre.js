document.addEventListener('DOMContentLoaded',(e)=>{
    e.preventDefault()
    console.log("ok")

    let testValeur, btn
    btn = document.querySelector("button")
    /*grosse fonction*/
    testValeur =()=>{
        let test =({
            p:document.getElementById("msg"),
            x: document.getElementById("nb").value
        })

        try{
            if((isNaN(test.x)) || (test.x=='')){
                //lancer l'eception pour le message suivant
                throw"<strong> vous n'avez pas envoyer de nombre</strong> "
            }
            else if((test.x<1) || (test.x > 10)){
                //lancer l'eception pour le message suivant
                throw"<strong> vous n'avez pas envoyer de nombre</strong> "
                
            }
            else{
                test.p.innerText="Nombre : "+test.x
            }
        }
        catch(e){//si une exception est lancé on la recupere dans le e
            test.p.innerHTML=e       
        }
    }
    btn.addEventListener("click",testValeur)
})