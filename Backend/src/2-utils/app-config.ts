class AppConfig {

    public connectionString = "mongodb://127.0.0.1:27017/client-management"

    public port = 3001
    public frontEndUrl = "http://localhost:4200"
}



const appConfig = new AppConfig()
export default appConfig