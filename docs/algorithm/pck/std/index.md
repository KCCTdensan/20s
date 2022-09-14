# PCKで使えそうなもの C++編

# テンプレ

著者が使っているテンプレート

```cpp=
#include <bits/stdc++.h>
#define repp(i, l, r) for (int i = (int)(l); i < (int)(r); i++)
#define perp(i, r, l) for (int i = (int)(r); i > (int)(l); i--)
#define rep(i, r) for (int i = 0; (int)(i) < (int)(r); i++)
#define per(i, r) for (int i = (int)(r); (int)(i) > 0; i++)
typedef long long ll;
using namespace std;
int main()
{

    return 0;
}
```

# マクロ

## repマクロ

rep(変数名,繰り返す回数){}で簡単に繰り返し文が書けるマクロ

```cpp=
#define rep(i, r) for (int i = 0; (int)(i) < (int)(r); i++)
```

# 型変換系

## int型⇔char型

intに'0'を足せばcharに，charから'0'を引けばintになる

```cpp=
int a=5;
char b='4';

cout<<a+(b-'0')<<endl;//5+4で9が出力される

b=a+'0';

cout<<b<<endl;//5が出力される

```

## int型⇔string型

### int→stringの場合

```cpp=
int i=100;
string S;
S=to_string(i);
```

### string→intの場合

```cpp=
string S="100000";
int i;
i=atoi(S.c_str());
```

# 数学系

## 最大値 max

max(a,b)でaとbの大きい方を返す．

```cpp=
int a=0,b=1,c=2;
cout<<max(a,b)<<endl;//実行すると 1 を出力

cout<<max(a,max(b,c))<<endl;//実行すると 2 を出力
```

## 最小値 min

min(a,b)でaとbの小さい方を返す．

```cpp=
int a=2,b=1,c=0;
cout<<min(a,b)<<endl;//実行すると 1 を出力

cout<<min(a,min(b,c))<<endl;//実行すると 0 を出力
```

## 最大公約数 __gcd

__gcd(a,b)でaとbの最大公約数を返す．

```cpp=
int a=60,b=12,c=4;
cout<<__gcd(a,b)<<endl;//実行すると aとbの最大公約数である 12 を出力

cout<<__gcd(a,gcd(b,c))<<endl;//実行すると bとcの最大公約数とaの最大公約数(つまりaとbとcの最大公約数)を出力
```

## 最小公倍数 __lcm

そんなものは存在しない

実装例を以下に示す

```cpp=
template<class T>
T lcm(T x,T y){
    return (x*y)/__gcd(x,y);
}
```

## べき乗 pow

pow(a,b)でaのb乗をdouble型で返す．

```cpp=
int a=2,b=10;

double c=0.5;

cout<<pow(a,b)<<endl;//実行すると2^10である1024を出力

cout<<pow(a,c)<<endl;//実行すると2^0.5である1.41421356を出力
```

## 対数 log,log2,log10

log(a)でaの自然対数を，log2(a)でaの底を2とする対数を，log10(a)でaの常用対数を返す．

```cpp=
int a;
cout<<log(a)<<endl;
cout<<log2(a)<<endl;
cout<<log10(a)<<endl;
```

# STLコンテナクラスの関数

ここではvectorの変数名をv，stringの変数名をSとしています．

## STLコンテナクラスの宣言

vector<型> 変数名(要素数,初期値)

set<型> 変数名

map<キーの型,値の型> 変数名

queue<型> 変数名

stack<型> 変数名

priority_queue<型>

deque<型> 変数名

で宣言できる

また2次元配列は，1次元配列が格納されている配列と考えて宣言する.

```cpp=
vector<int> v(10,0);//要素数10で初期値が0の配列を宣言

set<string> st;

map<char,float> mp;

queue<double> q;

stack<unsigned int> s;

priority_queue<long long> pq;

deque<unsigned long long> dq;

//2次元配列
vector<vector<int>> v2(10,vector<int>(10,0));//要素数10で初期値0の1次元配列で初期化されている配列を宣言．つまり10×10の2次元配列

//こんなのも宣言できちゃう
map<int,vector<int>> mp2;

queue<map<int,int>> q2;
```

## v.push_back(x)

vectorとdequeで使用可能

配列の一番後ろにxを挿入する

計算量はO(1)

```cpp=
vector<int> v={1};

vector<vector<int>> v2={{9,4,5,6},
                        {1,3,5}};

for(int x:v){
    cout<<x<<" ";
}

cout<<endl;

v.push_back(2);//配列の後ろに 2 を追加

for(int x:v){
    cout<<x<<" ";
}
cout<<endl;

cout<<endl;

v2.push_back(v);//2次元配列への挿入は1次元配列を挿入する形で行う

for(auto x:v2){
    for(auto y:x){
        cout<<y<<" ";
    }
    cout<<endl;
}
```

出力

```
1
1 2

9 4 5 6 
1 3 5 
1 2 
```

## v.size()

全てのSTLコンテナで使用可能

配列の大きさを返す

計算量はO(1);

```cpp=
vector<int> v={1,2,3,4,5};

cout<<v.size()<<endl;//配列の大きさを出力

for(int i=0;i<v.size();i++){
    cout<<v[i]<<" ";
}
cout<<endl;
```

