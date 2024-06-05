#!/usr/bin/env python
# encoding: utf-8
"""
@author: jun.xu
@software: PyCharm
@file: create_token.py
@time: 2024/6/4 17:28
@desc 
"""

import secrets
import jwt
from datetime import datetime, timedelta

# 生成一个长度为32的随机字节字符串作为密钥
secret_key = secrets.token_bytes(32)

# 生成一个包含用户ID和过期时间的Payload
def create_payload(user_id):
    # 设置过期时间为30分钟后
    exp_time = datetime.utcnow() + timedelta(minutes=30)
    payload = {
        'user_id': user_id,
        'exp': exp_time
    }
    return payload

# 使用密钥和Payload生成Token
def generate_token():
    # 创建Payload
    payload = create_payload(123)
    token = jwt.encode(payload, secret_key, algorithm='HS256')
    return token


# # 生成Token
# token = generate_token()
# print(token)
