$(document).ready(function () {
    let $btn = $('<input>')
    $btn.attr('id', 'example-1 btn');
    $btn.attr('type', 'button');
    $btn.attr('value', 'Alert');
    $btn.click(postAlert)
    $('body').append($btn)

    let $textBtn = $('#example-2-button')
    $textBtn.click(submitAlert)

    let $textBox = $('#example-2-text-input')

    let $div = $('#example-3-div');
    $div.css({
        'height': '200px',
        'width': '200px',
        'border': '1px solid black'
    })
    $div.mouseover(changeColor);
    $div.mouseout(returnColor);

    let $para = $('<p></p>');
    $para.attr('id', 'example-4-paragraph');
    $para.click(changeTextColor);
    $('body').append($para);

    let paraText = 'This paragraph is apart of example 4';
    $para.text(paraText)

    let $spanBtn = $('<input>');
    $spanBtn.attr('type', 'button');
    $spanBtn.attr('id', 'example-5-button');
    $spanBtn.attr('value', 'Name Button');
    $spanBtn.click(addName);
    $('body').append($spanBtn);

    let $spanDiv = $('<div></div>');
    $spanDiv.attr('id', 'example-5-div');
    $('body').append($spanDiv);

    let $listBtn = $('<input>');
    $listBtn.attr('type', 'button');
    $listBtn.attr('id', 'example-6-button');
    $listBtn.attr('value', 'List Friends');
    $listBtn.click(showNames);
    $('body').append($listBtn);

    let $ul = $('<ul></ul>');
    $ul.attr('id', 'example-6-unordered-list');
    $('body').append($ul);

    let friendsArr = ['Natisha', 'Lizbeth', 'Charleen', 'Dorie', 'Hue', 'Jone', 'Vada', 'Vanesa', 'Dallas', 'Herlinda'];

    function postAlert() {
        alert('The Alert button has been clicked')
    }

    function submitAlert() {
        alert($textBox.val())
        $textBox.val('')
    }

    function changeColor() {
        $div.css('background-color', 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')')
    }

    function returnColor() {
        $div.css('background-color', 'white');
    }

    function changeTextColor() {
        $para.css('color', 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')')
    }

    function addName() {
        let $spanName = $('<span></span>');
        $spanName.attr('class', 'span-name')
        let spanText = 'Darius Thomas';
        $spanName.text(spanText);
        $spanDiv.append($spanName)
    }

    function showNames() {
        for (i = 0; i < friendsArr.length; i++) {
            let friendsName = friendsArr[i];

            let $li = $('<li></li>');
            $li.attr('class', 'listed-name');
            $li.text(friendsName)
            $ul.append($li);
        }
    }
})