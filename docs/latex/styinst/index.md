# LaTeXでのパッケージ(.sty)の入れ方

## 前提

この記事はTeXLiveユーザ向けに作成されています。
これがよくわからんのであれば、おそらく気にしなくても大丈夫なはずです。

## 目的

主に電子工学科でTeXを利用したレポート作成をしている学生への支援

## 試験環境

 - Arch Linux, TeXLive2022
 - Windows10, TeXLive2021
どちらもユーザ名は`hoge`です。

## やること

1.  styファイルをダウンロード
2.  LaTeXの所定ディレクトリに投入
3.  導入の儀を執り行う
4.  ***高品質なLaTeX(HQLTX)*** を利用できます

## 詳細

### styをダウンロード

まず、使いたいものが手元になければ、なにもできません。
どっかから目的のパッケージをダウンロードしてください。
最小限必要なものは `hoge.sty` のような、**拡張子がstyのファイル**です。

### LaTeXの所定ディレクトリに投入

#### 場所を調べる

まず、

```shell
 $ kpsewhich --var-value TEXMF
```

でTeXが認識できるディレクトリを出力させます。以下は私の環境(Linux)での結果です。

```shell
 $ kpsewhich --var-value TEXMF
 {/home/hoge/.texlive/texmf-config,/home/hoge/.texlive/texmf-var,/home/hoge/texmf,!!/etc/texmf,!!/var/lib/texmf,!!/usr/local/share/texmf:/usr/share/texmf,!!/usr/share/texmf-dist}
```

また、Windows環境では

```shell
 $ kpsewhich --var-value TEXMF
 C:/Users/hoge/.texlive2021/texmf-config,C:/Users/hoge/.texlive2021/texmf-var,C:/Users/hoge/texmf,!!C:/texlive/texmf-local,!!C:/texlive/2021/texmf-config,!!C:/texlive/2021/texmf-var,!!C:/texlive/2021/texmf-dist
```

このようなものが出てきます。

#### どこに置こうか

##### luaLaTeX

Linuxでは`~/texmf/tex/lualatex/`に、Windowsでは`C:/Users/hoge/texmf/tex/lualatex`を選べばいいと思います。また、`texmf`内に`tex/lualatex/`がなければ、これを生やしても大丈夫です。

##### pLaTeX(upLaTeX)

Linuxでは`~/texmf/tex/latex/`に、Windowsでは`C:/Users/hoge/texmf/tex/latex`を選べばいいと思います。また、`texmf`内に`tex/latex/`がなければ、これを生やしても大丈夫です。

#### では置こう

さきほど選定した場所に各専用のディレクトリを生やして、そこにstyを置くと後でわかりやすいです。(例: `hogehugamath.sty`なら`hogehugamath`を生やして、その中に置く)

### 導入の儀

あとはこのコマンドを実行すればOKです。

```shell
 $ mktexlsr
```

### 幸福を感じる

あとは適当にインストールしたパッケージを

```latex
\usepackage{hogehugamath}
```

みたいな感じで使えば、幸せですね！！！！

## どうでもいいこと

文章力のなさに絶望している