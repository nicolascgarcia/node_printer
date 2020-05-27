
const ThermalPrinter = require("./node_modules/node-thermal-printer").printer;
const Types = require("./node_modules/node-thermal-printer").types;

async function printcomprovante() {
  let printer = new ThermalPrinter({
    type: Types.EPSON,
    interface: '/dev/usb/lp0'
  });

  printer.alignCenter();
  await printer.printImage('./img/logo.png');
  printer.println("Teste de impressão TM-T20");

  printer.newLine();   
  printer.newLine();   
  printer.leftRight("Valor Produto", "R$100,00");
  printer.leftRight("Valor Produto 1", "R$200,00"); 

  printer.newLine(); 
  printer.newLine();   
  printer.alignCenter();
  printer.println("Escaneie o QR Code a baixo:");

  printer.newLine(); 
  printer.printQR("https://scopostudio.com/imobiliaria/", {
    cellSize: 8,
  }); 

  printer.newLine(); 
  printer.println("Quarta-feira 27 de maio de 2020 12:30:00 PM");

  printer.cut();
  printer.execute();

}

printcomprovante()  