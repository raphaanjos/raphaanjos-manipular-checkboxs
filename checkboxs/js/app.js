
// cria um NodeList de todos os checkboxs que há dentro da div.box-checkbox
const nodeList = document.querySelectorAll(".box-checkbox .input-checkbox");

function inserir() {
    let boxCheck = document.getElementsByClassName('box-checkbox');
    
    if (boxCheck[0].childElementCount > 0) { // verifica se há elementos
        let cont = 0;
        let len = nodeList.length;

        for (let i = 0; i < len; i++) { // verifica se há elementos marcados e soma
            if (nodeList[i].childNodes[1].checked == true) {
                cont++
            }
        }
       
        // verifica o total de elementos marcados. Se true, transfere para selects-checkboxs
        if (cont > 0) { 
            let elem = document.getElementById('selects-checkboxs');
            for (let i = 0; i < len; i++) {
                if (nodeList[i].childNodes[1].checked == true) {
                    nodeList[i].childNodes[1].checked = false;
                    elem.appendChild(nodeList[i]);
                }
            }
        } else {
            alert('Marque ao menos um item');
        }

    } else {
        alert('Não há itens');
    }
}

function remover() {
    let selectsCheckBoxs = document.getElementsByClassName('selects-checkboxs');
    
    if (selectsCheckBoxs[0].childElementCount > 0) { // verifica se há elementos
        let cont = 0;
        let len = nodeList.length;

        for (let i = 0; i < len; i++) { // verifica se há elementos marcados e soma
            if (nodeList[i].childNodes[1].checked == true) {
                cont++
            }
        }
       
        // verifica o total de elementos marcados. Se true, transfere box-checkboxs
        if (cont > 0) { 
            let elem = document.getElementById('box-checkbox');
            for (let i = 0; i < len; i++) {
                if (nodeList[i].childNodes[1].checked == true) {
                    nodeList[i].childNodes[1].checked = false;
                    elem.appendChild(nodeList[i]);
                }
            }
        } else {
            alert('Marque ao menos um item');
        }

    } else {
        alert('Não há itens');
    }
}