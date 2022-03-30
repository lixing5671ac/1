/**
 * 替换url，替换整个header 一共2处！！！
 */

const url = `https://api5-normal-lf.toutiaoapi.com/luckycat/news/v1/task/done/excitation_ad?device_platform=android&os=android&ssmix=a&_rticket=1648648154484&cdid=43b76f38-2ec1-4b94-8bd1-c5306249a536&channel=oppo_13_64&aid=13&app_name=news_article&version_code=874&version_name=8.7.4&manifest_version_code=8740&update_version_code=87409&ab_version=668775%2C3858336%2C3895606%2C3908854%2C3937405%2C3943225%2C660830%2C3937403%2C3945379%2C1859936%2C668779%2C3937400%2C662176%2C3937387%2C662099%2C3937341%2C668774%2C3937394%2C3941598%2C3658687%2C3817338%2C3898215%2C3470750%2C3567672%2C3596064%2C3712267&ab_feature=102749%2C94563&resolution=720*1280&dpi=320&device_type=OPPO+A59s&device_brand=OPPO&language=zh&os_api=22&os_version=5.1&ac=wifi&dq_param=1&session_id=f5181350-c623-4fb1-89ed-a701d87ab1a6&tma_jssdk_version=2.14.0.50&rom_version=coloros_v3.0_a59s_11_a.19_191218&plugin=0&isTTWebView=1&host_abi=arm64-v8a&client_vid=3803320%2C3406951%2C3194524%2C2816476%2C3383553%2C3691472%2C2827921&iid=2590877771116094&device_id=59342892679&luckydog_base=dd2FrUsFw-L3KJyTO8-9OSPVBtCZ6Kvtq7XHSL6MG0Iq79BY2fqBhV34jWfXSyvbpHck9rrcfQbg5wPSq-HIvRrw1EhCWje0wln0o14HH-Gr4W5FanQDgJ3YbFHyWL5e&luckydog_data=lb5kAUYFs5ioMzDnXFd8RmpXPVXV3wuZfIF1Cw3gmVzNILpKID_bgp4WxMpo4xp8NpC0th4DIPZxgzxQHsojYA&luckydog_token=f4vJ5lIjcw_TqswBYwaPzPp4dvf46v9e9fS-z3d6G66FR9ZWDfcXNM5yr_sDMEiMOzLfwAJpRB514pgzZe9yIQ&luckydog_sdk_version=5.0.1-rc.11&luckydog_settings_version=15&luckycat_version_name=5.0.1-rc.20-ttmain&luckycat_version_code=501020&status_bar_height=18`;
const method = `POST`;
const headers = {"Host":"api5-normal-lf.toutiaoapi.com","Connection":"keep-alive","Content-Length":"137","Content-Encoding":"gzip","X-SS-REQ-TICKET":"1648648154533","x-tt-dt":"AAA7YPAHO6PIPZAD4OUIOCEP47O6YKATPIZP3KB5PVB7LNKYIYFGMOY5O4XYA7I2BNVG25M73VJRHLVRLPXM7CZRB73U6BVJBEYCKIJKMLIZCDG75MJBZRWOZUT2W","passport-sdk-version":"30442","X-Tt-Token":"00bf513a992d06450625c55a5ba67ce3dd00f64e80d720dbd0812c08ff376bb8289a580a38fff9e13890c649d0847ad26e3e044ad56e044a7fe115581c6d739b6677cf56f0120d5026d9f8aa9ec76b43e9504c0cc939862db491d3627c3d4060d5924-1.0.1","sdk-version":"2","x-vc-bdturing-sdk-version":"2.2.1.cn","Content-Type":"application/json; charset=utf-8","X-SS-STUB":"62A46613B6AD2E634C33F0BCEB5E45F4","x-tt-store-region":"cn-hn","x-tt-store-region-src":"did","x-tt-request-tag":"s=-1;p=0","X-SS-DP":"13","x-tt-trace-id":"00-db166f4609dd11cae872004a0e67000d-db166f4609dd11ca-01","Cookie":"excgd=20220330; install_id=2590877771116094; ttreq=1$f5398469021369721a505835663dabb24dd43a4a; passport_csrf_token=40580837936dde24e18e74c2152d9b46; passport_csrf_token_default=40580837936dde24e18e74c2152d9b46; sessionid=bf513a992d06450625c55a5ba67ce3dd; odin_tt=94c37fb93095391494bfd714047fd63b175d50cec1c669b7f8ca6e674bac375559c99e74f280af0a42631e7a9d5baef22c6f66b9824a7809e44b417adc9ffd64; uid_tt=2b5931185fe9f06e1bbe68a007eb01ce; uid_tt_ss=2b5931185fe9f06e1bbe68a007eb01ce; sid_guard=bf513a992d06450625c55a5ba67ce3dd%7C1648093095%7C5183961%7CMon%2C+23-May-2022+03%3A37%3A36+GMT; sid_tt=bf513a992d06450625c55a5ba67ce3dd; sessionid_ss=bf513a992d06450625c55a5ba67ce3dd","User-Agent":"com.ss.android.article.news/8740 (Linux; U; Android 5.1; zh_CN; OPPO A59s; Build/LMY47I; Cronet/TTNetVersion:5eaec7a9 2022-01-24 QuicVersion:b314d107 2021-11-24)","Accept-Encoding":"gzip, deflate, br","X-Ladon":"E15oIKhP449rZvEu7IAHG+a5QcQxnXiYQQAdiJefkJ2aqPuc","X-Khronos":"1648648153","X-Gorgon":"8404a0a80100b635baf123258de0937af205c5c929341e0813dd","X-Argus":"o8SlYqbRifeM8pFTS1lr/S6FjispiVpmaLHQPE3JIPxTF0G1wrayvxYFq5jgtMVevAwVw+6N0up2pTp9hWbyIVKY5XMOCCLfdkkfA3WGd7PAFaL4/AmVzc1Qx0TAVjO1DGVr0ocfJWLyRsjovQ5Lu3MNnww3KovRgGgppecfH5Lu4+je8FmLtGBKVN4iB/Yd71+nmqrJ0VOwnzO5TwuQ3kQq7PMD/p9f/3uAmwID5FYM7r4v536dodBhkHhAprCDSU3yAqrhVFAAAU3ihMrN8dqc"};
const body = `{"task_id" : "210"}`;

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
