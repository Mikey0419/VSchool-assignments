function sum(x, y) {
    try {
        if ((isNaN(x)) || (isNaN(y))) {
            throw new Error("A non-number was given as an argument!!")
        } else { console.log(x + y); }
    }
    catch (err) { console.log(err); }
}

sum(1, 3);

//console.log(sum('a', 3));

var user = {username: "sam", password: "123abc"};

function login(username, password){
  //check credentials
  try {
    if ((username === user.username) && (password === user.password)) { console.log("Login successful!"); } else {
        throw new Error("Username and/or password do not match!");
    }
  }
  catch (err) { console.log(err); }
}

login('sam', '123abc');