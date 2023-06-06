// 引入 bcrypt
const bcrypt = require('bcrypt');
const prompt = require('prompt-sync')();

// 用戶輸入密碼
const password = prompt("輸入密碼: ");

// 設定 saltRounds
const saltRounds = 10;

// 產生 salt
bcrypt.genSalt(saltRounds,(err, salt)=>{
    if(err) {
        console.log(err);
        return;
    }

    // 將用戶輸入的密碼和 salt 做結合並加密
    bcrypt.hash(password, salt, (err, hash)=>{
        if(err) {
            console.log(err);
            return;
        }

        // 加密後的密碼
        console.log("Encrypted password: " + hash);
    });
});