出力

```
5
1 2 3 4 5
```


## v.begin(),v.end()

全てのSTLコンテナで使用可能

v.begin()で配列vの先頭のイテレータを，v.end()で配列vの一番最後のイテレータを取得できる．


```cpp=
vector<int> v={0,1,2,3,4};

auto itr=v.begin();

for(;itr!=v.end();itr++){
    
    cout<<(*itr)<<endl;//先頭の要素から順番に出力
    
}
```

## v.clear()

全てのSTLコンテナで使用可能

配列内を空にする

```cpp=
vector<int> v={1,2,3};

cout<<v.size()<<endl;

v.clear();

cout<<v.size()<<endl;
```

出力
```
3
0
```

## v.empty()

全てのSTLコンテナで使用可能

配列内が空かどうかをboolで返してくれる

配列内が空の時→true

そうでないとき→false

```cpp=
vector<int> v={1,2,3};

if(!v.empty()){
    cout<<"空じゃないです"<<endl;
}
else{
    cout<<"空です"<<endl;
}

v.clear();

if(!v.empty()){
    cout<<"空じゃないです"<<endl;
}
else{
    cout<<"空です"<<endl;
}
```

出力

```
空じゃないです
空です
```

## v.erase(itr)

全てのSTLコンテナで使用可能

指定したイテレータの要素を削除する

mapやsetの場合はイテレータの代わりにキーを入れても大丈夫

計算量は

イテレータ指定の場合 O(1)

キー指定の場合 O(log N)

```cpp=
vector<int> v={0,1,2,3};

map<int,int> mp;

for(int i=0;i<4;i++){
    mp[i]=10;
}

cout<<v[1]<<endl;

auto itr=v.begin();

itr++;//配列の2個目の要素のイテレータを取得

v.erase(itr);//itrを削除

cout<<v[1]<<endl;

cout<<mp[1]<<endl;

mp.erase(1);//キーが1の要素を削除

cout<<mp[1]<<endl;
```

出力

```
1
2
10
0
```

## v.find(x)

全てのSTLコンテナで使用可能

v.find(x)で要素xが存在する最初のイテレータを返す．また，要素xが存在しなければv.end()を返す．

計算量はO(N)

連想配列やsetの場合はO(log N)

```cpp=
vector<int> v={1,2,3,9,2,5}

auto itr=v.find(3);

cout<<(*itr)<<endl;//3のイテレータを取得

itr++;

cout<<(*itr)<<endl;

itr=v.find(2);//一つ目の2のイテレータを取得

cout<<(*itr)<<" ";

itr++;

cout<<(*itr)<<endl;
```

出力
```
3
9
2
3
```

## reverse

vectorとstringで動作確認済み

reverse(v.begin(),v.end())で配列の順番を真逆にする．

```cpp=
vector<int> v={0,1,2,3,4};
string S="d3bu";

for(int x:v){
    cout<<x<<" ";
}

cout<<endl;

reverse(v.begin(),v.end());//順番を反転

for(int x:v){
    cout<<x<<" ";//逆順に出力
}

cout<<endl;

cout<<S<<endl;

reverse(S.begin(),S.end());

cont<<S<<endl;
```

出力

```
0 1 2 3 4
4 3 2 1 0
d3bu
ub3d
```

## クイックソート sort 

vectorとstringで動作確認済み

sort(v.begin(),v.end())で配列内の要素を小さい順に並び変える．

計算量はO(N log N)

また，第3引数にgreaterを入れることで並び替える順番を反転させられる．

```cpp=
vector<int> v={3,0,4,2,1};

for(int x:v){
    cout<<x<<" ";
}

cout<<endl;

sort(v.begin(),v.end());//小さい順に並び替え

for(int x:v){
    cout<<x<<" ";
}

cout<<endl;

sort(v.begin(),v.end(),greater<int>());//大きい順に並び替え

for(int x:v){
    cout<<x<<" ";
}

cout<<endl;
```

出力

```
3 0 4 2 1
0 1 2 3 4
4 3 2 1 0
```

### (おまけ) 二次元配列のsort

```cpp=
 sort(v.begin(),v.end(),[](
     const vector<int> &alpha,const vector<int> &beta){
         return alpha[0] < beta[0];
 });
//alpha[i]<beta[i]でi行目の要素でソートという意味になる．また不等号の向きを逆にすると昇順と降順を変えられる
```

(でもこれをするぐらいならvector<pair<T,T>>とかvector<tuple<T,T,...,T>>とか使ったほうが簡単な気がする)

## lower_bound

vector,map,setで確認済み

ソート済みの配列vに対してlower_bound(v.begin(),v.end(),x)で配列内のx以上の要素の中で最小の要素のイテレータを返す.

そのような要素がない場合はv.end()を返す.

計算量は O(log N)

```cpp=
int x=4

vector<int> v={1,5,9,3,7}

sort(v.begin(),v.end());//使う前にソートする

auto itr=lower_bound(v.begin(),v.end(),x);//4以上で最小の要素である5の場所のイテレータが入っている

cout<<(*itr)<<endl;
```

出力
```
5
```

