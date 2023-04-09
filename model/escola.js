let alunos = require('../escola/alunos')
let cursos = require('../escola/cursos')

let guardaAlunos = alunos

function getCursos() {
    return cursos
}

function getCursoID(siglaCurso) {
    let json = {}
    let status = false
    cursos.cursos.forEach(function (curso) {
        if (curso.sigla == siglaCurso.toUpperCase()) {
            let statusCase = curso.nome.slice(17)
            json = { curso: statusCase }
            status = true
        }
    })

    if (status) {
        return json
    } else {
        return status
    }
}

console.log(getCursoID('ds'));

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


function getStatusAluno(statusDoAluno, jsonAlunos) {
    alunos = guardaAlunos

    let json = {}
    let array = []
    let status = false

    if (jsonAlunos != undefined) {
        alunos = jsonAlunos
    }


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

// console.log(getStatusAluno('cursando', getAlunosCurso('ds')));

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

// console.log(getCursoID('rds'));

module.exports = {
    getCursos,
    getTodosAlunos,
    getAluno,
    getAlunosCurso,
    getStatusAluno,
    getDataAlunos,
    getCursoID
}