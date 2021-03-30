/**
 * Created by 霍世豪 on 2021/3/20.
 */
window.onload=function () {
    //判断是否启动减号
    var buyAll=document.querySelectorAll(".buy_number");
    for(var i=0;i<buyAll.length;i++){
        if(parseInt(buyAll[i].innerText)>1){
            buyAll[i].previousElementSibling.style.color="#000"
            buyAll[i].previousElementSibling.style.cursor="pointer"
        }
    }
    //全选
    var checkedcount=document.querySelector(".input-box")
    var checked=document.querySelectorAll(".checked")
        checkedcount.onclick=function () {
            // console.log(checkedcount.checked)
            if(checkedcount.checked==true){
                for(var i=0;i<checked.length;i++){
                    checked[i].checked=true
                }
            }else{
                for(var i=0;i<checked.length;i++){
                    checked[i].checked=false
                }
            }
        }
    //反选
    var checkbox_ser=document.querySelector(".checkbox")
        checkbox_ser.onclick=function () {
            for (var i=1;i<checked.length;i++){
                if(checked[i].checked==true){
                        checked[i].checked=false
                }else{
                    checked[i].checked=true
                }
            }
        }


    //点击加号
    var btn_r=document.querySelectorAll(".btn-r");
        for ( var i=0;i<btn_r.length;i++){
            btn_r[i].onclick=function () {

                var _span=this.previousElementSibling
                var num=parseInt(_span.innerText)
                num+=1
                _span.innerText=num
            //改变小计
            changetotal(this,num)
            //改变背景颜色
             changecolor(this)
            //改变复选框
            changeche(this)
            //件数
            totalcount()
            }
        }
    //点击减号
    var btn_l=document.querySelectorAll(".btn-l");
        for ( var i=0;i<btn_l.length;i++){
            btn_l[i].onclick=function () {
                var _span=this.nextElementSibling
                var num=parseInt(_span.innerText)

                if (num<=1){
                    num=1
                    
                }else{
                    num-=1
                    _span.innerText=num
                    //改变小计
                    changetotal(this,num)
                    //改变背景颜色
                    changecolor(this)
                    //改变复选框
                    changeche(this)
                    //件数
                    totalcount()
                }


            }
    }
    //点击复选框

        //小计方法
        function changetotal(_this,num) {
            var total_b= _this.parentElement.parentElement.nextElementSibling.firstElementChild
            var goods_pic=_this.parentElement.parentElement.previousElementSibling
            var total=parseInt(goods_pic.innerText.substr(1))*num
            total_b.innerText="￥"+total.toFixed(2)
        }
        //添加颜色方法
        function changecolor(_this) {
            var bgcolor=_this.parentElement.parentElement.parentElement
            // console.log(bgcolor)
            bgcolor.style.backgroundColor="#fff4e8"
        }
        //添加默认选中
        function changeche(_this) {
            var checkedbox=_this.parentElement.parentElement.parentElement.firstElementChild.firstElementChild
            // console.log(checkedbox)
            checkedbox.checked=true
        }
        //件数和总价
        function  totalcount(){
            var num=0
            var count=0
            var checked=document.querySelectorAll(".checked")
            // console.log(checked)
            for (var i=0;i<checked.length;i++){
                // console.log(checked[i].checked==true)
                if(checked[i].checked==true){
                    num+=parseInt(checked[i].parentElement.parentElement.children[4].firstElementChild.firstElementChild.nextElementSibling.innerText)
                    count+=parseInt((checked[i].parentElement.parentElement.children[5].firstElementChild.innerText).substr(1))

                }
            }
            document.querySelector("#count").innerText=count
            document.querySelector("#num").innerText=num
        }



}