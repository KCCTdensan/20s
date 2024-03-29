# ABC Problem 満点解法

一番最初に考えつく解法は3重for文で全パターンを試す方法だと思います。(部分点$100$点解法)

誤答の例(TLA)
```cpp=
#include<bits/stdc++.h>
typedef long long ll;
using namespace std;
int main(){
    ll N,M;
    cin>>N>>M;
    ll ans=0;
    for(ll a=1;a<=M;a++){
        for(ll b=1;b<=M-a;b++){
            for(ll c=1;c<=M-a-b;c++){
                if(a*b*c==N&&a+b+c==M){
                    ans++;
                }
            }
        }
    }
    cout<<ans<<endl;
    return 0;
}
```

しかしこの解法だと$O(M^3)$のため、最悪計算回数は$10^{54}$回以上になってしまうためTLEになってしまいます。

そこで、$A$だけを全通り試すことにします。

$A$を全通り試すとすると$A$を定数として扱うことができるので、未知の変数は$B$と$C$の2文字だけになります。このことを踏まえて与えられた数式を次のように変形します。

$BC=\frac{N}{A}$ , $B+C=M-A$

こうすることで$B$と$C$の2元方程式にすることができるため、この２つの式を連立させることで$B$と$C$を1回の計算で求めることができます。

(ただし、$B$,$C$は非負整数でなければならないことに注意)

よって$A$は$1$~$N$まで全探索し、各$A$について$B$と$C$を$O(1)$で求めることができるため、最終的に$O(N)$になります。(部分点$300$点解法)

しかし、このままだとまだ計算量が大きいため、更に計算量を削減します。

$A \leq B \leq C$という仮定を設けます。

すると$A$が最大となるときは$A=B=C$であるときなので、$A$の最大値は$A \times A \times A = N$より$A = N^{\frac{1}{3}}$となります。

このことから　$O(N)$の解法では探索する$A$の範囲として$1$~$N$としていましたが、この考察を挟むことにより探索範囲を$1$ ~ $N^{\frac{1}{3}}$まで下げることができます。

よってこれにより$(A,B,C)$としてとりうる数の組み合わせをすべて求めることができ、あとは並び替えを考慮することで$O(N^{\frac{1}{3}})$で解くことができ、これは十分高速です。