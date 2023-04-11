import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppointmentsProps } from '../types/types';

const INITIAL_STATE = [
  { name: '', subject: '', day: '', mounth: '', time: ''},
];

const sliceAppointments = createSlice({
  name: 'appointments',
  initialState: INITIAL_STATE,
  reducers: {
    addAppointments(state, {payload}: PayloadAction<AppointmentsProps>) {
      return [
        ...state, 
        {
          name: payload.name, 
          subject: payload.subject, 
          day: payload.day, 
          mounth: payload.mounth, 
          time: payload.time
        }
      ]
    }
  }
});

export default sliceAppointments.reducer
export const { addAppointments } = sliceAppointments.actions

export const useAppointments = (state: any) => {
  return state.appointments as AppointmentsProps[]
}