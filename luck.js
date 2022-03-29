
/**
 * 替换url，替换整个header 一共2处！！！
 */

const url = `https://api5-normal-lf.toutiaoapi.com/luckycat/news/v1/task/done/excitation_ad?device_platform=android&os=android&ssmix=a&_rticket=1648570457888&cdid=43b76f38-2ec1-4b94-8bd1-c5306249a536&channel=oppo_13_64&aid=13&app_name=news_article&version_code=874&version_name=8.7.4&manifest_version_code=8740&update_version_code=87409&ab_version=668774%2C3937394%2C3941598%2C668775%2C3895606%2C3908854%2C3937405%2C660830%2C3937403%2C3945379%2C1859936%2C668779%2C3937400%2C662176%2C3937387%2C662099%2C3937341%2C3470750%2C3567672%2C3596064%2C3712267%2C3658687%2C3817338%2C3898215&ab_feature=102749%2C94563&resolution=720*1280&dpi=320&device_type=OPPO+A59s&device_brand=OPPO&language=zh&os_api=22&os_version=5.1&ac=wifi&dq_param=1&session_id=1b2607d8-4b80-4818-ac52-599f7cf5ab97&tma_jssdk_version=2.14.0.50&rom_version=coloros_v3.0_a59s_11_a.19_191218&plugin=0&isTTWebView=1&host_abi=arm64-v8a&client_vid=3803320%2C3406951%2C3194524%2C2816476%2C3383553%2C3691472%2C2827921&iid=2590877771116094&device_id=59342892679&luckydog_base=YSLq8Gl-OPhlm8wODmCHnSl8bQClOVIpvyMbhmZvEfOXMAVRlC99eHqZwIBAakB5S0lywNhCkEUD2a_fczUi33sT9XR0p8RB7jY65X86yBZ9R973KRFcv1Vj-9SG7kyj&luckydog_data=sC60yCmuTBbRG7TZe3oINkDlk8AH8mRIZPQ_dOWCs-Ew_22G0TCN5ZoKTJ5-Slo-ZWxGn1Ks_QFu2rWgozLOf57TMzZFKA8mkv4A_Fh3CPo&luckydog_token=f4vJ5lIjcw_TqswBYwaPzPp4dvf46v9e9fS-z3d6G66FR9ZWDfcXNM5yr_sDMEiMOzLfwAJpRB514pgzZe9yIQ&luckydog_sdk_version=5.0.1-rc.11&luckydog_settings_version=15&luckycat_version_name=5.0.1-rc.20-ttmain&luckycat_version_code=501020&status_bar_height=18`;
const method = `POST`;
const headers = {"Host":"","Connection":"","Content-Encoding":"","X-SS-REQ-TICKET":"","x-tt-dt":"","passport-sdk-version":"","X-Tt-Token":"","sdk-version":"","x-vc-bdturing-sdk-version":"","Content-Type":"","X-SS-STUB":"","x-tt-store-region":"","x-tt-store-region-src":"","x-tt-request-tag":"","X-SS-DP":"","x-tt-trace-id":"","Cookie":"","User-Agent":"","com.ss.android.article.news/8740 (Linux; U; Android 5.1; zh_CN; OPPO A59s; Build/LMY47I; Cronet/TTNetVersion":"5eaec7a9 2022-01-24 QuicVersion:b314d107 2021-11-24)","Accept-Encoding":"","X-Ladon":"","X-Khronos":"","X-Gorgon":"","X-Argus":""};
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
