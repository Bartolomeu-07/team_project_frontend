import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './customStyles.css';
import CalendarIcon from '../../assets/icons/calendar.svg?react';

type CustomDatePickerProps = {
  value: Date | null;
  onChange: (value: Date | null) => void;
};

export const CustomDatePicker = ({
  value,
  onChange,
}: CustomDatePickerProps) => {
  return (
    <DatePicker
      selected={value}
      dateFormat={'dd.MM.yy'}
      onChange={onChange}
      showIcon
      toggleCalendarOnIconClick
      icon={<CalendarIcon />}
    />
  );
};
