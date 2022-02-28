export default function graniteCalendar(jsonBlock) {
  const id = jsonBlock.id;
  const graniteDiv = document.getElementById(id);
  const o = jsonBlock.options;
  const r = jsonBlock.records;

  const sidepane = document.getElementById("p__sidepane");

  const calendarCont = document.getElementById(id);
  document.addEventListener("DOMContentLoaded", function () {
    var calendar = new FullCalendar.Calendar(calendarCont, {
      defaultView: "dayGridMonth",
      header: {
        left: "prev,next",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      },
      events: r,
    });
    calendar.render();
  });
}
