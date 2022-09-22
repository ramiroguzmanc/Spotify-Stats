import { Slider } from "@mui/material";
export interface MuiSliderProps {
  handleChange: (
    ev: Event | React.SyntheticEvent,
    value: number | number[]
  ) => void;
  value: number | number[];
}

export const MuiSlider = ({ handleChange, value }: MuiSliderProps) => (
  <Slider
    color="primary"
    defaultValue={1}
    marks={[
      { value: 1, label: "1M" },
      { value: 2, label: "6M" },
      { value: 3, label: "All" },
    ]}
    min={1}
    max={3}
    size={"medium"}
    sx={{
      width: 110,
    }}
    className="mr-2"
    track={false}
    onChangeCommitted={(ev, value) => handleChange(ev, value)}
    value={value}
  />
);
