// ===== LECCIONES =====
const lessons = [
  {
    title: "Variables",
    badge: "Lección 01",
    intro: "Las variables son contenedores para almacenar datos. En JavaScript moderno usamos let y const (y a veces var, aunque es más antigua).",
    cards: [
      {
        title: "var — la forma antigua",
        desc: "Disponible en toda la función donde se declara. Evítala en código moderno porque puede generar bugs difíciles de detectar.",
        code: `<span class="kw">var</span> nombre = <span class="str">"Ana"</span>;
<span class="kw">var</span> edad = <span class="num">25</span>;
console.<span class="fn">log</span>(nombre); <span class="cmt">// "Ana"</span>`
      },
      {
        title: "let — valor que cambia",
        desc: "Usa let cuando el valor de la variable puede cambiar a lo largo del tiempo.",
        code: `<span class="kw">let</span> contador = <span class="num">0</span>;
contador <span class="op">=</span> contador <span class="op">+</span> <span class="num">1</span>;
console.<span class="fn">log</span>(contador); <span class="cmt">// 1</span>`
      },
      {
        title: "const — valor constante",
        desc: "Usa const cuando el valor NO debe cambiar. Es la opción preferida por defecto.",
        code: `<span class="kw">const</span> PI = <span class="num">3.1416</span>;
<span class="kw">const</span> sitio = <span class="str">"JS Academy"</span>;
console.<span class="fn">log</span>(PI, sitio);`
      }
    ],
    code: `// 🟡 Variables en JavaScript
// --------------------------------

// const: no cambia
const pais = "Colombia";
const año = 2024;

// let: puede cambiar
let puntos = 0;
puntos = puntos + 10;
puntos += 5; // forma corta

console.log("País:", pais);
console.log("Año:", año);
console.log("Puntos:", puntos);`,
    challenge: "Declara una variable 'nombre' con tu nombre y otra 'edad' con tu edad. Luego imprimelas con console.log()."
  },

  {
    title: "Tipos de datos",
    badge: "Lección 02",
    intro: "JavaScript tiene varios tipos de datos primitivos. Entender los tipos es fundamental para evitar errores y escribir código predecible.",
    cards: [
      {
        title: "String — texto",
        desc: "Secuencias de caracteres, definidas con comillas simples, dobles o backticks (template literals).",
        code: `<span class="kw">const</span> saludo = <span class="str">"Hola mundo"</span>;
<span class="kw">const</span> nombre = <span class="str">'Carlos'</span>;
<span class="kw">const</span> mensaje = <span class="str">\`Hola, \${nombre}!\`</span>;
console.<span class="fn">log</span>(mensaje); <span class="cmt">// "Hola, Carlos!"</span>`
      },
      {
        title: "Number — número",
        desc: "Enteros y decimales usan el mismo tipo. También existen Infinity y NaN.",
        code: `<span class="kw">const</span> entero = <span class="num">42</span>;
<span class="kw">const</span> decimal = <span class="num">3.14</span>;
<span class="kw">const</span> negativo = <span class="op">-</span><span class="num">7</span>;
console.<span class="fn">log</span>(<span class="kw">typeof</span> entero); <span class="cmt">// "number"</span>`
      },
      {
        title: "Boolean, null y undefined",
        desc: "Boolean es true/false. null es 'sin valor intencionalmente'. undefined es 'no inicializado'.",
        code: `<span class="kw">const</span> activo = <span class="kw">true</span>;
<span class="kw">let</span> usuario = <span class="kw">null</span>;
<span class="kw">let</span> resultado;
console.<span class="fn">log</span>(<span class="kw">typeof</span> resultado); <span class="cmt">// "undefined"</span>`
      }
    ],
    code: `// 🟡 Tipos de datos
// --------------------------------

// String
const ciudad = "Bogotá";
const saludo = \`Bienvenido a \${ciudad}\`;

// Number
const poblacion = 8000000;
const temperatura = 14.5;

// Boolean
const esColombia = true;

// null / undefined
let dato = null;
let sinValor;

// typeof nos dice el tipo
console.log(typeof ciudad);       // string
console.log(typeof poblacion);    // number
console.log(typeof esColombia);   // boolean
console.log(typeof dato);         // object (quirk de JS)
console.log(typeof sinValor);     // undefined
console.log(saludo);`,
    challenge: "Crea variables de cada tipo (string, number, boolean) y usa typeof para verificar sus tipos en la consola."
  },

  {
    title: "Operadores",
    badge: "Lección 03",
    intro: "Los operadores permiten realizar operaciones con valores: matemáticas, comparaciones y lógicas. Son la base de cualquier lógica en JavaScript.",
    cards: [
      {
        title: "Aritméticos",
        desc: "Suma, resta, multiplicación, división, módulo y potencia.",
        code: `<span class="num">10</span> <span class="op">+</span> <span class="num">5</span>   <span class="cmt">// 15 — suma</span>
<span class="num">10</span> <span class="op">-</span> <span class="num">3</span>   <span class="cmt">// 7  — resta</span>
<span class="num">4</span>  <span class="op">*</span> <span class="num">3</span>   <span class="cmt">// 12 — multiplicación</span>
<span class="num">10</span> <span class="op">/</span> <span class="num">2</span>   <span class="cmt">// 5  — división</span>
<span class="num">10</span> <span class="op">%</span> <span class="num">3</span>   <span class="cmt">// 1  — módulo (resto)</span>
<span class="num">2</span>  <span class="op">**</span> <span class="num">3</span>  <span class="cmt">// 8  — potencia</span>`
      },
      {
        title: "Comparación",
        desc: "Devuelven true o false. Usa === (estricto) en lugar de == para evitar conversiones implícitas.",
        code: `<span class="num">5</span> <span class="op">===</span> <span class="num">5</span>   <span class="cmt">// true</span>
<span class="num">5</span> <span class="op">!==</span> <span class="num">3</span>   <span class="cmt">// true</span>
<span class="num">10</span> <span class="op">></span> <span class="num">5</span>    <span class="cmt">// true</span>
<span class="num">3</span>  <span class="op"><=</span> <span class="num">3</span>   <span class="cmt">// true</span>`
      },
      {
        title: "Lógicos",
        desc: "&& (Y), || (O), ! (NO). Permiten combinar condiciones.",
        code: `<span class="kw">true</span> <span class="op">&&</span> <span class="kw">true</span>   <span class="cmt">// true</span>
<span class="kw">true</span> <span class="op">||</span> <span class="kw">false</span>  <span class="cmt">// true</span>
<span class="op">!</span><span class="kw">true</span>          <span class="cmt">// false</span>
<span class="num">5</span> <span class="op">></span> <span class="num">3</span> <span class="op">&&</span> <span class="num">2</span> <span class="op"><</span> <span class="num">4</span> <span class="cmt">// true</span>`
      }
    ],
    code: `// 🟡 Operadores
// --------------------------------

// Aritméticos
console.log(10 + 5);    // 15
console.log(10 % 3);    // 1
console.log(2 ** 8);    // 256

// Asignación
let x = 10;
x += 5;   // x = x + 5 → 15
x *= 2;   // x = x * 2 → 30
console.log("x:", x);

// Comparación (siempre usa ===)
console.log(5 === 5);    // true
console.log("5" === 5);  // false (distinto tipo)
console.log("5" == 5);   // true  (PELIGROSO!)

// Lógicos
const edad = 20;
const tieneCedula = true;
const puedeVotar = edad >= 18 && tieneCedula;
console.log("¿Puede votar?", puedeVotar);`,
    challenge: "Calcula el área de un círculo (πr²) con radio = 7. Usa Math.PI para π."
  },

  {
    title: "Condicionales",
    badge: "Lección 04",
    intro: "Los condicionales permiten ejecutar código dependiendo de si una condición es verdadera o falsa. Son el corazón de la lógica en programación.",
    cards: [
      {
        title: "if / else if / else",
        desc: "Ejecuta diferentes bloques según la condición.",
        code: `<span class="kw">const</span> nota = <span class="num">75</span>;
<span class="kw">if</span> (nota <span class="op">>=</span> <span class="num">90</span>) {
  console.<span class="fn">log</span>(<span class="str">"Excelente"</span>);
} <span class="kw">else if</span> (nota <span class="op">>=</span> <span class="num">60</span>) {
  console.<span class="fn">log</span>(<span class="str">"Aprobado"</span>);
} <span class="kw">else</span> {
  console.<span class="fn">log</span>(<span class="str">"Reprobado"</span>);
}`
      },
      {
        title: "Operador ternario",
        desc: "Forma compacta de if/else para asignar valores. condición ? valorSiTrue : valorSiFalse",
        code: `<span class="kw">const</span> edad = <span class="num">20</span>;
<span class="kw">const</span> acceso = edad <span class="op">>=</span> <span class="num">18</span>
  <span class="op">?</span> <span class="str">"Permitido"</span>
  <span class="op">:</span> <span class="str">"Denegado"</span>;
console.<span class="fn">log</span>(acceso); <span class="cmt">// "Permitido"</span>`
      },
      {
        title: "switch",
        desc: "Ideal para comparar un valor contra múltiples casos específicos.",
        code: `<span class="kw">const</span> dia = <span class="str">"lunes"</span>;
<span class="kw">switch</span> (dia) {
  <span class="kw">case</span> <span class="str">"lunes"</span>:
    console.<span class="fn">log</span>(<span class="str">"Inicio semana"</span>); <span class="kw">break</span>;
  <span class="kw">case</span> <span class="str">"viernes"</span>:
    console.<span class="fn">log</span>(<span class="str">"¡Por fin!"</span>); <span class="kw">break</span>;
  <span class="kw">default</span>:
    console.<span class="fn">log</span>(<span class="str">"Día normal"</span>);
}`
      }
    ],
    code: `// 🟡 Condicionales
// --------------------------------

const temperatura = 28;

// if / else if / else
if (temperatura > 30) {
  console.log("Hace mucho calor 🌞");
} else if (temperatura >= 20) {
  console.log("Temperatura agradable 😊");
} else if (temperatura >= 10) {
  console.log("Un poco frío 🧥");
} else {
  console.log("Hace mucho frío 🥶");
}

// Ternario
const clima = temperatura >= 20 ? "cálido" : "frío";
console.log("El clima es:", clima);

// switch con el día
const dia = new Date().getDay(); // 0=Dom, 1=Lun...
switch (dia) {
  case 0: case 6:
    console.log("¡Es fin de semana! 🎉"); break;
  case 1:
    console.log("Lunes... 😴"); break;
  case 5:
    console.log("¡Viernes! 🙌"); break;
  default:
    console.log("Día entre semana 💼");
}`,
    challenge: "Escribe un condicional que imprima 'positivo', 'negativo' o 'cero' según el valor de una variable 'numero'."
  },

  {
    title: "Bucles",
    badge: "Lección 05",
    intro: "Los bucles repiten un bloque de código múltiples veces. Son esenciales para trabajar con colecciones y automatizar tareas repetitivas.",
    cards: [
      {
        title: "for — cuando sabes cuántas veces",
        desc: "El bucle más clásico. Tiene: inicialización, condición y actualización.",
        code: `<span class="kw">for</span> (<span class="kw">let</span> i = <span class="num">0</span>; i <span class="op"><</span> <span class="num">5</span>; i<span class="op">++</span>) {
  console.<span class="fn">log</span>(<span class="str">"Vuelta:"</span>, i);
}
<span class="cmt">// Vuelta: 0, 1, 2, 3, 4</span>`
      },
      {
        title: "while — mientras se cumpla",
        desc: "Repite mientras la condición sea verdadera. Cuidado con los bucles infinitos.",
        code: `<span class="kw">let</span> n = <span class="num">1</span>;
<span class="kw">while</span> (n <span class="op"><=</span> <span class="num">5</span>) {
  console.<span class="fn">log</span>(n);
  n<span class="op">++</span>;
}
<span class="cmt">// 1, 2, 3, 4, 5</span>`
      },
      {
        title: "for...of — iterar arrays",
        desc: "La forma más limpia de recorrer arrays y strings en JS moderno.",
        code: `<span class="kw">const</span> frutas = [<span class="str">"🍎"</span>, <span class="str">"🍌"</span>, <span class="str">"🍊"</span>];
<span class="kw">for</span> (<span class="kw">const</span> fruta <span class="kw">of</span> frutas) {
  console.<span class="fn">log</span>(fruta);
}
<span class="cmt">// 🍎, 🍌, 🍊</span>`
      }
    ],
    code: `// 🟡 Bucles
// --------------------------------

// for clásico — tabla del 3
console.log("=== Tabla del 3 ===");
for (let i = 1; i <= 10; i++) {
  console.log(\`3 x \${i} = \${3 * i}\`);
}

// while — cuenta regresiva
console.log("\\n=== Cuenta regresiva ===");
let cuenta = 5;
while (cuenta > 0) {
  console.log(cuenta + "...");
  cuenta--;
}
console.log("¡Despegue! 🚀");

// for...of — ciudades
console.log("\\n=== Ciudades de Colombia ===");
const ciudades = ["Bogotá", "Medellín", "Cali", "Cartagena"];
for (const ciudad of ciudades) {
  console.log("📍", ciudad);
}`,
    challenge: "Usa un bucle for para imprimir todos los números pares del 2 al 20."
  },

  {
    title: "Funciones",
    badge: "Lección 06",
    intro: "Las funciones son bloques de código reutilizables. Son fundamentales para organizar y estructurar tu programa, evitando la repetición.",
    cards: [
      {
        title: "Declaración de función",
        desc: "La forma tradicional. Puede ser llamada antes de su declaración (hoisting).",
        code: `<span class="kw">function</span> <span class="fn">saludar</span>(nombre) {
  <span class="kw">return</span> <span class="str">\`Hola, \${nombre}!\`</span>;
}
console.<span class="fn">log</span>(<span class="fn">saludar</span>(<span class="str">"Ana"</span>));
<span class="cmt">// "Hola, Ana!"</span>`
      },
      {
        title: "Arrow function (⟹)",
        desc: "Sintaxis moderna y compacta. Ideal para funciones cortas.",
        code: `<span class="kw">const</span> sumar = (a, b) <span class="op">=></span> a <span class="op">+</span> b;
<span class="kw">const</span> cuadrado = n <span class="op">=></span> n <span class="op">*</span> n;
<span class="kw">const</span> saludo = () <span class="op">=></span> <span class="str">"¡Hola!"</span>;

console.<span class="fn">log</span>(<span class="fn">sumar</span>(<span class="num">3</span>, <span class="num">4</span>));    <span class="cmt">// 7</span>
console.<span class="fn">log</span>(<span class="fn">cuadrado</span>(<span class="num">5</span>));  <span class="cmt">// 25</span>`
      },
      {
        title: "Parámetros por defecto",
        desc: "Puedes definir un valor por defecto en caso de que no se pase un argumento.",
        code: `<span class="kw">function</span> <span class="fn">potencia</span>(base, exp = <span class="num">2</span>) {
  <span class="kw">return</span> base <span class="op">**</span> exp;
}
console.<span class="fn">log</span>(<span class="fn">potencia</span>(<span class="num">3</span>));    <span class="cmt">// 9</span>
console.<span class="fn">log</span>(<span class="fn">potencia</span>(<span class="num">2</span>, <span class="num">10</span>)); <span class="cmt">// 1024</span>`
      }
    ],
    code: `// 🟡 Funciones
// --------------------------------

// Declaración clásica
function saludar(nombre = "visitante") {
  return \`¡Bienvenido, \${nombre}! 👋\`;
}

// Arrow functions
const sumar = (a, b) => a + b;
const esPar = n => n % 2 === 0;
const cuadrado = n => n * n;

// Función con múltiples líneas
const calcularIMC = (peso, altura) => {
  const imc = peso / (altura ** 2);
  if (imc < 18.5) return "Bajo peso";
  if (imc < 25)   return "Normal";
  if (imc < 30)   return "Sobrepeso";
  return "Obesidad";
};

console.log(saludar("Carlos"));
console.log("3 + 7 =", sumar(3, 7));
console.log("¿4 es par?", esPar(4));
console.log("5² =", cuadrado(5));
console.log("IMC:", calcularIMC(70, 1.75));`,
    challenge: "Crea una función 'celsius a fahrenheit': F = C × 9/5 + 32. Pruébala con 0, 100 y 37 grados."
  },

  {
    title: "Arrays",
    badge: "Lección 07",
    intro: "Los arrays (arreglos) almacenan listas ordenadas de valores. Son una de las estructuras de datos más usadas en JavaScript.",
    cards: [
      {
        title: "Crear y acceder",
        desc: "Los arrays se indexan desde 0. Usa .length para saber cuántos elementos tienen.",
        code: `<span class="kw">const</span> frutas = [<span class="str">"manzana"</span>, <span class="str">"pera"</span>, <span class="str">"uva"</span>];
console.<span class="fn">log</span>(frutas[<span class="num">0</span>]);       <span class="cmt">// "manzana"</span>
console.<span class="fn">log</span>(frutas.<span class="fn">length</span>);   <span class="cmt">// 3</span>
console.<span class="fn">log</span>(frutas.<span class="fn">at</span>(<span class="op">-</span><span class="num">1</span>));    <span class="cmt">// "uva"</span>`
      },
      {
        title: "Métodos esenciales",
        desc: "push/pop para agregar/quitar al final. shift/unshift para el inicio.",
        code: `<span class="kw">const</span> nums = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>];
nums.<span class="fn">push</span>(<span class="num">4</span>);      <span class="cmt">// [1,2,3,4]</span>
nums.<span class="fn">pop</span>();        <span class="cmt">// [1,2,3]</span>
nums.<span class="fn">unshift</span>(<span class="num">0</span>);  <span class="cmt">// [0,1,2,3]</span>
nums.<span class="fn">shift</span>();      <span class="cmt">// [1,2,3]</span>`
      },
      {
        title: "map, filter, reduce",
        desc: "Los tres métodos más poderosos para transformar arrays de forma funcional.",
        code: `<span class="kw">const</span> nums = [<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>,<span class="num">4</span>,<span class="num">5</span>];
<span class="kw">const</span> dobles = nums.<span class="fn">map</span>(n <span class="op">=></span> n <span class="op">*</span> <span class="num">2</span>);
<span class="kw">const</span> pares  = nums.<span class="fn">filter</span>(n <span class="op">=></span> n <span class="op">%</span> <span class="num">2</span> <span class="op">===</span> <span class="num">0</span>);
<span class="kw">const</span> suma   = nums.<span class="fn">reduce</span>((acc,n) <span class="op">=></span> acc<span class="op">+</span>n, <span class="num">0</span>);`
      }
    ],
    code: `// 🟡 Arrays
// --------------------------------

const notas = [85, 92, 78, 96, 61, 88];

// Acceso e info básica
console.log("Primera:", notas[0]);
console.log("Última:", notas.at(-1));
console.log("Total notas:", notas.length);

// map: transformar cada elemento
const conBono = notas.map(n => n + 3);
console.log("Con bono:", conBono);

// filter: filtrar elementos
const aprobados = notas.filter(n => n >= 70);
console.log("Aprobados:", aprobados);

// reduce: acumular un valor
const suma = notas.reduce((acc, n) => acc + n, 0);
const promedio = suma / notas.length;
console.log("Promedio:", promedio.toFixed(1));

// find y includes
const alta = notas.find(n => n > 90);
console.log("Primera nota > 90:", alta);
console.log("¿Hay 96?", notas.includes(96));

// sort
const ordenadas = [...notas].sort((a, b) => a - b);
console.log("Ordenadas:", ordenadas);`,
    challenge: "Dado un array de precios, filtra los mayores a 100, duplícalos y calcula el total."
  },

  {
    title: "Objetos",
    badge: "Lección 08",
    intro: "Los objetos almacenan colecciones de propiedades clave-valor. Son la base de JavaScript y se usan para representar entidades del mundo real.",
    cards: [
      {
        title: "Crear objetos",
        desc: "Un objeto es una colección de propiedades. Accede con punto o corchetes.",
        code: `<span class="kw">const</span> persona = {
  nombre: <span class="str">"Ana"</span>,
  edad: <span class="num">28</span>,
  activa: <span class="kw">true</span>
};
console.<span class="fn">log</span>(persona.nombre);    <span class="cmt">// "Ana"</span>
console.<span class="fn">log</span>(persona[<span class="str">"edad"</span>]); <span class="cmt">// 28</span>`
      },
      {
        title: "Métodos en objetos",
        desc: "Las funciones dentro de un objeto se llaman métodos. Usa 'this' para referirte al propio objeto.",
        code: `<span class="kw">const</span> auto = {
  marca: <span class="str">"Toyota"</span>,
  velocidad: <span class="num">0</span>,
  <span class="fn">acelerar</span>() {
    <span class="kw">this</span>.velocidad <span class="op">+=</span> <span class="num">10</span>;
  }
};
auto.<span class="fn">acelerar</span>();
console.<span class="fn">log</span>(auto.velocidad); <span class="cmt">// 10</span>`
      },
      {
        title: "Destructuring y spread",
        desc: "Formas modernas de trabajar con objetos de manera limpia y eficiente.",
        code: `<span class="kw">const</span> { nombre, edad } = persona;
<span class="kw">const</span> copia = { <span class="op">...</span>persona, ciudad: <span class="str">"Bogotá"</span> };
<span class="kw">const</span> llaves = Object.<span class="fn">keys</span>(persona);`
      }
    ],
    code: `// 🟡 Objetos
// --------------------------------

const estudiante = {
  nombre: "Carlos",
  edad: 22,
  ciudad: "Medellín",
  notas: [88, 92, 79, 95],
  saludar() {
    return \`Hola, soy \${this.nombre} de \${this.ciudad}\`;
  },
  promedio() {
    const suma = this.notas.reduce((a, b) => a + b, 0);
    return (suma / this.notas.length).toFixed(1);
  }
};

console.log(estudiante.saludar());
console.log("Promedio:", estudiante.promedio());

// Destructuring
const { nombre, ciudad } = estudiante;
console.log(\`\${nombre} vive en \${ciudad}\`);

// Copiar y extender
const estudianteActualizado = {
  ...estudiante,
  edad: 23,
  universidad: "UNAL"
};
console.log("Edad actualizada:", estudianteActualizado.edad);

// Claves y valores
console.log("Propiedades:", Object.keys(estudiante));`,
    challenge: "Crea un objeto 'producto' con nombre, precio y stock. Agrega un método 'descuento(pct)' que retorne el precio con descuento."
  }
];

