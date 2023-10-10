        function calculerIMC() {
            var age = parseFloat(document.getElementById("age").value);
            var taille = parseFloat(document.getElementById("taille").value);
            var poids = parseFloat(document.getElementById("poids").value);

            if (isNaN(age) || isNaN(taille) || isNaN(poids) || age <= 0 || taille <= 0 || poids <= 0) {
                alert("Veuillez entrer des valeurs valides pour l'âge, la taille et le poids.");
                return;
            }

            var imc = poids / Math.pow(taille / 100, 2);
            var interpretation = "";

            if (age < 18) {
                interpretation = "L'IMC n'est pas adapté aux enfants et aux adolescents.";
            } else if (imc < 18.5) {
                interpretation = "IMC trop bas (maigreur).Prendre RDV";
            } else if (imc < 24.9) {
                interpretation = "IMC normal (poids santé).";
            } else if (imc < 29.9) {
                interpretation = "Surpoids.Prendre RDV";
            } else {
                interpretation = "Obésité.Prendre RDV";
            }

    document.getElementById("resultat").value = "Votre IMC est de " + imc.toFixed(2) 
    
    document.getElementById("phrases").value = interpretation;
        }