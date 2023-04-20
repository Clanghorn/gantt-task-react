import React, { useMemo } from "react";
import styles from "./task-list-table.module.css";
import { Task } from "../../types/public-types";

interface TaskSite extends Task {
  MilestoneCost: string;
  SiteName: string;
}

const localeDateStringCache = {};
const toLocaleDateStringFactory =
  (locale: string) =>
  (date: Date, dateTimeOptions: Intl.DateTimeFormatOptions) => {
    const key = date.toString();
    let lds = localeDateStringCache[key];
    if (!lds) {
      lds = date.toLocaleDateString(locale, dateTimeOptions);
      localeDateStringCache[key] = lds;
    }
    return lds;
  };
const dateTimeOptions: Intl.DateTimeFormatOptions = {
  weekday: "short",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const getEarliestDate = (tasks: TaskSite[]) => {
  let earliestDate: Date = tasks[0].start;
  tasks.forEach(function (site) {
    // Compare dates and update earliestDate if necessary
    if (site.start < earliestDate) {
      earliestDate = site.start;
    }
  });
  return earliestDate;
};

const getLatestDate = (tasks: TaskSite[]) => {
  let latestDate: Date = tasks[0].end;
  tasks.forEach(function (site) {
    // Compare dates and update Latest Date if necessary
    if (site.end > latestDate) {
      latestDate = site.end;
    }
  });
  return latestDate;
};

export const TaskListTableDefault: React.FC<{
  rowHeight: number;
  fontFamily: string;
  fontSize: string;
  locale: string;
  tasks: TaskSite[];
  selectedTaskId: string;
  setSelectedTask: (taskId: string) => void;
  onExpanderClick: (task: TaskSite) => void;
}> = ({ rowHeight, tasks, fontFamily, fontSize, locale, onExpanderClick }) => {
  const toLocaleDateString = useMemo(
    () => toLocaleDateStringFactory(locale),
    [locale]
  );
  let taskName = "";
  // let fromDate: Date = new Date();
  // let toDate: Date = new Date();
  return (
    <div
      className={styles.taskListWrapper}
      style={{
        fontFamily: fontFamily,
        fontSize: fontSize,
      }}
    >
      {tasks.map(t => {
        let expanderSymbol = "";
        if (t.hideChildren === false) {
          expanderSymbol = "▼";
        } else if (t.hideChildren === true) {
          expanderSymbol = "▶";
        }
        let currentTask = t.project;

        if (currentTask !== taskName) {
          taskName = t.project!;
          // Filter Tasks
          const siteTasks: TaskSite[] = tasks.filter(task =>
            task.project!.includes(taskName)
          );
          const fromDate = getEarliestDate(siteTasks);
          const toDate = getLatestDate(siteTasks);

          return (
            <div
              className={styles.taskListTableRow}
              style={{ height: rowHeight }}
              key={`${t.id}row`}
            >
              <div
                className={styles.taskListCell}
                style={{
                  minWidth: "auto",
                  maxWidth: "auto",
                  //paddingLeft: "10px",
                  paddingRight: "10px",
                }}
                title={taskName}
              >
                <div className={styles.taskListNameWrapper}>
                  <div
                    className={
                      expanderSymbol
                        ? styles.taskListExpander
                        : styles.taskListEmptyExpander
                    }
                    onClick={() => onExpanderClick(t)}
                  >
                    {expanderSymbol}
                  </div>
                  <div>{t.project + " | " + t.SiteName}</div>
                </div>
              </div>
              <div
                className={styles.taskListCell}
                style={{
                  minWidth: "auto",
                  maxWidth: "auto",
                  // paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                &nbsp;{toLocaleDateString(fromDate, dateTimeOptions)}
              </div>
              <div
                className={styles.taskListCell}
                style={{
                  minWidth: "auto",
                  maxWidth: "auto",
                  // paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                &nbsp;{toLocaleDateString(toDate, dateTimeOptions)}
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};
