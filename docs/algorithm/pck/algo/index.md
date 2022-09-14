# 競プロで使えそうなライブラリ

## UnionFind木

頂点の連結判定や，木の結合，閉路検知を$O(α(N))$(ただし，$α(N)$は逆アッカーマン関数)で行えるデータ構造

UnionFind uf(N); 頂点数Nで宣言

uf.root(x); 頂点xの親ノードを返す

uf.same(x,y); xとyが同じ木の中にあるかをboolで返す

uf.unite(x,y); xの木とyの木を結合させる

```cpp=
class UnionFind
{
private:
    vector<int> par;
    vector<int> rank;
 
public:
    UnionFind(int n)
    {
        par.resize(n);
        rank.resize(n);
        rep(i, n)
        {
            par[i] = i;
            rank[i] = 0;
        }
    }
 
    int root(int x)
    {
        if (x == par[x])
            return x;
        else
            return par[x] = root(par[x]);
    }
 
    bool same(int x, int y)
    {
        return root(x) == root(y);
    }
 
    void unite(int x, int y)
    {
        x = root(x);
        y = root(y);
        if (x == y)
            return;
        if (rank[x] < rank[y])
        {
            par[x] = y;
        }
        else
        {
            if (rank[x] == rank[y])
            {
                rank[x]++;
            }
            par[y] = x;
        }
    }
};
```

## ランレングス圧縮

文字列Sを，文字+何個その文字が連続するかという情報にするアルゴリズム

計算量は$O(N)$

例

aaabbabcc→a3b2a1b1c2

```cpp=
vector<pair<int, char>> RunLength(string S)
{
    int N = S.size();
    vector<pair<int, char>> memo;
 
    if (N == 1)
    {
        memo.push_back(make_pair(1, S.at(0)));
        return memo;
    }
 
    int tempo = 1;
    for (int i = 1; i < N; i++)
    {
        if (i != N - 1)
        {
            if (S.at(i) == S.at(i - 1))
                tempo++;
            else
            {
                memo.push_back(make_pair(tempo, S.at(i - 1)));
                tempo = 1;
            }
        }
        else
        {
            if (S.at(i) == S.at(i - 1))
            {
                tempo++;
                memo.push_back(make_pair(tempo, S.at(i - 1)));
            }
            else
            {
                memo.push_back(make_pair(tempo, S.at(i - 1)));
                memo.push_back(make_pair(1, S.at(i)));
            }
        }
    }
 
    return memo;
}
```

## エラトステネスの篩

素数かどうかの情報が格納された配列を$O(\log\log N)$で返すアルゴリズム

```cpp=
vector<bool> Eratosthenes(int N){
    vector<bool> ans(N+1,true);
    ans[0]=false;
    ans[1]=false;
    for(int i=2;i*i<=N;i++){
        if(ans[i]){
            for(int j=i*i;j<=N;j+=i){
                ans[j]=false;
            }
        }
    }
    return ans;
}
```

## 素因数分解

素因数分解を行うアルゴリズム

高速素因数分解とは違い，非常に大きい値でも行える．

計算量は$O(\sqrt{N})$

```cpp=
//キーに素因数，値に何乗かを格納した連想配列を返すタイプ
template<class T>
map<T,T>prime_factorization(T N){
    map<T,T> ans;
    T X=N;
    for(T i=2;i*i<=N;i++){
        if(X%i!=0)continue;
        if(X==1)break;
        while(X%i==0){
            ans[i]++;
            X/=i;
        }
    }
    if(X!=1)ans[X]++;
    return ans;
}

//素因数を配列に詰めたタイプ
template<class T>
vector<T>prime_factorization2(T N){
    vector<T> ans;
    T X=N;
    for(T i=2;i*i<=N;i++){
        if(X%i!=0)continue;
        if(X==1)break;
        while(X%i==0){
            ans.push_back(i);
            X/=i;
        }
    }
    if(X!=1)ans.push_back(X);
    return ans;
}
```

## 高速素因数分解

素因数分解を高速で行えるアルゴリズム

前計算で各値の最小の素因数を求めるため，非常に大きい値を素因数分解しようとするとメモリがとんでもないことになる

計算量は前計算が$O(N\log N)$，高速素因数分解が$O(\log N)$

