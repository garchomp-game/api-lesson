
# apiについての簡易メモ

基本的なresources(crud)ルーティングは以下

CRUDアクション
|laravel|rails|
|--|--|
|index|index|
|create|new|
|store|create|
|show|show|
|edit|edit|
|update|update|
|destroy|destroy|


実際のルーティング
|動詞|laravel|rails|
|--|--|--|
|get|/users|/users|
|get|/users/create|/users/new|
|post|/users|/users|
|get|/users/:id|/users/:id|
|get|/users/:id/edit|/users/:id/edit|
|put/patch|/users/:id|/users/:id|
|delete|/users/:id|/users/:id|



http://example.com/ ←　これがメインルートとします。

この場合
http://example.com == expressプロジェクトの/は同じ
つまり、例えば
expressで
/pages/:id

ってなったら
http://example.com/pages/1
って思っておけばいい。

で、

ルーティングは、
http://example.com/
以下のサイトマップというイメージかな？
