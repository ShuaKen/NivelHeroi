
let resultado = nivel(1000, 0)
console.log(resultado)

function nivel(vitoria, derrotas){
	let saldoRankeadas = vitoria - derrotas
    let msg = ''
    
    if (saldoRankeadas < 10){
    	msg = 'Ferro'
    	}
    else if(saldoRankeadas > 11 && saldoRankeadas < 20){
    	msg = 'Bronze'
       	}
     else if(saldoRankeadas > 21 && saldoRankeadas < 50){
    	msg = 'Prata'
       	}
     else if(saldoRankeadas > 51 && saldoRankeadas < 80){
    	msg = 'Ouro'
       	}
      else if(saldoRankeadas > 81 && saldoRankeadas < 90){
    	msg = 'Diamante'
       	}
      else if(saldoRankeadas > 91 && saldoRankeadas < 100){
    	msg = 'Lendário'
       	}
       else if(saldoRankeadas >= 101){
    	msg = 'Imortal'
       	}
     return "O Herói tem de saldo "+vitoria+" está no nível "+msg
    }
