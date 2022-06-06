import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from "react-native";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
{
  `昔年因读李白杜甫诗，长恨二人不相从。
吾与东野生并世，如何复蹑二子踪。
东野不得官，白首夸龙钟。
韩子稍奸黠，自惭青蒿倚长松。
低头拜东野，原得终始如駏蛩。
东野不回头，有如寸筳撞巨钟。
吾愿身为云，东野变为龙。
四方上下逐东野，虽有离别无由逢？`
}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    paddingTop: 40,
    fontSize: 18,
  },
});
