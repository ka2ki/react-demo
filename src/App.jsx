import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  /**
   *state
   *@param num stateとして使用する変数名
   *@param setNum stateを更新していく関数
   *useState(n) nは初期値
   */
  // warning:stateが更新されたら再レンダリングされる
  const [num, setNum] = useState(0);
  const [faceShowFlug, setFaceShowFlug] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlug = () => {
    setFaceShowFlug(!faceShowFlug);
  };

  /**
   * 関心の分離
   *第2引数を[]にした場合、初回のみ実行
   *第2引数を[num]にした場合、numが変更されたときだけ実行
   */
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlug || setFaceShowFlug(true);
      } else {
        faceShowFlug && setFaceShowFlug(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlug}>on/off</button>
      <p>{num}</p>
      {/* 論理演算子
       *&& の左の要素がtrueの場合 右を返す
       *|| の左の要素がfalseの場合 右を返す
       */}
      {faceShowFlug && <p>(´・ω・｀)</p>}
    </>
  );
};

export default App;
