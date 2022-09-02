const capitalizeAndLowercase = (str) => {
    let str1 = str.toUpperCase();
    let str2 = str.toLowerCase();
    str1 += str2;

    console.log(str1);
}

capitalizeAndLowercase("vschool");

findMiddleIndex = (str) => {
    let index = Math.floor(str.length / 2);
    console.log(index, "\n");
}

findMiddleIndex("Hello");

const returnFirstHalf = (str) => {
    let strLength = Math.floor(str.length / 2);
    let halfStr = str.slice(0, strLength);
    console.log(halfStr, "\n");
}

returnFirstHalf("Michael Hardin");

const capilizeAndLowercase = (str) => {
    let strLen = Math.floor(str.length / 2);
    let str1 = str.slice(0, strLen);
    let finalStr = str1.toUpperCase();

    let str2 = "";
    let spaces = str.indexOf(" ");
    str2 = (spaces !== -1) ? str.slice(spaces, str.length) : str.slice(strLen);

    finalStr += str2;
    console.log(finalStr, "\n");
}

capilizeAndLowercase("Hello Dolly", "\n");

const capitalize = (str) => {
    var strArray = [];
    strArray = (str.indexOf(" ") === -1) ? [] : str.split(" ");

    if (strArray.length > 0) {
        //capitalize first letter in each strArray item
        for (var i =0; i < strArray.length; i++) {
            var firstLetter = strArray[i].slice(0,1);
            var capItem = firstLetter.toUpperCase();
            capItem += strArray[i].slice(1, strArray[i].length);
            strArray[i] = capItem;
        }
        console.log(strArray.join(" "));
    } else {
        //capitalize first letter in str
        var strChar = str.slice(0,1);
        var finalStr = strChar.toUpperCase();
        finalStr += str.slice(1, str.length);
        console.log(finalStr);
    }

}

capitalize("programming is fun!");