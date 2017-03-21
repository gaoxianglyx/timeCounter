;(function () {
    function timeCounter (params) {
        //参数：倒计时截止时间；倒计时时长；主题色；是否显示天数；宽度；风格
        //提供接口： 暂停；开始；清零； 提醒
        //获取参数
        var endDate = params.endDate || '2018 01 01 0 0',
              duringDate = params.duringDate || 200,
              hour = min = sec =0;
              counter = document.createElement("span");
              container = document.getElementById(params.el) || document.body;
        container.appendChild(counter);
        //格式化时间为两位数
        function timeFormat (t) {
            if(t<10&& ('0'+t).length<3) {
                return '0'+t
            } else {return t}
        };
        //输出时间，每秒更新
        function printTime () {
            if(duringDate == 0) {
                clearInterval(interval);
            }
            sec = timeFormat(duringDate%60);
            min = timeFormat(Math.floor(duringDate/60)%60);
            hour = timeFormat(Math.floor(duringDate/60/60));
            duringDate--;
            counter.innerHTML = hour+':'+min+':'+sec;
        }
        var interval = setInterval(printTime, 1000);
    }
    window.timeCounter = timeCounter;
})();