// ===== ESTADO =====
let currentLesson = 0;
let completed = new Set();

// ===== DOM =====
const lessonTitle  = document.getElementById("lesson-title");
const lessonIntro  = document.getElementById("lesson-intro");
const conceptCards = document.getElementById("concept-cards");
const editor       = document.getElementById("editor");
const output       = document.getElementById("output");
const lineNumbers  = document.getElementById("line-numbers");
const lessonBadge  = document.getElementById("lesson-badge");
const progressFill = document.getElementById("progress-fill");
const progressPct  = document.getElementById("progress-pct");
const challengeBox = document.getElementById("challenge-box");
const runBtn       = document.getElementById("run-btn");
const clearBtn     = document.getElementById("clear-btn");
const copyBtn      = document.getElementById("copy-btn");
const prevBtn      = document.getElementById("prev-btn");
const nextBtn      = document.getElementById("next-btn");
const hamburger    = document.getElementById("hamburger");
const sidebar      = document.querySelector(".sidebar");
const navItems     = document.querySelectorAll(".nav-item");

// ===== CARGAR LECCIÓN =====
function loadLesson(idx) {
  currentLesson = idx;
  const lesson = lessons[idx];

  // Update UI
  lessonTitle.textContent = lesson.title;
  lessonIntro.textContent = lesson.intro;
  lessonBadge.textContent = lesson.badge;
  editor.value = lesson.code;
  output.innerHTML = "";

  // Cards
  conceptCards.innerHTML = "";
  lesson.cards.forEach((card, i) => {
    const el = document.createElement("div");
    el.className = "card";
    el.style.animationDelay = `${0.05 + i * 0.07}s`;
    el.innerHTML = `
      <div class="card-title">${card.title}</div>
      <div class="card-desc">${card.desc}</div>
      <div class="card-code">${card.code}</div>
    `;
    conceptCards.appendChild(el);
  });

  // Challenge
  if (lesson.challenge) {
    challengeBox.innerHTML = `
      <div class="challenge-title">💡 Reto</div>
      <div class="challenge-desc">${lesson.challenge}</div>
    `;
    challengeBox.classList.add("visible");
  } else {
    challengeBox.classList.remove("visible");
  }

  // Nav items
  navItems.forEach((item, i) => {
    item.classList.toggle("active", i === idx);
  });

  updateLineNumbers();
  updateProgress();

  // Mobile: close sidebar
  sidebar.classList.remove("open");
}

