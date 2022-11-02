import { ComponentMeta, ComponentStory } from "@storybook/react";
import TimeEntryView from "./components/TimeEntryView";

export default {
  title: "TimeEntryView",
  component: TimeEntryView,
} as ComponentMeta<typeof TimeEntryView>;

export const Simple: ComponentStory<typeof TimeEntryView> = () => (
  <TimeEntryView
    timeEntry={{
      id: "saddsa",
      start: new Date(),
      end: new Date(),
      comment: "Hallo Welt",
    }}
  />
);
export const LongComment: ComponentStory<typeof TimeEntryView> = () => (
  <TimeEntryView
    timeEntry={{
      id: "saddsa",
      start: new Date(),
      end: new Date(),
      comment:
        "Hallsadiojdasjiodsaijoijaosdo WeltHallsadiojdasjiodsaijoijaosdo WeltHallsadiojdasjiodsaijoijaosdo WeltHallsadiojdasjiodsaijoijaosdo WeltHallsadiojdasjiodsaijoijaosdo WeltHallsadiojdasjiodsaijoijaosdo WeltHallsadiojdasjiodsaijoijaosdo WeltHallsadiojdasjiodsaijoijaosdo WeltHallsadiojdasjiodsaijoijaosdo WeltHallsadiojdasjiodsaijoijaosdo WeltHallsadiojdasjiodsaijoijaosdo WeltHallsadiojdasjiodsaijoijaosdo WeltHallsadiojdasjiodsaijoijaosdo Welt",
    }}
  />
);
