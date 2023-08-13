import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Input from 'components/Input';
import Footer from './_footer';
import Header from './_header';

function CustomDatePicker(props: { label: string }) {
  const { label } = props;
  const [showYearPicker, setShowYearPicker] = useState(false);
  const [open, setOpen] = useState(false);
  const [tempDate, setTempDate] = useState<Date | undefined>(undefined);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <>
      <DatePicker
        customInput={<Input label={label} editable={true} />}
        placeholderText="mm/dd/yyyy"
        selected={tempDate}
        value={selectedDate ? moment(selectedDate).format('MM/DD/yyyy') : ''}
        highlightDates={selectedDate && tempDate && [selectedDate]}
        fixedHeight
        onChange={() => null}
        onSelect={(date: Date) => {
          setShowYearPicker(false);
          setTempDate(moment(date).toDate());
        }}
        open={open}
        onInputClick={() => setOpen(!open)}
        onClickOutside={() => setOpen(false)}
        yearItemNumber={20}
        showYearPicker={showYearPicker}
        shouldCloseOnSelect={false}
        renderCustomHeader={(headerProps) => (
          <Header
            {...headerProps}
            showYearPicker={showYearPicker}
            setShowYearPicker={setShowYearPicker}
          />
        )}
      >
        <Footer
          setSelectedDate={setSelectedDate}
          tempDate={tempDate}
          setTempDate={setTempDate}
          setOpen={setOpen}
        />
      </DatePicker>
    </>
  );
}

export default CustomDatePicker;
