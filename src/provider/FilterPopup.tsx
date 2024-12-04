import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Imageassets } from '../../assets//images/image';

type FilterPopupProps = {
  Popup: boolean;
  setPopup: (value: boolean) => void;
};

const FilterPopup: React.FC<FilterPopupProps> = ({ Popup, setPopup }) => {
  const [ShowCategory, setShowCategory] = useState(true);
  const [ShowPlace1, setShowPlace1] = useState(true);
  const [ShowPlace2, setShowPlace2] = useState(false);
  const [ShowPlace3, setShowPlace3] = useState(false);

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={Popup}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Filters</Text>
              <TouchableOpacity onPress={() => setPopup(false)}>
                <Image source={Imageassets.Xicon} />
              </TouchableOpacity>
            </View>

            <View style={styles.content}>
              <View style={styles.section}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionTitle}>Categories</Text>
                  {ShowCategory ? (
                    <TouchableOpacity onPress={() => setShowCategory(false)}>
                      <Image source={Imageassets.ArrowDownIcon} />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={() => setShowCategory(true)}>
                      <Image source={Imageassets.ArrowUpIcon} />
                    </TouchableOpacity>
                  )}
                </View>
                {ShowCategory && (
                  <View style={styles.optionsContainer}>
                    {[
                      'Dj',
                      'Night Life',
                      'Travel',
                      'Plays',
                      'Music',
                      'Comedy Show',
                      'Trek & Adventure',
                      'Sports',
                      'Movies',
                    ].map((item) => (
                      <View key={item} style={styles.optionWrapper}>
                        <Text style={styles.optionText}>{item}</Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>

              <View style={styles.section}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionTitle}>Places</Text>
                  {ShowPlace1 ? (
                    <TouchableOpacity onPress={() => setShowPlace1(false)}>
                      <Image source={Imageassets.ArrowDownIcon} />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={() => setShowPlace1(true)}>
                      <Image source={Imageassets.ArrowUpIcon} />
                    </TouchableOpacity>
                  )}
                </View>
                {ShowPlace1 && (
                  <View style={styles.optionsContainer}>
                    {[
                      'Dj',
                      'Night Life',
                      'Travel',
                      'Plays',
                      'Music',
                      'Comedy Show',
                      'Trek & Adventure',
                      'Sports',
                      'Movies',
                    ].map((item) => (
                      <View key={item} style={styles.optionWrapper}>
                        <Text style={styles.optionText}>{item}</Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            </View>

            <View style={styles.footer}>
              <TouchableOpacity style={styles.cancelButton}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <View style={styles.footerActions}>
                <Text style={styles.clearText}>Clear All</Text>
                <TouchableOpacity style={styles.applyButton}>
                  <Text style={styles.applyText}>Apply Filters</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    minHeight: 453,
    width: 360,
    backgroundColor: '#1B1B1B',
    borderTopStartRadius: 21,
    borderTopRightRadius: 21,
    gap: 12,
    position: 'absolute',
    bottom: 0,
  },
  header: {
    height: 52.75,
    paddingHorizontal: 10,
    marginHorizontal: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'rgba(255, 255, 255, 0.25)',
    borderBottomWidth: 0.6,
  },
  headerTitle: {
    color: '#F5EDFD',
    fontSize: 20,
    fontWeight: '800',
  },
  content: {
    minHeight: 301,
    marginHorizontal: 10,
    gap: 16,
  },
  section: {
    height: 'auto',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.25)',
    borderRadius: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  sectionTitle: {
    color: '#F5EDFD',
    fontWeight: '700',
    fontSize: 18,
    flex: 1,
  },
  optionsContainer: {
    gap: 9,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 15,
  },
  optionWrapper: {
    borderRadius: 18,
    borderColor: 'rgba(71, 71, 71, 1)',
    borderWidth: 0.8,
    backgroundColor: 'rgba(71, 71, 71,0.30)',
    minWidth: 40,
    paddingHorizontal: 9,
    paddingVertical: 6,
    textAlign: 'center',
  },
  optionText: {
    color: 'rgba(245, 237, 253, 1)',
    fontWeight: '400',
    fontSize: 12,
    textAlign: 'center',
  },
  footer: {
    height: 62,
    paddingHorizontal: 10,
    marginHorizontal: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: 'rgba(255, 255, 255, 0.25)',
    borderTopWidth: 0.6,
  },
  cancelButton: {
    borderColor: 'rgba(208, 162, 247, 1)',
    width: 76,
    height: 34,
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: 'center',
  },
  cancelText: {
    color: 'rgba(208, 162, 247, 1)',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
  },
  footerActions: {
    width: 206,
    height: 34,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  clearText: {
    textAlign: 'center',
    width: 90,
    height: 34,
    textAlignVertical: 'center',
    color: 'rgba(245, 237, 253, 1)',
    fontSize: 14,
    fontWeight: '700',
  },
  applyButton: {
    backgroundColor: 'rgba(208, 162, 247, 1)',
    width: 116,
    height: 34,
    borderRadius: 25,
    justifyContent: 'center',
  },
  applyText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
    color: 'rgba(13, 13, 13, 1)',
  },
});

export default FilterPopup;
