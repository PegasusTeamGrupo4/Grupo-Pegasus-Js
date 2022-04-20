//opcion 1
function saludo() {
  console.log('hola mundo');
}
saludo();

 // opcion 2
let mes=[];
let meses = ['enero ','febrero ','marzo ','abril ','mayo ','junio ','julio ','agosto ','septiembre ','octubre ','noviembre ','diciembre'];

function mostrarMes(){
  let a=0;
  while(a<2){
    for (let i=0;i<meses.length;i++){
      if((i+1) % 3 === 0){
        console.log(mes += meses[i]);
    	}
    a=a+1;
  	}
    for (let i=0;i<meses.length;i++){
      console.log(meses[i])
    }
  }
 
}
mostrarMes()

// opcion3
function getRandom(min, max) {
  return Math.random() * (11- 0) + 0;
}
// let num=[0,1,2,3,4,5,6,7,8,9,,10,11,12];
// let total=[];
function mostrarNum(){
  let a=0;
  console.log(num1=Math.round(getRandom()))
  console.log(num2=Math.round(getRandom()));
  console.log(Math.round(num1 + num2));
  // while(a<3){
  //   for (let i=0;i<2;i++){
  //     console.log(total = Number(total += num[i]));
  //   	a=a+1;
  //   }
  // }
}
mostrarNum();

//opcion4
let persona = {
  nombre: ['franco', 'tomas','mateo','lauty','gaston','michael'],
  edad:[18,18,18,17,18,18],
  dni:[45089238,45026458,35476841,45702847,459624875,45084883],
  fecNac:['20/08/03','08/05/2004','12/5/03','16/06/2004','12/08/2003','26/10/2003'],
  
  bio: function () {
    for(let i=0; i<persona.nombre.length;i++){
    	console.log(this.nombre[i] + ''+ ' tiene ' + this.edad[i] + ' años. Nació ' + this.fecNac[i] + ' y su dni es ' + this.dni[i] + '. ');
    }
  }
}
persona.bio()









