//my code
const pictures = ["item1", "item2", "item3"]
$(document).ready(function () {

    const header = $("#header");
    let index = 0;
    header.on("click", function () {
        if (index >= pictures.length) return;
        const currentId = pictures[index];
        $("#" + currentId).show()
        index++;

    })



})


