import { defineStore } from "pinia";
import client from '~/core/api'

type SHIFT = {
  date: string;
  startTime: { hours: number, minutes: number };
  endTime: { hours: number, minutes: number };
  isRest: boolean;
  isFree: boolean;
  comment: string;
};

export const useShiftStore = defineStore("shifts", {
  state: () => {
    return {
      myShifts: [] as SHIFT[],
      limitDate: '', // "2022-03-01"
    };
  },
  actions: {
    getMyShift(companyId: number, shiftId: number) {
      // client.get(`http://0.0.0.0:8000/companies/${companyId}/shifts/${shiftId}`)
      client.get('http://0.0.0.0:3001/shifts')
        .then((data: { data: { myShifts: SHIFT[], limitDate: string } }) => {
          const response = data.data;
          this.myShifts = response.myShifts;
          this.limitDate = response.limitDate;
        });
    },
    // getMeInfo(access_token) {
    //   client.get('http://0.0.0.0:8000/me', {
    //     headers: {
    //       Authorization: `Bearer ${access_token}`,
    //     }})
    //     .then((data: { data: object }) => {
    //       return data;
    //   })
    // },
    inputStartTime(time: { hours: number, minutes: number }, index: number) {
      this.myShifts[index].startTime = time;
    },
    inputEndTime(time: { hours: number, minutes: number }, index: number) {
      this.myShifts[index].endTime = time;
    },
    clickRest(checked: boolean, index: number) {
      this.myShifts[index].isRest = checked;
    },
    clickFree(checked: boolean, index: number) {
      this.myShifts[index].isFree = checked;
    },
  },
});
