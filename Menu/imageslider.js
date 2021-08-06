$(function(){
    $("li").hide()
    var currImage=$("li").first()
    var currIndex= 0
    currImage.show()
    $("#next").click(function(){
        
        currImage.hide()
        if(currIndex==$("li").length-1)
        {
            currIndex=0
            currImage=$("li").first()
        }
        else
        {
            currIndex+=1
            currImage=currImage.next()
        }
        currImage.fadeIn(200)
        currImage.show()

    })
    $("#prev").click(function(){
        currImage.hide()
        if(currIndex==0)
        {
            currIndex=$("li").length-1
            currImage=$("li").last()
        }
        else
        {
            currIndex-=1
            currImage=currImage.prev()
        }
        currImage.fadeIn(200)
        currImage.show()
        

    })
})
