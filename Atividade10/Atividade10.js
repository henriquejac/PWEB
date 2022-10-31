var Aluno1 = {};
Aluno1.RA = '0030482111001';
Aluno1.Nome = 'Henrique Jacquier';

var Aluno2 = {RA: '0030482111002', Nome: 'Henrique Modesto'};

var Aluno3 = new Object();
Aluno3["RA"] =  '0030482111003';
Aluno3["Nome"] =  'Henrique Euclides';

alert("Aluno 1: " + JSON.stringify(Aluno1) + "\n" + 
        "Aluno 2: " + JSON.stringify(Aluno2) + "\n" + 
        "Aluno 3: " + JSON.stringify(Aluno3));

console.log("Aluno 1: " + JSON.stringify(Aluno1) + "\n" + 
        "Aluno 2: " + JSON.stringify(Aluno2) + "\n" + 
        "Aluno 3: " + JSON.stringify(Aluno3));

