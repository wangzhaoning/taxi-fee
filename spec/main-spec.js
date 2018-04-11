const main = require('../main/main');

describe('taxi fee', function () {
    // write your tests here...
    it('低于2公里的收费无等待时间', function() {
        var input='';
        var result = main(input);
        expect(result).toEqual(null);
    });
    it('低于2公里的收费无等待时间', function() {
        var input='1.2km+0min';
        var result = main(input);
        expect(result).toEqual('------------------\n'+'距离：1.2km\n'+'等待：0分钟\n'+'收费：6元\n'+'------------------\n');
    });
    it('大于2公里小于8公里的收费无等待时间', function() {
        var input='3km+0min';
        var result = main(input);
        expect(result).toEqual('------------------\n'+'距离：3km\n'+'等待：0分钟\n'+'收费：7元\n'+'------------------\n');
    });
    it('大于8公里的收费无等待时间', function() {
        var input='10km+0min';
        var result = main(input);
        expect(result).toEqual('------------------\n'+'距离：10km\n'+'等待：0分钟\n'+'收费：13元\n'+'------------------\n');
    });
    it('有等待时间的收费', function() {
        var input='10km+4min';
        var result = main(input);
        expect(result).toEqual('------------------\n'+'距离：10km\n'+'等待：4分钟\n'+'收费：14元\n'+'------------------\n');
    });
});
