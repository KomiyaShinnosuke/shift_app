import { defineStore } from "pinia";
import client from '~/core/api'

type SHIFT = {
  id: number;
  startTime: string;
  endTime: string;
  type: string;
  comment: string;
};

type MY_SHIFT = {
  date: Date;
  startTime: string;
  endTime: string;
  isRest: boolean;
  isFree: boolean;
  comment: string;
  // シフトパターンのkeyを要検討
};

export const useShiftStore = defineStore("shifts", {
  state: () => {
    return {
      startDate: '', // "2022-03-13"
      endDate: '', // "2022-03-20"
      limitDate: '', // "2022-03-01"
      shifts: [] as SHIFT[],
      myShift: [] as MY_SHIFT[],
    };
  },
  actions: {
    getAllMemberShifts(companyId: number, shiftId: number) {
      // client.get(`http://0.0.0.0:8000/companies/${companyId}/shifts/${shiftId}`)
      client.get('http://0.0.0.0:3001/shifts')
        .then((data: { data: { shifts: SHIFT[], limitDate: string } }) => {
          const response = data.data;
          this.shifts = response.shifts;
          this.limitDate = response.limitDate;
        });
    },
  },
});
