/**
 * Created by 霍世豪 on 2021/3/18.
 */
    //文本框
window.onload=function () {
    var choose_btn=document.querySelector(".choose-btn")
    choose_btn.onkeyup=function () {
        var input=document.querySelector(".wenben")
        // var num =parseInt(input.value);
        // input.value=1
        // console.log(input.value)
        var su=/^\d+$/
        if (!su.test(input.value)){
            input.value=1
        }
    }
    //加
    var prev=document.querySelector(".choose-btn .prev")
    // console.log(choose_btn)
    prev.onclick=function () {
        var input=document.querySelector(".wenben")
        var num =parseInt(input.value);
        input.value=num+1
    }
    //减
    var next=document.querySelector(".choose-btn .next")
    // console.log(choose_btn)
    next.onclick=function () {
        var input=document.querySelector(".wenben")
        var num =parseInt(input.value);
        if (input.value<=1){
            alert("我也是有底线的")
            input.value=1
        }else{
            input.value=num-1
        }
    }
    //属性改变价格
    var choose_arre1=document.querySelectorAll(".choose-arre1 .dd a")
    var money=document.querySelector(".money")
    // console.log(choose_arre2)
    var pirice1=""
    for (i=0;i<choose_arre1.length;i++){
        choose_arre1[i].onclick=function () {
            for (j=0;j<choose_arre1.length;j++){
                choose_arre1[j].style.border="1px solid #000"
            }
            this.style.border= "2px solid red"
            var pirice=this.getAttribute("pirice")
            console.log(pirice)
            var num =parseInt(parseInt(pirice)+1988)
            money.innerText=num

        }
    }
    //颜色
    var choose_arre2=document.querySelectorAll(".choose-arre2 .dd a")
        for (i=0;i<choose_arre2.length;i++){
            choose_arre2[i].onclick=function () {
                for (j=0;j<choose_arre2.length;j++){
                    choose_arre2[j].style.border="1px solid #000"
                }
                this.style.border= "2px solid red"
                var pirice=this.getAttribute("pirice")
                var num =parseInt(1988+parseInt(pirice))
                money.innerText=num
            }
        }
   //小图
    var piglist=document.querySelectorAll(".list li")
    var intorspre=document.querySelectorAll(".intorspre li")
    var index=0
    for (i=0;i<piglist.length;i++){
            piglist[i].index=i
            piglist[i].onclick=function () {
                for(j=0;j<intorspre.length;j++){
                    intorspre[j].style.display="none"
                    piglist[j].style.border=""
                }
                this.style.border="2px solid red"
                intorspre[this.index].style.display="block"
            }
    }
    //商品详情切换
    //商品标题
    var tab_main_mc=document.querySelectorAll(".tab-main-mc a")
    //商品内容
    var paita1=document.querySelectorAll(".paita1")
    //商品详情
    var tab_con=document.querySelector(".tab-con")
    //商品评价
    var comment=document.querySelector(".comment")
    //售后保障
    var guarantee=document.querySelector(".guarantee")
    var index2=""
    for (i=0;i<tab_main_mc.length;i++){
        tab_main_mc[i].index2=i
        tab_main_mc[i].onclick=function () {
            for(j=0;j<paita1.length;j++){
                paita1[j].style.display="none"
            }
            paita1[this.index2].style.display="block"
        }
    }
    //商品详情固定定位
        //获取滚动的高度
        //获取商品详情的div
    window.onscroll = function () {
        var scrollTop = document.documentElement.scrollTop;
        var tab_main=document.querySelector(".tab-main")
        var pop_hd=document.querySelector(".pop-hd")
        var tab_main_mt=document.querySelector(".tab-main-mt")
        // console.log(scrollTop);
        if (scrollTop>850){
            tab_main.style.position="fixed"
            tab_main.style.top="0px"
            tab_main.style.zIndex=100
            tab_main.style.background="#f7f7f7"
            tab_main.style.width="1000px"
            tab_main.style.height ="38px"
            tab_main.style.left="344px"
            tab_main.style.border="1px solid #000000"
            tab_main.style.borderLeft="0px"
            pop_hd.style.position="fixed"
            pop_hd.style.top="0px"
            pop_hd.style.zIndex=100
            pop_hd.style.background="#f7f7f7"
            pop_hd.style.border="1px #000000 solid"
            pop_hd.style.width="209px"
            pop_hd.style.left="134px"
            pop_hd.style.borderRight="0px"
            tab_main_mt.style.position="fixed"
            tab_main_mt.style.top="0px"
            tab_main_mt.style.zIndex=100
            tab_main_mt.style.background="#f7f7f7"
            tab_main_mt.style.left="1240px"
        }else{
            tab_main.style.position="static"
            tab_main.style.background="#f7f7f7"
            pop_hd.style.position="static"
            tab_main_mt.style.position="static"
            tab_main_mt.style.marginTop="6px"
            tab_main_mt.style.marginRight="11px"
            tab_main_mt.style.width="92px"
            tab_main_mt.style.height="28px"
            tab_main_mt.style.float="right"
            tab_main.style.borderLeft=""
            pop_hd.style.borderRight=""







        }
    }

    //商品评价旋转
    var leftR=0
    var rightR=0
    var xz=document.querySelectorAll(".xz a")
    var con4=document.querySelector(".con4");
    var image=document.querySelector(".datu img")
    for (var i=0;i<xz.length;i++){
        xz[i].onclick=function () {
            //div排他操作
            // var con = document.querySelectorAll(".con4");
            // console.log(this.firstElementChild.getAttribute("src"))
            // console.log(this)
            //div中追加图片
            console.log(image)
            image.setAttribute("src",this.firstElementChild.getAttribute("src"))
            image.style.display="block"
            //点击关闭
            image.onclick=function () {
                image.style.display="none";
            }
            // div中追加左侧右侧
            var left = document.createElement("img");
            var right = document.createElement("img");
            left.setAttribute("class", "left")
            right.setAttribute("class", "right")
            left.setAttribute("src", "images/zuo.png")
            right.setAttribute("src", "images/you.png")
            con4.appendChild(left)
            con4.appendChild(right)
        }
    }
}