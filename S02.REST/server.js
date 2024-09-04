import chalk from 'chalk';
import app from './src/app.js';



const PORT = 3000;
app.listen(PORT,(err)=> {
    //notre serveur est démarré
    // a faire:()
    if(err){
        console.log(chalk.red(`${err}`));
        process.exit(1);
    }

    console.log(`Server listening on port  : ${PORT}`);
    
});