```cpp=
//最初にSPFを実行
vector<int> SPF(int N){
    vector<int> ans(N+1);
    for(int i=0;i<=N;i++){
        ans[i]=i;
    }
    for(int i=2;i*i<=N;i++){
        if(ans[i]==i){
            for(int j=i*i;j<=N;j+=i){
                ans[j]=i;
            }
        }
    }
    return ans;
}

map<int,int> FPF(int X,vector<int> &spf){
    map<int,int> ans;
    while(X!=1){
        ans[spf[X]]++;
        X/=spf[X];
    }
    return ans;
}

//使用例
int main(){
    auto spf=SPF(200000);//入力の最大値まででSPF配列を作成
    int N;
    cin>>N;
    auto ans=FPF(N,spf);
    auto itr=ans.begin();
    for(int i=0;i<ans.size();i++,itr++){
        cout<<(*itr).first<<"^"<<(*itr).second<<endl;
    }
    return 0;
}
```

## ダイクストラ法

グラフの最短経路を求めるのに使える

計算量は$O(E\log V)$ (Eは辺の数，Vは頂点の数)

```cpp=
//頂点のクラス
class node
{
public:
    int cost = 2147483647;
    vector<pair<int, int>> to_v;
    bool dis = false;
};

// 始点から各頂点へ移動した場合の最小コストが格納された配列を返す
// mode:0 無向辺 , mode:1 有向辺
// V:頂点数 , a,b:a から b へつながる辺 , c:cost , S:始点の頂点番号
template <typename T>
vector<node> dijkstra(T V, vector<T> &a, vector<T> &b, vector<T> &c, T S, int mode)
{
    vector<node> Graph(V);
    for (ll i = 0; i < a.size(); i++)
    {
        Graph[a[i]].to_v.push_back(make_pair(b[i], c[i]));
        if (mode == 0)
        {
            Graph[b[i]].to_v.push_back(make_pair(a[i], c[i]));
        }
    }
    Graph[S].cost = 0;
    Graph[S].dis = true;
    priority_queue<pair<T, T>, vector<pair<T, T>>, greater<pair<T, T>>> q;
    q.push(make_pair(0, S));
    while (!q.empty())
    {
        Graph[q.top().second].dis = true;
        for (pair<int, int> x : Graph[q.top().second].to_v)
        {
            if (!Graph[x.first].dis)
            {
                Graph[x.first].cost = min(Graph[x.first].cost, q.top().first + x.second);
                q.push(make_pair(Graph[x.first].cost, x.first));
            }
        }
        q.pop();
    }
    return Graph;
}
```

## 遅延伝搬セグメントツリー

