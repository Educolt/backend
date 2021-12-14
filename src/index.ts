// import Application
import { app } from './App';

// import app sequelize db
import { db } from './database/db'

app.listen(process.env.APP_PORT,async  () => {
    // sync database
    await db.sync();

    // log on console that app is running !
    console.log('Application start running 🚀!')
})

