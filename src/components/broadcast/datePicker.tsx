import Image from "next/image";
import ReactDatePicker from "react-datepicker";

export function DatePicker(props: { selected: any, onChange: (date: Date) => any }) {
    return <div className="flex rounded-md border h-full justify-between items ceter gap-2 p-2">
        <Image
            src="/icons/calendar.svg"
            height={20}
            width={20}
            alt="user"
            className="ml-2"
        />
        <ReactDatePicker
            showTimeSelect={true}
            selected={props.selected}
            onChange={props.onChange}
            timeInputLabel="Time:"
            dateFormat={"MM/dd/yyyy  -  h:mm aa"}
            wrapperClassName={"date-picker"}
        />
    </div>;
}