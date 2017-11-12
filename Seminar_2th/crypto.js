const crypto = require('crypto');
let string = 'This is password';

//1. 단순 해싱으로 비밀번호 해싱
let hashAlgorithm = crypto.createHash('sha512');
//crypto.createHash(); 메소드로 해싱알고리즘 선택.

let hashing = hashAlgorithm.update(string);
//선택된 알고리즘으로 해싱
console.log(" === hasing === ")
console.log(hashing + "\n");
let hashedString = hashing.digest('base64');
//표시할 인코딩 설정. 

console.log(" === Hashed String === ")
console.log(hashedString + "\n");

//2. salting, key stratching 을 적용한 해싱
crypto.randomBytes(32, function(err, buffer){
	//32bit 길이의 random byte 생성
	if(err){
		console.log(err);
	} else{
		crypto.pbkdf2(string, buffer.toString('base64'), 100000, 64, 'sha512', function(err, hashed){
			if(err){
				console.log(err);
			} else{
				console.log(" === buffer value === ")
				console.log(buffer);
				console.log();

				console.log(" === buffer.toString value === ")
				console.log(buffer.toString('base64'));
				console.log();

				console.log(" === hashed value === ")
				console.log(hashed);
				console.log();
				
				console.log(" === hashed.toString('base64') === ");
				console.log(hashed.toString('base64') + "\n");
			}
		});
	}
});