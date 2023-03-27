const alunos = require('../escola/alunos')
const cursos = require('../escola/cursos')

function getCursos() {
    return cursos
}

function getTodosAlunos(){
    return alunos
}

function getAluno(matricula){
    let json = {}
    let status = false
    alunos.alunos.forEach(function(aluno){
        if(aluno.matricula == matricula){
            json = {aluno: aluno}
            status = true
        }
    })
    if(status){
        return json
    }else{
        return status
    }
}

function getAlunosCurso(curso){
    let json = {}
    let array = []
    let status = false
    alunos.alunos.forEach(function(aluno){
        if(aluno.curso[0].sigla == curso.toUpperCase()){
            array.push(aluno)
            status = true
        }
    })
    json = {curso: array}

    if(status){
       return json
    }else{
        return status
    }
}

// console.log(getAlunosCurso('DS'));

function getStatusAluno(statusDoAluno){
    let json = {}
    let array = []
    let status = false

    let statusCase = statusDoAluno[0].toUpperCase() + statusDoAluno.substring(1).toLowerCase()


    alunos.alunos.forEach(function(aluno){
        if(aluno.status == statusCase){
            array.push(aluno)
            status = true
        }
    })
    json = {status: array}

    if(status){
        return json
    }else{
        return status
    }
}

module.exports = {
    getCursos,
    getTodosAlunos,
    getAluno,
    getAlunosCurso,
    getStatusAluno
}