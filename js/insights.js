const insights_tab = document.querySelector(".insights-tab");
const insights_content = document.querySelector(".insights-content");

var insights = document.querySelector(".all-insights"); 
var insights_list = document.querySelectorAll(".insight"); //selects all insights
var arr = Array.prototype.slice.call(insights_list); //makes into an array
var numitems = $('.all-insights .insight').length;

let tab = false;


function openinsight(elem){
    var subject_item = elem.parentNode;
    console.log(subject_item);
    insights_list.forEach(function(item){
        item.classList.remove("active");
        item.classList.add("inactive");
    })
    subject_item.classList.remove("inactive");
    subject_item.classList.add("active");

    openTab();

    movefront(arr.indexOf(subject_item));
}


function movefront(elemIndex){
    var numChild = elemIndex+1;
    var selected = $(".insight:nth-child("+(numChild)+")");
    
    //moves all items before selected element to the end of child list
    for(let i = 1; i < numChild; i++){
        $(".insight:nth-child(1)").insertAfter(".insight:nth-child("+(numitems)+")"); 
    }
    
    //moves selected item to the front
    $(selected).css({"left": "0px"});
    //selected.animate({left: 0px}); //for a smooth transition animation option

    //moves all items behind selected to new position behind selected position
    for(let i = 1; i < numitems+1; i++){
        var behind = $(".insight:nth-child("+(i+1)+")");
        var after = 675 + (175*(i-1));
        $(behind).css({"left": ""+after+"px"});
        //behind.animate({left: after}); //for a smooth transition animation option
    }

    //updates insights list with new child positions
    insights_list = document.querySelectorAll(".insight");
    arr = Array.prototype.slice.call(insights_list);
}

//opens red insight tab
function openTab(){
    if(tab == false){
        insights_tab.classList.remove("hide");
        insights_content.classList.add("hide");
        tab = true;
    }
    insights.classList.add("open");
}

//explore insights button opens first insight
function explore(){
    insights.children[0].classList.add("active");
    insights.children[1].classList.add("inactive");
    insights.children[2].classList.add("inactive");
    openTab();
    movefront(0);
}

//resets to default view when insight tab is clicked
insights_tab.addEventListener("click", function(){
    insights_list.forEach(function(item){
        insights_list.forEach(function(item){
            item.classList.remove("active");
            item.classList.remove("inactive");

            item.style.left = "";
        })
    })
    insights_tab.classList.add("hide");
    insights_content.classList.remove("hide");
    tab = false;
})