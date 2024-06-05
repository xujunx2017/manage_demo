from django.shortcuts import render

import re
from django.http import JsonResponse
from backend.backend_demo import BaseHandler1
import json
from rest_framework.views import APIView

def getMethodName(request):
    path_info = request.path   #或者接口地址
    result = re.match(r'/(.*)/', path_info)
    print(result)
    if result:
        return result.group(1)


class demo(APIView):
    def post(slef,request):
        """执行入口,通过url获取要执行的method"""
        methodName = getMethodName(request)
        print(methodName)
        # getattr(object, name[, default])
        # 该函数属于反射操作，用于获取 object 中名为 name 的属性(name 是以字符串表示的属性名)
        # getattr(x, 'foobar') 等效于 x.foobar
        method = getattr(BaseHandler1(request), methodName)
        result = method()
        return JsonResponse(result, json_dumps_params={'ensure_ascii': False}, safe=False)