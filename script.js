let $congViec = document.getElementById('congviec');
let $add = document.getElementById('add');
let $workList = document.getElementById('worklist');
let $search = document.getElementById('search');
let $searchBtn = document.getElementById('search-btn');
let $works = document.getElementById('works');

var i = 0;
var arrWork = [];

$works.innerHTML = window.localStorage.getItem('data');

$add.onclick = () => {
    if($congViec.value == '') {
        alert('Bạn không được phép để trống trường này!')
    }else {
        $works.innerHTML += /*html*/ `<div id="${i}">
                                        <p id="content${i}" style="display: inline-block;">${$congViec.value}</p>
                                        <button style="display: inline-block;" type="submit" onclick="remove(${i})">&times;</button></div>`;
        arrWork.push($congViec.value);
        $congViec.value = '';
        i++
    }
    window.localStorage.setItem('data', $works.innerHTML);
}

function search() {
    let $search = document.getElementById('search');
    let $searchValue = $search.value;
    if($searchValue == '' ) {
        alert('Bạn chưa nhập giá trị vào ô tìm kiếm!')
        return false;
    }
    var filtered = arrWork.filter(element => element.toLowerCase().indexOf($searchValue.toLowerCase()) > -1);
    if(filtered != '') {
        alert('Các công việc chứa kí tự ' + $searchValue + ' bao gồm: ' + filtered)
    }else {
        alert('Không tìm thấy công việc nào chứa kí tự ' + $searchValue);
    }
    $searchValue = '';
}


function remove(i) {
    var child = document.getElementById(i);
    var temp = 'content' + i
    console.log(temp);
    var content = document.getElementById(temp).textContent;
    alert('Bạn có chắc chắn muốn xóa ' + content + ' khỏi danh sách không?')
    $works.removeChild(child);
    arrWork.splice(i, 1);
}




if(window.onload) {
    window.localStorage.getItem('data');
}
