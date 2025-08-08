const nome = "Luis Guilherme"
let idade = 15
let city = "General Sampaio"
let Profissao = "Estudante"
let anoatual = 2025
let salario = 200
let bonus = 100
let salabonus = (salario) + (bonus)
let anoto
alert(`
    =========Relatório do usuário=========
    Nome: ${nome}
     Idade: ${idade}
     Ano de nascimento: ${anoatual - idade}
     Cidade: ${city}
     Profissão: ${Profissao}    
    
     Sálario base: U$${salario}
     Bônus: U$${bonus}
     Total Mensal: U$${salario + bonus}    
     Total ano: U$${ salabonus * 12}
     Total anual: U$${salabonus * 12 * 2}    
    =====================================
    `)
