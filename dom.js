function clickBtn(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = 'lightblue';
    }
}

function textCenter(){
    const third = document.getElementById('third-friend');
    third.style.textAlign = 'center';
}

function addNewFriendBtn(){
    const friendContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML = `
    <h3 class = 'friend-name'>New Friend</h3>
    <p>Something new added</p>
    `;
    friendContainer.appendChild(friend);
}