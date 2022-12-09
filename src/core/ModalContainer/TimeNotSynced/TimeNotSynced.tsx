import React, {memo, useCallback, useEffect} from 'react';
import { t } from '$translation';
import { Modal } from '$libs/navigation';
import { push } from '$navigation';
import { SheetActions } from '$libs/navigation/components/Modal/Sheet/SheetsProvider';
import { MainDB } from '$database';
import { mainActions } from '$store/main';
import { useDispatch } from 'react-redux';
import { Button, Icon, Text } from '$uikit';
import * as S from './TimeNotSynced.style';
import { Linking, Platform } from 'react-native';

export const TimeNotSyncedModal = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    MainDB.setTimeSyncedDismissed(false);
    dispatch(mainActions.setTimeSyncedDismissed(false));
  }, []);

  const handleOpenSettings = useCallback(() => {
    Linking.openSettings();
  }, []);

  return (
    <Modal>
      <Modal.Header />
      <Modal.Content>
        <S.Wrap>
          <Icon style={{ marginBottom: 12 }} name={'ic-exclamationmark-circle-84'} />
          <Text textAlign="center" variant="h2" style={{ marginBottom: 4 }}>
            {t('txActions.signRaw.wrongTime.title')}
          </Text>
          <Text variant="body1" color="foregroundSecondary" textAlign="center">
            {t('txActions.signRaw.wrongTime.description')}
          </Text>
        </S.Wrap>
      </Modal.Content>
      <Modal.Footer>
        <S.FooterWrap>
          <Button mode="secondary" onPress={handleOpenSettings}>
            {t('txActions.signRaw.wrongTime.button')}
          </Button>
        </S.FooterWrap>
      </Modal.Footer>
    </Modal>
  );
});

export const openTimeNotSyncedModal = async () => {
  push('SheetsProvider', {
    $$action: SheetActions.ADD,
    component: TimeNotSyncedModal,
    path: 'TimeNotSynced',
  });

  return true;
};