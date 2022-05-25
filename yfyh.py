import random #line:1
import requests #line:2
from loguru import logger #line:3
'''
频道链接:https://t.me/maomaoalal  交流群:https://t.me/+5xDWXXg-Ug03ZGI1
鸾凤玉华 小程序
抓包 api.luanfengyuhua.cn 域名
变量：sessionkey  
签到10天大概20缘值 价值20块钱
也可以兑换实物
corn 一天一次
'''#line:13
sessionkey_list =['vzcz7WQjA3UW/I/W9IPJRw==']#line:15
info ='''
频道链接:https://t.me/maomaoalal  交流群:https://t.me/+5xDWXXg-Ug03ZGI1
鸾凤玉华 小程序
抓包 api.luanfengyuhua.cn 域名
变量：sessionkey  
签到10天大概20缘值 价值20块钱
也可以兑换实物
corn 一天一次
'''#line:25
def get_ua ():#line:26
    OOO0OO0O00000OOOO =random .randint (55 ,62 )#line:27
    O00OOO0OO00OOO0OO =random .randint (0 ,3200 )#line:28
    O0O000OO000OOO0OO =random .randint (0 ,140 )#line:29
    OOOOOO00OO0O00O00 =['(Windows NT 6.1; WOW64)','(Windows NT 10.0; WOW64)','(X11; Linux x86_64)','(Macintosh; Intel Mac OS X 10_12_6)']#line:33
    OOOOOOO000OOO0000 ='Chrome/{}.0.{}.{}'.format (OOO0OO0O00000OOOO ,O00OOO0OO00OOO0OO ,O0O000OO000OOO0OO )#line:34
    O000OO0OO0O000O0O =' '.join (['Mozilla/5.0',random .choice (OOOOOO00OO0O00O00 ),'AppleWebKit/537.36','(KHTML, like Gecko)',OOOOOOO000OOO0000 ,'Safari/537.36'])#line:38
    return O000OO0OO0O000O0O #line:39
def Sign (OO00OO00O0O00O000 ,O0O0000OO0OO000OO ):#line:42
    try :#line:43
        OO0OOOOO0O00O00O0 ='https://api.luanfengyuhua.cn/Api/Signin/submit'#line:44
        OO0OO0O000OO00OOO ={'crypt':'563ed8d6cc76e33bc5cd03ea95bc200c-1653397581000','sessionkey':O0O0000OO0OO000OO ,'User-Agent':OO00OO00O0O00O000 ,'content-type':'application/json','Accept-Encoding':'gzip,compress,br,deflate','Referer':'https://servicewechat.com/wx0a33ac3ad3f4c06c/44/page-frame.html',}#line:52
        O0OO000OOO0OOOOOO =requests .post (url =OO0OOOOO0O00O00O0 ,headers =OO0OO0O000OO00OOO ).json ()#line:53
        if O0OO000OOO0OOOOOO ['status']==200 :#line:54
            return '签到成功'#line:55
        elif O0OO000OOO0OOOOOO ['status']==100 :#line:56
            return '今日已签到'#line:57
        else :#line:58
            return '未知错误'+O0OO000OOO0OOOOOO #line:59
    except Exception as O0000OOOOOO000OOO :#line:60
        return O0000OOOOOO000OOO #line:61
if __name__ =='__main__':#line:64
    logger .info (info )#line:65
    logger .info (f'当前共{len(sessionkey_list)}个账号')#line:66
    my_ua =get_ua ()#line:67
    for sessionkey in sessionkey_list :#line:68
        Sign_result =Sign (my_ua ,sessionkey )#line:69
        logger .info (Sign_result )#line:70
