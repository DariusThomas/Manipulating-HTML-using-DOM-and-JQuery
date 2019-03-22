document.addEventListener('DOMContentLoaded', function () {
    let btn = document.createElement('input')
    btn.type = 'button'
    btn.id = 'Example-1 alert-button'
    btn.value = 'Alert'
    document.body.appendChild(btn);
    btn.addEventListener('click', alertButton)

    let submitBtn = document.getElementById('example-2 submit-btn');
    submitBtn.addEventListener('click', submitAlert)

    let textBox = document.getElementById('example-2 text-input')

    let div = document.getElementById('example-3 div');
    div.style.height = '200px';
    div.style.width = '200px';
    div.style.border = ' 1px solid black'
    div.addEventListener('mouseover', changeDivColor);
    div.addEventListener('mouseout', returnOriginalDivColor);

    let para = document.createElement('p');
    para.id = 'example-4 paragraph';
    document.body.appendChild(para)
    para.addEventListener('click', randomTextColor);

    let paraText = document.createTextNode('This paragraph is apart of example 4');
    para.appendChild(paraText);

    let anotherBtn = document.createElement('input');
    anotherBtn.id = 'example-5 button';
    anotherBtn.type = 'button';
    anotherBtn.value = 'Span Button'
    document.body.appendChild(anotherBtn);
    anotherBtn.addEventListener('click', showNameSpan);

    let anotherDiv = document.createElement('div');
    anotherDiv.id = 'example-5 div';
    document.body.appendChild(anotherDiv);

    let friendsArr = ['Natisha', 'Lizbeth', 'Charleen', 'Dorie', 'Hue', 'Jone', 'Vada', 'Vanesa', 'Dallas', 'Herlinda'];
    let listBtn = document.createElement('input');
    listBtn.type = 'button';
    listBtn.value = 'Friends List'
    listBtn.id = 'example-6 button';
    listBtn.addEventListener('click', addFriends);
    document.body.appendChild(listBtn)

    let friendsList = document.createElement('ul');
    friendsList.id = 'example-6 unordered-list';
    document.body.appendChild(friendsList)

    function alertButton() {
        alert('The alert button has been clicked')
    };

    function submitAlert() {
        alert(textBox.value)
        textBox.value = ''
    }

    function changeDivColor() {
        div.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')'
    }

    function returnOriginalDivColor() {
        div.style.backgroundColor = 'white'
    }

    function randomTextColor() {
        para.style.color = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')'
    }

    function showNameSpan() {
        let nameSpan = document.createElement('span');
        nameSpan.class = 'example-5 span';
        anotherDiv.appendChild(nameSpan);
        let spanText = document.createTextNode('Darius Thomas');
        nameSpan.appendChild(spanText);
    }

    function addFriends(){
        for(let i = 0; i < friendsArr.length;i++){
            let listedFriend= document.createElement('li');
            let friendName = document.createTextNode(friendsArr[i]);
            listedFriend.appendChild(friendName);
            friendsList.appendChild(listedFriend);
        }
    }
})