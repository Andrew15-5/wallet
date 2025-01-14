import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ChartPeriod, IChartStore } from './types';

const initialState: Omit<IChartStore, 'actions'> = {
  selectedPeriod: ChartPeriod.ONE_DAY,
};

export const useChartStore = create(
  persist<IChartStore>(
    (set) => ({
      ...initialState,
      actions: {
        setChartPeriod: async (selectedPeriod) => {
          set({ selectedPeriod });
        },
      },
    }),
    {
      name: 'chart',
      getStorage: () => AsyncStorage,
      partialize: ({ selectedPeriod }) => ({ selectedPeriod } as IChartStore),
    },
  ),
);
