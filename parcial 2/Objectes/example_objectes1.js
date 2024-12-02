function Cotxe(m,c,cc){ 
    // Propietats 
    this.marca=m; 
    this.color=c; 
    this.cc=cc; 
    // Métodes 
    this.potent = function () { 
        var text = ""; 
        if (this.cc > 1500) { 
            text = "Molt potent!"; 
        } else { 
            text = "Normalet"; 
        } 
        return (text); 
    } 
} 
cotxe1 = new Cotxe("Seat","groc",1500); 
cotxe2 = new Cotxe("Opel","blanc",1800); 
document.write(cotxe1.cc); 
document.write("<br>"); 
document.write(cotxe1.potent());