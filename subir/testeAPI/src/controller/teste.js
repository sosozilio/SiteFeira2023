import { Router } from "express";
import { buscarIngresso } from "../repository/teste.js";

const endpoints=Router();

endpoints.get('/ingresso', async (req,resp) => {

    try{

        const resposta=await buscarIngresso();

        // if(resposta==0){

        //     throw new Error('Este ingresso é inválido, verifique as informações e tente novamente');
        // }

        // if(resposta==1){

        //     resp.send('Ingresso válido');
        // }
    }

    catch(err){

        resp.status(404).send({

            erro:err.message
        })
    }
});

export default endpoints;