import { defineStore } from "pinia";
import client from '~/core/api'

type SHIFT = {
  startTime: string;
  endTime: string;
  isRest: boolean;
  isFree: boolean;
  comment: string;
};

export const useShiftStore = defineStore("shifts", {
  state: () => {
    return {
      startDate: '', // "2022-03-13"
      endDate: '', // "2022-03-20"
      limitDate: '', // "2022-03-01"
      myShift: {} as { dateKey: SHIFT },
    };
  },
  actions: {
    getMyShift(companyId: number, shiftId: number) {
      // client.get(`http://0.0.0.0:8000/companies/${companyId}/shifts/${shiftId}`)
      client.get('http://0.0.0.0:3001/shifts')
        .then((data: { data: { shifts: { dateKey: SHIFT }, limitDate: string } }) => {
          const response = data.data;
          this.myShift = response.shifts;
          this.limitDate = response.limitDate;
        });
    },
    inputStartTime(time: { hours: string, minutes: string }, key: string) {
      this.myShift[key].startTime = `${time.hours}:${time.minutes}`;
    },
    inputEndTime(time: { hours: string, minutes: string }, key: string) {
      this.myShift[key].endTime = `${time.hours}:${time.minutes}`;
    }
  },
});
