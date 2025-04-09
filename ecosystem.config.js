
        module.exports = {
            apps: [
                {
                    name: "nodeadminapi0",
                    script: "src/app.js",
                    env: {
                        SQLITE_DB_PATH: "./database.sqlite",
                        PORT: 3000,
                        ORG_NAME: "MDH",
                        DEFAULT_DESCRIPTION: "Default Description"
                    }
                }
            ]
        };
        