# Create your tests here.addDubboTag

import json
from backend.migrations.create_token import generate_token

class BaseHandler1():
    def __init__(self,request):
        self.request = request

    def login(self):
        param = self.request.body
        print(param)
        username = (json.loads(param))['username']
        password = (json.loads(param))['password']
        token=generate_token()
        if username=="admin" and password=="admin":
            result={"code":200,"token":token}
            return result
        else:
            result = {"code": 2000, "msg": "账号或密码错误"}
            return  result


