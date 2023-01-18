# GRUBで起動時に音楽を奏でよう

## はじめに

皆さん，こう思ったことはないでしょうか．「音楽と共に，Bootしたい．」

その願い，今叶えましょう．

## 準備

準備するものは簡単です．

- GRUB
- テキストエディタ
- PCのbeepスピーカー(ブザー)
- 根気

## GRUBを入れます

[ここ](https://wiki.archlinux.jp/index.php/GRUB)を見ればできると思います．多分．

## 調理

ではまず， `/etc/default/grub` を適当なテキストエディタで開きましょう．

そしたら，適当な所に

```txt
GRUB_INIT_TUNE="300 261 1 294 1 330 1 349 1 392 2 440 1 349 1 330 1 0 1 294 1 0 1 262 2"
```

と書いて， `grub-mkconfig` (詳細はGRUBを入れますの章)をして，再起動してGRUBに入ると……？

某CMでよく聞く音が流れましたね！！

## 解説

この `GRUB_INIT_TUNE` ，非常に単純明快な記述法です．

例として，先程のものの先頭らへんを切り出して解説しましょう．

```txt
300 261 1 294 1 …
```

まず，先頭にテンポの指定が来ます．上の場合だと300bpmですね．

次からは，規則的に **「周波数 拍」** が刻まれています。

これと音階周波数対応表を使えば、これであなたもBEEP_BACHですね!

## 参考文献

この記事を作成するにあたり、参考にさせていただきました。皆様、ありがとうございます。

- [GRUB メニュー と テーマ の設定](https://www.fuukemn.biz/page109-grub_config_menu.html)