
Date.prototype.Format = function(format) {
    format = format || "yyyy-MM-dd hh:mm:ss";
    var list = {
        "y+": String(this.getFullYear()), //年
        "M+": String(this.getMonth() + 1), //月份 
        "d+": String(this.getDate()), //日 
        "h+": String(this.getHours()), //小时 
        "m+": String(this.getMinutes()), //分 
        "s+": String(this.getSeconds()), //秒 
        "q+": String(Math.floor((this.getMonth() + 3) / 3)), //季度 
        "S": String(this.getMilliseconds()) //毫秒 

    };
    Object.keys(list).map(function(key) {
        var reg = new RegExp("(" + key + ")", 'g');
        format = format.replace(reg, function(fmt) {
            if (/y+/.test(fmt)) return list[key].substr(4 - fmt.length);
            return fmt.length == 1 ? list[key] : ("00" + list[key]).substr(list[key].length);
        });
    })
    return format;
};

export default {};