// ===== LINE NUMBERS =====
function updateLineNumbers() {
  const lines = editor.value.split("\n").length;
  lineNumbers.innerHTML = Array.from({ length: lines }, (_, i) =>
    `<div>${i + 1}</div>`
  ).join("");
}

editor.addEventListener("input", updateLineNumbers);
editor.addEventListener("scroll", () => {
  lineNumbers.scrollTop = editor.scrollTop;
});

// Soporte Tab en el editor
editor.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    e.preventDefault();
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    editor.value = editor.value.substring(0, start) + "  " + editor.value.substring(end);
    editor.selectionStart = editor.selectionEnd = start + 2;
    updateLineNumbers();
  }
});

// ===== EJECUTAR CÓDIGO =====
function runCode() {
  const code = editor.value;
  output.innerHTML = "";

  const logs = [];
  const originalLog   = console.log;
  const originalWarn  = console.warn;
  const originalError = console.error;

  console.log = (...args) => {
    logs.push({ type: "log", msg: args.map(formatArg).join(" ") });
  };
  console.warn = (...args) => {
    logs.push({ type: "warn", msg: args.map(formatArg).join(" ") });
  };
  console.error = (...args) => {
    logs.push({ type: "error", msg: args.map(formatArg).join(" ") });
  };

  try {
    // eslint-disable-next-line no-new-func
    new Function(code)();
    if (logs.length === 0) {
      logs.push({ type: "warn", msg: "⚠ No hubo salida en la consola." });
    }
    completed.add(currentLesson);
    updateProgress();
    navItems[currentLesson].classList.add("done");
  } catch (err) {
    logs.push({ type: "error", msg: "❌ Error: " + err.message });
  } finally {
    console.log  = originalLog;
    console.warn = originalWarn;
    console.error = originalError;
  }

  logs.forEach(({ type, msg }) => {
    const div = document.createElement("div");
    div.className = `out-line ${type}`;
    div.textContent = msg;
    output.appendChild(div);
  });

  output.scrollTop = output.scrollHeight;
}

