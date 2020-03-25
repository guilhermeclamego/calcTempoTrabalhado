/*Desenvolvido por Guilherme Cesar Lamego*/

let $ = document.querySelector.bind(document);
let iniManha = $('#iniManha');
let fimManha = $('#fimManha');
let iniTarde = $('#iniTarde');
let fimTarde = $('#fimTarde');
let botao = $('#bTempo');

botao.addEventListener("click", (event) => {
	event.preventDefault();	

	horaManha = subtraiHora(fimManha.value, iniManha.value);
	horaTarde = subtraiHora(fimTarde.value, iniTarde.value);
	horaTotal = somaHora(horaManha, horaTarde, false);

	exibeMensagem(horaManha,horaTarde,horaTotal);
});


function exibeMensagem(horaManha, horaTarde, horaTotal){
	arrayMsg = [`Horas trabalhadas no período da manhã: ${horaManha}`,
				`Horas trabalhadas no período da tarde: ${horaTarde}`,
				`Total de Horas Trabalhadas: ${horaTotal}`];
                                let ul = $('#mensagemTotal');

	ul.innerHTML  ="";
	arrayMsg.forEach((msg) => {
        let li = document.createElement("li");
        li.textContent = msg;
        ul.appendChild(li);
    });
}

function subtraiHora(hrA, hrB) {
        if(hrA.length != 5 || hrB.length != 5) return "00:00";
       
        temp = 0;
        nova_h = 0;
        novo_m = 0;
 
        hora1 = hrA.substr(0, 2) * 1;
        hora2 = hrB.substr(0, 2) * 1;
        minu1 = hrA.substr(3, 2) * 1;
        minu2 = hrB.substr(3, 2) * 1;
       
        temp = minu1 - minu2;
        while(temp < 0) {
                nova_h++;
                temp = temp + 60;
        }
        novo_m = temp.toString().length == 2 ? temp : ("0" + temp);
 
        temp = hora1 - hora2 - nova_h;
        while(temp < 0) {
                temp = temp + 24;
        }
        nova_h = temp.toString().length == 2 ? temp : ("0" + temp);
 
        return nova_h + ':' + novo_m;
}


function somaHora(hrA, hrB, zerarHora) {
        if(hrA.length != 5 || hrB.length != 5) return "00:00";
       
        temp = 0;
        nova_h = 0;
        novo_m = 0;
 
        hora1 = hrA.substr(0, 2) * 1;
        hora2 = hrB.substr(0, 2) * 1;
        minu1 = hrA.substr(3, 2) * 1;
        minu2 = hrB.substr(3, 2) * 1;
       
        temp = minu1 + minu2;
        while(temp > 59) {
                nova_h++;
                temp = temp - 60;
        }
        novo_m = temp.toString().length == 2 ? temp : ("0" + temp);
 
        temp = hora1 + hora2 + nova_h;
        while(temp > 23 && zerarHora) {
                temp = temp - 24;
        }
        nova_h = temp.toString().length == 2 ? temp : ("0" + temp);
 
        return nova_h + ':' + novo_m;
}