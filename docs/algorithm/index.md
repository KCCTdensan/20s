# アルゴリズム置き場

## はじめに

このページでの解説はすべてC++で行っています．そのため，他の言語を使用する人には少々わかりずらい箇所があるかもしれませんがご了承ください．

アルゴリズムの重要度と理解から実装までの難易度は僕の独断と偏見で決めました.

~~あとこのページに書いてあるコードは動作確認しておりません.~~ コードは一応確認しました.

追記 パソコン甲子園対策用ページをここに載せておきます．

<!-- [PCKで使えそうなもの C++編](/algorithm/pck/std/)

[競プロで使えそうなライブラリ](/algorithm/pck/algo/)　 -->

## STLコンテナクラスを用いた計算量削減(C++を扱う人向け)

重要度 ☆5 難易度 ☆1

この章は[APG4b AA - 3.03.STLのコンテナ](https://atcoder.jp/contests/apg4b/tasks/APG4b_aa)に書かれているコンテナの中から重要なものを抜粋し，それらについての説明と応用をする章です．

## [二分探索](/algorithm/binary_search/) 

重要度 ☆2 難易度 ☆1

ソートされた配列の中から条件を満たす要素をO(logN)で求めることができるアルゴリズム

二分探索を使う問題

[ABC248 D-Range Count Query](https://atcoder.jp/contests/abc248/tasks/abc248_d)

[典型90問 001-Yokan Party(★4)](https://atcoder.jp/contests/typical90/tasks/typical90_a)

## Bit全探索

2進数の数の増え方を利用して，全通りを試すアルゴリズム

計算量がO(2^N)と大きいため，Bit全探索を模範解答とする問題は，制約が不自然なまでに小さいことが多い

Bit全探索を使う問題

[ABC249 C-Just K](https://atcoder.jp/contests/abc249/tasks/abc249_c)

[典型90問 002-Encyclopedia of Parentheses(★3)](https://atcoder.jp/contests/typical90/tasks/typical90_b)

## 深さ優先探索(DFS)

重要度 ☆3 難易度 ☆1~3(実装方法による)

[ATC001 A-深さ優先探索](https://atcoder.jp/contests/atc001/tasks/dfs_a)に書いてあります．

## 幅優先探索(BFS)

重要度 ☆4 難易度 ☆3

各枝のコストが1のグラフにおいての最短経路問題にすごい向いている

幅優先探索を使う問題

[ABC007 C-幅優先探索](https://atcoder.jp/contests/abc007/tasks/abc007_3)

[ABC254 E-Small d and k](https://atcoder.jp/contests/abc254/tasks/abc254_e)

## ダイクストラ法

重要度 ☆4 難易度 ☆5

BFSの汎用性すごいやつ

priority_queueを使ったらいける

## UnionFind

重要度 ☆2 難易度 ☆4

要素をグループ分けしたり，グラフのサイクル検知に使えるやつ

割と使うらしい(僕はまだ一回しか使ったことない)

UnionFindを使う問題

[ATC001 B-UnionFind](https://atcoder.jp/contests/atc001/tasks/unionfind_a)

[ABC259 D-Circumferences](https://atcoder.jp/contests/abc259/tasks/abc259_d)

## [累積和](/algorithm/cumulative_sum/)

重要度 ☆3 難易度 ☆1

範囲内の総和を爆速で求められる

累積和を使う問題

[ABC267 C-Index × A(Continuous ver.)](https://atcoder.jp/contests/abc267/tasks/abc267_c)

[典型90問 010-Score Sum Queries(★2)](https://atcoder.jp/contests/typical90/tasks/typical90_j)

## imos法

重要度 ☆3 難易度 ☆1

指定範囲内に何かを足したり引いたりするのを爆速で行える

imos法を使う問題

[ABC014 C-AtColor](https://atcoder.jp/contests/abc014/tasks/abc014_3)

[ABC257 C-Robot Takahashi](https://atcoder.jp/contests/abc257/tasks/abc257_c)

[ABC256 D-Union of Interval](https://atcoder.jp/contests/abc256/tasks/abc256_d)

## 動的計画法

重要度 ☆6 難易度 ☆5

考え方を習得するまではくっそむっずいやつ

でも競プロではほぼ毎回出てくるぐらい常連の典型アルゴリズム

動的計画法を使う問題

[ABC211 C-chokudai](https://atcoder.jp/contests/abc211/tasks/abc211_c)

[ABC240 C-Jumping Takahashi](https://atcoder.jp/contests/abc240/tasks/abc240_c)

[ABC242 C-1111gal password](https://atcoder.jp/contests/abc242/tasks/abc242_c)

[ABC245 C-Choose Elements](https://atcoder.jp/contests/abc245/tasks/abc245_c)

[ABC248 C-Dice Sum](https://atcoder.jp/contests/abc248/tasks/abc248_c)

[ABC261 D-Flipping and Bonus](https://atcoder.jp/contests/abc261/tasks/abc261_d)

[ABC266 D-Snuke Panic (1D)](https://atcoder.jp/contests/abc266/tasks/abc266_d)

[ABC267 D-Index × A(Not Continuous ver.)](https://atcoder.jp/contests/abc267/tasks/abc267_d)

[Educational DP Contest](https://atcoder.jp/contests/dp)

## ランレングス圧縮

重要度 ☆- 難易度 ☆-

文字列に対して行うアルゴリズムで，文字が出てきた順番に何個連続で出現したかを格納した配列を返す．

ランレングス圧縮を使う問題

[ABC019 B-高橋君と文字列圧縮](https://atcoder.jp/contests/abc019/tasks/abc019_2)

[ABC259 C-XX to XXX](https://atcoder.jp/contests/abc259/tasks/abc259_c)

## 座標圧縮

重要度 ☆- 難易度 ☆-

配列の要素を，配列内で何番目に小さいかの情報に置き換えるアルゴリズム

例として

```
8 1 30 94 73 82
```

という配列に対して座標圧縮を行うと

```
1 0 2 5 3 4
```

という配列になる

## エラトステネスの篩

重要度 ☆- 難易度 ☆-

N以下の素数を高速に求めることができるアルゴリズム

素数を小さい物から順に求めて，その素数の倍数を全て消していくと言った方法で素数を求めていく

## 高速素因数分解

重要度 ☆- 難易度 ☆-

前計算としてそれぞれの数の最小の素因数を求めておくことで，求めたい値の素因数を求める時も最小の素因数の配列を参照することで再帰的に素因数分解を行うことができるアルゴリズム

## ニュートン法

重要度 ☆- 難易度 ☆-

「ある関数f(x)について，ある点x_0での接線のx切片をx_1とした時，x_1はx_0よりもf(x)=0となるxの値に近い」という法則を用いて，近似値を高速で求めることができるアルゴリズム

## ユークリッドの互除法

重要度 ☆- 難易度 ☆-

2数a,bの最大公約数を高速で求めることができるアルゴリズム

## 包除原理

重要度 ☆4 難易度 ☆-

処理が重いORの問題を処理が軽いANDと足し算の計算に直す考え方

包除原理を使う問題

[ABC253 D-FizzBuzz Sum Hard](https://atcoder.jp/contests/abc253/tasks/abc253_d)

[典型90問 004-Cross Sum(★2)](https://atcoder.jp/contests/typical90/tasks/typical90_d)

## Segment Tree

重要度 ☆- 難易度 ☆-

ある範囲に対して行う加減算や範囲内の最小・最大値の求めるクエリをO(logN)で行うことができるデータ構造

## Wavelet Matrix

重要度 ☆- 難易度 ☆異次元

基本的な配列操作に加え，ある要素xは範囲内に何個存在するかや，範囲内にx以上の要素は何個あるか，範囲内の総和や最小・最大値など，ありとあらゆる操作をO(log(配列内の最大値))で行うことが出来るデータ構造

オーダーが配列の要素数に依存しないため，N=10^18でも問題なく動く他，できることもかなり多いという，やりたい放題なデータ構造

弱点として，一度データを構築すると後から値を変更できないというものがあるが，Dynamic Wavelet Matrixを使うことで解決できる(ただしオーダーは大きくなる)

Wavelet Matrixの話が書いてあるサイト

[ウェーブレット行列(wavelet matrix)](https://miti-7.hatenablog.com/entry/2018/04/28/152259)

Dynamic Wavelet Matrixの話が書いてあるサイト

[動的ウェーブレット行列(dynamic wavelet matrix)](https://miti-7.hatenablog.com/entry/2019/02/01/143655)

<!-- 木構造を使う問題 -->
<!-- [ABC209 D - Collision](https://atcoder.jp/contests/abc209/tasks/abc209_d) -->
