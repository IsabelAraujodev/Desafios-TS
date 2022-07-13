const funcionario = {
    code: 10,
    name: 'John'
};

const funcionario2: {code: number, name: string} = {
    code: 10,
    name: 'John'
}

interface Funcionario {
    code: number,
    name: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.code = 10;
funcionarioObj.name = 'John';

const funcionarioObj2: Funcionario = {
    code: 10,
    name: 'John'
}