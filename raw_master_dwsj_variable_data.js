//别问我为什么抓包网络,那就是没有根证书(就是需要root移动证书到/etc/security/cacerts/目录下)
//不要问我安卓11能不能抓包,安卓11需要手动安装证书
//注意抓包有可能是 https://sdsj.shandw.com 链接 也有可能是 49.233.246.33:18081 ip带端口形式
//这是3个账户的模板,没那么多的账号就删掉
//单账号信息板块 {"user_ID":""*******"UA":""} 多账号用 逗号 连接 ,删板块也要删对应逗号,自己对比着修改

module.exports = {"code":200,"dwsj_variable_data":{
    "config":[{
        "url":"https://gitee.com/soy-tool/app-script/raw/master/app_dwsj.js",
        "update":{false),
        "notice":{true),
    }],
    "user_data":[{
        "user_ID":"29862890",
        "build":true,
        "UPbuild":true,
        "signtime":0,
        "transfer":true,
        "Withdrawal":true,
        "delayed":1,
        "continued":true,
        "fire":true,
        "buy_fire":true,
        "buy_dice":true,
        "dice_six":true,
        "Address":"",
        "gold_coins":"",
        "config":true,
        "reward_video":'{"message":"3oH2mXlJxzhgUNaH3KKxscONu3ON4uqgbxJ9JzrxCsemanoINTVrQbxpqXmbyIpThFGit48IZn1ffDwVqylCENN9zx1XfNjpPPsgM90Jfqsb7l7rEMZe+r\/4mkeGBibvUDuRb7J5ptnwgtLFpXrfQKe56lff+Fl1mpLQOlTHVnGgvg8ACvl5HatUyl6jqO0z5\/8rvycLeUcZ3MZR+6GrnObtDJdlKl4zvLZf8V\/oCZQ+x89MSKCd4miFlttbTrXojLXH8ykTC8rC2F\/WpYq29iGLaBEKTMzChpeHhNq\/CaerZLyovlmXEmoEqlSU+1yiT+E3Z1Qs7awI8NRUPnkJWIpsDWX+eCfAf60ixcp8lGgYAKK5O7nXpz6I8Tk1jEdTl+LdWzO8vSW5Seh1S1Hl84+4veg1IofzVyl44Nz4zRVyfCnTdLzWQer\/Ewy8juNCTXsUuD8ziWa3Eu55lKmkZHCep0+fSYt0wuD+m5SttLIBeb4+ns971yA56JJjh3gZNpLCwu+64SHlxfvPBUch5jsQ6PhYcuI5agW4BtV5bWlsqVPbOE81Oe7qjOFBxio9qoTNMJZsw6spiaY5fFswAxJhql09V7exh0CZobWzY46YiIeUc7QKwrx8Hx2pJnFrRcrjsTtd504zfvo07\/rSgRSs+m7RsvH0\/0CsQAAlkX9AN6jPfSqe3YWRnvGwPyCO\/1DPAwx8VgdylFFp3xW5N22UgtWxZVHZMnj9+Wfl\/an4mUiIn3LK5fcjWXt2s7xrsHQuNJ1GpGMaN+sjuyB29Lxr40jSBtIilpLzmX85+6QFlntme43nA1VaU0dWgWHjNuO4MVxyBlceNuc3FEhJqTapC17Ey0c4LrTiE1p2+9QaEcEc6rip\/VVjOQrTVvUOPqsH+gtaapvplTFR\/cQNBYOz7qRFV4Irnh+SSlWFKb\/DQg\/KXM8ltNUp+uPYjlOBulKFJIdLCzS5aZ\/rooLjcQu0xCZntnND0KSOxiVb9BSv0fqorBMYDOAG\/eeimIpvZijjTgjmWjX+Nxj0nUH3GMEhqyM4y0KJ17ty2FnwDueTGGlegXL4rsfcXpoFQNCNLQSFxv+\/orEacD1nrVxrPmI0dxyGmGs\/ywS3SwdYtZnEWXtGJOG67IsttJHIecgqCaM+MuLImEnPpwQEEj1X9Jr6r6gVmQo48+HvNYCB72\/Z2rKtFexNdzTNmDTO3MNVj6XNIgWYVNw9n718Wc9uu9R8Km94Ze4Tpj4qX+kUtNZwsLef8xAky5XjgS04kpNC9Jkq3ml\/56Y7kNAo1FsNX3Nuk4GzV5DnLnkHrd+5YXeZkfF5rGeUCGaJ742RQJ5wuS0vp6VIcZnPDE2F\/KMM+PP5QEJBPdwB6JQVKjJKQRp3N2H0oLWs87N0MfcyUcFLL+SLBRBg8GFOLbuiBD9ttoqSbynhAemtlHj4hhpCQjdPAHlkhDiD2ePgdOMYym4X7ytaCEkj\/ZW+fmZVJTImgfIA8htZSUYppFYT9fhSZFbm5XQtKGbFtP+dYEVRLlQC\/5lnXcNY0xWGXZ5zBX13XP6WiqdGYaVP7dkqfVQITlySGaC3Nixjd0UBMNTFTq0VsftVy\/y6oe18yQ\/UOycR621+\/aBHeGjZbH6nJ4pvy0HFM28LblwWV0ODnqtBYpn3iP3og4nbdsZbohHb05yJ7j1bwW+\/QfarcnDG4Sqzg7hLJWssTYS0zLmOAEL9dBesO\/wNB3KqSEHUnbwz9p0tbErr1P+d+RRljdIgXqBY5BKxdqi59QAEhp0G\/aSShnAtSww6iusOKp0F35wGru4ReDYps+3+wDHtekQEo2VGOP236kzyyZI8vbBgyX2tPu9MiMjuG9ylL6utWgbSvEhYm5h4n\/xHO4LCEfsQnbIhc17GjbhKoH+2HTp4qg\/whYc2uieWDtDPhl7K985aCPmMQ8BWIfKZEY366zVBzRB6DnLf0oFHJeAHyVvLh1Y5f0XIQTwtsY43C77\/aIc4hBHHfPtG7JcmYr7DVHZiYKDBmgRWfDyeX7y3xhDZQEmQsj74\/NUAHUF9cJO1Wkwsl1xIMKDQjT\/B22NH0lhL0vsHN79gx89J919kBWGQsJvhI2fFfLgzd4M8AKgauOgXYrb7ppKtQ0kdAIIPJX35sz21aPMW9+C945kcN56lsFHXcVO8z3bC80sGrn3SOiCkjKAFVg3sRy23WzmMW4zAxD\/xov\/Dcr8xXrDB6ewXjf3gRHsNMwmpuhLFN9TFe1Y6Jc3i\/Ls8FFqQstV9jMfR7GGGYemObP3k2hmAHQ41vkbJgGjsA6xRWslRf8PMnaE1\/Bj6yVa3YPcuXhv\/aGMvSKy3OjuAHWcaZMUB02pli9Vh3w+jC58zmVTi5XNzmzm5RpiidXXs\/BZn0lL114+\/Yo0cNgb9H1SRhO9pzi+ddD90j2n\/g1s2RzRh4mGQcMjG7fDWQGV3AcnGqOf8zu8LYzf0Yakmu6RsJsibamg4JgOVGLYTyVUsY0cVGdl0wBHMDBHAMEp0uEWLMHLwiBNRpOZiYdBEE+vckMoefD7DI7gVIKniDczoTiYmxv4OirScuqK+iEJasZNrkGv\/XhqfoW5CzMz11im3ZOOR\/Kq71JGIRaLZgwjV6cJslXh3ujMrFO7z8oddofRqxye0fbuSt8j5iC6ph3HVYLsHJ6cNthRpSuTSRNsaXF+Duc4Piqfgvm1s5QAH1AssLI7LUOcOwdFqF64rcQJgnbG0arFVdylhQYCXqBbO1Sq91S8XxKXhA7kPFoXCOBqxdStvJ\/VDKt6KQDh+EaH4wLa0ZPZK98H\/m2e669SDGuOnAufAw+D+gGe4ObeHHDfGcdy0ErhyiZsYDLM0J4RCvkc3MnvwhUZ1Xq47X5GaX+IRMxV2VULwI\/f8ws7ixHpuWO\/jLx0ik8lKIzbKa6yBZ2r13+UGZdhn1tmtvIYglGKkw1ConPxdwW7uY3qebidLWriswgNFv7Mfft\/8OYDW1lCiT\/ktuB6TuR7lNYCu1Tbu69kBbcln5zjjH65gCiu63FdwX97SpmmjiA2boUqBP2p56NQG0mtBEuM3XNdIrtFbWiJW8bYg41+ruHsqyyLHkQkxw6gjv7KjR9geTcJxgoZJu1FIGePZVAc27AkzV\/hRf5W70VxJ8dbY19xt5qZHG2P6De+9FlvFiSb1zFnCFxnD3HZJCkxtjA2G91NyXNNrOOZ6M\/cv7FF+1UluYCEIkEUcaMTUr93GyysZ7AsoaE08Bd1Ff3iyg2Eb6MwtCEDUh8YPur\/oB\/YOucgEHNnsPm3ze\/iPP98oIt3A5rAwIVfatNvTuYFvlJtx8iNqUTjpi5JbJCUFhVy6Et+Qb0VzELklLFyd87pcj1cOfN9ywNxFZqJOOpKQRAlKkaK\/qe9gBKHySOU0FDkHIllGjK8zZA1clt1jgNeS5KKIOB53t+oXsteGnstN4pD3eg5npwW3c5Bdj4jGa4yAdRKLnRlgiJd3livC6AAcriBCdPNmhT9NMhVsX\/m\/8SqKOb9ubTg5GDIXwyr6\/Xtui1tGFwZNa8caYgj79diK9DzfO6Pa8nZcLhduDX\/EEWOeKbWZWgJB9tXu5hpozioQxgTDsLgdAHFk4diODNi\/9GFnUnIMcPYknNkPB5Q\/4+22jPUPg3XoDhrqXYGaJtwID+Mk9BtAm7FYqcr69JziH92qs+m40MP7Zv1EorPOUE5kzQifjj+3fLuHZG7GM7wj+A4MxlkNbQcSU+xGgCEk+02fkNPOoYjIy1CtefY68B03Mwb6phXxNKqICy1ZzzktzF0IdxVkI6LlT\/LTyQc02rRwYNCCCIeTmu6\/vsKNLOipjeNFAsU8ftQJjZf78ck7+dbkof6VYE36PeBgKsCPs2RDfzf4dJwJGoter8jdaOLVvADwwoHw2LYbg0Eo34uKwT\/6JeZMIiAotC0W8VLHbJyF1R1IO\/F9ctD7mo6p25Y\/1Xv1cI6Xn8RgRneQSGkm39ECV4Fw7+V06Ym3ppW+C5UtRGki98pF+MdtZOwYutLvE0D8xUGDYGQUe59BmaGmvhgBuh5EcoLb77HLHihj5Kyw4xu1Qa8bGwiy9dFE2SwcJ5SyudjGJQlKV3xgKcAM2BDD314rF\/SfNYnviJ7oUhaU8uAEOnLoay\/m5Bm5pDrBzL\/kB5tmQEhlx6VDUSzlY0OXB8nQxOce0SVdv7sSHp9ERR7rDQCDUhlqioP6oVdaZD8urXeKarZa0y\/tfqRWcQq7MPEWeLJL\/UdQO1+WXlkYePny02DjNvFy0QCdxtMFevWMVEADRrZNwqFCJmh5eIKQWyIHdqKV6VlTh27u2vJAUx\/+Acnw4WCfCD7yiVgUaHGXn2EtBKWUynRNoq65miBazBv26sUwcWT6ElxZbE3fyAIY8uuh8DHwzVLdm8KVisRBY20XX499jzHWNQIa81RdykBysMwleFF4XKIHU10Mzv3jeuW+I5IFNFLjMXvNp1NN7JKPzZE9uCJt7HVjsmqdQjW3Nl\/GSwctml1wakeJqIELG7QYXmY1nYhnT4Hn9EOA1MjNXDJeZoW2F4+EYPbZ86tP0nsJMjz0VKVL562ZNnZfUc\/yz5OdZGCgiUC5eCxthigcjyzjgS\/Q2F\/tVzafJUE6emPlLIClCjUMtKv4Wgza8U7qzHlwnB9QrH5k3DGVg8mZz\/4yzZI3XhRS7odil24\/lmBghQkgnPL6Zl3OEyev8qWZx6SdP4cutR\/\/oGoB6CMpM9wq2L4BOAyTL75q917u3RfFmdjH+zYy1ZM2APyO4t9Av+6xek1Oel80WViAzlbQguZq16b+Qxq+SqJs9DjfY5Cg9yBfRFmZZRGtyqAQXq9MHdTm\/IlwL28LgfllF724UkcK\/4hZMZ2I0GUyM8Ke4wi+LigcMclFIaZJYD8S+6H\/wmpufEfhH+X5Z012GbLN84wKEMyTra9qyKuVkbn4aFs\/F8udR4jsHjUn5ZBo5Nw2cNkCd6GV\/GLF3hJ0tH2XDaAPbn55qQWIp1lBLLiCHsDHJBR449x1teflJgUaJ2UuYatw0xiSKcVDbZUDtd74vs7igAcdfEU6p+8dzSdpNv\/slOAtg4XfNdrNnsDfsXRzoKRj4ky0sVjtNux3LQC4hxl7257GgG1vs+JuI77HfSNS2GDybyPizvINMZjo9IugNLECB4jElFNp3nfpWVIi+HFySgHZcQ2QIKJON8rutYZLVIfKnMsdC0jp73OVRGG\/cgGUxnTpz5i7nRFQRKpGyKCCs+GzvKMvmCkn4D\/zh23p5IGd6pANNnbe7pevD0BsoF7o5VEVD2LZPBX5rwJ5koC46GD7fFWedMkLCvvzNY\/Qia8JzzPTkPjNiehkZ0DunE0fo78M25XSpNptpqanrNd9+7xLuads6AF4Yoms=","cypher":3}',
        "Authorization":"Authorization: 61dce671e796456eb953dcd46341d705",
        "UA":"User-Agent: wzbsdw/1.0.9 (iPhone; iOS 15.4; Scale/3.00)"
    }
    
]}}
