//your JS code here. If required.
let flag1 = false;
let flag2 = false;
let user1Arr = [];
let user2Arr = [];
let booluser = new Array(9).fill(false);
let isUser1 = false;
let isUser2 = false;
let resArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
let msg = document.getElementById("message");
let user1, user2;
function getData() {
    user1 = document.getElementById("player-1").value;
    user2 = document.getElementById("player-2").value;

    document.getElementById("gamePage").style.display = "block";
    document.getElementById("form").style.display = "none";
}

function changeData(id) {p
    console.log(id);
    if (flag1 == false && !booluser[id]) {
        document.getElementById(id).innerText = "X";
        msg.innerHTML = `${user1}, you're up`;
        document.getElementById(id).style.fontSize = "36px";
        document.getElementById(id).style.background = "purple";
        document.getElementById(id).style.padding = "20px";
        document.getElementById(id).style.textAlign = "center";

        user1Arr.push(parseInt(id));
        booluser[id] = true;
        user1Arr.sort((a, b) => a - b);
        if (user1Arr.length >= 3) {
            for (let i = 0; i < resArr.length; i++) {
                isUser1 = false;
                let item = resArr[i];
                for (let j = 0; j < user1Arr.length; j++) {
                    if (item[j] != user1Arr[j]) {
                        isUser1 = true;
                        break;
                    }
                }
                if (isUser1 == false) {
                    msg.innerHTML = `${user1}, congratulations you won!`;
                    flag1 = true;
                    return;
                }
            }
        }

        flag1 = true;
        flag2 = false;
    }
    else if (flag2 == false && !booluser[id]) {
        document.getElementById(id).innerText = "0";
        msg.innerHTML = `${user2}, you're up`;
        document.getElementById(id).style.fontSize = "36px";
        document.getElementById(id).style.background = "orange";
        document.getElementById(id).style.padding = "20px";
        document.getElementById(id).style.textAlign = "center";
        user2Arr.push(parseInt(id));
        user2Arr.sort((a, b) => a - b);
        booluser[id] = true;
        if (user2Arr.length >= 3) {
            for (let i = 0; i < resArr.length; i++) {
                isUser2 = false;
                let item = resArr[i];
                for (let j = 0; j < user2Arr.length; j++) {
                    if (item[j] != user2Arr[j]) {
                        isUser2 = true;
                        break;
                    }
                }
                if (isUser2 == false) {
                    msg.innerHTML = `${user2}, congratulations you won!`;
                    flag2 = true;
                    return;
                }

            }
        }
        flag2 = true;
        flag1 = false;

    }


   
}

