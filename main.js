function viewContent(className) {

    if (className !== 'content'){
        const contentListHide = document.getElementsByClassName("content");
        for (let i = 0; i < contentListHide.length; i++) {
            contentListHide[i].style.display = "none";
        }
    }

    const contentListView = document.getElementsByClassName(className);
    for (let i = 0; i < contentListView.length; i++) {
        contentListView[i].style.display = "block";
    }
}
