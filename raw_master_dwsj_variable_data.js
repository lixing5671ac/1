//别问我为什么抓包网络,那就是没有根证书(就是需要root移动证书到/etc/security/cacerts/目录下)
//不要问我安卓11能不能抓包,安卓11需要手动安装证书
//注意抓包有可能是 https://sdsj.shandw.com 链接 也有可能是 49.233.246.33:18081 ip带端口形式
//这是3个账户的模板,没那么多的账号就删掉
//单账号信息板块 {"user_ID":""*******"UA":""} 多账号用 逗号 连接 ,删板块也要删对应逗号,自己对比着修改

module.exports = {"code":200,"dwsj_variable_data":{
    "config":[{
        "url":"https://gitee.com/soy-tool/app-script/raw/master/app_dwsj.js",
        "update":false,
        "notice":true,
    }],
    "user_data":[{
        "user_ID":"30151329",
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
        "reward_video":'{"message":"3PGbgIIX6gmgEjWCgTCRNP0qGSMLXbYoV3uF2yDnmz2EY2hX2+WW8A29QLRgXsAsC8cnHYpUV4w+2WNjJnHavy44JG98PH1LpbQ8mn6x+OT7K6K8MknuuXwj6m7T2VN4OomD6BaJocPOyzRWC6BfF0+23mXlNoSO3Yzhv3zpmeCk8qEdCk0EU0Q5XHOTpt8k5Q4PYkx1DkYRWMFA05kpMghSCSDxyOIWyuWoDG3BZHZVlxZBAORgQjuGp2h44Tf\/oNRR9xulrIq15yFxviOQa\/yUAb0mlNYzS9vFc9eFwLWjqnWvOiXBB3h9gNHUW0eeN\/JW1DEPxBBY4\/O1jJjznsGFZD98oya1L8\/a4uZ0dyq\/KZGBFlrAg75T3\/5ajwz6LC\/wIawIfS+WHU+zu4ehtOHqoDXOkmT9fRs\/qF9QoQFcOUQ73okdKpKFgc2ip0GAStLjlM9tFNOm\/C+bFvsNrzjXOZPJ3guHYmQqx9yR0NwSzAqc1rgeNAYvJhfF6ZHVMzNKTySNCC4bT\/ytbkMc0l7+bYIWc9EAtjVcz1\/wpuCcx2C9SSLnr3dXeFEE4SjcIMIEmbH3cEEXxPIZugn2+gyQh42uzNJ6LEH5z4ODR+gFxi2Fwlsa0elUdnATImq9jX2PBhPS7Mw8jzDh+ab3gr2uPGhcgdZfMPt\/M6gJXj9EEEgR8gP7bPsioKk7xcsQwL\/B7nUv2EkiYsM5KkygbQIrJ9Aig1i4VXKkH895jiPqpBGr1HVKgYBnhwsK9xcqMzuuVxTOqRS5WUEER40Cnhd1CbrsI1cBDJQQ72XwDKxU1ezKKmvgB4re17d4rrLdl9GfVg0LtvFJm86arKB17yL54WJdcXtslbDZYIar\/gcElVSJ51A8yQt5vi4ey+sjdeivQdPQ7+wTva1bXLBxXHk4K+b1EVc79uDyVoBwnIy+0lWxgWBcC2YC\/f4JhrmF631BOapAzPo4R0QbiqSA\/uu+4apbpAIdTsJcNdCBBPjr7FIrG0\/9G9S9S24C94Oj4UqjuWz7frDtuBhzk+8vo7Ae0vFPGEAHt08fwj3Fvalad9JGID8e0oMAI23H05vOsgzInIqoe5PCVrGuw4zKHc9u6uH13RSpl4ZDvLuEYhrA3fb\/yanhA2+xZuVd+OI2lGW7yXyW\/xx9aQnl1p8Wats9zb47XcXonn5QndZtx1jJNTXclwo\/56f3WapF\/sARRlP\/2ENDcUZ51aHn\/+Uf+Fg\/URc0FJFOg1StC4yG0fx6Yp0ZN1Vv1cO+RvrGiWwi4vND2PEUpoNEjj3TjYDzGRA+R9uw0+i5P2KmZhOlMjnxbO7v8cDzjy8iBCLx9T8RKxMPe16H7tfquYQd1FfHDCygzjjCNQFbrXwQ1SuEh\/ojCrwoEL3yqwHqsVOYScny9Y8oXs3VEcGam+QnB+LYlGrkuJYJpCAcvyEl39hrjXoe\/4WJ6aB6vomuK\/0XmzjKmRMEkkdVoTaB5GmUdxNYCrB3LkKZAJQflgNZ8nciSlN1YZep4m2TEv7wKGBU0kC+jzFabdVVeVt+iLSWfflX6TNg17Gel7ri7Bx6GL5qdJq09iNwfA8TvKbzmR5FQfudNtsu5dC\/VsTY6H4ZndMlo961Oh\/RmbQS+hZjxIPVQlbs31MCy+0ovcHSxwLiCD5bIYV9VK3P8Bnu35SRlxnifBjDr9sHRzTmQl2U6QePQTWQuZzLfmABsUab4vheVKUBw4fj6gkCsoPk7OulHtb3ud5kgei\/b\/pKquYweUmEYUwI6kdXPQRLBxWBOx7B1T0jem8nh3qvnW2Lp79n6XSr9fCQclFXz4F5+jamqC4LDsQbqyDxpSuknvGQ\/FR0wUEGRgXT63QmRGZxrtCv4s2TV1EHOr3RrBMmdoDQqbWC5WUsWox62YVvMZmhNOWlVyo9Y8tRcbOgCLkj5mKerYb2nup59CCCVzvWcYvxRc4l0gHc6i6aPRogTznKG0VbOfG31hSNewfytWaDMrwUK760LcfuMp7p6pw32whbSaVqtAunEk7esPWm1tXRWJl2shyJMaTYKtlHBADazuIlAATztUgGPrYkdQvvU8CLq4\/y9QZ+QxMr7q+hJMmSE7NYNgz0VxHCMMTCVNZkHSWQpyULb8Fn1xh9wJUkDXBalGrv47ongdiWWb63ZnCx9vEfLWbZccd+OSV7B77dLjQuFhx7hjIBrcqzGjFqEFlviOYp3JsAtx7tac4wFO8VSRuRqRbFqTDK70nJMr827jF0v8IjmRos4Eir3wbHg3NPfKNbJd\/COZdIJjHNuVBdeBaicxHjRXgzEHvJKWcdTPrJlDCcRHyrw7RO20kQ+x8YeWQAww81RI\/qpgPYURAcbJ+Sb6fpriTAcim4Ag3G9nt+I51h5s4N8tbSK+QsV7dxBit01JXvXapdKJnyEL3ZEPpFENwC1Cq2WKPOdWkKiYX65QCYyJrHbexv0ytlrgAh9Af\/CClJKxT6vJ9dBPG+\/BOapBI3sCLAmvit4Xs7CLBGcJranEvnLElmZ2+ByH6JKnAqSNj0UNJrkbCEUn9mNCJYvt0qIvZz\/WJlb74chEV7PVq7TOp8xEmF3Y0eGwk1WFG7hDST\/MHA+ngNsQkzW7ymEG4zZ1AaCbvoa3USw5gl23RQk\/9lrWwca3BrN69tMzrzK2j47LPwZU9Wrq1HvmIExXaxDdRj0zfQ3uOSwYhEG0XkzYUQASau11GodDjCCD4Ksn8szHaCbkqcs1gtgM3BM4GW+wliWfyi5JirGHpPAWENGqqN+JSzTgxY7jzYrVfPJzbrlHnyumhTJU2KnuDY16jJavQvQ69wVf2MItvKoxDxZPpnCOSceOvVb1wf2vg\/DtCiK91LlSlk6h6Pk7nEvxeZIgSgAVoWcUFIERtO5uHKWSSZhYOe+Q6ImMo85GLmXiXmdCsXTe6YIKpIjMJjgnFG1qSSWqKx+aCBfyFCjJb5QojRmfRj8WYUqo982EfvO2ISr2H8x1u9JUhOOsn5MSEz9XhLWyn5Zk+vX7DUg+WiKG62jB3N\/FMAaRRqkVJ6gCbspFZ2l59n0ja7NGqL36Zk3skjlKUDTuP6Ey4HQRl8tnI5wGFqqZRsLRvJKh3i4\/g2pGPg6fRTiazE79MhFZWO+r0TMZep3aPTGl2udz8S5+WgVVbRPhbEN78pxptDCwAYxBcA3vcBQhd7x8C4zxfJi4qolm5LqeUzZfXVtgqU10FPuHzvMwnnGI+KEb01EMZ1gLrSb52NCyHgrNvWcxtSa+uH1KTU+ji19qk2kcP+q4uVyAGdjTv0h\/AitdkbXncG2+w2bCM9j1r+skXdAo4YlMMnkOaDwO02U9d3SgKrVVhwTYv6M\/FPvc3TYGKL9mJlzkvbUwHIgqpiOAc7cPgbRUnv4+\/cXR+jcfyv+BscrVTb9mcO+6+rIDNX2ipWTaiBgLU\/YRgxYBf9VSpwarpr8C9K9byAUYUIXBKkSAL3x4rj\/Q0Uj0vz3+QovI11TFha26QgI4\/ZKbj4Vkd3jk0sE7SCPQtbZYTcK8PikqF57SYQAFYcckkU8qEB4IHJsItGykZR5K0hBgM3GX0IN1tclY7D63g0JSAw7u6g+kHjxsJ9zv4tS2jLarhMutsaytE8LRQU7KjR21QP7FuVJlFYrTTGU+5oFeTx\/RxG\/+nkfmmMmn6\/n5elcHYARCvCrJay0Y5uPMJYmPudbwMYv1tceggVGjzIZiCXZw4H\/7sWzSBV4L6aoi0sJR7oa8e4BseTDI4KyiQ00vldAjD4ITQ2lgAxuoe3O5SzjUBxmrQ6ii3nUWxov8Ravx1f8dLi8XcYJ\/OtddpzwIV9miVXjPyFtkQawnJ6RhVQynhSMzlMviCsa2Ze6HHG\/aLtKGJvhxXXJBNG3c3hNJQQ9xkTNxZTB+\/FC47REkjeKq4YVUim6vJ1KKt+0q4si67X5tv8RDY8ypbXNQsdIio53cWCOtM0zzRQJaUopkrV9LAPvHbffjfeFnTKUAg+dBDVBAnDEhsVNM4IkSmNwB4PK1Dj7g7HLZWW8P5OOAZn\/Hwm67FoUnVaPLkQxYZV7J+c2Obb+PvaiLgbEQLraOB4RCyRRBWbzD9d3EOSJ+mN2hC6asd+7qbduspGY+BkSSDWFWb+oM\/h2iL42BZchHYrm03pM0gRI01l09sdhnbhicCXPpRCCGb\/t7s6ZKb36hYfo1k3TPhGMkt67YhrjsB4ZokbmcPBxcQl6Eo661QL2P8ZcXE8wbrSz2eIjenchQC5vxiHG\/Gn9ZKnXs984TQJD+9pDAemuUzIYdqBMo\/6PysHUkuOxdl\/N76OnlWLvBt58v5ezI5wu4LNBpdBgFQ6nwSM5IxyIsDU+DbD62aEIifGFMGs1KbPchN7Di44tYk0hrXVs4ZbrVa6Nbabz5u6ZKnCC\/hG9yQUlNUQ\/EvXdvb+0vCPxSaE+\/T8PCKSrU7VObChdC5h8rUsvxvHTgZakWj1F9DuKIjsJZ566NITU0OcvptT5S+R8+jn+XYcUJx1FKZfu36aYLG9QDXYuIae0N3QQnv6cUeA86rp2tDmciZzpQlayUQNaAUlkxt9VlBzXeN5yDbOyku7fQMevV6OyjxBhZ15T7hA1kIqOt7G0\/XlRu75mcmJQW4Qx5\/X38ObSJ4ZwgMxGZmmutW+sxloAEZwLwo9RPvSY73m8oHt0DYWuZOk71ImZabKipAwNDSLQDEip9BxBbRqnkJfAwZih2otOSDT10298t\/HHJcvhIr2CAEj8CIa1WdirR61IoyEi2A7n6kE373meu+gNMtKL4rBLFgz0lRR4bcOjW+MBWZfjkP6p1Cd9HTu3MlCXRJphp5\/vnIedHxkDh7\/IDqy56vlSQHx923MVirA2AZB5R4ZXV7LjfWO614N0l5+WwYLv02pCkaDvfUCIWlS+AbTzxfs0UzZ5hvlarHcDwmcu6d25u7xChKWKEucKBPFHIKC+S+999lUsN7HgLImbXEAkR13ATtYSeMvpnzG4EYtkl6IIGRBKwRp2\/87qcf+GrsmD5VSDI6OvZ+U9iOytzJMYj2CAsf5HrdhpVXAjlC7QEJgxU7awrYvVCgmpQy4Bj4Xms+aQHluB26ekKChUomKKQsfQ4gExL\/Svtb2+tPWxk6Zn8EEgmFPE8v04ETlLEsyPM69Y+9NUzefn1xO41uJxzFDOAig84099DUaAgD7ScaLiRQ1RqFc3PmU2MakhPm\/1PJiUkB0wm6xLQGfTaeXdEDqtccDQCzpQ83aNhrDlcw38biccuYJrPU25g6VkhYc3Q1FzBq64nFlXBQ9JdDIF1WjZpI3ks9dxWzVmWa8kJWkxn2\/IAa6iqp+zNR7u482EY0f5kSprOsl031TlqgbASe4YJofrhQS30g==","cypher":3}',
        "Authorization":"3bef1b81f1274e58ba43e8b2ba5225d1",
        "UA":"wzbsdw/1.0.9 (iPhone; iOS 15.4; Scale/3.00)"
    }

    
]}}
