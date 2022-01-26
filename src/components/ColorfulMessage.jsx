/*== export default ではなく export を使う場合 ==
 *
 *関数式の前に export をつける
 *export const ColorfulMessage = (props) => {
 *}
 *
 *親でcomponentを呼ぶ import では
 *import ColorfulMessage from "./components/ColorfulMessage";
 *👇 分割代入にする。
 *import { ColorfulMessage } from "./components/ColorfulMessage";
 */

export const ColorfulMessage = (props) => {
  // 分割代入
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};
// export default ColorfulMessage;
