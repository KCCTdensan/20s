<!-- # STLコンテナクラスを用いた計算量削減(C++を扱う人向け)

この章は[APG4b AA - 3.03.STLのコンテナ](https://atcoder.jp/contests/apg4b/tasks/APG4b_aa)に書かれているコンテナの中から重要なものを抜粋し，それらについての説明と応用をする章です．

## 連想配列(map)

連想配列はキーとなるある値を渡すとそれに対応した値を高速に返してくれるコンテナです．

例えばキーである「リンゴ」を言うと「100円」と返し，「みかん」と言うと「50円」って返してくれるような感じです．

宣言や値の格納，値の取り出しは以下のように行います．

```cpp
#include<map> //連想配列用のヘッダファイル
#include<iostream>
#include<string>
using namespace std;
int main(){

    map<string,int> mp; //map<キーの型,値の型> 変数名 で宣言

    mp["リンゴ"]=100; //格納するときは 変数名[キー]=値
    mp["みかん"]=50;

    cout<<mp["リンゴ"]<<endl; //取り出すときは 変数名[キー]
    cout<<mp["みかん"]<<endl;



    return 0;
}
```

実行結果
```cpp
100
50
```

C++の連想配列には重要な性質として次のような性質があります．

1. 初期値は0である

2. キーは重複して登録することは出来ない．

3. 配列の中身はキーが小さい順に並んでいる．

そのため，連想配列は次のような問題に強いです．

- 要素数え上げ

- 要素削除したときの配列内の最大最小問題

- 重複検知

ここからは連想配列を用いてさっきの3つの問題について考えていきます．

### 要素数数え上げ

```
例題1 要素数え上げ

要素数Nの整数列aが与えられます．
その後，整数xが与えられるので，xが配列vの中に何個あったかを出力しなさい．
ただし，xはQ個与えられるので，それぞれの出力を1行ごとに出力しなさい．

入力
N
a_0 a_1 ... a_n-1
Q
x_0
x_1
...
x_n

制約
N,Q<=2*10^5
a_i,x_i<=10^9
入力はすべて正の整数
実行制限時間 2sec

入力例1
5
1 2 1 3 1
3
1
2
3

出力
3
1
1


入力例2
5
1 1 1 1 1
3
1
5
10

出力
5
0
0
```

この問題を愚直に配列操作だけで行おうとするとO(NQ)もかかってしまい，実行制限時間に間に合いません．

そこで連想配列を用いて高速化を行います．

連想配列のキーに配列内の要素を，値にその数が何回出てきたかを格納しておくと，最初の格納でO(NlogN)，1つのクエリにつきO(logN)で処理できるので，全体の計算量としてはO(NlogN)となり，実行制限時間に間に合います．

以下は実装例です．

```cpp
#include<iostream>
#include<vector>
#include<map>
using namespace std;
int main(){
    int N,Q,x;
    cin>>N;
    vector<int> a(N);
    for(int i=0;i<N;i++){
        cin>>a[i];
    }

    map<int,int> mp;

    for(int i=0;i<N;i++){
        mp[a[i]]++; //インクリメントでa[i]が出てきた回数を1増やす
    }

    cin>>Q;
    
    for(int i=0;i<Q;i++){
        cin>>x;
        cout<<mp[x]<<endl;
    }
    return 0;
}
```

この考え方が使える問題

[ABC261 C-NewFolder(1)](https://atcoder.jp/contests/abc261/tasks/abc261_c)


### いろんな応用

```
例題
空の配列vとQ個のクエリが与えられます．
各クエリは以下のいずれかで与えられます．

1 x : 配列にxを追加する
2 x : 配列からxを1つ削除する．
3 x : 配列内に存在するxの数を出力する．
4   : 配列内に存在する要素の種類を出力する．
5 x : 配列内でx番目に小さい要素を出力する．
6 x : 配列内でx番目に大きい要素を出力する．
7 x : 配列内でx以上の要素の中で最も小さい要素を出力する．
8 x : 配列内でxよりも大きい要素の中で最も小さい要素を出力する．

これらのクエリを処理できるプログラムを作成してください．

入力
Q
T_0
T_1
...
T_Q-1

Tは
1 x
2 x
3 x
4
5 x
6 x
7 x
8 x
のいずれか

制約
Q<=2*10^5
x<=10^9
入力はすべて正の整数
```

この問題は

 -->
