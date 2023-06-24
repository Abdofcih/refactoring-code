
const syncDB = (sequelize)=>{
    // Sync the models with the database
    sequelize.sync().then(() => {
        console.log('Database synchronized');
    }).catch((error) => {
        console.error('Error synchronizing database:', error);
    });
    }

module.exports = syncDB