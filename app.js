const express = require('express')
const path = require('path')

const checklistsRouter = require('./src/routes/checklist')
const taskRouter = require('./src/routes/tasks')
const rootRouter = require('./src/routes/index')
const methodOverride = require('method-override')

require('./config/database') //sem variável o node roda o arquivo
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method',{ methods: ['POST','GET']}))

app.use(express.static(path.join(__dirname,'public'))) //todos os arquivos estáticos vão fica na pasta public


app.set('views',path.join(__dirname,'src/views')) // todas as views vão ficar na pasta views
app.set('view engine','ejs') // setando a engine de views dinâmicas é o EJS

app.use('/',rootRouter)
app.use('/checklists',checklistsRouter)
app.use('/checklists', taskRouter.checklistDependent)
app.use('/tasks',taskRouter.simple)


app.listen(3000,()=>{
    console.log(`Servidor foi iniciado na porta http://localhost:3000`)
})