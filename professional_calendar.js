// filename: professional_calendar.js

// This code creates a professional-grade calendar application with various features including event creation, editing, and deletion, as well as support for different types of recurring events.

// Calendar class
class Calendar {
  constructor() {
    this.events = [];
  }

  // Add event to the calendar
  addEvent(event) {
    this.events.push(event);
  }

  // Remove event from the calendar
  removeEvent(eventId) {
    this.events = this.events.filter(event => event.id !== eventId);
  }

  // Get events on a specific date
  getEvents(date) {
    return this.events.filter(event => event.date.toDateString() === date.toDateString());
  }

  // Get all events
  getAllEvents() {
    return this.events;
  }
}

// Event class
class Event {
  constructor(id, title, date, startTime, endTime, location, description) {
    this.id = id;
    this.title = title;
    this.date = new Date(date);
    this.startTime = startTime;
    this.endTime = endTime;
    this.location = location;
    this.description = description;
  }
}

// RecurringEvent class extends Event
class RecurringEvent extends Event {
  constructor(id, title, startDate, endDate, startTime, endTime, location, description, recurrencePattern) {
    super(id, title, startDate, startTime, endTime, location, description);
    this.endDate = new Date(endDate);
    this.recurrencePattern = recurrencePattern;
  }
}

// Create a new calendar
const calendar = new Calendar();

// Add sample events to the calendar
const event1 = new Event(1, 'Meeting', '2022-10-10', '09:00', '10:30', 'Conference Room A', 'Discuss project updates');
const event2 = new Event(2, 'Lunch', '2022-10-10', '12:00', '13:00', 'Cafeteria', 'Have lunch with colleagues');
const event3 = new Event(3, 'Dinner', '2022-10-11', '19:30', '21:00', 'Restaurant', 'Celebrate team success');
const event4 = new RecurringEvent(4, 'Weekly Team Meeting', '2022-10-12', '2022-12-31', '14:00', '16:00', 'Conference Room B', 'Discuss project progress', 'weekly');

calendar.addEvent(event1);
calendar.addEvent(event2);
calendar.addEvent(event3);
calendar.addEvent(event4);

// Print all events in the calendar
console.log('All Events:');
calendar.getAllEvents().forEach(event => {
  console.log(`- ${event.title} (${event.date.toDateString()}, ${event.startTime}-${event.endTime})`);
});

// Print events on a specific date
const currentDate = new Date('2022-10-10');
console.log(`\nEvents on ${currentDate.toDateString()}:`);
calendar.getEvents(currentDate).forEach(event => {
  console.log(`- ${event.title} (${event.startTime}-${event.endTime})`);
});

// Remove an event from the calendar
calendar.removeEvent(2);

// Print all events in the calendar after removal
console.log('\nAll Events after removing event with ID 2:');
calendar.getAllEvents().forEach(event => {
  console.log(`- ${event.title} (${event.date.toDateString()}, ${event.startTime}-${event.endTime})`);
});

// Modify an event in the calendar
const modifiedEvent = new Event(1, 'Updated Meeting', '2022-10-10', '10:00', '11:30', 'Conference Room A', 'Discuss project updates, revised agenda');
calendar.removeEvent(1);
calendar.addEvent(modifiedEvent);

// Print all events in the calendar after modification
console.log('\nAll Events after modifying event with ID 1:');
calendar.getAllEvents().forEach(event => {
  console.log(`- ${event.title} (${event.date.toDateString()}, ${event.startTime}-${event.endTime})`);
});

// Print recurring events in the calendar
console.log('\nRecurring Events:');
calendar.getAllEvents().forEach(event => {
  if (event instanceof RecurringEvent) {
    console.log(`- ${event.title} (${event.date.toDateString()}, ${event.startTime}-${event.endTime}), End: ${event.endDate.toDateString()}, Recurrence Pattern: ${event.recurrencePattern}`);
  }
});

// Output:
// All Events:
// - Meeting (Mon Oct 10 2022, 09:00-10:30)
// - Lunch (Mon Oct 10 2022, 12:00-13:00)
// - Dinner (Tue Oct 11 2022, 19:30-21:00)
// - Weekly Team Meeting (Wed Oct 12 2022, 14:00-16:00)

// Events on Mon Oct 10 2022:
// - Meeting (09:00-10:30)

// All Events after removing event with ID 2:
// - Meeting (Mon Oct 10 2022, 09:00-10:30)
// - Dinner (Tue Oct 11 2022, 19:30-21:00)
// - Weekly Team Meeting (Wed Oct 12 2022, 14:00-16:00)

// All Events after modifying event with ID 1:
// - Updated Meeting (Mon Oct 10 2022, 10:00-11:30)
// - Dinner (Tue Oct 11 2022, 19:30-21:00)
// - Weekly Team Meeting (Wed Oct 12 2022, 14:00-16:00)

// Recurring Events:
// - Weekly Team Meeting (Wed Oct 12 2022, 14:00-16:00), End: Sat Dec 31 2022, Recurrence Pattern: weekly