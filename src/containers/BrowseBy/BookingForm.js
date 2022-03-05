import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import PropTypes from "prop-types";

import Button from "components/Button";
import InputDate from "components/Form/InputDate";
import InputCounter from "components/Form/InputCounter";

const BookingForm = ({ itemDetails, onStartBooking }) => {
  const history = useHistory();
  const [duration, setDuration] = useState(1);
  const [selectedDate, setSelectedDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const onChangeDate = (event) => {
    const { name, value } = event.target;
    if (name === "duration") {
      setDuration(value);
      return;
    }
    if (name === "selectedDate") {
      setSelectedDate(value);
      return;
    }
  };

  // Update onset duration
  useEffect(() => {
    const startDate = new Date(selectedDate.startDate);
    const endDate = new Date(
      startDate.setDate(startDate.getDate() + +duration - 1)
    );
    setSelectedDate({ ...selectedDate, endDate });
  }, [duration]);

  // Update onset selectedDate
  useEffect(() => {
    const startDate = new Date(selectedDate.startDate);
    const endDate = new Date(selectedDate.endDate);
    const countDuration = new Date(endDate - startDate).getDate();
    setDuration(countDuration);
  }, [selectedDate]);

  const onBooking = () => {
    onStartBooking({
      _id: itemDetails._id,
      duration,
      date: {
        startDate: selectedDate.startDate,
        endDate: selectedDate.endDate,
      },
    });
    history.push("/checkout");
  };

  return (
    <div className="card bordered" style={{ padding: "60px 80px" }}>
      <h4 className="mb-3">Start Booking</h4>
      <h5 className="h2 text-success mb-4">
        ${itemDetails.price}{" "}
        <span className="text-primary-light font-weight-light">
          per {itemDetails.unit}
        </span>
      </h5>

      <label htmlFor="duration">How long you will stay?</label>
      <InputCounter
        max={30}
        suffix="night"
        isSuffixPlural
        onChange={onChangeDate}
        name="duration"
        value={duration}
      />

      <label htmlFor="selectedDate">Pick a date</label>
      <InputDate
        onChange={onChangeDate}
        name="selectedDate"
        value={selectedDate}
      />

      <h6
        className="text-primary-light font-weight-light"
        style={{ marginBottom: 40 }}
      >
        You will pay{" "}
        <span className="text-dark">${itemDetails.price * duration} USD</span>{" "}
        per{" "}
        <span className="text-dark">
          {duration} {itemDetails.unit}
        </span>
      </h6>

      <Button
        className="btn bg-primary text-white"
        elevated
        block
        onClick={onBooking}
      >
        Continue to Book
      </Button>
    </div>
  );
};

BookingForm.propTypes = {
  itemDetails: PropTypes.object,
  onStartBooking: PropTypes.func,
};

export default BookingForm;
