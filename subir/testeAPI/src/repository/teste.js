import {connection} from './connection.js';

export async function buscarIngresso(ingresso){

    let command=`
        Select * from TB_INSCRICAO
       `

    const [resp]= await connection.query(command, []);

    return (resp);
}