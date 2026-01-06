# DMI 指標教學（Directional Movement Index）

DMI 指標的英文全名是 **Directional Movement Index（動向指標 / 趨向指標）**，由技術分析大師 **J. Welles Wilder Jr.** 所提出，用來判斷市場趨勢的方向與強度，是技術分析中非常重要的趨勢性工具。:contentReference[oaicite:0]{index=0}

---

## DMI 指標是什麼？

DMI 指標透過比較價格上漲與下跌的動能強弱，並分析趨勢強度，用以判斷市場目前處於上漲趨勢、下跌趨勢或震盪盤整狀態。它常被用於中長期趨勢分析與波段操作之中，並且可以有效過濾噪音訊號。:contentReference[oaicite:1]{index=1}

DMI 指標通常包含 **三條主要線**：

- **+DI（Positive Directional Indicator）**：代表上升動能強度，表示多方力量。:contentReference[oaicite:2]{index=2}
- **-DI（Negative Directional Indicator）**：代表下降動能強度，表示空方力量。:contentReference[oaicite:3]{index=3}
- **ADX（Average Directional Index）**：衡量趨勢強弱，不表示方向，只反映趨勢是否明顯。:contentReference[oaicite:4]{index=4}

---

## 為什麼要使用 DMI？

使用 DMI 指標有幾個主要目的：

1. **辨別趨勢方向**  
   當 +DI 大於 -DI 時，代表上漲趨勢占優勢；反之則表示下跌趨勢占優勢。:contentReference[oaicite:5]{index=5}

2. **確認趨勢強度**  
   ADX 越高代表趨勢越強，數值通常在 0 ~ 100 之間。當 ADX 超過某個門檻（如 25 或 30）時，表示趨勢已明確形成。:contentReference[oaicite:6]{index=6}

3. **避免震盪噪聲誤判**  
   結合 +DI、 -DI 與 ADX 可以減少盤整階段的假訊號，提高趨勢分析準確率。:contentReference[oaicite:7]{index=7}

---

## DMI 指標的原理

DMI 指標的計算核心在於 **分析每個時間週期中價格波動的方向性變化**，進而計算出上升與下降趨勢的平均動能，再用 ADX 來測量該趨勢的強弱。:contentReference[oaicite:8]{index=8}

基本原理解釋：

- 當市場價格持續創出新高並伴隨上漲力道增加時，+DI 值將拉高。
- 當市場價格持續創出新低並伴隨下跌力道增加時，-DI 值將上升。
- ADX 則取 +DI 與 -DI 差值的平均，表示趨勢**是否強勢且持續**。:contentReference[oaicite:9]{index=9}

---

## 如何解讀 DMI 指標？

### 1. 趨勢方向判斷

- **多頭趨勢**：當 +DI > -DI，且 ADX 上升，代表上漲趨勢明確。:contentReference[oaicite:10]{index=10}
- **空頭趨勢**：當 -DI > +DI，且 ADX 上升，代表下跌趨勢明確。:contentReference[oaicite:11]{index=11}
- **盤整階段**：若 ADX 值偏低（如低於 25），則代表趨勢不明，市場可能在震盪。:contentReference[oaicite:12]{index=12}

---

## 常見訊號與交易思路

DMI 指標的訊號常用於進出場判斷：

- **黃金交叉進場（看多）**：當 +DI 自下向上突破 -DI，且 ADX 同步向上時，表示多頭趨勢可能形成。:contentReference[oaicite:13]{index=13}
- **死亡交叉出場（看空）**：當 +DI 自上向下跌破 -DI，且 ADX 同步上升時，表示空頭趨勢可能形成。:contentReference[oaicite:14]{index=14}

這種以交叉配合趨勢強度的訊號方式可以在回測和實際操作中增加信號的可靠性。:contentReference[oaicite:15]{index=15}

---

## DMI 的優點與限制

### 優點

- 能夠同時告訴你趨勢方向與趨勢強度。:contentReference[oaicite:16]{index=16}
- 清楚的線條交叉訊號有助於判斷中長期趨勢。:contentReference[oaicite:17]{index=17}
- 避免僅憑價格波動誤判趨勢。:contentReference[oaicite:18]{index=18}

### 限制

- DMI 屬於 **落後指標**，訊號往往在趨勢已形成後才出現。:contentReference[oaicite:19]{index=19}
- 在盤整行情時，+DI 與 -DI 容易頻繁交叉，容易產生假訊號。:contentReference[oaicite:20]{index=20}
- 對於非常短線交易策略（如秒內交易）可能不太適用。:contentReference[oaicite:21]{index=21}

---

## 指標設定與使用建議

DMI 通常使用**14 天（或 14 期）**作為預設參數，這是由指標原始發明者常用的預設值。:contentReference[oaicite:22]{index=22}

- **ADX 參數**：建議使用預設值 14；若希望趨勢反應更快，可適度降低參數。:contentReference[oaicite:23]{index=23}
- **ADX 門檻值**：如 ADX > 25 或 > 30 可被視為趨勢強勢訊號。:contentReference[oaicite:24]{index=24}

---

## 結語

DMI 指標是一個簡潔而實用的趨勢分析工具，適合用於中長線波段交易與趨勢判斷。透過 +DI、-DI 與 ADX 三條線的結合，不僅可以判斷市場的多空方向，還能了解趨勢的強弱。善用交叉訊號與趨勢強度判斷，可以在波段操作中提升交易決策的品質。

---

如果你想範例程式碼或交易策略示例，也可以告訴我，我可以幫你補上實際回測用的腳本範例。
