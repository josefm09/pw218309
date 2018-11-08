window.onload = function(){
	var operador = "";
	var resultado = document.getElementById("resultado");
	var operando1 = "";
	var operando2 = "";

	var cero = document.getElementById("cero");
	cero.addEventListener("click",numeros);

	var uno = document.getElementById("uno");
	uno.addEventListener("click",numeros);

	var dos = document.getElementById("dos");
	dos.addEventListener("click",numeros);

	var tres = document.getElementById("tres");
	tres.addEventListener("click",numeros);

	var cuatro = document.getElementById("cuatro");
	cuatro.addEventListener("click",numeros);

	var cinco = document.getElementById("cinco");
	cinco.addEventListener("click",numeros);

	var seis = document.getElementById("seis");
	seis.addEventListener("click",numeros);

	var siete = document.getElementById("siete");
	siete.addEventListener("click",numeros);

	var ocho = document.getElementById("ocho");
	ocho.addEventListener("click",numeros);

	var nueve = document.getElementById("nueve");
	nueve.addEventListener("click",numeros);

	var suma = document.getElementById("suma");
	var resta = document.getElementById("resta");
	var multiplicacion = document.getElementById("multiplicacion");
	var division = document.getElementById("division");
	var igual = document.getElementById("igual");
	var reiniciar = document.getElementById("reiniciar");

	suma.addEventListener("click",operadores);
	resta.addEventListener("click",operadores);
	multiplicacion.addEventListener("click",operadores);
	division.addEventListener("click",operadores);

	igual.addEventListener("click",resultadoIgual);
	reiniciar.addEventListener("click",reinicio);

	var numeros = function(){
		var valor = this.value;
		if (operador == "") {
			if (resultado.value == "0") {
				resultado.value = "";
			}
			resultado.value += valor;
		}
	}
	var colorAmarillo = function(){
		this.style.background = "yellow";
	}
	var colorBlanco = function(){
		this.style.background = "white";
	}
	var operadores = function(){
		operador = this.value;
	}
	var resultadoIgual = function(){
		switch(operador){
			case "+":
			
		}
	}
	var reinicio = function(){
		resultado.value = "0";
		operador = "";
	}

}
