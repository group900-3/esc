import styles from "../App.module.css";
import {
  ToggleButton,
  Text,
  DialogTrigger,
  ActionButton,
  AlertDialog,
} from "@adobe/react-spectrum";
import Hand from "@spectrum-icons/workflow/Hand";
import InfoIcon from "@spectrum-icons/workflow/Info";

import { store, useBoundedStore } from "../store";
import { useHotkeys } from "react-hotkeys-hook";

export const LB = () => {
  const isHandMode = useBoundedStore((states) => states.editor.handMode);
  const toggle = () =>
    store.setState((state) => ({
      editor: { handMode: !state.editor.handMode },
    }));
  useHotkeys("space", (e) => !e.repeat && toggle(), {
    keydown: true,
    keyup: true,
  });
  return (
    <div className={styles.lb} style={{ cursor: "copy" }}>
      <Info />
      <ToggleButton isSelected={isHandMode} onPress={() => toggle()}>
        <Hand />
      </ToggleButton>
    </div>
  );
};

const Info = () => (
  <DialogTrigger>
    <ActionButton>
      <InfoIcon />
    </ActionButton>
    <AlertDialog
      title="核心问题在于"
      primaryActionLabel="原来如此"
      variant="information"
      minWidth={750}
    >
      <Text>
        你知道方块战机是一个复刻的游戏吗？它的玩法基本照搬了Konami在1989年发布的一款街机游戏《Quarth》。
        <br />
        Quarth相对来说会是一款单调无聊的游戏，它玩法中的一个亮点在于：你可以发射子弹，一次让多个形状形成一个大的方块。
        得分会根据方块的数量翻倍。
        <br />
        从技术角度上讲，实现这个游戏玩法需要两部：首先设计一个生成砖块组的系统，然后设计一个检测是否满足消除条件的系统。
        <br />
        根据方块战机的开发经验来说，无论是随机生成系统，还是检测系统，都极为困难。
        <br />
        尤其是消除检测系统。当实现此功能后，我非常疑惑1989年的电脑如何在游戏中运行如此复杂的算法？
        <br />
        其实核心问题就在于Quarth的方块组是重复的，也就是说它本质上不是一个随机化的游戏，砖块是人工设计的。当你记住了所有砖块的组合后，你就可以轻松的玩到无限高分。
        <br />
        当开发者设计一个砖块组的时候就已经把所有能连消的砖块标记出来了，这样就可以轻松的实现消除检测系统（因为只需要查找标记而不是写一个AI去寻找最大的矩形）。
        <br />
        这样的缺点也很明显，砖块组合是有限的，这也是Quarth无法成为经典的致命问题。
        <br />
        其实设计这些地图非常困难，首先你需要知道怎样的砖块组会比较让玩家意外，其次你需要一个不落的找到所有可以连消的砖块组，一旦出错就会造成致命的游戏BUG。
        <br />
        在1989年，这些工作必然是通过手绘完成的，而且进度缓慢。内存和人工成本是限制Quarth地图数量的主要因素。
        <br />
        但在现在，我们可以利用很多工具开发组合出一个专用于设计地图的工具，快速的摆放砖块，标记连消区。而你就正在使用它！
      </Text>
    </AlertDialog>
  </DialogTrigger>
);