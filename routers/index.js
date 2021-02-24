var userRouter = require('./userRouter');

function initRouter(app){
    app.use("/user", userRouter);
    return app;
}

module.exports = initRouter