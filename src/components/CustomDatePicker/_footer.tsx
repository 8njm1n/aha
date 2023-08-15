import React from 'react';

type FooterProps = {
  setSelectedDate: (date?: Date) => void;
  tempDate?: Date;
  setTempDate: (date?: Date) => void;
  setOpen: (open: boolean) => void;
};

function Footer(props: FooterProps) {
  const { setSelectedDate, setTempDate, setOpen, tempDate } = props;

  return (
    <div>
      <div className="flex justify-end w-full text-white leading-6 font-bold text-sm">
        <button
          className="mr-[39px] px-4 py-2"
          onClick={() => {
            setTempDate(undefined);
            setOpen(false);
          }}
        >
          Cancel
        </button>
        <button
          onClick={() => {
            if (tempDate) {
              setSelectedDate(tempDate);
              setTempDate(undefined);
            }

            setOpen(false);
          }}
          className="mr-[11px] px-4 py-2"
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default Footer;