[セグメント木を徹底解説！0から遅延評価やモノイドまで](https://algo-logic.info/segment-tree/)からコードを引っ張ってきた

ちなみにこれはRMQ(区間内の最小の値を取得するクエリ)のセグ木である

```cpp=
/* RMQ：[0,n-1] について、区間ごとの最小値を管理する構造体
    set(int i, T x), build(): i番目の要素をxにセット。まとめてセグ木を構築する。O(n)
    update(i,x): i 番目の要素を x に更新。O(log(n))
    query(a,b): [a,b) での最小の要素を取得。O(log(n))
    find_rightest(a,b,x): [a,b) で x以下の要素を持つ最右位置を求める。O(log(n))
    find_leftest(a,b,x): [a,b) で x以下の要素を持つ最左位置を求める。O(log(n))
*/
template <typename T>
struct RMQ {
    const T e = numeric_limits<T>::max();
    function<T(T, T)> fx = [](T x1, T x2) -> T { return min(x1, x2); };
    int n;
    vector<T> dat;
    RMQ(int n_) : n(), dat(n_ * 4, e) {
        int x = 1;
        while (n_ > x) {
            x *= 2;
        }
        n = x;
    }

    void set(int i, T x) { dat[i + n - 1] = x; }
    void build() {
        for (int k = n - 2; k >= 0; k--) dat[k] = fx(dat[2 * k + 1], dat[2 * k + 2]);
    }

    void update(int i, T x) {
        i += n - 1;
        dat[i] = x;
        while (i > 0) {
            i = (i - 1) / 2;  // parent
            dat[i] = fx(dat[i * 2 + 1], dat[i * 2 + 2]);
        }
    }

    // the minimum element of [a,b)
    T query(int a, int b) { return query_sub(a, b, 0, 0, n); }
    T query_sub(int a, int b, int k, int l, int r) {
        if (r <= a || b <= l) {
            return e;
        } else if (a <= l && r <= b) {
            return dat[k];
        } else {
            T vl = query_sub(a, b, k * 2 + 1, l, (l + r) / 2);
            T vr = query_sub(a, b, k * 2 + 2, (l + r) / 2, r);
            return fx(vl, vr);
        }
    }

    int find_rightest(int a, int b, T x) { return find_rightest_sub(a, b, x, 0, 0, n); }
    int find_leftest(int a, int b, T x) { return find_leftest_sub(a, b, x, 0, 0, n); }
    int find_rightest_sub(int a, int b, T x, int k, int l, int r) {
        if (dat[k] > x || r <= a || b <= l) {  // 自分の値がxより大きい or [a,b)が[l,r)の範囲外ならreturn a-1
            return a - 1;
        } else if (k >= n - 1) {  // 自分が葉ならその位置をreturn
            return (k - (n - 1));
        } else {
            int vr = find_rightest_sub(a, b, x, 2 * k + 2, (l + r) / 2, r);
            if (vr != a - 1) {  // 右の部分木を見て a-1 以外ならreturn
                return vr;
            } else {  // 左の部分木を見て値をreturn
                return find_rightest_sub(a, b, x, 2 * k + 1, l, (l + r) / 2);
            }
        }
    }
    int find_leftest_sub(int a, int b, T x, int k, int l, int r) {
        if (dat[k] > x || r <= a || b <= l) {  // 自分の値がxより大きい or [a,b)が[l,r)の範囲外ならreturn b
            return b;
        } else if (k >= n - 1) {  // 自分が葉ならその位置をreturn
            return (k - (n - 1));
        } else {
            int vl = find_leftest_sub(a, b, x, 2 * k + 1, l, (l + r) / 2);
            if (vl != b) {  // 左の部分木を見て b 以外ならreturn
                return vl;
            } else {  // 右の部分木を見て値をreturn
                return find_leftest_sub(a, b, x, 2 * k + 2, (l + r) / 2, r);
            }
        }
    }
};
```

## フェニック木(BIT)

[Binary Indexed Tree(フェニック木)](https://take44444.github.io/Algorithm-Book/range/bit/main.html)から引っ張ってきた

```cpp=
template <typename T>
struct BinaryIndexedTree {
  int n;
  vector<T> data;

  BinaryIndexedTree(int size) {
    n = ++size;
    data.assign(n, 0);
  }

  // get sum of [0,k]
  T sum(int k) const {
    if (k < 0) return 0;
    T ret = 0;
    for (++k; k > 0; k -= k&(-k)) ret += data[k];
    return ret;
  }

  // getsum of [l,r]
  inline T sum(int l, int r) const { return sum(r) - sum(l-1); }

  // data[k] += x
  void add(int k, T x) {
    for (++k; k < n; k += k&(-k)) data[k] += x;
  }
```

## 繰り返し二乗法

$A^N$を$O(\log N)$で求められるアルゴリズム

実数の累乗だとstd::powlでいいが，行列累乗や多項式の累乗をするときに本領を発揮する

```cpp=
ll Pow(ll X, ll N)
{
    ll ans = 1;
    while (N)
    {
        if (N & 1)
        {
            ans *= X;
        }
        X *= X;
        N >>= 1;
    }
    return ans;
}
```

## log2

$\lceil \log_2 N \rceil$ を$O(\log N)$で求める

ダブリング関連でよく見るので一応掲載

```cpp=
int flog2(ll N){ 
    int K=1;
    while((1<<K)<N)K++;
    return K;
}
```

## 最小共通祖先(LCA)

[ダブリングによる木の最近共通祖先（LCA：Lowest Common Ancestor）を求めるアルゴリズム](https://algo-logic.info/lca/)から引っ張ってきた

```cpp=
struct Edge {
    long long to;
};
using Graph = vector<vector<Edge>>;

/* LCA(G, root): 木 G に対する根を root として Lowest Common Ancestor を求める構造体
    query(u,v): u と v の LCA を求める。計算量 O(logn)
    前処理: O(nlogn)時間, O(nlogn)空間
*/
struct LCA {
    vector<vector<int>> parent;  // parent[k][u]:= u の 2^k 先の親
    vector<int> dist;            // root からの距離
    LCA(const Graph &G, int root = 0) { init(G, root); }

    // 初期化
    void init(const Graph &G, int root = 0) {
        int V = G.size();
        int K = 1;
        while ((1 << K) < V) K++;
        parent.assign(K, vector<int>(V, -1));
        dist.assign(V, -1);
        dfs(G, root, -1, 0);
        for (int k = 0; k + 1 < K; k++) {
            for (int v = 0; v < V; v++) {
                if (parent[k][v] < 0) {
                    parent[k + 1][v] = -1;
                } else {
                    parent[k + 1][v] = parent[k][parent[k][v]];
                }
            }
        }
    }

    // 根からの距離と1つ先の頂点を求める
    void dfs(const Graph &G, int v, int p, int d) {
        parent[0][v] = p;
        dist[v] = d;
        for (auto e : G[v]) {
            if (e.to != p) dfs(G, e.to, v, d + 1);
        }
    }

    int query(int u, int v) {
        if (dist[u] < dist[v]) swap(u, v);  // u の方が深いとする
        int K = parent.size();
        // LCA までの距離を同じにする
        for (int k = 0; k < K; k++) {
            if ((dist[u] - dist[v]) >> k & 1) {
                u = parent[k][u];
            }
        }
        // 二分探索で LCA を求める
        if (u == v) return u;
        for (int k = K - 1; k >= 0; k--) {
            if (parent[k][u] != parent[k][v]) {
                u = parent[k][u];
                v = parent[k][v];
            }
        }
        return parent[0][u];
    }
};
```

## 畳み込み

FFTの一種である数論変換(NTT)による畳み込み

```cpp=
//mintはModintである。
//畳み込みをする前にsetup()を実行する。
typedef std::vector<mint> vectorM;//NTT用のmintのベクター型
const int DIVIDE_LIMIT = 23;//99...の有名素数は23回分割統治できる。
mint ROOT[DIVIDE_LIMIT + 1];//[i]は2^i乗根　99...の有名素数の原始根は3で、そこから2^22乗根, 2^21...などをsetup()で計算する。
mint inv_ROOT[DIVIDE_LIMIT + 1];//[i]は2^i乗根の逆数　setup()で計算する。
mint PRIMITIVE_ROOT = 3;

void setup() {
    ROOT[DIVIDE_LIMIT] = modpow(PRIMITIVE_ROOT, (MOD - 1) / modpow(2, 23).val);//99..なら119乗
    inv_ROOT[DIVIDE_LIMIT] = 1 / ROOT[DIVIDE_LIMIT];
    for (int i = DIVIDE_LIMIT - 1; i >= 0; i--) {
        ROOT[i] = ROOT[i + 1] * ROOT[i + 1];
        inv_ROOT[i] = inv_ROOT[i + 1] * inv_ROOT[i + 1];
    }
}

vectorM ntt(const vectorM& f, const int inverse, const int log2_f, const int divide_cnt = DIVIDE_LIMIT) {
    vectorM ret;
    if (f.size() == 1 || divide_cnt == 0) {
        ret.resize(f.size());
        mint zeta = 1;
        for (int i = 0; i < ret.size(); i++) {
            mint now = zeta;
            for (int j = 0; j < f.size(); j++) {
                ret[i] += f[j] * now;
                now *= zeta;
            }
            zeta *= ((inverse == 1) ? ROOT[0] : inv_ROOT[0]);
        }
        return ret;
    }

    vectorM f1(f.size() / 2), f2(f.size() / 2);
    //f1とf2を作る。
    for (int i = 0; i < f.size() / 2; i++) {
        f1[i] = f[i * 2];
        f2[i] = f[i * 2 + 1];
    }

    vectorM f1_dft = ntt(f1, inverse, log2_f - 1, divide_cnt  -1), f2_dft = ntt(f2, inverse, log2_f - 1, divide_cnt - 1);
    ret.resize(f.size());
    mint now = 1;

    for (int i = 0; i < f.size(); i++) {
        ret[i] = f1_dft[i % f1_dft.size()] + now * f2_dft[i % f2_dft.size()];
        now *= ((inverse == 1) ? ROOT[log2_f] : inv_ROOT[log2_f]);
    }
    return ret;
}

//eraseHigh0は高次項が係数ゼロ、vectorから排除するかどうか
vectorM mulp(const vectorM& _f, const vectorM& _g) {
    vectorM f = _f, g = _g;

    //fとgの次数の和以上の最小の2冪-1を次数とする。
    int max_dim = 1, log2_max_dim = 0;
    while (f.size() + g.size() > max_dim) max_dim <<= 1, log2_max_dim++;
    f.resize(max_dim), g.resize(max_dim);
    //多項式fとgのDFT結果を求める。 O(n log n)
    vectorM f_dft = ntt(f, 1, log2_max_dim), g_dft = ntt(g, 1, log2_max_dim);

    //f*gのDFT結果は各f_dftとg_ftの係数の積。O(n)
    vectorM fg_dft(max_dim);
    for (int i = 0; i < max_dim; i++) {
        fg_dft[i] = f_dft[i] * g_dft[i];
    }

    //fg_dftをDFT
    vectorM fg = ntt(fg_dft, -1, log2_max_dim);

    //最後にmax_dimで割る
    for (int i = 0; i < fg.size(); i++) {
        fg[i] = fg[i] / max_dim;
    }
    return fg;
}
```