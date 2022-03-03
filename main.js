/*
 * @Author: Limor(CN)
 * @Date: 2022-01-05 19:00:27
 * @LastEditTime: 2022-01-06 22:49:31
 * @LastEditors: Limor(CN)
 * @Description: 自动化量化教评，全部6分好评
 */
//可以改下面这两行
var interval = 2500; //每个操作的时间间隔，可以不改
var comment = "好" //评语，建议不一样

var confirm = function () {
    return 1
}

function single_judge() {
    var all_item = document.getElementsByClassName('option-radio');
    if (all_item.length > 0)
        for (let i = 0; i < all_item.length; i++) {
            if (all_item[i].value == "0") {
                all_item[i].click();
            }
        }
    var text_area = document.getElementsByClassName('answer answer-textarea');
    if (text_area.length > 0)
        text_area[0].innerText = comment;

    document.getElementById('sub').click();
}

setInterval(() => {

    var all_teacher = document.getElementsByClassName('eval');
    if (all_teacher.length > 0) {
        all_teacher[0].click();
        setTimeout(single_judge, interval);
    }
}, interval);