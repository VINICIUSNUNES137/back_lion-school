const model = require('./model/escola.js')

const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()


app.use((request, response, next) => {

  response.header("Access-Control-Allow-Origin", "*")

  response.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  app.use(cors())

  next()
})

app.get("/v1/lion-school/cursos", cors(), async function (request, response, next) {
  
    let cursos = model.getCursos()

    if(cursos){
      response.json(cursos);
      response.status(200);
    }else{
      response.status(500)
    }
})

app.get("/v1/lion-school/alunos", cors(), async function (request, response, next) {
  
    let alunos = model.getTodosAlunos()

    if(alunos){
      response.json(alunos);
      response.status(200);
    }else{
      response.status(500)
    }
})

app.get("/v1/lion-school/alunos/:matricula", cors(), async function( request, response, next){
    // '/:uf' é uma variavel utilizada para passagem de valor
  
    // siglaEstado recebe o conteudo da variavel :uf
    let matricula = request.params.matricula
    let statusCode
    let dadosAluno = {}
  
    if(matricula == '' || matricula == undefined || isNaN(matricula)){
      statusCode = 400
      dadosAluno.message =  "Não é possível processar a requisição, pois a matricula do aluno não foi informada ou não é válida."
    }else{
      let aluno = model.getAluno(matricula)
        if(aluno){
          statusCode = 200
          dadosAluno = aluno
        }else{
          statusCode = 404
        }
    }
    response.status(statusCode)
    response.json(dadosAluno)
  })

  app.get("/v1/lion-school/alunos-curso/:curso", cors(), async function( request, response, next){
    // '/:uf' é uma variavel utilizada para passagem de valor
  
    // siglaEstado recebe o conteudo da variavel :uf
    let siglaCurso = request.params.curso
    let statusCode
    let dadosAluno = {}
  
    if(siglaCurso == '' || siglaCurso == undefined || !isNaN(siglaCurso)){
      statusCode = 400
      dadosAluno.message =  "Não é possível processar a requisição, pois a sigla do curso não foi informada ou não é válida."
    }else{
      let aluno = model.getAlunosCurso(siglaCurso)
        if(aluno){
          statusCode = 200
          dadosAluno = aluno
        }else{
          statusCode = 404
        }
    }
    response.status(statusCode)
    response.json(dadosAluno)
  })


app.listen(8080, function () {
    console.log("Servidor aguardando requisições");
  })
  