document.addEventListener('DOMContentLoaded',(e)=>{
    e.preventDefault();
    console.log(document.contentType)
    let btn, clearBtn
    //btn = document.getElementsByTagName('input')[2]
    btn = document.querySelector('input[type="submit"]');
    clearBtn = document.getElementsByTagName('input')[0];
    console.log(btn)

    /* creer un objet pour verifier le formulaire*/
    let user = ({
        verif : document.getElementsByTagName('input'),
        warning : document.querySelector("p"),
        expr : /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/,
        test(){
            if(!this.verif[0].value || !this.verif[1].value || !this.expr.test(this.verif[0].value)){
                console.log("remplir les champs");
                this.warning.style.display="block";
                this.warning.className="msg-warning";
                this.warning.innerText="Remplir le champs";
            }
            else{
                console.log("Vous êtes connecté");
                this.warning.style.display="block";
                this.warning.className="msg-success";
                this.warning.innerText="Vous êtes connecté";
                this.verif[0].value=""
                this.verif[1].value=""
                this.verif[2].setAttribute("disabled","true")
                localStorage.setItem("mail",this.verif[0].value)
        }}


    })
    btn.addEventListener("click",(e)=>{
        e.preventDefault();
        user.test()//appeler une fonction dans js
    })
    /*btn nettoyer les champs*/
    clearBtn.addEventListener('click',()=>{
        user.verif[0].value=""
        user.verif[1].value=""
    })
    console.log(user.verif[1])
    console.log(user.warning)
})