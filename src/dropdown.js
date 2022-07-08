const svgStore = {
    deletIcon : `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
<line x1="4" y1="7" x2="20" y2="7"></line>
<line x1="10" y1="11" x2="10" y2="17"></line>
<line x1="14" y1="11" x2="14" y2="17"></line>
<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
</svg>`,
    arrowRignt:`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevrons-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
<polyline points="7 7 12 12 7 17"></polyline>
<polyline points="13 7 18 12 13 17"></polyline>
</svg>`,
    arrowDown:`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevrons-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
<polyline points="7 7 12 12 17 7"></polyline>
<polyline points="7 13 12 18 17 13"></polyline>
</svg>`,
    menuBtn:`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
<line x1="4" y1="6" x2="20" y2="6"></line>
<line x1="4" y1="12" x2="20" y2="12"></line>
<line x1="4" y1="18" x2="20" y2="18"></line>
</svg>`,
    crossBtn:`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
 </svg>`,
    editCircle:`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit-circle" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M12 15l8.385 -8.415a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3z"></path>
    <path d="M16 5l3 3"></path>
    <path d="M9 7.07a7.002 7.002 0 0 0 1 13.93a7.002 7.002 0 0 0 6.929 -5.999"></path>
 </svg>`,
    editSquare:`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
    <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
    <path d="M16 5l3 3"></path>
 </svg>`,
    floppySave:`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"></path>
    <circle cx="12" cy="14" r="2"></circle>
    <polyline points="14 4 14 8 8 8 8 4"></polyline>
 </svg>`,
    circlePlus:`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <circle cx="12" cy="12" r="9"></circle>
    <line x1="9" y1="12" x2="15" y2="12"></line>
    <line x1="12" y1="9" x2="12" y2="15"></line>
 </svg>`,
}

const dropdown = (parentBody,menuHeading,...params)=>{
    const dropDownContainer = document.createElement("div");
    const menuHeadBox = document.createElement("div");
    const menuHeadTitle = document.createElement("p");
    const arrowSwitch = document.createElement("div");
    const menuItemContainer = document.createElement("div");
    const css = document.styleSheets[0];
    console.log(css);
    

    menuHeadTitle.innerText=menuHeading;
    arrowSwitch.innerHTML=svgStore.arrowRignt;

    dropDownContainer.setAttribute("class","dropDownContainer");
    menuItemContainer.classList.add("menuInvisible");


    parentBody.appendChild(dropDownContainer);
    dropDownContainer.appendChild(menuHeadBox);
    dropDownContainer.appendChild(menuItemContainer);
    menuHeadBox.appendChild(menuHeadTitle);
    menuHeadBox.appendChild(arrowSwitch);


    for(let p in params){
        const menuItemBox= document.createElement("div");
        const menuItemTitle = document.createElement("p");
        menuItemTitle.innerText=params[p];
        menuItemContainer.appendChild(menuItemBox);
        menuItemBox.appendChild(menuItemTitle);
    }


menuItemContainer.classList.add("menuVisible");
css.insertRule(
    `
    @keyframes hideMenu{
        from{height:${menuItemContainer.offsetHeight}px}
        to{height:0px;display:none;}
        
    }`
);
css.insertRule(
    `
    @keyframes showMenu{
        from{height:0px;}
        to{height:${menuItemContainer.offsetHeight}px}
    }`
);
menuItemContainer.classList.remove('menuVisible');
    

    menuHeadBox.addEventListener("click",()=>{
        if(arrowSwitch.innerHTML===svgStore.arrowRignt){
            menuItemContainer.classList.add("menuVisible");
            menuItemContainer.classList.remove("menuInvisible");
            
            arrowSwitch.innerHTML=svgStore.arrowDown;
        }else if(arrowSwitch.innerHTML===svgStore.arrowDown){
            menuItemContainer.classList.remove("menuVisible");
            menuItemContainer.classList.add("menuInvisible");
            arrowSwitch.innerHTML=svgStore.arrowRignt;
        }
    });



}

export {dropdown};