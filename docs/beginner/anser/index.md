# C++競プロ入門者用問題の答え

## 問題0-1

この問題は変数に入力を格納し，その入力を "デカビタの年齢は" と "です" に囲んで出力すればいいです．

以下は解答例です．

```cpp
#include<iostream>
using namespace std;
int main(){
    int A;
    cin>>A;
    cout<<"デカビタの年齢は"<<A<<"です"<<endl;
    return 0;
}
```

標準入力や標準出力が分からなかった人はAPG4bの[1.01.出力とコメント](https://atcoder.jp/contests/apg4b/tasks/APG4b_b)と[1.05.実行順序と入力]を参照するといいかもしれません．

この問題が解けなかった人はC++の標準入力と標準出力を調べましょう．

## 問題0-2

余りは`%`で求められます．また整数型(int型など)同士の割り算は小数点以下切り捨てなので，商も`/`で求められます．よって`A/B余りA%B`で答えが求まります．以下は解答例です．

```cpp
#include<iostream>
using namespace std;
int main(){
    int A,B;
    cin>>A>>B;
    cout<<A/B<<"余り"<<A%B<<endl;
    return 0;
}
```

この問題が解けなかった人は四則演算を調べましょう．

## 問題0-3

2で割った余りが0であれば偶数，1であれば奇数です．よってこれで条件分岐をすると解くことが出来ます．以下は解答例です．

```cpp
#include<iostream>
using namespace std;
int main(){
    int A;
    cin>>A;
    if(A%2==0){
        cout<<"Odd"<<endl;
    }
    else{
        cout<<"Even"<<endl;
    }
    return 0;
}
```

偶奇判定はよく使うので覚えておくといいかもしれません．

## 問題1-1

C++では文字列も`==`で比較ができるので，`S=="d3bu"`であるかどうかで条件分岐すると解くことが出来ます．以下は解答例です．

```cpp
#include<iostream>
#include<string>
using namespace std;
int main(){
    string S;
    cin>>S;
    if(S=="d3bu"){
        cout<<"Yes"<<endl;
    }
    else{
        cout<<"No"<<endl;
    }
    return 0;
}
```

## 問題1-2

直角三角形の斜辺は三平方の定理を使うことで簡単に求めることが出来ます．ただしここで二乗を`A^2`のようにすると間違いになります．(C/C++では`^`を使うと排他的論理和というBit演算になってしまう) なので`A*A`のように記述するか，`pow(A,2)`のように記述しましょう．以下は解答例です．

```cpp
#include <iostream>
#include <cmath>
using namespace std;
int main()
{
    double A, B;
    cin >> A >> B;
    printf("%lf\n", sqrt((A * A) + (B * B)));
    return 0;
}
```

**ちなみに，実数をfloat型で書く人がいますが(現に僕がそう)，floatで書くと有効桁数が少ないのでWAになってしまう可能性があります．なので必ずdouble型を使いましょう．**

