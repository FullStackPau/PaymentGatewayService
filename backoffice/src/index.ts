import app from "./app";
import "dotenv/config";


const startServer = () => {
    try{
        app.listen(process.env.PORT, () => {
            console.log(`Server Started in PORT: ${process.env.PORT}`);
        });
    }catch(e){
        console.log(`Server Error Starting in PORT ${process.env.PORT}`);
    }
}

startServer();