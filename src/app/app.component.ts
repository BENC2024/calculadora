import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'calculadora';
  listaValor:Array<number> = [];
  valor:string = "";
  cadena: string = "";
  aux = 0;
  total:number = 0;

  calcular(aux:String){
   this.total = 0;
   switch (aux) {
      case '+':
         if(this.valor == ''){
            console.log(this.listaValor);
         }
         else{
            this.listaValor.push(parseInt(this.valor));
            console.log(this.listaValor);
            this.cadena = this.cadena + this.valor + "+";
         }         
         break;
      case '-':
         this.listaValor.push(parseInt(this.valor));
         console.log(this.listaValor);
         this.cadena = this.cadena + this.valor + "-";
         break;
      case '*':
         this.listaValor.push(parseInt(this.valor));
         console.log(this.listaValor);
         this.cadena = this.cadena + this.valor + "*";
         break;
      case '/':
         this.listaValor.push(parseInt(this.valor));
         console.log(this.listaValor);
         this.cadena = this.cadena + this.valor + "/";
         break;
   
      case '=':
         if (this.valor == '') {
            this.listaValor = [];
            this.cadena = "Syntax Error";
         }
         else{
            this.listaValor.push(parseInt(this.valor));
            console.log(this.listaValor);
            for (let i = 0; i < this.listaValor.length; i++) {
               this.total = this.total+this.listaValor[i];
            }
            this.listaValor = [];
            this.cadena='';
         }
         break;
      }
   }

}
