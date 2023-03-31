let alunos = require('../escola/alunos')
let cursos = require('../escola/cursos')

let guardaAlunos = alunos

function getCursos() {
    return cursos
}

function getTodosAlunos() {
    alunos = guardaAlunos
    return alunos
}

function getAluno(matricula) {
    let json = {}
    let status = false
    alunos.alunos.forEach(function (aluno) {
        if (aluno.matricula == matricula) {
            json = { aluno: aluno }
            status = true
        }
    })
    if (status) {
        return json
    } else {
        return status
    }
}

function getAlunosCurso(curso) {
    alunos = guardaAlunos

    let json = {}
    let array = []
    let status = false
    alunos.alunos.forEach(function (aluno) {
        if (aluno.curso[0].sigla == curso.toUpperCase()) {
            array.push(aluno)
            status = true
        }
    })
    json = { alunos: array }

    if (status) {
        return json
    } else {
        return status
    }
}


function getStatusAluno(statusDoAluno) {
    alunos = guardaAlunos

    let json = {}
    let array = []
    let status = false

    let statusCase = statusDoAluno[0].toUpperCase() + statusDoAluno.substring(1).toLowerCase()


    alunos.alunos.forEach(function (aluno) {
        if (aluno.status == statusCase) {
            array.push(aluno)
            status = true
        }
    })
    json = { status: array }

    if (status) {
        return json
    } else {
        return status
    }
}

function getDataAlunos(dataConclusao, jsonAlunos) {
    alunos = guardaAlunos

    let json = {}
    let array = []
    let status = false

    if (jsonAlunos != undefined) {
        alunos = jsonAlunos
    }

    alunos.alunos.forEach(function (aluno) {
        if (dataConclusao == aluno.curso[0].conclusao) {
            array.push(aluno)
            status = true
        }
    })
    json = { alunos: array }
    if (status) {
        return json
    } else {
        return status
    }

}

module.exports = {
    getCursos,
    getTodosAlunos,
    getAluno,
    getAlunosCurso,
    getStatusAluno,
    getDataAlunos
}