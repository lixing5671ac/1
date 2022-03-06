# cron：3 0 * * 1 python3 example.py
from telethon import TelegramClient
import os
current_path = os.path.dirname(os.path.abspath(__file__))
os.chdir(current_path)
# 在 https://my.telegram.org 申请到的 id 和 hash 值
client = TelegramClient("bot", "6179991", "d2a5ee0c849d06fce46c4c46180919e2", connection_retries=None).start()
async def main():
    # 将您的互助码替换掉下面的 “<码1>&<码2>&<码3>&<码4>&<码5>”，可直接从导出互助码日志中提取
    await client.send_message("@JDShareCodebot", "/farm cf381e34be6d4579a80bc084dc82282a&b2a38ad00eb943c796cedade65349835&2edeeb6c5f0e41a192af4508779a5a8b&7721264a54984195903ac8c4e9e6d5fb&f22607e57e49459bb6f6c2cd55d6c0e7")
    await client.send_message("@JDShareCodebot", "/pet MTE1NDQ5MzYwMDAwMDAwNDY0NzExNDc=&MTE1NDAxNzgwMDAwMDAwNDI5Njg1OTE=&MTEyNjE4NjQ2MDAwMDAwMDU0ODczNDcz")
    await client.send_message("@JDShareCodebot", "/bean 4vvbjlml6tdfdigoyebsdhpxfybedb2s6dvtwxq&rj7s6mzlk7uoh6v72aufjhmw3b4gzhhmn3jbeqa&olmijoxgmjutyatl6igokmz5rlcmju56lw4ekvi&e7lhibzb3zek26qylpplikcqrh2kbhaa7bx54ya&l4ex6vx6yynoud45bwa7lhaenfut27acxetttwa")
    await client.send_message("@JDShareCodebot", "/jxfactory YaaNzDX_fyxU446_bGNU3g==&kXMximUPeBZAT0rLd_JX4w==")
    await client.send_message("@JDShareCodebot", "/ddfactory T0205KkcAkVAsi2jW06Xw6NNCjVWnYaS5kRrbA&T0205KkcEWVLsAuzYUuQ5rVJCjVWnYaS5kRrbA&T0225KkcRhceo1KEckzzwP4NdACjVWnYaS5kRrbA&T0225KkcREoY9VXVIU71x_ZYJQCjVWnYaS5kRrbA")
    await client.send_message("@JDShareCodebot", "/sgmh T0205KkcAkVAsi2jW06Xw6NNCjVQmoaT5kRrbA&T0205KkcEWVLsAuzYUuQ5rVJCjVQmoaT5kRrbA&T0225KkcRhceo1KEckzzwP4NdACjVQmoaT5kRrbA&T0225KkcREoY9VXVIU71x_ZYJQCjVQmoaT5kRrbA&T0205KkcHWZPsgekckyi6KZXCjVQmoaT5kRrbA")
    await client.send_message("@JDShareCodebot", "/health T0205KkcAkVAsi2jW06Xw6NNCjVfnoaW5kRrbA")
    await client.send_read_acknowledge("@JDShareCodebot")
with client:
    client.loop.run_until_complete(main())
