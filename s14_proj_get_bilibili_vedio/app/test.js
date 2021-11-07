GM_xmlhttpRequest({
    method: "GET",
    //大图地址
    url: 'http://blogjav.net/?s='+avid,
    onload: function(result) {
        //console.log("时间111111:"+ new Date().getTime());
        var doc = common.parsetext(result.responseText);
        //console.log("时间222222:"+ new Date().getTime());
        let a_array = $(doc).find(".more-link");
        let a = a_array[0];
        for(let i = 0; i < a_array.length ; i ++){
            var fhd_idx = a_array[i].innerHTML.search(/FHD/);
            //debugger;
            if(fhd_idx > 0){
                a = a_array[i];
                break;
            }
        }

        if (a) {
            //异步请求调用内页详情的访问地址
            GM_xmlhttpRequest({
                method: "GET",
                //大图地址
                url: a.href,
                headers:{
                    referrer:  "http://pixhost.to/" //绕过防盗图的关键
                },
                onload: function(XMLHttpRequest) {
                    //console.log("时间333333:"+ new Date().getTime());
                    var bodyStr = XMLHttpRequest.responseText;
                    var yixieBody = bodyStr.substring(bodyStr.search(/<span id="more-(\S*)"><\/span>/),bodyStr.search(/<div class="category/));

                    var img_start_idx = yixieBody.search(/"><img .*src="https*:\/\/(\S*)pixhost.to\/thumbs\//);
                    //如果找到内容大图
                    if( img_start_idx > 0)
                    {
                        var new_img_src = yixieBody.substring(yixieBody.indexOf('src',img_start_idx) + 5,yixieBody.indexOf('alt') - 2);
                        var targetImgUrl = new_img_src.replace('thumbs','images').replace('//t','//img').replace('"','');

                        //如果找到全高清大图优先显示全高清的
                        console.log("图片地址:"+targetImgUrl);

                        //创建img元素,加载目标图片地址
                        //创建新img元素
                        var $img = $('<img name="javRealImg" title="点击可放大缩小 (图片正常时)"></img>');
                        $img.attr("src",targetImgUrl);
                        $img.attr("style","float: left;cursor: pointer;");

                        //将新img元素插入指定位置
                        func($img);
                        console.log("时间444444:"+ new Date().getTime());
                    }
                },
                onerror: function(e) {
                    console.log(e);
                }
            });//end  GM_xmlhttpRequest
        }
    },
    onerror: function(e) {
        console.log(e);
    }

});//end  GM_xmlhttpRequest