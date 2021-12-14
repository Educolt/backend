import { app } from './App';

// import app sequelize db
import { db } from './database/db'

app.listen(3333,async  () => {
    // sync database
    await db.sync();
    console.log('Application start running 🚀!')
})

