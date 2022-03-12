# -*- coding: utf-8 -*-
import base64
import requests,json
import time
from Crypto.Cipher import AES
from binascii import b2a_hex, a2b_hex
from Crypto.Util.Padding import pad

# 青龙安装依赖    pycryptodome

# 手机号
config_list = [
   {"mobile": "19918302180", "food": True}
]
# 用户中心
# 抓包url   https://wapside.189.cn:9001/jt-sign/api/home/homeInfo
# home_info_body   {"para":"xx"}
home_info_body = {3ff922d2d2c8abbdaea8a906546a1b0fcb28a2fe92879384a234aa1044403fe22b4ef42ff85dde1b302097a55bdaf9a5f254339bc6e2988ac67d83e8b77666ed5ce54c397b5ef963ade5f09840b8f30bb9a26177dc10c1ff5c51813a58ef0e1657de9e69abfc77a201947cb3226b3d45402a14fdded1833aa40f3fe0194c5ebf2631fbba1f0008cecf84d86b136fccfbf7e32295924f6c7fe48af8c4916742f1129ca2b97323698019110cb9191856519581150e337fd5ea573cb5409773f4349f277e63ac6ad8ebe8eb68c25a29439a941b440a3a0644f07cb953fb5922ab335ac7fb7fee1f7aa77b894611471f4d22c4878a99b5d2c4cf591a824fb2fb2751}

# 喂宠物
# https://wapside.189.cn:9001/jt-sign/paradise/food
# food_body   {"para":"xx"}
food_body = {0748ff47eda507929a4e468f38ee7fe4f09d317300193a8c5970938feaa0e1aea71089f832ba7f52d359a1ae91f2c9e75c1c7f6e2eacf0c7ef6eef5494214b30584147ef29d1dff38e1f7454d18bb3f55541063fb8268a4deb5990a32b59dbc2bc35df0386fa2004cddb3c04b6d6bb83616611d8bd5eda5c0b1dd3a94ed6d22e}


# 分享  
# https://dxhd.189.cn:7081/actcenter/v1/goldcoinuser/shareToGetCoin.do
# share_body = {
#     'activityId': 'telecomrecommend01',
#     'session': 'xxx'
# }
share_body = {
     'activityId': 'telecomrecommend01',
     'session': '2022031208003433073c0c804ed0f4d19a35938d2e8a419f4'}

# 云盘
# 'https://wapside.189.cn:9001/jt-sign/paradise/polymerize'
# cloud_body = {"para":"xx"}
cloud_body = {143f566a63ace23cddb5aa50447ff2bdf59b55af76e9d41c6a12ac78b890136cb1726339626c41ad41c36fce3ca6c6f47c2bf2b4ef30a1e4a1dfa988e8e706333b4ef57674770a3412f5ebb223242ed7184afdc9d121b64e94d5619dd2190626f6e83615c5b40f975691888fbbf9f2fd3fdb52ee11e1a26d8e708f1991022ff299369cc846f01dce3addd0dd1978b3b9a1079b61618f3ee6686024954fbaaed917aaf7fedd0d5b953f649a67d3a754758df05999ae223ba5d58420e6e9affab4ac2909f49ffa57555ead476c70b00b3bb8298a1dfd8592f1444ee0af77b1f8f3b00d00660fcf761ac369a27af8501563fe1cf95994e86640e0fedde5dad38ba2}

# 种树
# 'https://wapside.189.cn:9001/jt-sign/paradise/polymerize'
# tree_body = {"para":"xx"}
tree_body = {143f566a63ace23cddb5aa50447ff2bdf59b55af76e9d41c6a12ac78b890136cb1726339626c41ad41c36fce3ca6c6f47c2bf2b4ef30a1e4a1dfa988e8e706333b4ef57674770a3412f5ebb223242ed7184afdc9d121b64e94d5619dd2190626f6e83615c5b40f975691888fbbf9f2fd3fdb52ee11e1a26d8e708f1991022ff299369cc846f01dce3addd0dd1978b3b9a1079b61618f3ee6686024954fbaaed917aaf7fedd0d5b953f649a67d3a754758df05999ae223ba5d58420e6e9affab4ac2909f49ffa57555ead476c70b00b3bb8298a1dfd8592f1444ee0af77b1f8f3b00d00660fcf761ac369a27af8501563fe1cf95994e86640e0fedde5dad38ba2}


msg = []

def telegram_bot(title, content):
    print("\n")
    title = title  # 改成你要的标题内容
    content = content  # 改成你要的正文内容
    bot_token = ''
    user_id = ''

    print("tg服务启动")
    url=f"https://api.telegram.org/bot{bot_token}/sendMessage"
    headers = {'Content-Type': 'application/x-www-form-urlencoded'}
    payload = {'chat_id': str(user_id), 'text': f'{title}\n\n{content}', 'disable_web_page_preview': 'true'}
    proxies = None
    response = requests.post(url=url, headers=headers, params=payload, proxies=proxies).json()
    if response['ok']:
        print('推送成功！')
    else:
        print('推送失败！')


