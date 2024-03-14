export function listarAlunos(chamadaDeAlunos = []){

    console.log("> listarAlunos");

    chamadaDeAlunos.forEach(aluno => {
        console.log(`>> Aluno: ${aluno.nome} RA: ${aluno.numeroChamada}`);
    })
}

export function buscarAlunoPeloNumeroDaChamada(numeroChamada, chamadaDeAlunos = []) {

    console.log("> buscarAlunoPeloNumeroDaChamada");

    const aluno = chamadaDeAlunos.find(aluno => aluno.numeroChamada == numeroChamada)

    console.log(">> Aluno encontrado: ", aluno);

    return aluno
} 

export function listarAlunosAprovados(chamadaDeAlunos = []){

    console.log("> listarAlunosAprovados");

    chamadaDeAlunos.forEach(aluno => {

        if(alunoEstaAprovado(aluno)) {
            console.log(`>> Aluno: ${aluno.nome} esta aprovado`);
        }
        
    })
}

export function listarAlunosReprovados(chamadaDeAlunos = []){

    console.log("> listarAlunosReprovados");

    chamadaDeAlunos.forEach(aluno => {

        if(!alunoEstaAprovado(aluno)) {
            console.log(`>> Aluno: ${aluno.nome} esta reprovado`);
        }
        
    })
}


export function listarAlunoPorMesMatricula(chamadaDeAlunos = [], mes, ano) {
    console.log("> listarAlunoPorMesMatricula");

    chamadaDeAlunos.forEach(aluno => {
        const dataMatriculaArr = aluno.matriculadoEm.split("/")
        const anoMatricula = dataMatriculaArr[0]
        const mesMatricula = dataMatriculaArr[1]

        // console.log({
        //     dataMatriculaArr,
        //     anoMatricula,
        //     mesMatricula
        // });

        if(ano == anoMatricula && mes == mesMatricula) {
            console.log(">> Aluno", aluno.nome);
            console.log(">> MatriculadoEm", aluno.matriculadoEm);
            console.log("\n");
    
        }
    })
}

function alunoEstaAprovado(aluno) {
    const materiasAprovadas = aluno.materias.map(materia => alunoAprovadoNaMateria(materia))
    if(materiasAprovadas.some(aprovadoNaMateria => aprovadoNaMateria == false)) {
        return false
    }

    return true
}

function alunoAprovadoNaMateria(materia) {
    if(materia.nota >= 6 && materia.presenca >= 75) {
        return true
    } 

    return false
}

