import { TimeEntry } from "../src/domain/TimeEntry";

interface PropsWithOneTimeEntry {
  timeEntry: TimeEntry;
  key: number;
}

interface PropsExtendingTimeEntry extends TimeEntry {
  key: string;
}

const a: PropsWithOneTimeEntry = {
  timeEntry: {
    id: "adsads",
    comment: "21312",
    start: new Date(),
    end: new Date(),
  },
  key: 1,
};
const b: PropsExtendingTimeEntry = {
  id: "312321",
  comment: "Hallo",
  start: new Date(),
  end: new Date(),
  key: "1",
};
