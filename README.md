# Impressora Térmica em Node.js

Código em Node.js para impressoras térmicas EPSON e STAR para impressão.

### Instalação

```bash
$ npm install node-thermal-printer
```

### Para Linux

Instale este pacote caso não tenha ainda em seu linux.

```bash
$ sudo apt-get install build-essential
```
### Todos Recursos
```js
const ThermalPrinter = require("../node-thermal-printer").printer;
const PrinterTypes = require("../node-thermal-printer").types;

let printer = new ThermalPrinter({
  type: PrinterTypes.STAR,                                  // Tipo de impressora: 'star' ou 'epson'
  interface: 'tcp://xxx.xxx.xxx.xxx',                       // Endereço da impressora
  characterSet: 'SLOVENIA',                                 // Character set da impressora - padrão: SLOVENIA
  removeSpecialCharacters: false,                           // Remover caractéres especiais - padrão: false
  lineCharacter: "=",                                       // Selecionar caracter para linha - default: "-"
  options:{                                                 // Opções adicionais
    timeout: 5000                                           // Timeout para conexão [para impressoras online] - padrão: 3000
  }
});

let isConnected = await printer.isPrinterConnected();       // Verifica se impressora está online retornando boleano
let execute = await printer.execute();                      // Executa todos os comandos. Retorna success ou error
let raw = await printer.raw(Buffer.from("Hello world"));    // Imprime instantâneamente. Retorna success ou error
printer.print("Hello World");                               // Texto
printer.println("Hello World");                             // Texto em nova linha
printer.openCashDrawer();                                   // Abre a caixa registradora
printer.cut();                                              // Corta o papel
printer.partialCut();                                       // Corta um papel deixando um pequeno pedaço no meio
printer.beep();                                             // Bep (som) da impressora 
printer.upsideDown(true);                                   // Conteudo impresso virado 180º
printer.setCharacterSet("SLOVENIA");                        // Definir character set
printer.setPrinterDriver(Object)                            // Definir drive da impressora

printer.bold(true);                                         // Texto em negrito
printer.invert(true);                                       // Inverter cor do texto e background
printer.underline(true);                                    // Sublinhar texto com 1 ponto
printer.underlineThick(true);                               // Sublinhar texto com 2 pontos
printer.drawLine();                                         // Desenhar uma linha
printer.newLine();                                          // Quebra de linha

printer.alignCenter();                                      // Centralizar textos
printer.alignLeft();                                        // Alinhar textos a esquerda
printer.alignRight();                                       // Alinhar textos a direita

printer.setTypeFontA();                                     // Definir fonte do tipo A
printer.setTypeFontB();                                     // Definir fonte do tipo B

printer.setTextNormal();                                    // Definir texto normal
printer.setTextDoubleHeight();                              // Definir texto dobro de altura
printer.setTextDoubleWidth();                               // Definir texto dobro de largura
printer.setTextQuadArea();                                  // Definir texto em área quadrada
printer.setTextSize(7,7);                                   // Definir altura (0-7) e largura (0-7) do texto

printer.leftRight("Left", "Right");                         // Imprimir textos na esquerda e na direita
printer.table(["One", "Two", "Three"]);                     // Imprimir tabelas igualmentes
printer.tableCustom([                                       // Imprimir textos customizados (texto, alinhamento, largura, colunas, negrito)
  { text:"Left", align:"LEFT", width:0.5 },
  { text:"Center", align:"CENTER", width:0.25, bold:true },
  { text:"Right", align:"RIGHT", cols:8 }
]);

printer.code128("Code128");                                 // Imprimir código de barras Code128
printer.printQR("QR CODE");                                 // Imprimir QR Code
await printer.printImage('./assets/olaii-logo-black.png');  // Imprimir imagem PNG 

print.clear();                                              // Limpar valores de textos
print.getText();                                            // Retorna o valor da string do buffer da impressora
print.getBuffer();                                          // Retorna o buffer da impressora
print.setBuffer(newBuffer);                                 // Defina o buffer da impressora como uma cópia do newBuffer
print.getWidth();                                           // Obter número de caracteres em uma linha
```
### Como executar (Para EPSON)
Impressora online
```bash
node print.js tcp://xxx.xxx.xxx.xxx
```
Nome da impressora via módulo
```bash
node print.js 'printer:Minha impressora'
```
Porta local ou arquivo
```bash
node print.js '/dev/usb/lp0'
```