function formatArg(arg) {
  if (arg === null) return "null";
  if (arg === undefined) return "undefined";
  if (typeof arg === "object") {
    try { return JSON.stringify(arg, null, 2); }
    catch { return String(arg); }
  }
  return String(arg);
}

// ===== PROGRESO =====
function updateProgress() {
  const pct = Math.round((completed.size / lessons.length) * 100);
  progressFill.style.width = pct + "%";
  progressPct.textContent = pct + "%";
}

// ===== COPY =====
function copyCode() {
  navigator.clipboard.writeText(editor.value).then(() => {
    showToast("Código copiado ✓");
  });
}

function showToast(msg) {
  const t = document.createElement("div");
  t.className = "toast";
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2000);
}

// ===== NAV =====
navItems.forEach(item => {
  item.addEventListener("click", () => {
    const idx = parseInt(item.dataset.lesson);
    loadLesson(idx);
  });
});

prevBtn.addEventListener("click", () => {
  if (currentLesson > 0) loadLesson(currentLesson - 1);
});

nextBtn.addEventListener("click", () => {
  if (currentLesson < lessons.length - 1) loadLesson(currentLesson + 1);
});

runBtn.addEventListener("click", runCode);
clearBtn.addEventListener("click", () => { output.innerHTML = ""; });
copyBtn.addEventListener("click", copyCode);

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

// Keyboard shortcut: Ctrl/Cmd + Enter to run
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
    e.preventDefault();
    runCode();
  }
});

// ===== INIT =====
loadLesson(0);
