const fs = require('fs');


const crearArchivo = async(base = 5) => {

    try{
        // return new Promise((reolve, reject) =>{
        console.log('===============');
        console.log('    tabla del', base);
        console.log('===============');
        
        let salida = '';
    
        // const multipliccion = () =>{
            for (i=1; i<=10; i++){
                // console.log(`${base} * ${i} = ${base*i}`);
                salida += `${base} x ${ i } = ${ base * i}\n`
            }
        // }
        
        // multipliccion();
        
        console.log(salida);
        
        // fs.writeFile('tabla-5.txt', salida, (err) => {
        //     if (err) throw err;
        
        //     console.log('archivo creado');
        
        // })
        
        fs.writeFileSync(`salida/tabla-${base}.txt`, salida)
        
        // reolve(`tabla-${base}.txt creada`);
        return `tabla-${base}.txt`;
        // }
    }
    catch(err){
        throw err;
    }


 
}

module.exports = {
    crearArchivo
}