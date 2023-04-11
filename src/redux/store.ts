import { configureStore } from '@reduxjs/toolkit';
import sliceAppointments from './sliceAppointments';

const store = configureStore({
  reducer: {
    appointments: sliceAppointments,
  },
}); 

export default store;