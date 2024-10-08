import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomText from '../base/CustomText';
import AntDesignicon from 'react-native-vector-icons/AntDesign';
import {colors} from '@/constants';
import {formatUpdateTime} from '@/utils/date/date';

interface HomeHeaderProps {
  shelterName: string;
  homelessName: string;
  temp: number;
  today: Date;
}

const HomeHeader = ({
  shelterName,
  homelessName,
  temp,
  today,
}: HomeHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headContainer}>
          <CustomText textColor="white" size="xSmall">
            {shelterName}
          </CustomText>
          <CustomText textColor="white" size="small">
            {formatUpdateTime(today)}
          </CustomText>
          <CustomText textColor="white" weight="heavy">
            {`${homelessName}님, 반갑습니다.`}
          </CustomText>
        </View>
        <View style={styles.weatherContainer}>
          <View style={styles.weatherFlexContainer}>
            <CustomText size="xLarge" textColor="white" weight="heavy">
              {temp}&#176;
            </CustomText>
            <AntDesignicon name="cloud" size={70} color={colors.WHITE} />
          </View>
        </View>
      </View>
      <View style={styles.messageContainer}>
        <CustomText isBadge size="small">
          외출 시 약을 꼭 챙겨주세요!
        </CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: colors.BRIGHT_PRIMARY,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    width: '100%',
    gap: 22,
  },
  headerContainer: {
    paddingHorizontal: 10,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headContainer: {
    flex: 0,
    gap: 6,
  },
  messageContainer: {
    backgroundColor: colors.WHITE,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 30,
    borderColor: colors.FONT_WEAK,
    borderWidth: 1,
  },
  weatherContainer: {
    flex: 0,
    alignItems: 'center',
  },
  weatherFlexContainer: {flex: 0, flexDirection: 'row', gap: 12},
});

export default HomeHeader;
