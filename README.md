# トレプロ採用｜カスタマージャーニーマップ

募集要項別ペルソナ × 採用ファネルのジャーニーマップ（11職種）。

## 公開URL

https://tatsuyakoike-cloud.github.io/trepro-customer-journey/

## 構成

| ファイル | 内容 |
|---------|------|
| `index.html` | 全職種一覧 |
| `01-be.html` 〜 `11-ai-trainer.html` | 職種別ジャーニーマップ |
| `styles.css` | 共通スタイル |

## 再生成

マークダウン（`カスタマージャーニー/トレプロ採用ペルソナ.md`）を編集したあと:

```bash
cd ../カスタマージャーニー
python3 generate_cjm.py
```

## ローカルプレビュー

```bash
npx --yes serve@14 . -l 3456
# → http://localhost:3456
```

## 採用ファネル（横軸）

1. 日常 → 2. 認知 → 3. 興味 → 4. 検討 → 5. 応募 → 6. 面談 → 7. 就職

## 縦軸（固定）

行動 / 思考 / 感情 / 感情曲線 / タッチポイント / 課題 / 改善機会
