import fs from 'fs';

export const deleteFile = async(filename: string)=> {

    try{
        //verificar se o arquivo existe
        await fs.promises.stat(filename);
    }catch{
        return;
    }
    //remover o arquivo
    await fs.promises.unlink(filename)
}