def encrypt(text):
    key = '34d7cb0bcdf07523'.encode('utf-8')

    cipher = AES.new(key, AES.MODE_ECB)
    pad_pkcs7 = pad(text.encode('utf-8'), AES.block_size, style='pkcs7')  # 选择pkcs7补全
    cipher_text = cipher.encrypt(pad_pkcs7)

    return b2a_hex(cipher_text)

def telecom_task(config):
    mobile = config['mobile']
    msg.append(mobile + " 开始执行任务...")
    h5_headers = get_h5_headers(mobile)
    # 获取用户中心
    home_info_ret = requests.post(url="https://wapside.189.cn:9001/jt-sign/api/home/homeInfo", json=home_info_body, headers=h5_headers).json()
    if home_info_ret['resoultMsg'] != "成功":
        msg.append(home_info_ret['resoultMsg'])
        return
    user_id = home_info_ret['data']['userInfo']['userThirdId']
    old_coin = home_info_ret['data']['userInfo']['totalCoin']

    # 签到
    t = time.time()
    time1 = int(round(t * 1000))
    body_json = {
        "phone": f"{mobile}",
        "date": time1,
        "signSource": "smlprgrm"
    }
    body_str = json.dumps(body_json)
    s = str(encrypt(body_str),'utf-8')
    sign_body = {
        "encode": s
    }

    sign_ret = requests.post(url="https://wapside.189.cn:9001/jt-sign/api/home/sign", json=sign_body,
                             headers=h5_headers).json()
    if sign_ret['data']['code'] == 1:
        msg.append("签到成功, 本次签到获得 " + str(sign_ret['data']['coin']) + " 豆")
    else:
        msg.append(sign_ret['data']['msg'])

    #share
    share(config)
    time.sleep(1)
    # 获取用户中心
    home_info_ret = requests.post(url="https://wapside.189.cn:9001/jt-sign/api/home/homeInfo", json=home_info_body,
                                  headers=h5_headers).json()
    new_coin = home_info_ret['data']['userInfo']['totalCoin']
    msg.append("领取完毕, 现有金豆: " + str(new_coin))
    msg.append("本次领取金豆: " + str(new_coin - old_coin))
    time.sleep(1)
    # 喂食
    food(config)

    msg.append("----------------------------------------------")

def food(config):
    if config['food']:
        mobile = config['mobile']
        msg.append(mobile + " 开始执行喂食...")
        while True:
            food_ret = requests.post(url="https://wapside.189.cn:9001/jt-sign/paradise/food", json=food_body,
                                     headers=get_h5_headers(mobile)).json()
            msg.append(food_ret['resoultMsg'])
            if food_ret['resoultCode'] != '0':
                break

#分享
def share(config):
    mobile = config['mobile']
    msg.append(mobile + "开始执行分享...")
    url = 'https://dxhd.189.cn:7081/actcenter/v1/goldcoinuser/shareToGetCoin.do'
    resp = requests.post(url=url,data=share_body,headers=get_h5_headers(mobile))
    print('share==============')
    print(resp)
    result = resp.text
    print(result)
    msg.append("分享" + result)

    cloud(mobile)
    time.sleep(2)
    tree(mobile)

# cloud
def cloud(mobile):
    msg.append(mobile + "访问云盘...")
    url='https://wapside.189.cn:9001/jt-sign/paradise/polymerize'
    resp = requests.post(url=url, json=cloud_body, headers=get_h5_headers(mobile))
    print('cloud=========')
    print(resp)
    result = resp.json()
    print(result)
    if result['resoultCode'] ==0:
        msg.append("云盘"+result['resoultMsg'])
    else:
        msg.append("云盘访问失败"+result['resoultMsg'])

# tree
def tree(mobile):
    msg.append(mobile + "种树...")
    url='https://wapside.189.cn:9001/jt-sign/paradise/polymerize'
    resp = requests.post(url=url, json=tree_body, headers=get_h5_headers(mobile))
    print('tree=========')
    print(resp)
    result = resp.json()
    print(result)
    if result['resoultCode'] ==0:
        msg.append("种树"+result['resoultMsg'])
    else:
        msg.append("种树访问失败"+result['resoultMsg'])


def get_h5_headers(mobile):
    base64_mobile = str(base64.b64encode(mobile[5:11].encode('utf-8')), 'utf-8').strip(r'=+') + "!#!" + str(
        base64.b64encode(mobile[0:5].encode('utf-8')), 'utf-8').strip(r'=+')
    return {"User-Agent": "CtClient;9.2.0;Android;10;MI 9;" + base64_mobile}


def format_msg():
    str = ''
    for item in msg:
        str += item + "\r\n"
    return str

def main_handler():
    for config in config_list:
        telecom_task(config)
    content = format_msg()

    print(content)
    telegram_bot('电信签到任务', content)
    return content

main_handler()