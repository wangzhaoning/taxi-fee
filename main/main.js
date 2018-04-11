module.exports = function main(input) {
    var data=indata(input);
    var result=printResult(data);
    return result;
};
function indata(input) {
    if(input==='')
    {
        return null;
    }
    let x=input.split('+');
    let data={};
    data.distance=parseFloat(x[0]);
    data.min=parseFloat(x[1]);
    data.price=(data.distance<=2)?6+(0.25*data.min):
        (data.distance<=8)?6+Math.round((data.distance-2)*0.8+(0.25*data.min)):
            (data.distance>8)? 6+Math.round((6*0.8)+((data.distance-8)*1.2)+(0.25*data.min)):
                null;
    return data;
}
function printResult(data) {
    if(data===null)
    {
        return null;
    }
    let solte='------------------\n'+'距离：'+data.distance+'km'+'\n'+'等待：'+data.min+'分钟\n'+'收费：'+data.price+'元\n'+'------------------\n';
    return solte;
}