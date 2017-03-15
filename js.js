

一 : 猫眼电影
1、电影列表： http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000
2、电影详情： http://m.maoyan.com/movie/电影id.json 
3、影院列表：	http://m.maoyan.com/cinemas.json

抓包：
1、正在热映 ： http://api.maoyan.com/mmdb/movie/v3/list/hot.json
2、相关话题：http://api.maoyan.com/sns/movie/247259/v2/hotTopics.json
3、长影评： http://api.maoyan.com/sns/movie/247259/filmReview/top.json
4、相关资讯(新闻) ： http://api.maoyan.com/sns/news/v3/type/0/target/247259/top.json
5、专业评论 ： http://api.maoyan.com/mmdb/comments/pro/movie/341655.json
6、短评 ： http://api.maoyan.com/mmdb/comments/movie/v2/341655.json
7、演员 ： http://api.maoyan.com/mmdb/v6/movie/341655/celebrities.json
8、电影详情 ： http://api.maoyan.com/mmdb/movie/v5/341655.json
9、相关电影 ： http://api.maoyan.com/mmdb/movie/341655/feature/relatedFilm.json


二 : 豆瓣电影

1、豆瓣电影列表：
	
	count 请求电影数据的部数 start 开始位置
	正在热映：https://api.douban.com/v2/movie/in_theaters?count=20&start=0
	即将上映：https://api.douban.com/v2/movie/coming_soon?count=20&start=0
	top250 ：https://api.douban.com/v2/movie/top250?count=30&start=0

2、电影详情： https://api.douban.com/v2/movie/subject/26721478