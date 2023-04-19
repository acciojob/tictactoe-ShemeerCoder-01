//your JS code here. If required.
let flag1 = false;
let flag2 = false;
let user1Arr = [];
let user2Arr = [];
let isUser1 = false;
let isUser2 = false;
let resArr = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
let msg = document.getElementById("message");
let user1,user2;
function getData(){
		user1 = document.getElementById("player-1").value;
		user2 = document.getElementById("player-2").value;
		
		document.getElementById("gamePage").style.display = "block";
		document.getElementById("form").style.display = "none";
	}

function changeData(id){
	if(flag1 == false && !user1Arr.includes(id)){
	document.getElementById(id).innerText = "X";
	msg.innerHTML = `${user1}, you're up`;
	document.getElementById(id).style.fontSize = "36px";
	document.getElementById(id).style.background = "purple";
	document.getElementById(id).style.padding = "20px";
	document.getElementById(id).style.textAlign = "center";
		user1Arr.push(id);
		if(user1Arr.length >= 3){
			for(let i = 0; i < resArr.length; i++){
				for(let j = 0; j < user1Arr.length; j++){
					if(resArr[i][j] != user1Arr[j]){
						isUser1 = true;
						break;
					}
				}
				if(isUser1 == false){
				msg.innerHTML = `${user1}, congratulations you won!`;
				// document.getElementById("gamePage").style.display = "none";
				
			 }
			}
			
		}
		
		flag1 = true;
		flag2 = false;
	}
	else if(flag2 == false && !user2Arr.includes(id)){
	document.getElementById(id).innerText = "0";
	msg.innerHTML = `${user2}, you're up`;
	document.getElementById(id).style.fontSize = "36px";
	document.getElementById(id).style.background = "orange";
	document.getElementById(id).style.padding = "20px";
	document.getElementById(id).style.textAlign = "center";
		user2Arr.push(id);
		if(user2Arr.length >= 3){
				for(let i = 0; i < resArr.length; i++){
				for(let j = 0; j < user2Arr.length; j++){
					if(resArr[i][j] != user2Arr[j]){
						isUser2 = true;
						break;
					}
				}
				if(isUser2 == false){
					msg.innerHTML = `${user2}, congratulations you won!`;
					// document.getElementById("gamePage").style.display = "none";
				}
			}

			
		
		}
		flag2 = true;
		flag1 = false;
		
	}
}
