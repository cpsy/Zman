## Zman接口文档 ##

阿里云路径：https://api.znion.com/Zman

1、新建问卷

**url：/surveyInfo/addSurveyInfo**

**requestMethod：post**

输入参数|说明|类型|备注
 :-------------- | :-------------- | :------------ | :------------  
surveyName|问卷名|string|
surveyDescription|问卷描述|string|
**输出参数**|**说明**|**类型**|**备注**

2、获取所有问卷信息

**url：/surveyInfo/getAllSurvey**

**requestMethod：GET**

输入参数|说明|类型|备注
 :-------------- | :-------------- | :------------ | :------------  
**输出参数**|**说明**|**类型**|**备注**

3、新建问卷问题

**url：/surveyQuestion/addSurveyQuestion**

**requestMethod：post**

输入参数|说明|类型|备注
 :-------------- | :-------------- | :------------ | :------------  
surveyId|所属问卷Id|string|
questionType|问题类型|int| 1单选题2填空题3多选题4其它
questionSubject|题干|string|
questionNum|题号|string|
isRequired|是否必填|int|1是0否
**输出参数**|**说明**|**类型**|**备注**

4、问卷下所有问题以及选项

**url：/surveyQuestion/getSurveyQuestion**

**requestMethod：post**

输入参数|说明|类型|备注
 :-------------- | :-------------- | :------------ | :------------  
surveyId|所属问卷Id|string|
**输出参数**|**说明**|**类型**|**备注**

5、添加问题选项

**url：/options/addOptions**

**requestMethod：post**

输入参数|说明|类型|备注
 :-------------- | :-------------- | :------------ | :------------  
questionId|问题ID|string|
optionsNum|选项编号|string|
optionsContext|选项内容|string|
IsOther|是否有其他（建议）|int|1是0否
**输出参数**|**说明**|**类型**|**备注**



6、添加问卷记录与答题记录

**url：/surveyRecord/addSurveyRecord**

**requestMethod：post**

输入参数|说明|类型|备注
 :-------------- | :-------------- | :------------ | :------------  
surveyId|所属问卷Id|string|
userName|用户名|string|
address|住址或者工作地址|string|
wxId|微信ID|String|
telphone|联系电话|String|
costTime|耗时|int|
answerArr|回答|String []|
**输出参数**|**说明**|**类型**|**备注**


7、修改问卷基本信息

**url：/surveyInfo/updateSurveyInfo**

**requestMethod：post**

输入参数|说明|类型|备注
 :-------------- | :-------------- | :------------ | :------------  
surveyId|所属问卷Id|string|
surveyDescription|问卷描述|string|
link|问卷连接|string|
**输出参数**|**说明**|**类型**|**备注**


8、 添加产品信息

**url：/product/addProduct**

**requestMethod：post**

输入参数|说明|类型|备注
 :-------------- | :-------------- | :------------ | :------------  
nameCh|产品中文名|string|
nameEn|产品英文名|string|
describe|简介|string|
**输出参数**|**说明**|**类型**|**备注**

9、 /product/getAllProduct

**url：/product/getAllProduct**

**requestMethod：GET**

输入参数|说明|类型|备注
 :-------------- | :-------------- | :------------ | :------------  
**输出参数**|**说明**|**类型**|**备注**

10、添加图片

**url：/productImg/addImg**

**requestMethod：POST**

输入参数|说明|类型|备注
 :-------------- | :-------------- | :------------ | :------------  
productId|产品Id|string|
link|连接|string|
describe|简介|string|
describe|简介|MultipartFile|
**输出参数**|**说明**|**类型**|**备注**



