/**
 * 替换url，替换整个header 一共2处！！！
 */

const url = `https://api5-normal-lf.toutiaoapi.com/luckycat/gip/v1/cooperate/exciad/done?device_platform=android&os=android&ssmix=a&_rticket=1648652374801&cdid=43b76f38-2ec1-4b94-8bd1-c5306249a536&channel=oppo_13_64&aid=13&app_name=news_article&version_code=874&version_name=8.7.4&manifest_version_code=8740&update_version_code=87409&ab_version=1859936%2C668779%2C3937400%2C662176%2C3937387%2C662099%2C3937341%2C668774%2C3937394%2C3941598%2C668775%2C3858336%2C3895606%2C3908854%2C3937405%2C3943225%2C660830%2C3937403%2C3945379%2C3658687%2C3817338%2C3898215%2C3470750%2C3567672%2C3596064%2C3712267&ab_feature=102749%2C94563&resolution=720*1280&dpi=320&device_type=OPPO+A59s&device_brand=OPPO&language=zh&os_api=22&os_version=5.1&ac=wifi&dq_param=1&session_id=2b04f163-83e7-4fe8-b8c9-6f75378b8ba8&tma_jssdk_version=2.14.0.50&rom_version=coloros_v3.0_a59s_11_a.19_191218&plugin=0&isTTWebView=1&host_abi=arm64-v8a&client_vid=3803320%2C3406951%2C3194524%2C2816476%2C3383553%2C3691472%2C2827921&iid=2590877771116094&device_id=59342892679`;
const method = `POST`;
const headers = {"Host":"api5-normal-lf.toutiaoapi.com","Connection":"keep-alive","Content-Length":"72","Cookie":"excgd=20220330; install_id=2590877771116094; ttreq=1$f5398469021369721a505835663dabb24dd43a4a; passport_csrf_token=40580837936dde24e18e74c2152d9b46; passport_csrf_token_default=40580837936dde24e18e74c2152d9b46; sessionid=bf513a992d06450625c55a5ba67ce3dd; odin_tt=474487fbfe7ca5fff52ccef22ca372651afb89b2123a477af9b5ecf5846b9ae9e733cf71bc915365a7058509d550751fdb600112b59b9d80664bd893f7e0a146; uid_tt=2b5931185fe9f06e1bbe68a007eb01ce; uid_tt_ss=2b5931185fe9f06e1bbe68a007eb01ce; sid_guard=bf513a992d06450625c55a5ba67ce3dd%7C1648093095%7C5183961%7CMon%2C+23-May-2022+03%3A37%3A36+GMT; sid_tt=bf513a992d06450625c55a5ba67ce3dd; sessionid_ss=bf513a992d06450625c55a5ba67ce3dd; MONITOR_WEB_ID=59342892679","X-SS-REQ-TICKET":"1648652374810","x-tt-dt":"AAA7YPAHO6PIPZAD4OUIOCEP47O6YKATPIZP3KB5PVB7LNKYIYFGMOY5O4XYA7I2BNVG25M73VJRHLVRLPXM7CZRB73U6BVJBEYCKIJKMLIZCDG75MJBZRWOZUT2W","passport-sdk-version":"30442","X-Tt-Token":"00bf513a992d06450625c55a5ba67ce3dd00f64e80d720dbd0812c08ff376bb8289a580a38fff9e13890c649d0847ad26e3e044ad56e044a7fe115581c6d739b6677cf56f0120d5026d9f8aa9ec76b43e9504c0cc939862db491d3627c3d4060d5924-1.0.1","sdk-version":"2","x-vc-bdturing-sdk-version":"2.2.1.cn","Content-Type":"application/json","X-SS-STUB":"182B74B9F6A7AFE6C5C8EB725BC59A5A","x-tt-store-region":"cn-hn","x-tt-store-region-src":"did","x-tt-request-tag":"s=-1;p=0","X-SS-DP":"13","x-tt-trace-id":"00-db56d4b309dd11cae87b72db58e0000d-db56d4b309dd11ca-01","User-Agent":"com.ss.android.article.news/8740 (Linux; U; Android 5.1; zh_CN; OPPO A59s; Build/LMY47I; Cronet/TTNetVersion:5eaec7a9 2022-01-24 QuicVersion:b314d107 2021-11-24)","Accept-Encoding":"gzip, deflate, br","X-Ladon":"Gic4WK/C/P0CMwjMW95IfXO1xLB0cOBrserKBFQhqn7uy6t5","X-Khronos":"1648652374","X-Gorgon":"840440580100a95d9c227863fe7599dd8dfb2b50b28ecb7608cd","X-Argus":"G7d7iLv80Mq5Bma4RXdwDKUXmUNPfHRK/ZQNPbVyh3+x9SAlpbh5oYLx0B43fvkXXBHIaeaGVrU5B2TOITCiOtIVJc6kkSBeuQfL0Rxf78uUg6BX8qL180DgIx6fCXtFfFUBr4VT77OMAlD6ggwfnx1+5fo+IszztzyXaD2gKS0gM1VdHEtcSRDmBeKvce453dV4kmLEPJBqV47CkKTV7sE/gGNdI8nh8Zjz9xCRkvzlu7NR63EbcLJF3FIvKOa8VpGjL+slvmjUd9g+qCCDbeJV"};
const body = `{"task_id" : "225"}`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
