/**
 * Created by 霍世豪 on 2021/3/15.
 */
window.onload=function () {


    var ban_img = document.querySelector(".ban-img");//获取图片
    var prev = document.querySelector(".left_btn");//左侧
    var next = document.querySelector(".right_btn")//右侧
    var index = 0;

    //点击下一张
    next.onclick = function () {
        nextPic();
    }
    //点击上一张
    prev.onclick = function () {
        prevPic();
    }
    //点击下一张方法
    function nextPic() {
        if(ban_img.style.left=="-3950px"){
            var left=-1580;
        }else{
            var left =parseInt(ban_img.style.left)-790
        }
        ban_img.style.left=left+"px";
        index++;
        if (index>3){
            index=0;
        }
        changCircle();
        ban_img.style.left=left+"px";



    }
    //显示上一张方法
    var newLeft;
    function prevPic() {
        if(ban_img.style.left=="0px"){
            newLeft=-2400;
        }else{
            newLeft=parseInt(ban_img.style.left)+790
        }
        ban_img.style.left=newLeft+"px";
        index--;
        if (index<0){
            index=4;
        }
        // showCircle();
        changCircle();
        ban_img.style.left=newLeft+"px";

    }
    //   自动切换
    var _set;
    function autoPlay() {
        _set=setInterval(function () {
            //调用下一张方法
            nextPic();
        },1000)
    }
    autoPlay();
    //鼠标移上去  情书定时器
    var cold2=document.querySelector(".cold2");
    cold2.onmouseenter=function () {
        clearInterval(_set);
    }
//        移出启动定时器
    cold2.onmouseleave=function () {
        autoPlay();
    }
    // 小圆点切换
    var liList=document.querySelectorAll(".ban-disc li")
    function changCircle() {
        // console.log(liList.length)
        for(var i=0;i<liList.length;i++){
            // console.log(index);
            if (index==i){
                liList[i].setAttribute("class","qumr")
            }else{
                liList[i].setAttribute("class","")
            }
        }
    }
    // 点击小圆点
    for (var i=0;i<liList.length;i++){
        liList[i].onmouseenter=function () {
            for(var j=0;j<liList.length;j++){
                liList[j].setAttribute("class","")
            }
            this.setAttribute("class","qumr")
            //小圆点位置
            var num =this.getAttribute("num");
            index=num
            num=parseInt(num)+1
            changCircle();
            ban_img.style.left=-(num*790)+"px"
        }
    }

// // 获取容器
// // 图片容器
// // 空白容器
//     var inner = document.querySelector(".inner");
    var nicegood_mend = document.querySelector(".nicegood-mend");
    var mend_list = document.querySelector(".mend-list");
    var blank = document.querySelector(".kong");
    var _sett;
    blank.innerHTML = mend_list.innerHTML
//开启定时器
    function autoPlayD() {
        _sett = setInterval(function () {
            if (nicegood_mend.scrollLeft >= 1188) {
                nicegood_mend.scrollLeft = 0
            } else {
                nicegood_mend.scrollLeft++;
            }
        }, 30);
    }
//
    autoPlayD();
    //鼠标移上去  清除定时器
    nicegood_mend.onmouseenter=function () {
        clearInterval(_sett);
    }
    //        移出启动定时器
    nicegood_mend.onmouseleave=function () {
        autoPlayD();
    }

    //搜索快捷键
    var hotwords = document.querySelectorAll(".YD")
    var txt = document.querySelector(".txt")
    for (i=0;i<hotwords.length;i++){
        hotwords[i].onclick = function (){
            for(j=0;j<hotwords.length;j++){
             hotwords[j].setAttribute("class","")
            }
            var this_ = this.innerText;

            var txt1 = txt.setAttribute("placeholder",this_)

            // console.log(this_);
            this.setAttribute("class","style-red")
            txt.value=""
        }
    }

    //二级菜单
    var parent=document.querySelectorAll(".parent")
    var cateinfozuo=document.querySelector("#cateInfo")
    for (var i=0;i<parent.length;i++){
        parent[i].onmouseenter=function () {
            // this.lastElementChild.innerHTML=cateinfozuo.innerHTML
            this.lastElementChild.style.display="block"
        }
        parent[i].onmouseleave=function () {
            this.lastElementChild.style.display="none"
        }
    }

    //顶部的下拉菜单
    //所有li标签
    var  spacer=document.querySelectorAll(".topright li");
    // console.log(spacer.length);
    for (var i=1;i<spacer.length;i++){
                //所有的li标签循环出来绑定移入事件
            spacer[i].onmouseenter=function () {
                // console.log(spacer[i]);
                // console.log(this.children)
                var _this=this.children
                if(_this.length>2){
                    // console.log(this)
                    this.lastElementChild.style.display="block"
            }
        }
        spacer[i].onmouseleave=function () {
            this.lastElementChild.style.display="none"
        }
    }

    //每日特价
    var itemList=document.querySelectorAll(".tab_head_item");
    var tab_body=document.querySelectorAll(".tab_body");
    for(var i=0;i<itemList.length;i++){
        itemList[i].index=i;
        itemList[i].onmouseenter=function () {
            for (var j=0;j<itemList.length;j++){
                itemList[j].setAttribute("class","tab_head_item")
                tab_body[j].style.display="none";
            }
            this.setAttribute("class","tab_head_item active")
            tab_body[this.index].style.display="block"
        };
    }

    // 为你推荐


    // var feed_tab_desc = document.querySelectorAll(".feed-tab-desc")
    // for ( i = 0; i < feed_tab_desc.length; i++) {
    //     feed_tab_desc[i].onclick = function () {
    //         for(var j=0;j<feed_tab_desc.length; j++){
    //             feed_tab_desc[j].setAttribute("class","feed-tab-desc")
    //             var eee=feed_tab_desc[j].previousElementSibling.firstElementChild.setAttribute("class","")
    //             // console.log(eee)
    //         }
    //         this.setAttribute("class","feed-tab-xh feed-tab-desc")
    //         this.previousElementSibling.firstElementChild.setAttribute("class","feed-tab-title-txt")
    //
    //
    //     }
    //
    // }
    // var feed_tab_title = document.querySelectorAll(".feed-tab-title span")
    // for (var i = 0; i < feed_tab_title.length; i++) {
    //     feed_tab_title[i].onclick = function () {
    //         for(var j=0;j<feed_tab_title.length; j++){
    //             //
    //             feed_tab_title[j].setAttribute("class","")
    //                 //给父类的下一个兄弟节点     上一个兄弟节点prev
    //             var aaa=feed_tab_title[j].parentNode.nextElementSibling;
    //             // console.log(aaa)
    //             aaa.setAttribute("class","feed-tab-desc")
    //         }
    //         this.setAttribute("class","feed-tab-title-txt")
    //         var bbb=this.parentNode.nextElementSibling;
    //             bbb.setAttribute("class","feed-tab-xh feed-tab-desc")
    //
    //     }
    // }
    var grid_c1_feed_tab=document.querySelectorAll(".yiru ul li")
    // console.log(grid_c1_feed_tab.length)
     for (var i=0;i<grid_c1_feed_tab.length;i++){
        // console.log(grid_c1_feed_tab[i]);
                grid_c1_feed_tab[i].onclick=function () {
                    // console.log(123)
                    for (var j=0;j<grid_c1_feed_tab.length;j++){
                        // console.log(j)
                        grid_c1_feed_tab[j].firstElementChild.firstElementChild.setAttribute("class","")
                        grid_c1_feed_tab[j].firstElementChild.nextElementSibling.setAttribute("class","feed-tab-desc")
                    }
                    this.firstElementChild.firstElementChild.setAttribute("class","feed-tab-title-txt ")
                    this.firstElementChild.nextElementSibling.setAttribute("class","feed-tab-desc feed-tab-xh")
                }

        }

//鼠标懒加载
    var flag = true;
    window.onscroll = function () {
        //获取整个滚动条高度
        var scrollHei = document.documentElement.scrollHeight;
        //获取滚动的高度
        var scrollTop = document.documentElement.scrollTop;
        //获取可视区域高度
        var clientHei = document.documentElement.clientHeight;
        //尾部的结果
        var bottom = scrollHei - scrollTop - clientHei
        //如果标志为true
        if (flag === true) {
            //距离底部600px
            if (bottom < 600) {
                flag = false
                var data = createInfo();//随机取出数据
                var str = "";//随即出来的数据循环 拼接成字符串
                for (var i = 0; i < data.length; i++) {
                    str+='<li>'+
                        '<a href="javascript">'+
                        '<div class="lazying-img">'+
                        '<img src="'+data[i]['goods_img']+'"alt="">'+
                        '</div>'+
                        '<div class="lazying-txt">'+
                        '<p>【新年礼物】'+data[i]['goods_name']+'</p>'+
                        '<div class="lazying-jiage">'+
                        '<i>￥</i>'+
                        '<span>'+data[i]['number']+'</b></span>'+
                        '</div>'+
                        '</div>'+
                        '</a>'+
                        '</li>';
                }
                var ul_test = document.querySelector("#ul_test");
                var content = ul_test.innerHTML;
                //拼接上循环的数据str
                str = content + str;
                //将新数据 赋值回给ul
                ul_test.innerHTML = str;
            }
        } else if (bottom < 300) {
            flag = true;//距离底部约300px的时候需要重新加载数据 flag 改为true
        }


            //锁定搜索框
            //获取搜索框
            var search=document.querySelector(".search");
            var dropdown=document.querySelector(".dropdown");
            var logo=document.querySelector(".logo h1 a ");
            if (scrollTop>600){
                        search.style.position="fixed"
                        search.style.top="-25px"
                        search.style.zIndex=100
                        search.style.background="#dddddd"
                        search.style.width="100%"
                        dropdown.style.left="850px"
                        // search.style.left="0"
                // search.style.float="-50px"
                        logo.style.left="10px"


                    }else{
                        search.style.position="static"
                        search.style.background="#ffffff"


            }
    }

//随机生成10条商品数据
    function createInfo() {
        var Random = Mock.Random;
        //console.log(Random);
        var data = Mock.mock({
            'list|5': [{
                // 商品名称
                'goods_name': '@ctitle',
                //图片
                'goods_img': Random.image('200x200', '#345678', 'Hello'),
                //商品价格
                "number|1-100.2": 2
            }]
        });
        return data['list'];
    }




}