/**
 * 替换url，替换整个header 一共2处！！！
 */

const url = `https://api5-normal-lf.toutiaoapi.com/luckycat/lite/v1/task/done/excitation_ad?iid=919619926235495&device_id=59342892679&ac=wifi&channel=lite_oppo_64&aid=35&app_name=news_article_lite&version_code=873&version_name=8.7.3&device_platform=android&os=android&ab_version=1859936%2C668908%2C3937402%2C668907%2C3858187%2C3937398%2C668905%2C3937366%2C668906%2C3937374%2C668904%2C3937345%2C668903%2C3937392%2C3801462%2C3520489%2C3540011%2C3596061%2C3700363%2C3842519%2C3936295&ab_client=a1%2Ce1%2Cf2%2Cg2%2Cf7&ab_feature=z1&abflag=3&ssmix=a&device_type=OPPO+A59s&device_brand=OPPO&language=zh&os_api=22&os_version=5.1&manifest_version_code=8730&resolution=720*1280&dpi=320&update_version_code=87310&_rticket=1648649633556&dq_param=1&plugin_state=139681997156381&session_id=81bcdde1-89e5-4194-ad2e-0ac1848abc19&sa_enable=0&tma_jssdk_version=2.8.0.14&rom_version=coloros_v3.0_a59s_11_a.19_191218&isTTWebView=1&host_abi=arm64-v8a&cdid=3aae5d57-3f39-49fa-bb64-9b1bb67fd1f8`;
const method = `POST`;
const headers = {"Host":"api5-normal-lf.toutiaoapi.com","Connection":"keep-alive","Content-Length":"256","Cookie":"excgd=20220330; install_id=919619926235495; ttreq=1$8f30778777520e301e06022b15c588e202805dfa; passport_csrf_token=e8cb8affe0ac315d92428bdc37e5db9f; passport_csrf_token_default=e8cb8affe0ac315d92428bdc37e5db9f; gf_part_158704=0; PIXIEL_RATIO=2; ssr_sbh__=18; MONITOR_WEB_ID=4d45931e-89cc-44a3-be1c-c58262affb90; ssr_tz=Asia/Shanghai; d_ticket=cd5c6e9cb203d537d75688011bb7d57575655; odin_tt=6add596fed40c84359f15b67b72c4a92a415e4b80cb2f58c2550329d1b07c799ef5386a00c57abe3fc246c990f9a5a9748158c23aec10dc9cca73f8b8f3141aa; n_mh=3J1B4l-d9Yn-jdjct_55QVRSd8hHYlFQwa8Ib-uNP1c; sid_guard=346d4ea7a7d09f7921e9149fc9c2b6ad%7C1648313686%7C5184000%7CWed%2C+25-May-2022+16%3A54%3A46+GMT; uid_tt=94bccfbce1ab1e599a33003482be68b8; uid_tt_ss=94bccfbce1ab1e599a33003482be68b8; sid_tt=346d4ea7a7d09f7921e9149fc9c2b6ad; sessionid=346d4ea7a7d09f7921e9149fc9c2b6ad; sessionid_ss=346d4ea7a7d09f7921e9149fc9c2b6ad; msToken=P0SEU4NoVINEGNhdTvOWM0_Pm-M00F6COpa_8RNs4a9ypnZC5pJWzQhJmlW5SleqGdn773MD4oQ02Kt_NI7eoCZmOdSI1LEZq7BacPCXvYE=","X-SS-REQ-TICKET":"1648649594293","x-tt-dt":"AAA7LH2VKHYX2DN6EU5YU3LU6PQGZEK3KVB7EK6BQKSCSUXGB3N3HA47KQPNA2IF525TLWQGG2Y3QE3JPLXM6D4GJFYGLYSS3L66XTX6EWJEKVJJYKEVNLSWBNFFHDX2RQYAJLWXMXFWGEXK5NC2UEQ","x-vc-bdturing-sdk-version":"2.2.1.cn","passport-sdk-version":"30442","X-Tt-Token":"00346d4ea7a7d09f7921e9149fc9c2b6ad043b83f12bfa47ed3067d73c6c6f04c0e5d69876d08608440fd450f59b12642e10032065f1865f3d7901036773565da0d1ff5185b4efbd195c4b32e38e4f81ac13b40f99b70029ebf5291a63f0d2ae00ade-1.0.1","sdk-version":"2","User-Agent":"Dalvik/2.1.0 (Linux; U; Android 5.1; OPPO A59s Build/LMY47I) NewsArticle/8.7.3 cronet/TTNetVersion:f2a033a5 2021-11-02 QuicVersion:705d0b81 2021-08-12","Content-Type":"application/json; charset=UTF-8","X-SS-STUB":"68FFCA17F363BB91ED1F7DAB54D1EFDC","x-tt-store-region":"cn-hn","x-tt-store-region-src":"did","x-tt-request-tag":"s=-1;p=0","X-SS-DP":"35","x-tt-trace-id":"00-db2c676509dd11cae871ce3de70f0023-db2c676509dd11ca-01","Accept-Encoding":"gzip, deflate, br","X-Argus":"5LKM6BjJSchOEFx5L+QAUy7/+JEtWqJStZ8/KCgryp93SiH3Zi/1ZmJInpc9bTwGAh3GSzl/ie8vchECwgPzbw/UAR4Bo/ksMUTfgh2BZplI5KZRzxdms7FmItshl8pNcZvtmvjMP/gV8UrN5CVb6odxUc9Cp5wqOLb3bXOnlttPg+hYbA2prMRU+uFf4XTEi+e0ZRwS0Ad20n+9UoBhQnNh80lgDi8P+Jsp4GJF/9cZfHJ672k0lXADf53EZYVA59oGhNYBfUHG3ZjpR5fPHFiF","X-Gorgon":"8404c0b401005a139e31bc84d8fc770ea8eec7637c104b99ad76","X-Khronos":"1648649594","X-Ladon":"Cu/nP7dVN2tg4UYbsm3OK2bCs3MqfUqaVArqVXkkB/EIMnBA"};
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
