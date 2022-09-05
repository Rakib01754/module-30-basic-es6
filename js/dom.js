const changeBgBtn = document.getElementById('bg-change');
changeBgBtn.addEventListener('click', function () {
    const allFriends = document.getElementsByClassName('friend');
    for (const friend of allFriends) {
        friend.style.backgroundColor = 'red';
    }
})
const centerBtn = document.getElementById('center');
centerBtn.addEventListener('click', function () {
    const thirdFriend = document.getElementById('third');
    thirdFriend.style.textAlign = 'center';
})
const addNewBtn = document.getElementById('add');
addNewBtn.addEventListener('click', function () {
    const friendArea = document.getElementById('friend-area');
    const newDiv = document.createElement('div');
    newDiv.classList.add('friend')
    newDiv.innerHTML = `<h2>Friend 6</h2>
    <p>My friend Number 6</p>
    `
    friendArea.appendChild(newDiv);



})
