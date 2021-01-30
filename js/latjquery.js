// $(document).ready(function () {
//     console.log('aku siap');
// })
$(function () {
    $("#isi").html("<h1>Belajar Jquery</h1>")
    $("button").click(function (e) { 
        e.preventDefault();
        alert('belajar javascript')
    });
    $("#isi").mouseleave(function () { 
        alert('anda telah melewati isi')
    });
});