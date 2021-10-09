//abertura da pagina
inicio();


function inicio(){
    var y = 'teste'
    loadFrag('menu', 'header');    
}

function loadFrag(url,divName){
    let path = url != "index"? "frags/":"";

    //console.log(path + url + ".html");
    fetch(path + url + ".html").
        then( response =>   {
        // The API call was successful!                
            return response.ok ? response.text():false;            
            })
            .then( responseHtml =>  
            {
                loadHtml(responseHtml, divName, url);
                // ^nesse momento o conteúdo já foi carregado                
                if(url=='menu'){
                    document.querySelector('.btnSumario').classList.remove('active');
                }
                else{
                    sumario();
                    document.querySelector('.btnSumario').classList.add('active');
                } 
            })
            .catch(function (e) {        
                console.log('Something went wrong. Descrição');
                console.log(e);
            });

    setTimeout( ()=> { syncMenuInit(url)} , 100);       
}


function loadHtml(html,divName,url){
    //document.querySelector('')

    let _divTarget = document.querySelector(divName);                                
        _divTarget.innerHTML = html;         
        url=='menu' ? menuInit(): ""  ;    
               
}

//loadFrag('inicio.html', 'main');
function syncMenuInit(url){
    //console.log('atualizando menus -> ' + url );
    let link = document.querySelectorAll('.link');         
    link ? link.forEach(item => addAction(item)):false;      
}
///attListener();

function cria(tipo){
    let obj = document.createElement(tipo);
    return obj;
}

function criaComp(tipo,nomeClasse,id){
    let obj = cria(tipo);
    id ? obj.id = id:"";
    obj.className = nomeClasse;
    return obj;
}