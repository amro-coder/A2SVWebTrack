const sideBar=document.querySelector("#sideBar");

const original_width=sideBar.style.width;

sideBar.style.width=0;

function closeSideBar(e){
    sideBar.style.width=0;
    return ;
};

function openSideBar(e){
    sideBar.style.width=original_width;
    return ;
}
