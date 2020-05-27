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

let isConnected = await printer.isPrinterConnected();       // Check if printer is connected, return bool of status
let execute = await printer.execute();                      // Executes all the commands. Returns success or throws error
let raw = await printer.raw(Buffer.from("Hello world"));    // Print instantly. Returns success or throws error
printer.print("Hello World");                               // Append text
printer.println("Hello World");                             // Append text with new line
printer.openCashDrawer();                                   // Kick the cash drawer
printer.cut();                                              // Cuts the paper (if printer only supports one mode use this)
printer.partialCut();                                       // Cuts the paper leaving a small bridge in middle (if printer supports multiple cut modes)
printer.beep();                                             // Sound internal beeper/buzzer (if available)
printer.upsideDown(true);                                   // Content is printed upside down (rotated 180 degrees)
printer.setCharacterSet("SLOVENIA");                        // Set character set - default set on init
printer.setPrinterDriver(Object)                            // Set printer drive - default set on init

printer.bold(true);                                         // Set text bold
printer.invert(true);                                       // Background/text color inversion
printer.underline(true);                                    // Underline text (1 dot thickness)
printer.underlineThick(true);                               // Underline text with thick line (2 dot thickness)
printer.drawLine();                                         // Draws a line
printer.newLine();                                          // Insers break line

printer.alignCenter();                                      // Align text to center
printer.alignLeft();                                        // Align text to left
printer.alignRight();                                       // Align text to right

printer.setTypeFontA();                                     // Set font type to A (default)
printer.setTypeFontB();                                     // Set font type to B

printer.setTextNormal();                                    // Set text to normal
printer.setTextDoubleHeight();                              // Set text to double height
printer.setTextDoubleWidth();                               // Set text to double width
printer.setTextQuadArea();                                  // Set text to quad area
printer.setTextSize(7,7);                                   // Set text height (0-7) and width (0-7)

printer.leftRight("Left", "Right");                         // Prints text left and right
printer.table(["One", "Two", "Three"]);                     // Prints table equaly
printer.tableCustom([                                       // Prints table with custom settings (text, align, width, cols, bold)
  { text:"Left", align:"LEFT", width:0.5 },
  { text:"Center", align:"CENTER", width:0.25, bold:true },
  { text:"Right", align:"RIGHT", cols:8 }
]);

printer.code128("Code128");                                 // Print code128 bar code
printer.printQR("QR CODE");                                 // Print QR code
await printer.printImage('./assets/olaii-logo-black.png');  // Print PNG image

print.clear();                                              // Clears printText value
print.getText();                                            // Returns printer buffer string value
print.getBuffer();                                          // Returns printer buffer
print.setBuffer(newBuffer);                                 // Set the printer buffer to a copy of newBuffer
print.getWidth();                                           // Get number of characters in one line
```



