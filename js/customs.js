function cylinder() { 
      var r=document.forms.formFormula.text1.value;
      var h=document.forms.formFormula.text2.value;
      var v=Math.PI*r*r*h;
      document.forms.formFormula.text3.value=v;
      console.log("Объем цилиндра-->",v);
      return;
}
